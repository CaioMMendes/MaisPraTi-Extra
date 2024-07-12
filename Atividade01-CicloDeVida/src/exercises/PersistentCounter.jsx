import { useEffect, useState } from "react"
import { Button } from "../components/button"

const PersistentCounter = () => {
  const [counter, setCounter] = useState(
    localStorage.getItem("counter")
      ? JSON.parse(localStorage.getItem("counter"))
      : 0
  )

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter))
  }, [counter])

  function handleIncrease() {
    setCounter((counter) => counter + 1)
  }
  function handleDecrease() {
    setCounter((counter) => counter - 1)
  }

  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-medium text-lg">
        Sincronização de Estado com Local Storage
      </h1>
      <div className="flex gap-4 items-center">
        <Button onClick={handleDecrease}>-</Button>
        <p>{counter}</p> <Button onClick={handleIncrease}>+</Button>
      </div>
    </section>
  )
}

export default PersistentCounter
