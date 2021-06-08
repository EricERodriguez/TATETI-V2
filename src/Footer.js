import React from 'react';
import react from   './react.png'
import eric from   './eric.jpg'

//importo botstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
render() {
    return(
    <div className="footer">
        <p>
            <img alt="Icono-react"class="iconoreact" src={react}/>
      React
      <img alt="eric" class="iconoeric" src={eric}/>
      Eric Rodriguez</p>
    </div>
  );
}


}

export default Footer;