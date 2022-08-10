import React from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"

// We import all the components we need in our app
import Navbar from "./components/navbar/navbar"
import ExerciseLog from "./components/exercise/exerciseLog"
import Edit from "./components/exercise/edit"
import Create from "./components/exercise/create"
import CreateUser from "./components/user/createUser"
import ShowUser from "./components/user/showUser"
import UserLogin from "./components/user/userLogin"
import PastWorkouts from "./components/PastWorkouts/PastWorkouts"
import EditWorkout from "./components/exercise/EditWorkout"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ExerciseLog />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/pastworkouts" element={<PastWorkouts />} />
        <Route path="/editworkout" element={<EditWorkout />} />
      </Routes>
    </div>
  )
}

export default App
