import { useState, useEffect } from "react"

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => window.innerWidth)

  useEffect(() => {
    function handleUpdateSize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleUpdateSize)
    return () => window.removeEventListener("resize", handleUpdateSize)
  }, [])

  return (
    <section className="flex flex-col gap-2 items-center bg-onyx-500/90 rounded-lg p-4 md:max-w-[50rem] w-full">
      <h1 className="font-medium text-lg">
        Monitoramento de Largura da Janela
      </h1>
      <div className="flex gap-4 items-center">
        <p>
          Width: <span className="text-lg font-semibold">{windowSize} px</span>
        </p>
      </div>
    </section>
  )
}

export default WindowSize
