import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class Task extends Component {
  render() {
    const { id, title, important, done, date, time } = this.props.task;
    return (
      <div className="task-item">
        {important ? <span className="important-circle"></span> : null}
        <h3>{title}</h3>
        <label htmlFor="done">
          <input
            type="checkbox"
            id="done"
            onChange={this.props.handleDoneChange.bind(this, id)}
            checked={done}
          />
          {done ? "done" : "done ?"}
        </label>
        <div className="date-time-composer">
          <p className="date-p">{date}</p>
          {done ? <p className="time-p">{time}</p> : null}
        </div>
        <button
          onClick={this.props.handleTaskDelete.bind(this, id)}
          className="delete-btn"
        >
          <FontAwesomeIcon icon={faTrashAlt} className="icon-delete" />
        </button>
      </div>
    );
  }
}
