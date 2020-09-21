import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list";
import {SearchBox} from "./components/search-box";

class App extends Component {
    constructor() {
        super(); // Call the constructor method on the Component Class.

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        console.log(`Filtered Monster: `, filteredMonster);

        // Component driven style.
        return (
            <div className='App'>
                <h1>Monsters Collection</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={e => {
                        this.setState({searchField: e.target.value}, () => console.log('the state updated: ', this.state));
                    }}
                />
                <CardList monsters={filteredMonster}/>
            </div>
        );
    }
}

export default App;
