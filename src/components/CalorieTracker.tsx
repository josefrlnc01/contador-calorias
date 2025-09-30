import { act } from "react"
import type { Activity } from "../types"

type CalorieTrackerProps = {
    activities : Activity[]
}

export default function CalorieTracker({activities} : CalorieTrackerProps) {
    const leavedsCalories = activities.filter(act => act.category !== 1)
    console.log(leavedsCalories)
   const totalOfLeavedsCalories = leavedsCalories.reduce((acc, red) => acc + red.calories, 0)
    const addedsCalories = activities.filter(act => act.category === 1)
    const totalOfAddedsCalories = addedsCalories.reduce((acc, red) => acc + red.calories, 0)

    const totalCalories = totalOfAddedsCalories - totalOfLeavedsCalories
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Resumen de Calorías</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <p className="text-sm font-medium text-blue-600 mb-1">Calorías Gastadas</p>
          <p className="text-2xl font-bold text-gray-800">{totalOfLeavedsCalories} <span className="text-sm font-normal text-gray-500">kcal</span></p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <p className="text-sm font-medium text-green-600 mb-1">Calorías Ingeridas</p>
          <p className="text-2xl font-bold text-gray-800">{totalOfAddedsCalories} <span className="text-sm font-normal text-gray-500">kcal</span></p>
        </div>
        
        <div className={`p-4 rounded-lg shadow-sm ${totalCalories >= 0 ? 'bg-emerald-50' : 'bg-rose-50'}`}>
          <p className="text-sm font-medium mb-1">
            <span className={totalCalories >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
              {totalCalories >= 0 ? 'Balance Positivo' : 'Balance Negativo'}
            </span>
          </p>
          <p className={`text-2xl font-bold ${totalCalories >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
            {totalCalories} <span className="text-sm font-normal text-gray-500">kcal</span>
          </p>
        </div>
      </div>
      
      
    </div>
  )
}
