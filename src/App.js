import React, {Component} from "react";
import CardList from "./CardList"
import {robots} from "./robots";
import SearchBox from "./SearchBox";


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            robots: robots,
            searchField: '',
        }
    }
    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})

    }
    render() {
        const filterRobot = this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className={"tc"}>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filterRobot} />
            </div>
        );
    }

}
export default App;

