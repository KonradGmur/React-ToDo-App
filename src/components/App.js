import React, { Component } from 'react';
import './App.css';
import './AddTask'
import AddTask from './AddTask';
import TaskList from './TaskList'

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Zagrać w Fifę',
        date: '2020-08-01',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Posprzątać mieszkanie',
        date: '2020-08-11',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Posprzatać samochód',
        date: '2020-09-01',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'Kupić kwiaty narzeczonej',
        date: '2020-07-25',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'Przgotować się do nowej pracy',
        date: '2020-07-30',
        important: true,
        active: true,
        finishDate: null
      }, {
        id: 5,
        text: 'Stworzyć nową stronę internetową',
        date: '2020-07-31',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: 'Opanować dobrze React',
        date: '2020-09-18',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 7,
        text: 'Uczyć się Reduxa',
        date: '2020-12-24',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    console.log('delete elementu o id ' + id);
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log('change w w stanie elementu o id ' + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })

  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  render() {
    return (
      <div className='App'>
        <h1>Aplikacja TODO</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;

