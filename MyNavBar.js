import React from 'react'
import './myNavBar.css'

export default function MyNavBar(props) {
    return (
        <div className="condiv">
             <ul className="container-navbar">
         {props.listTabNavbar.map((el,i)=>(
             <div key={i}>
               
                
                     <li><a className="lili" href={el.link}>{el.item}</a>
                     {el.dropDown&&
                     <ul className="dropdownlist">
                    {el.dropDown.map((el,j)=>(
                        <div key={j}>
                            <li><a href={el.subLink}>{el.subItem}</a></li>
                        </div>
                    ))}
                         </ul>}
                     
                      </li>
                 
                 </div>
         ))}
         </ul>
        </div>
    )
}
