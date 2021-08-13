import './../../App.css';
import whatweb_logo from './../../images/wwgui_logo.png';

function Main() { 
  return (
      <div className="App">
        <header>
            <img src={whatweb_logo} className="App-logo" alt="logo" />
            <p className="app_text">
                Next generation web scanner
            </p>
        </header>
      </div>
  );
}

export default Main;
