import React, { FC } from "react"
import { Route } from 'react-router-dom';
import './App.css';
import Card from "./components/card.tsx"
import UserPage from "./components/user-page.tsx";
import TodosPage from "./components/todos-page.tsx";


const App: FC = () => {

  return (
    <>
      <Route path={"/users"} exact>
        <UserPage />
      </Route>
      <Route path={"/todos"} exact>
        <TodosPage />
      </Route>
      <Route path={"/card"} exact>
        <Card />
      </Route>
    </>
  )
}

export default App