import { useState } from "react";
import React from "react";
import './navbar.css'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");

const navlinks=[{'name':'', 'icon':'home'}, {'name':'about', 'icon':'user'}, {'name':'experience', 'icon':'briefcase'}, {'name':'portfolio', 'icon':'picture-o'}, {'name':'services', 'icon':'handshake-o' } , {'name':'contact','icon':'paper-plane'}]


    return (
        <nav>
          {navlinks.map((section)=> (
            <a href={'#'+section.name} onClick={()=>setActiveNav('#'+ section.name)} className={activeNav==='#'+section.name? 'active' : ''}>
                <i class={`active fa fa-${section.icon} fa-2x`} aria-hidden='true'></i>
            </a>)
          )}
           




            {/* <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'active' : ''}>
                <i class='fa fa-user fa-2x' aria-hidden='true'></i>
            </a>
            <a href='#experience' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}>
                <i class='fa fa-briefcase fa-2x' aria-hidden='true'></i>
            </a>
            <a href='#portfolio' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}>
                <i class='fa fa-picture-o fa-2x' aria-hidden='true'></i>
            </a>
            <a href='#services' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}>
                <i class='fa fa-handshake-o fa-2x' aria-hidden='true'></i>
            </a>
            <a href='#contact' onClick={()=>setActiveNav('#')} className={activeNav==='#'? 'active' : ''}>
                <i class='fa fa-paper-plane fa-2x' aria-hidden='true'></i> */}
            {/* </a> */}
        </nav>
    );
};

export default Navbar;
