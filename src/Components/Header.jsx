 import React from 'react'
import "./Header.css"
import Button from './Button'
import {nav, navBar} from "./dataJson"


const Header = () => {
  return (
    <section>
      <div className='upperHeader'>
        <p>🚀 Register your business and get a corporate bank account---fast → </p>
      </div>
      <div className='lowerHeader'>
        <article className='left'>
          <img src="https://i.postimg.cc/pXRTgH8H/images.png" alt="" />
            <ul>
                {nav.map((item, index) =>(
                  <li key = {item.id}>{item.name}</li>
                ))}
            </ul>
        </article>
        <article className='right'>
            <ul>
                {navBar.map((item, index) => (
                  <li key = {item.id}>{item.name}</li>
                ))}
            </ul>
            < Button text ="Create free account" style = {{
            padding: "10px 25px",
            backgroundColor: "blue",
            borderRadius: "20px",
            border: "none",
            color: "white",
          }}/>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/nigeria-flag-icon.png" alt="nigeria icon" />
        </article>
      </div>
    </section>
  )
}

export default Header