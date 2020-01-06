import React from 'react'
import './introsection.css'



function IntroSection(props){

    return (
        <div className="introcontainer">
            <img className="intrologo" src="https://www.docplanner.com/img/sygnet.png"></img>
            <h1 className="introheader">Making the healthcare experience more human</h1>
            <div className="mycards">
                {props.card.map((e, i) => (
                    <div className="singlecard" key={i}>
                        <p className="para"> {e.paragraph} </p>
                        <div className="square" style={i===0 ? { backgroundColor: '#00CCB1'} : { backgroundColor: '#3D83DF'}}>
                            <p className="target"> {e.target} </p>
                            <p className="brief"> {e.brief} </p>
                            <div  className="countrylaptop">
                                {e.choosecountry&&
                                 <select  className="country">
                                {e.country.map((el,k)=>(
                                    <option key={k}>{el}</option>
                                ))}
                         </select> 
                                
                                }
                               <img src={e.img} className="laptop" style={e.choosecountry===false ? {marginLeft: '245px'} : {marginLeft: '0px'} }></img>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bottom">
                <p  className="bottomparag">We are a global company <br></br> with local culture</p>
                <div className="partners">
                    {props.partner.map((el, j) => (
                        <div key={j}>
                            <a href={el.link}><svg className="svgicons" xmlns="http://www.w3.org/2000/svg" width="130px" height={el.height} viewBox={el.viewBox}> <path d={el.svg}></path></svg></a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}










export default IntroSection