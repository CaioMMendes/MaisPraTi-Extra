import { useState } from "react"
import { Button } from "./components/button"

function App() {
  const exercises = [
    "Atualização de Título com useEffect",
    "Monitoramento de Largura da Janela",
    "Sincronização de Estado com Local Storage",
    "Relógio em Tempo Real",
    "Exibir/Mostrar Texto",
    "Contador com Limite",
  ]

  const [selectedExercise, setSelectedExercise] = useState(0)

  function handleSelectExercise(index) {
    setSelectedExercise(index)
  }

  return (
    <div className="min-h-screen w-full">
      <section>
        <nav className="grid grid-cols-3 gap-x-4 gap-y-1 p-5 items-center justify-center">
          {exercises.map((exercise, index) => {
            return (
              <Button
                className="h-full w-full "
                key={exercise}
                onClick={() => handleSelectExercise(index)}
              >
                {exercise}
              </Button>
            )
          })}
        </nav>
      </section>
      <p>{exercises[selectedExercise]}</p>
    </div>
  )
}

export default App
