import React, { useEffect, useState } from "react";
import { fbAdd, fbGet } from "../config/firebasemethods";
import InputField from "../components/inputfield";
import Button from "../components/button";

export default function Task() {
  const [taskList, setTaskList] = useState<any>();
  const [model, setModel] = useState<any>({
    task:"",
    assignee:"",
  });

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
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12">
        <div>
          <h1 className="text-4xl text-white">Task</h1>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="p-10">
          <div className="py-2">
            <InputField
              value={model.task}
              onChange={(e: any) => fillModel("task", e.target.value)}
              label="Task"
            />
          </div>
          <div className="py-2">
            <InputField
              value={model.assignee}
              onChange={(e: any) => fillModel("assignee", e.target.value)}
              label="assignee"
            />
          </div>
          <div className="py-2">
            <Button onClick={AddTask} label="AddTask" />
          </div>
        </div>
        <div className="p-10 col-span-3">
        {taskList && taskList.length > 0 ? taskList.map((x: any)=>( 
           <div key={x.id} className="rounded bg-white drop-shadow-xl my-2 px-5 py-2">
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
