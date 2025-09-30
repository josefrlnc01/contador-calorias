import { type Activity } from "../types";


export type ActivityActions = 
{ type : 'save-activity', payload : {newActivity : Activity}} |
{ type : 'set-activity', payload : {id : Activity['id']}} | 
{ type : 'delete-activity', payload : {id : Activity['id']}} |
{ type : 'restart-activity'}

export type ActivityState = {
    activities : Activity[],
    activeId : Activity['id']
}

const storagedsActivities = () => {
    const localActivities = localStorage.getItem('activities')
    return localActivities ? JSON.parse(localActivities) : []
}
export const initialState : ActivityState = {
    activities: storagedsActivities(),
    activeId : ''
}
export const activityReducer = (
    state : ActivityState = initialState,
    action : ActivityActions
) => {
    if(action.type === 'save-activity'){
        let updatedState : Activity[] = [];
        if(state.activeId){
           updatedState = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        }
        else{
            updatedState =  [...state.activities, action.payload.newActivity]
        }
        return{
            ...state,
            activities : updatedState
        }
    }
    if(action.type === 'set-activity'){
        return{
            ...state,
            activeId: action.payload.id
        }
    }
    if(action.type === 'delete-activity'){
        return{
            ...state,
            activities : state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }
    if(action.type === 'restart-activity'){
        return{
            activities : [],
            activeId : ''
        }
    }
    return state
}