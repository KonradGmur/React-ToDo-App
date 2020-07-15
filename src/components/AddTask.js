import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    state = {
        text: "",
        checked: false,

    }
    render() {
        return (
            <div className="form">
                <input type="text" placeholder="Dodaj zadanie" value={this.state.text} />
                <input type="checkbox" checked={this.state.checked} id="important" />
                <label htmlFor="important">Priorytet</label><br />
                <label htmlFor="date">Do kiedy zrobić: </label><br />
                <input type="date" value='2020-07-15' min='2020-07-15' max='2020-12-31' /><br/>
                <button>Add</button>
            </div >
        );
    }
}

export default AddTask;