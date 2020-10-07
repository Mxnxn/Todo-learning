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
            setTaskName("");
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

      // set this true when edit button is clicked
      // while click set srno of task and view true
      // using view show a input field and confirm button to save
      const [editModal, setEditModal] = useState({
            view: false,
            srno: 0,
            newText: "",
      });

      // get new editted taskname
      // remove previos one and add add new at same index
      // for adding syntax : task.splice(index,1,newObj)
      const editTask = () => {
            const index = tasks.findIndex((el) => el.sr === editModal.srno);
            if (index !== -1) {
                  const temp = [...tasks];
                  temp.splice(index, 1);
                  temp.splice(index, 0, { sr: editModal.srno, task: editModal.newText });
                  setTasks([...temp]);
            }
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
                        {editModal.view && (
                              <div className="input-block">
                                    <input
                                          className="inputField"
                                          value={editModal.newText}
                                          onChange={(e) => {
                                                setEditModal({ ...editModal, newText: e.target.value });
                                          }}
                                          type="text"
                                          placeholder="Edit"
                                    />
                                    <button onClick={editTask}>Save</button>
                              </div>
                        )}
                        <div className="scrollable" style={{ overflow: "auto", height: "70vh", marginTop: "40px" }}>
                              {tasks.map((el, index) => (
                                    <Task
                                          key={index}
                                          onEditPress={(sr, txt) => {
                                                // "!" used for opposite for opening and closing
                                                // sr number sending from task
                                                // setting previos text from text
                                                setEditModal({ view: !editModal.view, srno: sr, newText: txt });
                                          }}
                                          onDeletePress={deleteTask}
                                          sr={el.sr}
                                          task={el.task}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
};

export default Layout;
