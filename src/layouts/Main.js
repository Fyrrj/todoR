import React, { Component } from "react";
import TaskCreator from "../components/TaskCreator";
import Tasks from "../components/Tasks";
import trees from "../imgs/trees.png";
import { v4 as uuidv4 } from "uuid";

export default class Main extends Component {
  state = {
    tasks: []
  };

  handleDoneChange = id => {
    this.setState({
      todos: this.state.tasks.map(task => {
        if (task.id === id) {
          task.done = !task.done;
        }
      })
    });
  };

  handleTaskDelete = id => {
    this.setState({
      tasks: [...this.state.tasks.filter(task => task.id !== id)]
    });
  };

  handleAddTask = (title, important) => {
    if (title.length < 3) {
      alert("Type title of task!");
      return;
    }
    const newTask = {
      id: uuidv4(),
      important,
      title,
      done: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  handleImportantChange = () => {};

  render() {
    return (
      <main>
        <img src={trees} alt="forest"></img>
        <div className="top"></div>
        <div className="mid">
          <TaskCreator handleAddTask={this.handleAddTask} />
        </div>
        <div className="bottom">
          <Tasks
            tasks={this.state.tasks}
            handleDoneChange={this.handleDoneChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </div>
      </main>
    );
  }
}
