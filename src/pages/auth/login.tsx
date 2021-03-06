import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../styles/theme'
import { observer } from 'mobx-react'
import { mainStore } from '../../store/mainStore'
import { Button, TextField, CenteredBlock, Text, Link } from '../../components'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../appolo/mutation'
import { useHistory } from 'react-router-dom'

type FormType = {
    email: string,
    password: string,
}

const HomePage = () => {
    const { settings } = mainStore
    const [loginUser] = useMutation(LOGIN_USER)
    let history = useHistory()
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState<FormType>({
        email: '',
        password: ''
    })

    const handleInput = (name: string, value: string) => {
        setForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = () => {
        setLoading(true)
        loginUser({variables: form})
            .then((data) => {
                const jwt = data.data.login.jwt
                setLoading(false)
                localStorage.setItem('token', jwt)
                history.push('games')
            })
            .catch(e => {
                setLoading(false)
                console.error(e.message)
            })
    }

    return (
        <div>
            <Title theme={settings.theme}>Вход</Title>
            <CenteredBlock>
                <TextField onChange={e => handleInput('email', e.target.value)} label="Email" type="email" width={300} value={form.email}/>
                <TextField onChange={e => handleInput('password', e.target.value)} label="Пароль" type="password" width={300} value={form.password}/>
                <Button className="mt-15" onClick={handleSubmit} loading={loading}>Войти</Button>
                <Text className="mt-10">Нет аккаунта? <Link href="signup" className="ml-5">Зарегистрироваться</Link></Text>
            </CenteredBlock>
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