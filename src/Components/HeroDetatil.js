import React, {Component} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter  } from "react-router-dom";
import {updateHero} from '../action/HeroesAction';

// const {id}=this.props.match.id;
class HeroDetails extends Component {
    
    constructor(props) {
        super(props);
        console.log("props",props);
        this.state = {
            detail: "",
            id:window.location.href.split('/')[5]
        };
    }
   saveData=()=>{
    let test= window.location.href.split('/')[5]
    let data={ name:this.state.detail,id:test}
    this.props.updateHero({type:'UPDATE_HERO',payload:data})
    // this.props.navigation.goBack();
    this.props.history.push("/heroes")
    // this.props.navigation.navigate("/heroes")
}
   componentDidMount(){
   let test= window.location.href.split('/')[5]
   const filterdata = this.props.heroData.filter((_) => _._id == test);
   this.setState({detail:filterdata[0].name})
   console.log("test",test);
   }; 
  render(){  
    const { id } = this.props.match.params;
   return (
        
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="text-center mt-3">{this.state.detail} Details</h2></div>
                    <div className="id mt-3 text-center"><span>id:</span>{id}</div>
                    <div className="col-md-12">
                    <input type="text"
                    className="mb-3"
                        placeholder="Hero name"
                        value={this.state.detail} 
                        // onChange={(e)=>this.itemEvent(e)}
                        onChange={(e) => this.setState({detail:e.target.value}) } 
                        />
                         <div className="col-md-12">
                             <div className="save">
                          <button className="  btn btn-light btn-outline-secondary mr-3" onClick={this.redirectToHome} >Go Back</button>
                     <button className="btn btn-light btn-outline-secondary" onClick={this.saveData}  >save</button>
                     </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
    }
function mapStateToProps(state) {
  return {
    heroData:state.heroes.heroData,
  };
}
export default connect(mapStateToProps,{updateHero})(withRouter(HeroDetails));