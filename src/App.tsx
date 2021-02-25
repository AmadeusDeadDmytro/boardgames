import 'antd/dist/antd.css'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import LordOfTheRingLCG from './games/LordOfTheRingsLCG'
import { Menu } from 'antd'
import React from 'react'

const App = () => {
    return (
        <BrowserRouter>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link to="/lord-of-the-ring-lcg">
                        Lord of the Rings LCG
                    </Link>
                </Menu.Item>
            </Menu>
            <Switch>
                <Route path="/lord-of-the-ring-lcg">
                    <LordOfTheRingLCG />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
