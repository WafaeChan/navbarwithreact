import React from 'react';
import './bottomsection.css';


function BottomSection(props){
    return (
        <div className="bottomcontainer">
            <div className="bottompara">
                <h1 className="bottomheader">Improve the lives of millions. <br></br> Change yours forever</h1>
                <p className="bottomtext">More than 1000 team mates share our same vision, goals and passion. <br></br> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and <br></br> Curitiba, our search for great talent never stops.</p>
            </div>
            <div className="bottomcards">
                {props.bottomcards.map((e, i) => (
                        <div key={i} className="singleopcard">
                            <img src={e.img} width="300px" height="270px"></img>
                            <div className="textbutton">
                               <p className="location"> {e.location} </p>
                               <button className="opbutton">SEE OPENINGS</button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default BottomSection