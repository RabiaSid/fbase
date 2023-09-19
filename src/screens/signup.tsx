import { useState } from "react";
import Button from "../components/button";
import { fbSignUp } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";
import InputField from "../components/inputfield";

export default function Signup() {
  const [model, setModel] = useState<any>({
    userName: "",
    email: "",
    password: "",
  });

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    console.log(model);
    fbSignUp(model)
      .then((res) => {
        navigate("/sign-in");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-5">
            <h1 className="text-3xl font-medium">Sign Up</h1>
          </div>
          <div className="py-5">
            <InputField
              value={model.userName}
              onChange={(e: any) => fillModel("userName", e.target.value)}
              label="User Name"
            />
          </div>
          <div className="py-5">
            <InputField
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-5">
            <InputField
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-5">
            <Button 
            onClick={signUpUser} 
            label="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
}