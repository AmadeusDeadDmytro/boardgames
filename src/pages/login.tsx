import React from 'react'
import styled from 'styled-components'
import Theme from '../styles/theme'
import { observer } from 'mobx-react'
import { mainStore } from '../store/mainStore'
import { Button } from '../components'

const HomePage = () => {
    const { settings } = mainStore

    return (
        <div>
            <Title theme={settings.theme}>Вход</Title>
            <Button onClick={() => console.log('click')}>Подтвердить</Button>
        </div>
    )
}

export const Title = styled.h1<{ theme: string }>`
  color: ${({ theme }) => theme ? Theme[theme].primary : ''};
  font-size: 48px;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`

export default observer(HomePage)