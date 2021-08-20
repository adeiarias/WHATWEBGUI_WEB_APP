import React, {useState, useEffect} from 'react';
import './../../App.css';
import './Scan.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import loading_gif from './../../images/loading.gif';


const useStyles = makeStyles((theme) => ({
  textfielStyle: {
    '& > *': {
      width: '100%',
      height: '100%',
      color: 'black',
    },
  },
  button: {
    '& > *': {
      width: '40vh',
      color: 'black',
      position: 'absolute',
      left: '24%',
      top: '13%',
      border: '2px solid black'
    },
  },
  select: {
    '& > *': {
      width: '50%',
      color: 'neutral5',
      position: 'absolute',
      left: '25%',
      top: '13%',
      fontSize: '2vh'
    },
  },
  checkbox: {
    '& > *': {
      transform: "scale(1)",
      fontSize: '2vh',
    },
  }
}));

const names = [
  "Stealthy (Default)",
  "Aggressive",
  "Heavy"
];

const getAggressionLevel = (level) => {
  if(level == "Heavy") return 4;
  else if(level == "Aggressive") return 3;
  else return 1;
}

function Scan() {
  const [aggressionMode, setMode] = React.useState("dff");
  const [urlField, setUrlField] = React.useState("");
  const [userAgent, setUserAgent] = React.useState("");
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  const [checkboxState, setCheckboxState] = useState(false);
  const classes = useStyles();

  useEffect(() => { 
    document.getElementById("errorDiv").style.visibility="hidden";
    document.getElementById("loading_gif").style.visibility="hidden";
  });

  async function makeScan() {
    document.getElementById("loading_gif").style.visibility="visible";
    document.getElementById("output-domain").innerHTML="";
    document.getElementById("output").innerHTML="";
    if(urlField != "") {
      var data_to_send = {}
      data_to_send["domain"] = urlField;
      data_to_send["userAgent"] = userAgent;
      data_to_send["verboseMode"] = checkboxState;
      data_to_send["aggressionMode"] = getAggressionLevel(aggressionMode);
      await fetch('http://localhost:5000/scan-website/', {
      method:"POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify(data_to_send)
      })

      .then(resp => resp.json())
      .then(data => {
          if(JSON.stringify(data).includes("This domain does not exist")) {
            document.getElementById("errorDiv").style.visibility="visible";
          } else {
            let elem = document.getElementById("output-domain");
            elem.innerHTML = urlField;
            const output = JSON.stringify(data).substring(1,JSON.stringify(data).length-1);
            const arr = output.split("\\n");
            let out = arr[0] + "<br/>";
            for(var i=1; i<arr.length; i++) {
              out = out + "<br/>" + arr[i] + "<br/>";
            }
            let element = document.getElementById("output");
            element.innerHTML = out;
          }
      })
      .catch(error => console.log(error))
    } else {
      document.getElementById("errorDiv").style.visibility="visible";
    }
    document.getElementById("loading_gif").style.visibility="hidden";
  }

  return (
    <div className="App">

      <div className="ScanWeb">

        <div className="scanweb-text">
          <p className="scanweb-title">SCAN A WEBSITE</p>
        </div>

        <div className="textfield-div">
          <form className={classes.textfielStyle} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Insert a domain (required)" variant="outlined" onChange={(event) => setUrlField(event.target.value)} />
          </form>
        </div> 
        
        <div className="scanOptions">
          <div className="firstOpc">
            <TextField
              size="small"
              label="Aggression Level (Optional)"
              variant="outlined"
              style={{ width: '37vh' }}
              select
              SelectProps={{
                value: aggressionMode,
                onChange: handleChange,
                multiline: true
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="lastOpc">
            <FormControl component="fieldset">
                <FormControlLabel
                  className ={classes.checkbox}
                  value="verbose"
                  control={<Checkbox color="primary" />}
                  label="Verbose Mode (Optional)"
                  labelPlacement="start"
                  onChange={() => setCheckboxState(!checkboxState)}
                />
            </FormControl>
          </div>        
          </div>

        <div className="scan-button">
          <div className={classes.button}>
            <Button variant="outlined" color="Default" onClick={() => {makeScan()}}>
                SCAN
            </Button>
          </div>
        </div>
        <div id="errorDiv" className="errorMessage">
          <p className="errorText">This domain does not exist</p>
        </div>
      </div>

      <div class="vl"></div>

      <div className="ScanOutput">
        <div className="scanweb-output">
          <p className="scanoutput-title">SCAN OUTPUT</p>
        </div>

        <div className="output-text">
          <div className="output-domain">
            <p id="output-domain" className="output-text-domain"></p>
          </div>
          <div className="loading">
            <img src={loading_gif} id="loading_gif" className="App-logo" alt="logo" />
          </div>
          <div className="output-domain-scan">
            <p id="output" className="output-text-scan"></p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Scan;
