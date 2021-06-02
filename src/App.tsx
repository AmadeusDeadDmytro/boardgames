import 'antd/dist/antd.css'

import {
    BrowserRouter, Link, Route, Switch,
} from 'react-router-dom'
import GlobalStyles from './themes/globalStyles'


import React from 'react'
import { HomePage } from './pages'

const App = () => (
    <>
        <GlobalStyles/>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
    </>
)

export default App
