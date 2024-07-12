// - Instruções:

import { useState, useEffect } from "react"

//   - Crie um componente chamado WindowSize.
//   - Utilize useState para armazenar a largura atual da janela.
//   - Utilize useEffect para adicionar e remover um event listener que atualiza o estado sempre que a janela é redimensionada.
//   - Exiba a largura atual da janela.

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
    <div>
      <p>A largura da janela é de: {windowSize}</p>
    </div>
  )
}

export default WindowSize
