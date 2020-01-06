import React from 'react'
import './middlesection.css'



function MiddleSection(props){
    return (
        <div className="middlecontainer">
            <div className="left">
                <h1 className="leftheader">The world's <br></br>biggest healthcare platform</h1>
                <p className="lefttext">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                <img className="bglogo" src="https://www.docplanner.com/img/logo.png"></img>
            </div>
            <div className="right">
                {props.middlecard.map((e, i) => (
                    <div className={e.margin?'top-margin-l iconcard' :'iconcard'} >
                        <img className="icon" src={e.icon}></img>
                        <h2 className="rightheader"> {e.header} </h2>
                        <p className="righttext"> {e.text} </p>
                    </div>
                ))}
            </div>
        </div>

    )
}


export default MiddleSection