import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Textarea } from 'flowbite-react'
export const Support = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [stateMessage, setStateMessage] = useState(null)

    const form = useRef()

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const sendEmail = (e) => {
        e.persist()
        e.preventDefault()
        setIsSubmitting(true)
        emailjs
            .sendForm(
                emailjsServiceId,
                emailjsTemplateId,
                form.current,
                emailjsPublicKey
            )
            .then(
                (result) => {
                    setStateMessage('Messaggio inviato!')
                    setIsSubmitting(false)
                    setTimeout(() => {
                        setStateMessage(null)
                    }, 5000) // hide message after 5 seconds
                },
                (error) => {
                    setStateMessage(
                        'Qualcosa è andato storto, riprova più tardi'
                    )
                    console.error(error)
                    setIsSubmitting(false)
                    setTimeout(() => {
                        setStateMessage(null)
                    }, 5000) // hide message after 5 seconds
                }
            )
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
                <div>Supporto</div>
                <p className="mt-4 p-4 text-[18px] font-normal">
                    Inviaci una mail se hai un problema, una richiesta o un
                    consiglio
                    <ion-icon name="heart-outline"></ion-icon>
                    .
                    <br /> Ti risponderemo al più presto! :)
                </p>
            </div>
            <form
                className="flex flex-col items-center"
                onSubmit={sendEmail}
                ref={form}
            >
                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        className="inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg"
                        type="text"
                        name="user_name"
                        placeholder="Nome"
                        required
                    />
                </div>
                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <input
                        className="inputBox h-[38px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg"
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div
                    className={
                        'inputContainer flex flex-col justify-center pt-7'
                    }
                >
                    <Textarea
                        className="h-[120px] w-[280px] rounded-[8px] border border-black bg-white ps-[8px] text-lg focus:border-black"
                        id="comment"
                        placeholder="Inserisci il tuo messaggio"
                        required
                        rows={4}
                        name="message"
                    />
                </div>
                <input
                    className="inputButton mx-[90px] mt-7 cursor-pointer rounded-full border-0 bg-black px-4 py-[10px] font-medium text-white"
                    type="submit"
                    value="Invia"
                    disabled={isSubmitting}
                    onClick={sendEmail}
                />
                {stateMessage && <p>{stateMessage}</p>}
            </form>
        </div>
    )
}
