import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore } from '../stores/AuthStore'
import { baseURL } from '../api'

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    const authStore = useAuthStore()

    if (authStore.isLoggedIn()) {
        return <Navigate to="/discovery" />
    }

    const navigateToSignup = () => {
        navigate('/signup')
    }

    const onButtonClick = (e) => {
        e.preventDefault()
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

    const checkAccountExists = (callback) => {
        fetch(baseURL + '/api/auth/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
            .then((response) => response.json())
            .then((response) => {
                callback(response.userExists)
            })
    }

    const logIn = () => {
        fetch(baseURL + '/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.token) {
                    authStore.setToken({ token: response.token, email })
                    navigate('/discovery')
                } else {
                    window.alert('Email o password errati')
                }
            })
    }

    return (
        <form
            className={
                'mainContainer mt-20 flex flex-col items-center align-middle'
            }
        >
            <div
                className={
                    'titleContaine flex flex-col justify-center align-middle text-[54px] font-bold'
                }
            >
                <div>Login</div>
            </div>

            <div className={'inputContainer flex flex-col justify-center pt-7'}>
                <input
                    value={email}
                    name="email"
                    placeholder="Email"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={
                        'inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg'
                    }
                />
                <label className="errorLabel text-[12px] text-red-600">
                    {emailError}
                </label>
            </div>

            <div className={'inputContainer flex flex-col justify-center pt-7'}>
                <input
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={
                        'inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg'
                    }
                />
                <label className="errorLabel text-[12px] text-red-600">
                    {passwordError}
                </label>
            </div>

            <input
                className={
                    'inputButton mx-[90px] mt-7 cursor-pointer rounded-full border-0 bg-black px-4 py-[10px] font-medium text-white'
                }
                type="submit"
                onClick={onButtonClick}
                value={'Log in'}
            />
            <div className="mt-10">
                <span>Non sei ancora iscritto?</span>
                <a
                    onClick={navigateToSignup}
                    className="ps-2 text-red-500 hover:text-red-600"
                    href=""
                >
                    Iscriviti
                </a>
            </div>
        </form>
    )
}
