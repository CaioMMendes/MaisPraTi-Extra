import { useState } from "react"
import { Button } from "../components/button"

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true)

  function handleChangeVisible() {
    setIsVisible((visible) => !visible)
  }

  return (
    <section className="flex flex-col gap-2">
      <h1 className="font-medium text-lg">Exibir/Mostrar Texto</h1>
      <div className="flex gap-4 items-start flex-col justify-center">
        <Button onClick={handleChangeVisible} className="w-fit">
          Tornar {isVisible ? "Invisível" : "Visível"}
        </Button>
        {isVisible && <p>O texto está visível</p>}
      </div>
    </section>
  )
}

export default ToggleText
