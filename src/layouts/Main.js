import React, { Component } from "react";
import TaskCreator from "../components/TaskCreator";
import Tasks from "../components/Tasks";
import trees from "../imgs/trees.png";

export default class Main extends Component {
  render() {
    return (
      <main>
        <img src={trees} alt="forest"></img>
        <div className="top"></div>
        <div className="mid">
          <TaskCreator />
        </div>
        <Tasks />
      </main>
    );
  }
}
