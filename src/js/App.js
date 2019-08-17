import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import mainImg from '../media/images/Loreto 2.png'
import formImg from '../media/images/Formulario.png'
import formImgM from '../media/images/FormularioMC2.jpg'
import sign from '../media/logos/BV_Icon_sign.svg'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Form from './components/Form/HeroForm'
import Locations from './components/items-array'
import '../css/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="header-bv" style={{position: 'absolute', top: '0px'}}>
        <div style={{position: 'relative'}} className="main-img" >
          <img src={mainImg} alt="main" style={{maxWidth: '100%'}}/>
          <div className="main-sign">
            <div style={{verticalAlign: 'sub'}}><img src={sign} alt="sign" /></div>
            <div><h2>DISCOVER THAT</h2> <span className="branch-orange">SOMETHING</span><h2 style={{display: 'inline'}}>WE LOVE</h2></div>
          </div>
        </div>
        <div className="desktop-only" style={{position: 'relative', margin: '5% auto'}} id="locations">
          {
            Locations.map((item) => {
              return (
                <Card key={item.id} name={item.title} img={item.imgSrc} text={item.text}/>
              )
            })
          }          
        </div>
        <div className="mobile-only">
          {
            Locations.map((item) => {
              return (
                <div id={item.id}>
                  <div className="img-mobile">
                    <h1>{item.title}</h1>
                    <div style={{height: '5px', width: '100%', backgroundColor: 'white', position: 'absolute', top: 'calc(30px + 4vmin)'}}></div>
                    <img style={{maxWidth: '100%'}} src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className="img-mobile-desc">
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div id="form">
          <div className="desktop-only"><img src={formImg} alt="Contact" style={{maxWidth: '100%'}}/></div>
          <div className="mobile-only"><img src={formImgM} alt="Contact" style={{maxWidth: '100%'}}/></div>
          <Form />
        </div>
      </div>
    </Router>
  );
}

export default App;
