import { observer } from 'mobx-react'
import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { mainStore } from '../../../store/mainStore'
import { Navbar } from '../../../modules'
import Theme from '../../../styles/theme'
import { useDocumentTitle } from '../../../hooks'
import { LogContainer } from './playgroundStyles'

const Playground = (): ReactElement => {
    const { settings, game } = mainStore
    const [ logWindowActive, setLogWindowActive ] = useState(true)
    useDocumentTitle('Game...')

    useEffect(() => {
        mainStore.addLog('Игра загружается...')
    }, [])

    return (
        <>
            <Navbar theme={settings.theme}/>
            <LogContainer theme={settings.theme}>
                <div className="log-button">история</div>
                {game.log.map((l, idx) => (
                    <div className="log" key={idx}>{l}</div>
                ))}
            </LogContainer>
        </>
    )
}




export default observer(Playground)