import React, {useEffect, useState} from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css"

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setserchField] = useState('');
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setRobots(users)
            )

    }, [])
    const onSearchChange = (event) => {
        setserchField(event.target.value);
    }
    const filterRobot = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (!robots.length ?
        <h1>Loading the Data</h1>
        :
        <div className={"tc"}>
            <h1 className={"f1"}>{"RoboFriends".toUpperCase()}</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobot}/>
                </ErrorBoundary>
            </Scroll>
        </div>)
        ;


}

export default App;

