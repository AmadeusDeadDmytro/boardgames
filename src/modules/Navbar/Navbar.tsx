import React, { ReactElement, useState } from 'react'
import { observer } from 'mobx-react'
import { NavbarProps } from './NavbarType'
import styled from 'styled-components'
import Themes from '../../styles/theme'
import { RiLogoutBoxRLine, HiOutlineChevronDoubleDown } from 'react-icons/all'
import { useHistory } from 'react-router-dom'

const Navbar = ({ theme }: NavbarProps): ReactElement => {
    let history = useHistory()
    const [active, setActive] = useState(false)

    const handleSignOut = () => {
        localStorage.removeItem('token')
        history.push('login')
    }

    const toggleNavbar = () => {
        setActive(!active)
    }

    return (
        <>
            <Container theme={theme} active={active}>
                <Logout theme={theme} onClick={handleSignOut}/>
            </Container>
            <Toggle theme={theme} active={active} onClick={toggleNavbar}/>
        </>
    )
}

const Container = styled.div<{ theme: string, active: boolean }>`
    position: absolute;
    width: 100%;
    top: ${({ active }) => active ? '0px' : '-50px'};
    left: 0;
    right: 0;
    height: 50px;
    background: ${({ theme }) => Themes[theme].secondary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
    box-sizing: border-box;
    border-bottom: 2px solid ${({ theme }) => Themes[theme].primary};
    transition: all .1s linear;
`

const Logout = styled(RiLogoutBoxRLine)<{ theme: string }>`
    font-size: 26px;
    color: ${({ theme }) => Themes[theme].light};
    cursor: pointer;
`

const Toggle = styled(HiOutlineChevronDoubleDown)<{ theme: string, active: boolean }>`
    font-size: 26px;
    color: ${({ theme }) => Themes[theme].light};
    position: absolute;
    right: 0;
    top: ${({ active }) => active ? '50px' : '0px'};
    padding: 15px;
    cursor: pointer;
    transition: top .1s linear;
    transform: rotate(${({ active }) => active ? '180deg' : '0deg'});
`

export default observer(Navbar)