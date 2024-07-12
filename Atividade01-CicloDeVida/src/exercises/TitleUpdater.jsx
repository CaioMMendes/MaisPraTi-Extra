import { useEffect } from "react"

const TitleUpdater = ({ showText = false, title }) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  return (
    <>
      {showText && (
        <div>
          Eu deixei ele sempre ativo para alterar conforme o exercício
          selecionado.
        </div>
      )}
    </>
  )
}

export default TitleUpdater
