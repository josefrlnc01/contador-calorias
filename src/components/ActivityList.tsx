import { categories } from "../data/categories"
import type { Activity } from "../types"
import { useMemo } from "react"
import type { Dispatch } from "react"
import {PencilSquareIcon, TrashIcon} from '@heroicons/react/24/outline'
import type { ActivityActions } from "../reducers/activity-reducer"
type ActivityListProps =  {
    activities : Activity[]
    dispatch : Dispatch<ActivityActions> 
}

export default function ActivityList({activities, dispatch} : ActivityListProps) {
    const categoryName = useMemo(() => (category : Activity['category']) => 
        categories.map((cat) => cat.id === category ? cat.name : '')
        ,[activities])
  const isEmptyActivity = useMemo(() => (activities.length === 0),[activities])
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registro de Actividades</h2>
      
      {isEmptyActivity ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-500">No hay actividades registradas aún</p>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map(act => (
            <div 
              key={act.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    act.category === 1 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {categoryName(act.category)}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-gray-900">{act.name}</h3>
                  
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {act.calories.toLocaleString()}
                    </span>
                    <span className="ml-2 text-gray-500">calorías</span>
                  </div>
                </div>
                <div className="h-full flex justify-start items-center ">
                <button
                  onClick={() => dispatch({type: 'set-activity', payload: {id: act.id}})}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Editar actividad"
                >
                  <PencilSquareIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={() => dispatch({type: 'delete-activity', payload: {id: act.id}})}
                  className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Eliminar actividad"
                >
                  <TrashIcon className="w-6 h-6" />
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
