import React, { Component, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeroSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Items: [],
            search: [],
            searchTerm: ''
        }
    }
    componentDidMount() {
        this.setState({ Items: this.props.heroData })
    }
    itemEvent = (event) => {
        this.setState({ searchTerm: event.target.value });
        let filter = this.state.Items.filter((item) => {
            if (this.state.searchTerm === '') {
                return item
            }
            else if (item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                return item
            }
        })
        this.setState({ search: filter })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <label>Hero Search</label>
                    <input type="text" placeholder="search.." value={this.state.searchTerm} name="search" onChange={(e) => this.itemEvent(e)} />
                    <ul className="search-result">
                        {this.state.searchTerm && this.state.search.map((item, i) => {

                            return (
                                <li key={i + 1}>
                                    <Link to={`/heroes/detail/${item._id}`}>
                                        <span className="badge">{i + 1}</span> {item.name}
                                    </Link>

                                </li>
                            );

                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        heroData: state.heroes.heroData,
    };
}
export default connect(mapStateToProps, {})(HeroSearch);

