import {
    BrowserRouter, Route, Switch, useHistory, Redirect
} from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'

import React from 'react'
import { GamesPage, LoginPage, SignupPage } from './pages'
import { mainStore } from './store/mainStore'
import { Provider } from 'mobx-react'

const App = () => {
    let history = useHistory()

    const token = localStorage.getItem('token')
    if (!token) {
        history.push('login')
    }

    return (
        <>
            <GlobalStyles/>
            <Provider mainStore={mainStore}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" >
                            {token && <Redirect to="/games" />}
                        </Route>
                    </Switch>
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
