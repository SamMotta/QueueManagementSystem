import { Data } from "../pages";


export default function CallPanel({ actualCall, lastCalls }: Data) {
    return (
        <>
            <main className="bg-stone-400">
                <h1 className="text-4xl">{actualCall.name || actualCall.cpf}</h1>
                <p>{actualCall.type}</p>
            </main>
        </>
    )
}
