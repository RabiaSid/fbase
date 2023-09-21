import React, { useEffect, useState } from "react";
import { fbAdd, fbGet } from "../config/firebasemethods";
import InputField from "../components/inputfield";
import Button from "../components/button";

export default function Task() {
  const [taskList, setTaskList] = useState<any>();
  const [model, setModel] = useState<any>({});

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const AddTask = () => {
    fbAdd("tasks", model)
      .then((res: any) => {
        console.log(res);
        setModel({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetTask = () => {
    fbGet("tasks")
      .then((res: any) => {
        console.log(res);
        setTaskList([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetTask();
  }, []);

  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ">
          <InputField
            value={model.task}
            onChange={(e: any) => fillModel("task", e.target.value)}
            label="Task"
          />
          <InputField
            value={model.assignee}
            onChange={(e: any) => fillModel("assignee", e.target.value)}
            label="assignee"
          />
          <Button onClick={AddTask} label="AddTask" />
        </div>
        <div className="row-span-1 col-span-3">
          {taskList && taskList.length > 0 ? taskList.map((x: any)=>(
            <div key={x.id}>
              <h1 className="text-3xl">{x.task}</h1>
              <p>{x.assignee}</p>
            </div>
          ))
          :
          null
        }
        </div>
      </div>
    </>
  );
}
