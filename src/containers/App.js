import React, {Component} from "react";
import {connect} from "react-redux";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import "./App.css";
import {requestRobots, setSearchField} from "../actions";
import ErrorBoundary from "../components/ErrorBoundary";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const {searchField, onSearchChange, robots,isPending} = this.props
        const filterRobot = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    {isPending ? <h1>Loading</h1> :
                        <ErrorBoundary>
                            <CardList robots={filterRobot}/>
                        </ErrorBoundary>
                    }
                </Scroll>
            </div>);
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

