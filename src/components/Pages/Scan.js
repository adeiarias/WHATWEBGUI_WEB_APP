import React, {useState, useEffect} from 'react';
import './../../App.css';

function Scan() {
      
  return (
    <div className="App">
      <div className="ScanWeb">
        <p className="textfield_text">SCAN A WEBSITE</p>
        <input className="scan-input" type="text" placeholder="https://example.com"></input>
        <div className="scanOptions">
          <p className="optionText">AGGRESSION LEVEL</p>
          <p className="optionText"></p>
          <p className="optionText">USER AGENT</p>
          <p className="optionText">AGGRESSION LEVEL</p>
          <p className="optionText">LIST PLUGINS</p>
          <p className="optionText"></p>
          <p className="optionText">VERBOSE MODE</p>
          <p className="optionText"></p>
          <p className="optionText">MAX-THREADS</p>
          <p className="optionText"></p>
        </div>
        <button className="scanButton" onClick={() => {console.log("clicked")}}>
          SCAN
        </button>
      </div>
      <div class="vl"></div>
      <div className="ScanOutput">
        <p className="textfield_text">SCAN OUTPUT</p>
        <div className="optionValue"></div>
      </div>
    </div>
  );
}

export default Scan;
