import React, {Component} from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({robots: users})
            )

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})

    }

    render() {
        const filterRobot = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return !this.state.robots.length ?
            <h1>Loading the Data</h1>
            :
            <div className={"tc"}>
                <h1 className={"f1"}>{"RoboFriends".toUpperCase()}</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobot}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            ;
    }

}

export default App;

