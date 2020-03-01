import React, { Component } from "react";
import Task from "../components/Task";

export default class Tasks extends Component {
  render() {
    return this.props.tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        handleDoneChange={this.props.handleDoneChange}
        handleTaskDelete={this.props.handleTaskDelete}
      />
    ));
  }
}
