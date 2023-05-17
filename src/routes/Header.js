import React,{Component} from 'react'
import { Link} from 'react-router-dom';
class Header extends Component {
  render(){
  return (

    <div className="container">
    <h2>Tour of Heroes</h2>
    <div className="">
      
                <a href="/dashboard" className="btn btn-light btn-outline-secondary mr-3" style={{marginRight:'20px'}}>Dash Board</a>
                <a href="/heroes" className="btn btn-light btn-outline-secondary">Heroes</a> 
                </div>
                </div>
  )
  }
}

export default Header