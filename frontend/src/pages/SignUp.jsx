import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore } from '../stores/AuthStore'

export const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    const authStore = useAuthStore()

    if (authStore.isLoggedIn()) {
        return <Navigate to="/discovery" />
    }

    const navigateToLogin = () => {
        navigate('/login')
    }

    const onButtonClick = (e) => {
        e.preventDefault()
        setEmailError('')
        setPasswordError('')

        if ('' === email) {
            setEmailError('Inserisci la tua email')
            return
        }

        if ('' === usrname) {
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
        fetch('http://localhost:3030/api/auth/check', {
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

    const SignUpForm = () => {
        fetch('http://localhost:3030/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username, name, surname }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.token) {
                    authStore.setToken({ token: response.token, email })
                } else {
                    window.alert('Email o password errati')
                }
            })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        checkAccountExists((accountExists) => {
            if (accountExists) console.error("L'utente è già registrato")
            else SignUpForm()
        })
    }

    return (
        <div
            className={
                'mainContainer mt-20 flex flex-col items-center align-middle'
            }
        >
            <div
                className={
                    'titleContaine flex flex-col justify-center align-middle text-[54px] font-bold'
                }
            >
                <div>Iscriviti</div>
            </div>

            <form onSubmit={onSubmit}>
                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Inserisci il tuo nome"
                        className={
                            'inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg'
                        }
                    />
                </div>

                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        name="surname"
                        required
                        onChange={(e) => setSurname(e.target.value)}
                        value={surname}
                        placeholder="Inserisci il tuo cognome"
                        className={
                            'inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg'
                        }
                    />
                </div>

                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        name="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        placeholder="Inserisci la tua username"
                        className={
                            'inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg'
                        }
                    />
                </div>

                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        name="email"
                        required
                        value={email}
                        placeholder="Enter your email here"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className={
                            'inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg'
                        }
                    />
                    <label className="errorLabel text-[12px] text-red-600">
                        {emailError}
                    </label>
                </div>

                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        name="password"
                        required
                        value={password}
                        type="password"
                        placeholder="Enter your password here"
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
                    value={'Sign up'}
                />
            </form>
            <div className="mt-10">
                <span>Sei gia iscritto?</span>
                <a
                    onClick={navigateToLogin}
                    className="ps-2 text-red-500 hover:text-red-600"
                    href=""
                >
                    Login
                </a>
            </div>
        </div>
    )
}
