import { Data } from "../pages";

export default function CallPanel({ actualCall, lastCalls }: Data) {
    return (
        <>
            <main className="bg-stone-400 float-left p-1.5 h-screen max-w-3/6">
                <h1 className="text-4xl text-black uppercase">{actualCall.name || actualCall.cpf}</h1>
                <p className="text-2xl">{actualCall.type}</p>
                <p>### Guichê ###</p>
            </main>
            <section className="float-right max-w-fit bg-cyan-500 text-right flex flex-col">
                {lastCalls.map(i => {
                    return (
                        <div className="p-2 text-zinc-100 border-x-2 border-y-2 border-black" key={i.cpf}>
                            <p className="text-xl">{i.name || i.cpf}</p>
                            <p>{i.type}</p>
                            <p>### Guichê ###</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}
