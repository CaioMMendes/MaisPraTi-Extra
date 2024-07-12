import { useState } from "react"
import { Button } from "../components/button"

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true)

  function handleChangeVisible() {
    setIsVisible((visible) => !visible)
  }

  return (
    <section className="flex flex-col gap-2 items-center bg-onyx-500/90 rounded-lg p-4 md:max-w-[50rem] w-full">
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
