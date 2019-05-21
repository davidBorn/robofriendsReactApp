import React, {Component} from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/errorboundary';
import './app.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchfield: state.searchfield
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
            
        }
    }

    componentDidMount() {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }


    render() {
        const {robots } = this.state;
        const { searchfield, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) })
            return !robots.length ?
                <h1>Loading</h1>:
            (
            <div className = 'tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }

    }
    
    


export default connect(mapStateToProps, mapDispatchToProps)(App);