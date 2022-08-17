import { Logo } from "./Logo";

export function Subscribe() {
    return (
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
                    <form action="" className="flex flex-col w-full gap-2">
                        <input
                            className="h-14 px-5 rounded bg-gray-900"
                            type="text"
                            placeholder="Seu nome completo" />
                        <input
                            className="h-14 px-5 rounded bg-gray-900"
                            type="email"
                            placeholder="Digite seu email" />

                        <button
                            className="rounded uppercase bg-green-500 py-4 font-bold text-white mt-4 text-sm hover:bg-green-700 transition-colors"
                            type="submit">
                            garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
        </div>
    )
}