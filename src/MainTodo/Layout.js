import React, { useState } from "react";
import Task from "./Components/Task";

const Layout = (props) => {
      // for tasks that are present or actionable
      const [tasks, setTasks] = useState([{ sr: 1, task: "Drink green tea in morning" }]);
      // used while user entering a name for adding task
      const [taskName, setTaskName] = useState("");

      // to Add task to tasks and rerender the component to display
      const onAddButton = () => {
            // deep copy of already added tasks
            const temp = [...tasks];
            // add a task to existing task
            temp.push({ sr: temp.length + 1, task: taskName });
            // setting that deep copy to tasks to rerender layout component to display
            setTasks(temp);
            // short statement for setting task
            // setTasks([...tasks, { sr: tasks.length + 1, task: taskName }]);
      };

      // creating a function to delete a task
      // passing same function to all task rows to get sr number to delete specific
      // row/task
      const deleteTask = (sr) => {
            // finding index of a task where srnumber matches in all tasks
            const index = tasks.findIndex((el) => el.sr === sr);
            // if there is no item in tasks then it will alert with error
            if (index === -1) {
                  return alert("Error no index found!");
            }
            // splice method used to modify arrays in javascript
            // suppling index to splice to delete that task
            tasks.splice(index, 1);
            // again rerendering
            setTasks([...tasks]);
      };

      return (
            <div className="main-cont">
                  <div className="middle-cont">
                        <div className="heading">TODO</div>
                        <div className="input-block">
                              <input
                                    className="inputField"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    type="text"
                                    placeholder="Enter Todo Task .."
                              />
                              <button onClick={onAddButton}>Add</button>
                        </div>
                        <div className="scrollable" style={{ overflow: "auto", height: "70vh", marginTop: "40px" }}>
                              {tasks.map((el, index) => (
                                    <Task key={index} onDeletePress={deleteTask} sr={el.sr} task={el.task} />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Layout;
