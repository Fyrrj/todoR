import React, { Component } from "react";
import Task from "../components/Task";

export default class Tasks extends Component {
  render() {
    return (
      <div className="tasks-container">
        <Task />
      </div>
    );
  }
}
