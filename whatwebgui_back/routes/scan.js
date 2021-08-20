const router = require('express').Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
let Scan = require('../models/scan.model');
const dnsPromises = require('dns').promises;

const cmsList = ["WordPress", "Joomla", "Drupal", "Magento", "Blogger", "Shopify", "SquareSpace", "Wix", "PrestaShop", "TYPO3"];
const serverList = ["Apache", "nginx", "LiteSpeed", "Microsoft-ISS", "lighttpd", "Cherokee"];

var scanOutput = "";
var jsonFileOutput = "";
var jsonOut = "";

var target = "";
var cms = "";
var cmsVersion = "";
var server = "";
var serverVersion = "";
var ip = "";
const date = new Date();

async function hostnameExists(hostname) {
  try {
    await dnsPromises.lookup(hostname);
    return true;
  } catch (_) {
    return false;
  }
}

async function executeCommands(domain, aggressionMode, userAgent, verboseMode) {
  var whatweb = "../../WhatWeb/whatweb --aggression " + aggressionMode + " --log-json=scan.json --color=never"
    if(verboseMode==1) {
      whatweb = whatweb + " -v"
    }
    whatweb = whatweb + " " + domain
    
    try {
      const { stdout, stderr } = await exec(whatweb);
      scanOutput = stdout;
    } catch (e) {
      return false;
    }

    try {
      const { stdout, stderr } = await exec("cat scan.json");
      jsonFileOutput = JSON.parse(stdout);
      if(jsonFileOutput.length == 1) {
        jsonOut = jsonFileOutput[0];
      } else {
        jsonOut = jsonFileOutput[jsonFileOutput.length-1];
      }
    } catch (e) {
      return false;
    }  
    try {
      await exec("rm scan.json");
    } catch (e) {
      return false;
    }
    return true;
}

function fillModelInfo() {
  target = jsonOut.target;
  ip = jsonOut.plugins.IP.string[0];

  const plugs = jsonOut.plugins;
  for (var key in plugs){
    if(cmsList.includes(key)) {
      if(plugs[key].hasOwnProperty('version')){
        cms = key;
        cmsVersion = plugs[key].version[0];
      }
    }
    if(serverList.includes(key)) {
      if(plugs[key].hasOwnProperty('version')){
        server = key;
        serverVersion = plugs[key].version[0];
      }
    }    
  }
  if(cms == "") {
    cms = "Unknown";
    cmsVersion = "Unknown";
  }

  if(server == "") {
    server = "Unknown";
    serverVersion = "Unknown";
  }
}

function createScanModel() {
  const newScan = new Scan({
    target,
    cms,
    cmsVersion,
    server,
    serverVersion,
    ip,
    date
  });
  newScan.save()

  target = "";
  cms = "";
  cmsVersion = "";
  server = "";
  serverVersion = "";
  ip = "";
}

router.route('/').post(async (req, res) => {
  const domain = req.body.domain
  const verboseMode = req.body.verboseMode;
  const aggressionMode = req.body.aggressionMode;
  if(typeof aggressionMode === 'number' && typeof verboseMode === 'boolean') {
    if(await hostnameExists(domain)) {
      if(await executeCommands(domain, Number(aggressionMode), Number(verboseMode))) {
        res.json(scanOutput)
        fillModelInfo();
        createScanModel();
      } else {
        res.json("An error has ocurred");
      }
      
    } else {
      res.json("This domain does not exist");
    } 
  } else {
    res.json("Given data is not correct");
  }  
});

module.exports = router;