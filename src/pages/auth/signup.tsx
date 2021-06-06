import React, { useState } from 'react'
import styled from 'styled-components'
import Theme from '../../styles/theme'
import { observer } from 'mobx-react'
import { mainStore } from '../../store/mainStore'
import { Button, TextField, CenteredBlock, Text, Link } from '../../components'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../../appolo/mutation'
import { useHistory } from 'react-router-dom'

type FormType = {
    username: string,
    email: string,
    password: string,
}

const HomePage = () => {
    const { settings } = mainStore
    const [registerUser] = useMutation(REGISTER_USER)
    let history = useHistory()
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState<FormType>({
        username: '',
        email: '',
        password: ''
    })

    const handleInput = (name: string, value: string) => {
        setForm((prev: FormType): FormType => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        setLoading(true)
        registerUser({ variables: form })
            .then((data) => {
                setLoading(false)
                history.push('login')
            })
            .catch(e => {
                setLoading(false)
                console.error(e.message)
            })
    }

    return (
        <div>
            <Title theme={settings.theme}>Регистрация</Title>
            <CenteredBlock>
                <TextField onChange={e => handleInput('username', e.target.value)} label="Имя" type="text" width={300} value={form.username}/>
                <TextField onChange={e => handleInput('email', e.target.value)} label="Email" type="email" width={300} value={form.email}/>
                <TextField onChange={e => handleInput('password', e.target.value)} label="Пароль" type="password" width={300} value={form.password}/>
                <Button className="mt-15" onClick={handleSubmit} loading={loading}>Подтвердить</Button>
                <Text className="mt-10">Есть аккаунт? <Link href="login" className="ml-5">Войти</Link></Text>
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