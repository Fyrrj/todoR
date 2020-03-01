import React, { Component } from "react";

export default class TaskCreator extends Component {
  state = {
    title: "",
    important: false
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImportantChange = () => {
    this.setState({
      important: !this.state.important
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleAddTask(this.state.title, this.state.important);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="task to be done..."
          id="task-input"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <div className="checkbox-organiser">
          <input
            type="checkbox"
            id="checkbox"
            checked={this.state.important}
            onChange={this.handleImportantChange}
          />
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
