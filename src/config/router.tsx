import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../screens/login"
import Task from "../screens/task"
import Signup from "../screens/signup"
import Protected from "../screens/protected"

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Protected Screen={Task} />} />
            {/* <Route path="/" element={<Task/>} /> */}
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            {/* <Route path="/" element={<Login />} />
            <Route path="/" element={<Login />} /> */}
        </Routes>
    </Router>
  )
}
