import { useState, type FormEvent, type ChangeEvent, type Dispatch, useEffect } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"
import type { ActivityActions, ActivityState } from "../reducers/activity-reducer"
import {v4 as uuidv4} from 'uuid'

type FormProps = {
    dispatch : Dispatch<ActivityActions>,
    state : ActivityState
}
const initialState : Activity = {
        id : uuidv4(),
        category: 1,
        name: '',
        calories: 0
    }
export default function Form({dispatch, state} : FormProps) {
    const [activity, setActivity] = useState<Activity>(initialState)


    useEffect(() => {
        if(state.activeId){
            const selectedActivity = state.activities.filter((stateActivity) => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    },[state.activeId])

    
    const isValidActivity = () => {
        const {name} = activity
        return name.trim() 
    }

    const whatActivity = () => {
        const {category} = activity
        return category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'
    }
    const activ = whatActivity()
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const handleForm = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        dispatch({type:'save-activity', payload:{newActivity:activity}})
        setActivity({
            ...initialState,
            id:uuidv4()
        })
    }

    return (
        <form 
        onSubmit={handleForm}
        className="space-y-6 p-8">
            <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Categoría:
                </label>
                <select
                    onChange={handleChange}
                    value={activity.category || ''}
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm" 
                    id="category">
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Actividad:
                </label>
                <input 
                    className="mt-1 block w-full px-3 py-3 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleChange}
                    id="name"
                    value={activity.name || ''}
                    placeholder="Ej. Comida, Manzana, Hervido, Sopa. Ejercicio, pesas, running, mma"
                    type="text" />
            </div>

            <div className="space-y-2">
                <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
                    Calorías:
                </label>
                <input 
                    className="mt-1 block w-full px-3 py-3 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="calories"
                    onChange={handleChange}
                    placeholder="Ej. 600"
                    value={activity.calories.toString()}
                    type="number"
                    min="0"
                    step="1" />
            </div>
            
            <div className="pt-2">
                <button 
                    type="submit"
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        !isValidActivity() 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:scale-105'
                    }`}
                    disabled={!isValidActivity()}
                >
                    {activ}
                </button>
            </div>
        </form>
    )
}
