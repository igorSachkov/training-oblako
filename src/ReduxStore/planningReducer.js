import uniqid from 'uniqid';
import constants from './constants';



let initialStore = [
    { id: 101, date: new Date(1640239200000), name: "Страхование с заботой о клиенте", members: 12, coach: "", progress: 91 },
    { id: 102, date: new Date(1636871400000), name: "Главыне правила продаж", members: 10, coach: "", progress: 90 },
    { id: 103, date: new Date(1634643000000), name: "Первичное обучение KC", members: 8, coach: "", progress: 86 },
    { id: 104, date: new Date(1640239200000), name: "Вторичное обучение KC", members: 18, coach: "", progress: 82 },
    { id: 105, date: new Date(1640239200000), name: "Вклады: теория и практика", members: 6, coach: "", progress: 79 },
    { id: 106, date: new Date(1640239200000), name: "Очное обучние менеджеров", members: 20, coach: "", progress: 73 },
    { id: 107, date: new Date(1640239200000), name: "Собачий лай в 5 утра", members: 14, coach: "", progress: 56 },
    { id: 108, date: new Date(1640239200000), name: "Жим лежа 20 раз по 20", members: 9, coach: "", progress: 32 },
    { id: 109, date: new Date(1636871400000), name: "Организация и ведение рыночных отношений", members: 4, coach: "", progress: 21 },
    { id: 110, date: new Date(1640239200000), name: "Гостиничный сервис", members: 21, coach: "", progress: 15 },
]

// async function  some() {
//     let promise = await fetch("https://github.com/igorSachkov/training-oblako/blob/master/src/ReduxStore/events.json")
//     let commits = await promise.json()
//     console.log(commits)
// }
// some()

// console.log(JSON.stringify(initialStore))

export const planningReducer = (state = initialStore, action) => {
    
    
    switch (action.type) {
        case constants.deletePlanningItemConstant:
            return state.filter(item => item.id != action.id)
        case constants.addPlanningItemConstant:
            return [...state, { id: uniqid(), date: new Date(action.date), name: action.name, members: action.members, coach: action.coach, progress: 0 }]
        case constants.editPlanningItemConstant:
            return state.map(function (e) {
                if (e.id == action.id) {
                    return { id: e.id, date: action.date ? new Date(action.date) : e.date, name: action.name ? action.name : e.name,
                         members: action.members ? action.members : e.members, coach: action.coach ? action.coach : e.coach, progress: action.progress ? action.progress : e.progress}
                } else {
                    return e
                }
            })

        default:
            return state
    }
}

export const deletePlanningItem = (id) => ({ type: constants.deletePlanningItemConstant, id })
export const addPlanningItem = (name, members, coach, date) => ({ type: constants.addPlanningItemConstant, name, members, coach, date })
export const editPlanningItem = (id, name, members, coach, progress, date) => ({ type: constants.editPlanningItemConstant, id, name, members, coach, progress, date })

