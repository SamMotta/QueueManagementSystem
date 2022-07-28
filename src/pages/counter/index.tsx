import Link from "next/link";
import { FormEvent, useState } from "react";
import HeadC from "../../components/HeadC";

export default function Dashboard() {
    const [counterID, setCounterID] = useState<string>("1")

    function SelectDynamic(maxCounters: number = 10) {
        let content: JSX.Element[] = []

        for (let i = 0; i < maxCounters; i++) {
            let element = <option key={i + 1} value={i + 1}>{i + 1}</option>
            content.push(element)
        }
        return content
    }

    function handlerCounterID(event: FormEvent) {
        event.preventDefault()

        setCounterID((event.currentTarget as HTMLSelectElement).value)
    }

    return (
        <div className="flex">
            <div className="text-lg m-auto">
                <HeadC page="Dashboard"/>
                <h1 className="text-3xl">Counter Dashboard</h1><br />
                <div className="">
                    <p>Choose the counter you are:</p><br />
                    <select className="select select-bordered mx-auto" onChange={handlerCounterID}>
                        {SelectDynamic().map(i => i)}
                    </select>
                </div><br />
                <Link href={`/counter/${counterID}`}>
                    <button type="button" className="btn">Counter {counterID}</button>
                </Link>
            </div>
        </div>
    )
}