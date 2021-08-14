import React from "react";
import './../../App.css';

export const About = () => {
  return (
    <div className="App">
      <div className="ScanWeb">
        <div className="whatweb-info">
          <div className="whatweb-title">
            <p className="whatweb-title-text">WHAT IS WHATWEB?</p>
          </div>
          <div className="whatweb-text">
            <p className="about-text">
            WhatWeb is a next generation web scanner.
            <br />
            <br />
            WhatWeb recognises web technologies including 
            content management systems (CMS), blogging platforms, 
            statistic/analytics packages, JavaScript libraries, web servers, 
            and embedded devices.
            <br />
            <br />
            WhatWeb has over 1800 plugins, each to recognise something different. 
            WhatWeb also identifies version numbers, email addresses, account IDs, 
            web framework modules, SQL errors, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="ScanOutput">
        <div className="whatwebgui-info">
          <div className="whatwebgui-title">
            <p className="whatwebgui-title-text">WHAT IS WHATWEBGUI?</p>
          </div>
          <div className="whatwebgui-text">
            <p className="about-text">
              WhatWeb is a next generation web scanner.
              <br />
              <br />
              WhatWeb recognises web technologies including 
              content management systems (CMS), blogging platforms, 
              statistic/analytics packages, JavaScript libraries, web servers, 
              and embedded devices.
              <br />
              <br />
              WhatWeb has over 1800 plugins, each to recognise something different. 
              WhatWeb also identifies version numbers, email addresses, account IDs, 
              web framework modules, SQL errors, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;