import React from 'react';
import './App.css';
import MyNavBar from './MyNavBar';

let tabNavBar=[
  {
    item:"Home",
    link:"#"
  },
  {
    item:"Services",
    dropDown:[
      {
        subItem:"For Entrepreneurs",
        subLink:"#"
      },
      {
        subItem:"For Students",
        subLink:"#"
      },
      {
        subItem:"For Hobbiyists",
        subLink:"#"
      }],
    link:"#"
  },
  {
    item:"Contact",
    link:"#"
  }
]


// const MyNav= [
//   {
//       label:"Home",
//       link: "https://www.google.com",
//       // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//   }
//   ,
//   {
//       label:"Services",
//       link: "https://www.google.com",
//       // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"},
//       droplist: 
//       ["For Entrepreneurs",  "For Students", "For Hobbiyists"]      
//       [
//         { 
//           sublabel: "For Entrepreneurs",
//           sublink: "https://www.google.com",
//           // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//         }
//         ,
//         { 
//           sublabel: "For Students",
//           sublink: "https://www.google.com",
//           // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//         }
//         ,
//         { 
//           sublabel: "For Hobbiyists",
//           sublink: "https://www.google.com",
//           // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//         } 
//      ]
//   }
//   ,
//   {
//       label:"Contact",
//       link: "https://www.google.com",
//       // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//   }
// ]

// const MyDropList = [
//   { 
//     sublabel: "For Entrepreneurs",
//     sublink: "https://www.google.com",
//     // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//   }
//   ,
//   { 
//     sublabel: "For Students",
//     sublink: "https://www.google.com",
//     // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//   }
//   ,
//   { 
//     sublabel: "For Hobbiyists",
//     sublink: "https://www.google.com",
//     // isActive: this.onmouseover= function(){ this.style.color = "#57AFF4"}
//   } 
// ]

// const DropListItem = (props) =>
//            <a href={props.dropitem.sublink} 
//            // style={props.item.isActive}
//            className="droplist"
//            style={{}}>
//            {props.item.dropitem.sublabel}
//            </a>

// const DropListMenu = (props) =>
//        <div className="droplistmenu">{
//          props.navList.map((ele, j) => <DropListItem dropitem={ele} key={j} />)
//          }
//        </div>      


// const NavItem = (props) =>
//            <div className="mainnav"><a href={props.item.link} 
//               // style={props.item.isActive}
//               className="navitem"
//               // onMouseOver={{display: props.item.droplist ? "flex" : "none" }}
//               >
//               {props.item.label}
//            </a>
//            {props.item.droplist && (<div className="mydroplist"> {props.item.droplist.map((e, k)=> <a className="dropitem" href={e.sublink} key={k}>{e.label}</a>)}</div>)}
//            </div>

// const MainBar = (props) =>
//        <div className="mainbardiv">{
//          props.navList.map((element, i) => <NavItem item={element} key={i} />)
//          }
//        </div>





function App() {
  return (
  <div className="App">
    <MyNavBar listTabNavbar={tabNavBar} />
 {/* <MainBar  navList={MyNav}/> */}
 {/* <DropListMenu dropListapp={MyDropList} /> */}
  </div>
  );
}

export default App;
