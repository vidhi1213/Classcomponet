import React, {  Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector,useDispatch} from "react-redux";
//import {featchMessage} from '../action/HeroesAction';
import { connect } from "react-redux";
import HeroSearch from "./HeroSearch";
class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
}
componentDidMount(){
  let shuffled = this.props.heroData 
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)
  this.setState(shuffled);
this.setState({data:this.props.heroData })
}
render(){
  return(
    <>
     <h2 className="text-center">Top Heroes</h2>
    <div className="heroes-menu">
     {this.state?.data?.map((data,i)=>{
       if(i>3) return null;
     return(
   
    <li key={i+1}>
        <Link to={`/heroes/detail/${data._id}`}>
        <span className="badge"></span> {data.name}
            </Link>
          </li>
      );
     })}
 </div>
 <HeroSearch/> 
    </>
  )
}
}
//  <HeroSearch/> 

function mapStateToProps(state) {
  return {
    heroData:state.heroes.heroData,
  };
}
export default connect(mapStateToProps,{})(Dashboard);