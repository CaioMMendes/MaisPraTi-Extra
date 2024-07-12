import { useEffect, useState } from "react"

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date().getTime())
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long",
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1000)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex flex-col gap-2 items-center bg-onyx-500/90 rounded-lg p-4 md:max-w-[50rem] w-full">
      <h1 className="font-medium text-lg">Relógio em Tempo Real</h1>
      <div className="flex gap-4 items-center">
        <p>{new Date(time).toLocaleDateString("pt-BR", options)}</p>
      </div>
    </section>
  )
}

export default RealTimeClock
