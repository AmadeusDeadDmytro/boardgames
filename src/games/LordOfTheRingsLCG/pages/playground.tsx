import { observer } from 'mobx-react'
import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { mainStore } from '../../../store/mainStore'
import { Navbar } from '../../../modules'
import Theme from '../../../styles/theme'
import { useDocumentTitle } from '../../../hooks'
import { LogContainer, LogButton } from './playgroundStyles'

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
            <LogButton theme={settings.theme} onClick={() => setLogWindowActive(prev => !prev)}>история</LogButton>
            <LogContainer theme={settings.theme} style={{right: logWindowActive ? 0 : -420}}>
                {game.log.map((l, idx) => (
                    <div className="log" key={idx}>{l}</div>
                ))}
            </LogContainer>
        </>
    )
}




export default observer(Playground)