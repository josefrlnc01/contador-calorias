import Form from "./components/Form"
import { useReducer, useEffect, useMemo } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"

function App() {
  
  const [state, dispatch] = useReducer(activityReducer, initialState)
  
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])

  const canRestartApp = useMemo(() => state.activities.length > 0 ,[state.activities])
  return (
    <>
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left mb-4 md:mb-0">Contador de Calorías</h1>
          <button 
            className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-md disabled:opacity-40"
            disabled={!canRestartApp}
            onClick={() => dispatch({type: 'restart-activity'})}
          >
            Reiniciar Aplicación
          </button>
        </div>
      </div>
    </header>
    
    <main className="bg-gray-50 min-h-screen">
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Form
              dispatch={dispatch}
              state={state}
            />
          </div>
        </div>
      </section>
      <section className="py-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker
          activities = {state.activities}
          />
        </div>
      </section>
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ActivityList
            activities={state.activities}
            dispatch={dispatch}
          />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
