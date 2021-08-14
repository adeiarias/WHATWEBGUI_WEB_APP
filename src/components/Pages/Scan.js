import React, {useState, useEffect} from 'react';
import './../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  textfielStyle: {
    '& > *': {
      width: '100%',
      height: '100%',
      color: 'white',
    },
  },
  button: {
    '& > *': {
      width: '40vh',
      color: 'white',
      position: 'absolute',
      left: '27%',
      top: '13%',
      border: '1px solid white'
    },
  }
}));

function Scan() {
  
  const classes = useStyles();

  return (
    <div className="App">

      <div className="ScanWeb">

        <div className="scanweb-text">
          <p className="scanweb-title">SCAN A WEBSITE</p>
        </div>

        <div className="textfield-div">
          <form className={classes.textfielStyle} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Insert a website" variant="outlined" />
          </form>
        </div> 

        <div class="scan-switch">
          <Switch />
        </div>      
        
        <div className="scanOptions">
          <p className="optionText">AGGRESSION LEVEL</p>
          
          <div class="caja">
            <select>
              <option>La primera opción</option>
              <option>La segunda opción</option>
              <option>La tercera opción</option>
            </select>
          </div>
          
          <p className="optionText">USER AGENT</p>
          <p className="optionText"></p>
          <p className="optionText">LIST PLUGINS</p>
          <p className="optionText"></p>
          <p className="optionText">VERBOSE MODE</p>
          <p className="optionText"></p>
          <p className="optionText">MAX-THREADS</p>
          <p className="optionText"></p>

        </div>

        <div className="scan-button">
          <div className={classes.button}>
            <Button variant="outlined" color="Default">
                SCAN
            </Button>
          </div>
        </div>

      </div>

      <div class="vl"></div>

      <div className="ScanOutput">

        <div className="scanweb-output">
          <p className="scanoutput-title">SCAN OUTPUT</p>
        </div>

        <div className="output-text">
        
        </div>

      </div>

    </div>
  );
}

export default Scan;
