import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { MainList } from "./pages/MainList"
import { DetailsPage } from "./pages/DetailsPage"
import { Characters } from "./pages/Characters"

export const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <MainList />
          </Route>

          <Route path="/house/:name" exact>
            <DetailsPage />
          </Route>

          <Route path="/person/:url">
            <Characters />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
} 