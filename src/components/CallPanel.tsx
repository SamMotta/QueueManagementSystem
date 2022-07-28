import { Data } from "../pages/index";

export default function CallPanel({ actualCall, lastCalls }: Data) {
    return (
        <>
            <main className="bg-stone-400 float-left p-1.5 h-screen max-w-3/6 text-lg">
                <h1 className="text-4xl text-black uppercase">{actualCall.name || actualCall.cpf}</h1>
                <p className="text-2xl">{actualCall.type}</p>
                <p>Guichê: {actualCall.counter}</p>
            </main>
            <section className="float-right max-w-fit bg-cyan-500 text-right flex flex-col">
                {lastCalls.map(i => {
                    return (
                        <div className="p-2 text-zinc-100 border-x-2 border-y-2 border-black text-lg" key={i.cpf}>
                            <p className="text-2xl uppercase">{i.name || i.cpf}</p>
                            <p className="text-xl">{i.type}</p>
                            <p>Guichê: {i.counter}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
