import uniqid from 'uniqid';
const deletePlanningItemConstant = `DELETE-PLANNING-ITEM`
const addPlanningItemConstant = `ADD-PLANNING-ITEM`
const editPlanningItemConstant = `EDIT-PLANNING-ITEM`
const filterByAlphabetItemsConstantAZ = `FILTER-BY-ALPHABET-A-Z`
const filterByAlphabetItemsConstantZA = `FILTER-BY-ALPHABET-Z-A`
const filterByDateConstant = `FILTER-BY-DATE`



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
// let someUsers = users.filter(item => item.id < 3)



export const planningReducer = (state = initialStore, action) => {
    
    switch (action.type) {
        case deletePlanningItemConstant:
            return state.filter(item => item.id != action.id)
        case addPlanningItemConstant:
            return [...state, { id: uniqid(), date: new Date(action.date), name: action.name, members: action.members, coach: action.coach, progress: 0 }]
        case editPlanningItemConstant:
            return state.map(function (e) {
                if (e.id == action.id) {
                    return { id: e.id, date: action.date ? new Date(action.date) : e.date, name: action.name ? action.name : e.name,
                         members: action.members ? action.members : e.members, coach: action.coach ? action.coach : e.coach, progress: action.progress ? action.progress : e.progress}
                } else {
                    return e
                }
            })
        case filterByAlphabetItemsConstantAZ:
            return [...state].sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                } else return - 1
            })
        case filterByAlphabetItemsConstantZA:
            return [...state].sort(function (a, b) {
                if (a.name > b.name) {
                    return -1
                } else return 1
            })
        case filterByDateConstant:
            return state.filter(e=> e.date.getMonth() === action.month)
        default:
            return state
    }
}

export const deletePlanningItem = (id) => ({ type: deletePlanningItemConstant, id })
export const addPlanningItem = (name, members, coach, date) => ({ type: addPlanningItemConstant, name, members, coach, date })
export const editPlanningItem = (id, name, members, coach, progress, date) => ({ type: editPlanningItemConstant, id, name, members, coach, progress, date })
export const filterByAlphabetItemsAZ = () => ({ type: filterByAlphabetItemsConstantAZ })
export const filterByAlphabetItemsZA = () => ({ type: filterByAlphabetItemsConstantZA })
export const filterByDate = (month) => ({ type: filterByDateConstant, month })
