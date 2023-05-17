
// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputList: [{
//         firstName: "",
//       }]
//     };
//   }
  
//   handleChange = (index, evnt) => {
//     const { name, value } = evnt.target;
//     this.setState({ ...this.state.inputList, [name]: value });
//   //   const list = [...this.state.inputList];
//   //   list[index][name] = value;
//   //   this.setState(list);
//   }

//   addCredit = () => {
//     let name = { firstName: "" }
//     var oldinputList = this.state.inputList
//     oldinputList.push(name)
//     this.setState({
//       inputList: oldinputList
//     });

//   }
//   removeInputFields = () => {
//     let name = { firstName: "" }
//     var oldinputList = this.state.inputList
//     oldinputList.pop(name)
//     this.setState({
//       inputList: oldinputList
//     });
//   }
//   render() {
//     const { inputList } = this.state
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-8"  >
//               {
//                 this.state.inputList.map((data, index) => {
//                   return (
//                     <>
//                       <div className="row my-3" key={index} style={{ display: "flex" }}>
//                         <div className="col">
//                           <div className="form-group">
//                             <input type="text" onChange={(evnt) => this.handleChange(index, evnt)} value={inputList.firstName} name="firstName" className="form-control" placeholder="Full Name" />
//                           </div>
//                         </div>
//                         <div className="col">
//                           {(this.state.inputList.length !== 1) ? <button className="btn btn-outline-danger" onClick={this.removeInputFields}>Remove</button> : ''}
//                         </div>
//                       </div>
//                     </>
//                   )
//                 })
//               }
//               <div className="row" style={{ display: "flex" }}>
//                 <div className="col-sm-12">
//                   <button className="btn btn-outline-success " onClick={this.addCredit} >Add New</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </>
//     );
//   }
// }
// export default App;

import React, {Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {creatHeros,deleteHero,featchMessage} from '../action/HeroesAction';
class Heroes extends Component {
    constructor(props) {
      super(props);
      this.state = {
             inputList: "",
              Items:[]
            };
}
   listOfItems=()=>{
    this.props.creatHeros({type:'CREATE_HERO',payload:this.state.inputList})
    this.setState({inputList: ""})
    //  let name = { firstName: "" }
    // var oldinputList = this.state.inputList
    // oldinputList.push(name)
    // this.setState({
    //   inputList: oldinputList
    // });
    };
    componentDidMount() {
      this.setState({Items:this.props.heroData})
    }
    // componentDidUpdate(prev,next){
    //      if(this.props.heroData !== prev.heroData){
    //             this.setState({Items:this.props.heroData})
    //          }
    //         }
            itemEvent=(event)=>{
                this.setState({inputList:event.target.value});
              
    };  
render(){
  return(
    <>
  <div className="container pt-4">
  <h4>My Heroes</h4>
  <div style={{display:"flex"}}>
  <input style={{width:'40%',margin:"0"}}  type='text' placeholder="add to heroes" value={this.state.inputList} name="inputList" onChange={(e)=>this.itemEvent(e)}></input>
     <button className="btn  btn-secondary" onClick={this.listOfItems}>Add Heroes</button>
     </div>
    <ul className="heroes">
     {this.props?.heroData.map((item,i)=>{
         return(
         <li key={i+1}>
             <Link to={`/heroes/detail/${item._id}`}>
             <span className="badge">{i+1}</span>{item.name}
                 </Link>
                 <div>
                 <button className="delete" onClick={() => this.props.deleteHero(item._id)}>X</button>
                 </div>
             </li>
            );
    })}
     </ul>
   
  </div>
  </>
  )
}
}
function mapStateToProps(state) {
    console.log("state",state);
  return {
    heroData:state.heroes.heroData,
  };
}
export default connect(mapStateToProps,{creatHeros,deleteHero})(Heroes);