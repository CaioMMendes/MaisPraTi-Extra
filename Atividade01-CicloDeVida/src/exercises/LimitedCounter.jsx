import { useState } from "react"
import { Button } from "../components/button"
import { toast } from "sonner"

const LimitedCounter = () => {
  const [counter, setCounter] = useState(0)

  function handleIncrease() {
    if (counter < 10) {
      setCounter((counter) => counter + 1)
    } else {
      toast.error("Limite atingido!")
    }
  }
  function handleDecrease() {
    setCounter((counter) => counter - 1)
  }

  return (
    <section className="flex flex-col gap-2 items-center bg-onyx-500/90 rounded-lg p-4 md:max-w-[50rem]  w-full">
      <h1 className="font-medium text-lg">Contador com Limite (10)</h1>
      <div className="flex gap-4 items-center">
        <Button onClick={handleDecrease} className="select-none w-fit">
          -
        </Button>
        <p>{counter}</p>{" "}
        <Button onClick={handleIncrease} className="select-none  w-fit">
          +
        </Button>
      </div>
    </section>
  )
}

export default LimitedCounter
