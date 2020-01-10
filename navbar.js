import React from 'react'
import './navbar.css'




function Navbar(props){
return (
<div className="navcontainer">
    <a href="https://www.docplanner.com/"><img className="navlogo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/></a>
   <ul className="mainlist">
       {props.navbarlist.map((e, i) => (
           <div key={i}>
               <li className="mainline"><a href={e.link} style={e.label==="About us" ? {color: '#00b39b'} : {color: '#ABABAB'}} className="mainlinelink"> {e.label} </a>
                   {e.droplist && (
                       <ul className="droplist">
                           {e.droplist.map((el, j) => (
                               <div key={j}>
                                   <li className="dropline"><a href={el.sublink} className="sublinelink"> {el.sublabel} </a></li>
                               </div>
                           ) )}
                       </ul>
                   )}
               </li>
           </div>
       ) 
       )}
   </ul>
</div>
)
}



export default Navbar