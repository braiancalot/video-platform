import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "./Footer";
import { Logo } from "./Logo";
import codeMockupImage from "../assets/code-mockup.png"

export function Subscribe() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [createSubscriber, { loading }] = useCreateSubscriberMutation();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate("/event")
    }

    return (
        <>
            <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto ">
                    <div className="max-w-[640px]">
                        <Logo />
                        <h1 className="mt-8 text-[2.5rem] leading-tight">
                            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                        </h1>
                        <p className="mt-6 text-gray-200 leading-relaxed">
                            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-700 rounded border border-gray-500">
                        <strong className="text-2xl mb-6 block">
                            Inscreva-se gratuitamente
                        </strong>
                        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
                            <input
                                className="h-14 px-5 rounded bg-gray-900"
                                type="text"
                                placeholder="Seu nome completo"
                                onChange={(event) => setName(event.target.value)} />
                            <input
                                className="h-14 px-5 rounded bg-gray-900"
                                type="email"
                                placeholder="Digite seu email"
                                onChange={(event) => setEmail(event.target.value)} />

                            <button
                                disabled={loading}
                                className="rounded uppercase bg-green-500 py-4 font-bold text-white mt-4 text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                                type="submit">
                                garantir minha vaga
                            </button>
                        </form>
                    </div>
                </div>
                <img src={codeMockupImage} className="mt-10" alt="" />
            </div>
            <Footer />
        </>

    )
}