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
        <section className="flex flex-col gap-2">
          <h1 className="font-medium text-lg">
            Atualização de Título com useEffect
          </h1>
          <div className="flex gap-4 items-center">
            <p>
              Eu deixei o componente sempre ativo para alterar o título conforme
              o exercício selecionado.
            </p>
          </div>
        </section>
      )}
    </>
  )
}

export default TitleUpdater
