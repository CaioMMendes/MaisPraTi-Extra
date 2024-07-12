import { useEffect, useState } from "react"
import { Button } from "./components/button"
import LimitedCounter from "./exercises/LimitedCounter"
import PersistentCounter from "./exercises/PersistentCounter"
import RealTimeClock from "./exercises/RealTimeClock"
import TitleUpdater from "./exercises/TitleUpdater"
import WindowSize from "./exercises/WindowSize"
import ToggleText from "./exercises/ToggleText"

const exercises = {
  "Atualização de Título com useEffect": <TitleUpdater showText={true} />,
  "Monitoramento de Largura da Janela": <WindowSize />,
  "Sincronização de Estado com Local Storage": <PersistentCounter />,
  "Relógio em Tempo Real": <RealTimeClock />,
  "Exibir/Mostrar Texto": <ToggleText />,
  "Contador com Limite": <LimitedCounter />,
}

const exercisesKeys = Object.keys(exercises)

function App() {
  const [selectedExercise, setSelectedExercise] = useState(
    localStorage.getItem("exercise")
      ? localStorage.getItem("exercise")
      : exercisesKeys[0]
  )

  function handleSelectExercise(exercise) {
    setSelectedExercise(exercise)
  }

  useEffect(() => {
    localStorage.setItem("exercise", selectedExercise)
  }, [selectedExercise])

  return (
    <div className="min-h-screen w-full bg-onyx-500/80 text-[#f4f4f4]">
      <section className="flex ">
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 p-5 items-center justify-center w-full">
          {exercisesKeys.map((exercise) => {
            return (
              <Button
                className={`h-full w-full ${
                  selectedExercise === exercise && "bg-onyx-400"
                }`}
                key={exercise}
                onClick={() => handleSelectExercise(exercise)}
              >
                {exercise}
              </Button>
            )
          })}
        </nav>
      </section>
      <main className="px-5 flex flex-col flex-1">
        {exercises[selectedExercise]}
      </main>
      <TitleUpdater title={selectedExercise} />
    </div>
  )
}

export default App
