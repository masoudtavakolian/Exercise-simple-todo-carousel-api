import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import "./AddTask.css";

export default function AddTask(props) {
  const [canAddTask, setCanAddTask] = useState({
    canAddTaskKey: false,
    value: "",
    des: "",
    successMessageKey: "",
  });
  const [showPanel, setShowPanel] = useState(false);
  let onEnterKeySaveTask = (e) => {
    if (e.keyCode === 13 && canAddTask.canAddTaskKey) saveTaskFunc();
  };
  let inputChangedFunc = (e) => {
    if (e.target.value !== "")
      setCanAddTask({
        ...canAddTask,
        canAddTaskKey: true,
        value: e.target.value,
        successMessageKey: "",
      });
    else
      setCanAddTask({
        ...canAddTask,
        canAddTaskKey: false,
        value: "",
        successMessageKey: "",
      });
  };
  let textAreaChangedFunc = (e) => {
    setCanAddTask({
      ...canAddTask,
      des: e.target.value,
      successMessageKey: "",
    });
  };
  let saveTaskFunc = () => {
    props.addNewTaskFunc({
      userId:"default",
      category: -1,
      done: false,
      title: canAddTask.value,
      description: canAddTask.des,
    });
    setCanAddTask({
      canAddTaskKey: false,
      value: "",
      des: "",
      successMessageKey: "Add Task: " + canAddTask.value + " successfully! ",
    });
  };
  let changeShowPanelState = (state) => {
    if (!state)
      setCanAddTask({
        ...canAddTask,
        canAddTaskKey: false,
        value: "",
        des: "",
        successMessageKey: "",
      });
    setShowPanel(state);
  };
  useEffect(() => {
    if (showPanel) {
      document.querySelector(".inputaddtodo").focus();
    }
  }, [showPanel]);

  return (
    <>
      {!showPanel ? (
        <div
          className="addNewTaskbar"
          onClick={() => changeShowPanelState(true)}
        >
          <span className="span1">
            <AddTwoToneIcon
              variant="contained"
              color="primary"
            ></AddTwoToneIcon>
          </span>
          <span>Add new task</span>
        </div>
      ) 
      : 
      (
        <div className="addTaskParent">
          <div className="main">
            <input
              className="inputaddtodo"
              value={canAddTask.value}
              placeholder="Write Task Here..."
              type="text"
              onKeyUp={(e) => onEnterKeySaveTask(e)}
              onChange={(e) => inputChangedFunc(e)}
            ></input>
            <textarea
              placeholder="Description..."
              type="text"
              onChange={(e) => textAreaChangedFunc(e)}
              value={canAddTask.des}
            ></textarea>
          </div>
          {canAddTask.successMessageKey.length !== 0 ? (
            <div className="successMessage">
              {canAddTask.successMessageKey}
            </div>
          ) : null}
          <Button
            disabled={!canAddTask.canAddTaskKey ? true : false}
            variant="contained"
            color="error"
            onClick={() => saveTaskFunc()}
          >
            Add Task!
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            variant="outlined"
            onClick={() => changeShowPanelState(false)}
          >
            cancel
          </Button>
        </div>
      ) }
    </>
  );
}
