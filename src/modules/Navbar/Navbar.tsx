import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { NavbarProps } from './NavbarType'
import styled from 'styled-components'
import Themes from '../../styles/theme'
import { RiLogoutBoxRLine } from 'react-icons/all'
import { useHistory } from 'react-router-dom'

const Navbar = ({ theme }: NavbarProps): ReactElement => {
    let history = useHistory()

    const handleSignOut = () => {
        localStorage.removeItem('token')
        history.push('login')
    }

    return (
        <Container theme={theme}>
            <Logout theme={theme} onClick={handleSignOut}/>
        </Container>
    )
}

const Container = styled.div<{ theme: string }>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: ${({ theme }) => Themes[theme].medium};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
    box-sizing: border-box;
`

const Logout = styled(RiLogoutBoxRLine)<{ theme: string }>`
    font-size: 26px;
    color: ${({ theme }) => Themes[theme].dark};
    cursor: pointer;
`

export default observer(Navbar)