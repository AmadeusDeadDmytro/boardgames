import 'antd/dist/antd.css'

import {
    BrowserRouter, Link, Route, Switch,
} from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'

import React from 'react'
import { HomePage, LoginPage, SignupPage } from './pages'
import { mainStore } from './store/mainStore'
import { Provider } from 'mobx-react'

const App = () => (
    <>
        <GlobalStyles/>
        <Provider mainStore={mainStore}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                </Switch>
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>
                </Switch>
                <Switch>
                    <Route path="/signup" exact component={SignupPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
)

export default App
