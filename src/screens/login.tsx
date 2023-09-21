import { useState } from "react";
import { fbLogin } from "../config/firebasemethods";
import InputField from "../components/inputfield";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [model, setModel] = useState<any>({
      email: "",
      password: "",
  });

  const fillModel = (key: string, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  let LoginUser = () => {
    console.log(model);
    fbLogin(model)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
          <div className="py-3">
            <h1 className="text-3xl font-medium">Login</h1>
          </div>

          <div className="py-3">
            <InputField
              value={model.email}
              onChange={(e: any) => fillModel("email", e.target.value)}
              label="Email"
            />
          </div>
          <div className="py-3">
            <InputField
              value={model.password}
              onChange={(e: any) => fillModel("password", e.target.value)}
              label="Password"
            />
          </div>
          <div className="py-3">
            <Button 
            onClick={LoginUser} 
            label="Sign in" />
          </div>
          <div className="py-3">
            <p className="text-white">
              not account?
              <Link to="/sign-up"> Sign up </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}