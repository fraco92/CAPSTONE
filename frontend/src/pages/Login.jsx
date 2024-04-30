import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        setEmailError('')
        setPasswordError('')

        if ('' === email) {
            setEmailError('Inserisci la tua email')
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Inserisci una email valida')
            return
        }

        if ('' === password) {
            setPasswordError('Inserisci una password')
            return
        }

        if (password.length < 7) {
            setPasswordError('La password deve essere di almeno 8 caratteri')
            return
        }

        checkAccountExists((accountExists) => {
            // If yes, log in
            if (accountExists) logIn()
            // Else, ask user if they want to create a new account and if yes, then log in
            else if (
                window.confirm(
                    'An account does not exist with this email address: ' +
                        email +
                        '. Do you want to create a new account?'
                )
            ) {
                logIn()
            }
        })
    }

    return (
        <div
            className={
                'mainContainer flex flex-col justify-center align-middle'
            }
        >
            <div
                className={
                    'titleContaine flex flex-col justify-center align-middle text-[54px] font-bold'
                }
            >
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer flex flex-col justify-center'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={
                        'inputBox h-[38px] w-[280px] rounded-[8px] border ps-[8px] text-lg'
                    }
                />
                <label className="errorLabel text-[12px] text-red-600">
                    {emailError}
                </label>
            </div>
            <br />
            <div className={'inputContainer flex flex-col justify-center'}>
                <input
                    value={password}
                    type="password"
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={
                        'inputBox h-[38px] w-[280px] rounded-[8px] border ps-[8px] text-lg'
                    }
                />
                <label className="errorLabel text-[12px] text-red-600">
                    {passwordError}
                </label>
            </div>
            <br />

            <input
                className={
                    'inputButton mx-[90px] cursor-pointer rounded-[8px] border-0 bg-black py-[10px] font-medium'
                }
                type="button"
                onClick={onButtonClick}
                value={'Log in'}
            />
        </div>
    )
}
