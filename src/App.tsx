import {
    BrowserRouter, Route, Switch, useHistory, Redirect
} from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'

import React from 'react'
import { GamesPage, LoginPage, SignupPage } from './pages'
import { mainStore } from './store/mainStore'
import { Provider } from 'mobx-react'
import LOTR_GAME from './games/LordOfTheRingsLCG/pages/playground'

const App = () => {
    let history = useHistory()
    const { game } = mainStore

    const token = localStorage.getItem('token')
    if (!token) {
        history.push('login')
    }

    const gamesOrGame = () => game.current ? `/${game.current}` : '/games'

    return (
        <>
            <GlobalStyles/>
            <Provider mainStore={mainStore}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/games" />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/games" exact component={GamesPage}/>
                    </Switch>
                    <Switch>
                        <Route path="/login" exact component={LoginPage}/>
                    </Switch>
                    <Switch>
                        <Route path="/signup">
                            {token ? <Redirect to={game.current ? `/${game.current}` : '/games'}/> : <SignupPage/>}
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/lord_of_the_ring" exact component={LOTR_GAME}/>
                    </Switch>
                    <Switch>
                        <Redirect to={game.current ? `/${game.current}` : '/games'} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App
