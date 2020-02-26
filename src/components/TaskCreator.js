import React, { Component } from "react";

export default class TaskCreator extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="task to be done..." id="task-input" />
        <div className="checkbox-organiser">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">important ?</label>
          <span className="important-circle"></span>
        </div>
        <button type="submit" id="add-task-btn">
          add task
        </button>
      </form>
    );
  }
}
