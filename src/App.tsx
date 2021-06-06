import 'antd/dist/antd.css'

import {
    BrowserRouter, Link, Route, Switch, useHistory
} from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'

import React, { useEffect } from 'react'
import { GamesPage, LoginPage, SignupPage } from './pages'
import { mainStore } from './store/mainStore'
import { Provider } from 'mobx-react'

const App = () => {
    let history = useHistory()

    const token = localStorage.getItem('token')
    if (!token) {
        history.push('login')
    } else {
        history.push('games')
    }

    return (
        <>
            <GlobalStyles/>
            <Provider mainStore={mainStore}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/games" exact component={GamesPage}/>
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
}

export default App
