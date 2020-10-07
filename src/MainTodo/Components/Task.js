import React from "react";
import { Edit, Trash } from "react-feather";

const Task = (props) => {
      // general defining from props
      let { sr, task, onDeletePress, onEditPress } = props;
      return (
            <div className="todo-task">
                  <div className="srno">{sr}</div>
                  <div className="task-name">{task}</div>
                  <div className="actions">
                        <button
                              onClick={() => {
                                    onEditPress(sr, task);
                              }}
                        >
                              <Edit size="16" />
                        </button>{" "}
                        <button
                              onClick={() => {
                                    onDeletePress(sr);
                              }}
                        >
                              <Trash size="16" />
                        </button>
                  </div>
            </div>
      );
};

export default Task;
