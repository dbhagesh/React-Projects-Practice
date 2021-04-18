import React, { useState } from 'react';
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);

  let burger = {}, style = {};
  if (menu) {

    burger = {
      display: `block`
    }
    document.body.style.backdropfilter = `blur(10px);`;
    style = {
      filter: `blur(5px)`
    }

  }

  return (

    <div className="body" >


      <div className="icon" >
        <svg onClick={() => {
          setMenu(!menu)

        }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <div className="mtask"></div>
      <div className="show">
        <div className="mobile" style={burger} >
          <div className="list-1">HOME</div>
          <div className="list-1">ABOUT</div>
          <div className="list-1">CONTACT</div>
          <div className="list-1">BLOG</div>
        </div>
      </div>

      <div className="data">
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1><h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>
        <h1>HelloWorld</h1>

      </div>

      <div>
        <h1 style={{ fontWeight: "900" }}>Hello WOrld</h1>
      </div>




    </div >

  );
}

export default App;
