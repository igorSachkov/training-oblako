const deletePlanningItemConstant = `DELETE-PLANNING-ITEM`
const addPlanningItemConstant = `ADD-PLANNING-ITEM`

let initialStore = [
    {id: 101, date: new Date("2021-12-23"), name: "Страхование с заботой о клиенте", members: 12, coach: "", progress: 91},
    {id: 102, date: new Date("2021-11-14"), name: "Главыне правила продаж", members: 10, coach: "", progress: 90},
    {id: 103, date: new Date("2021-10-19"), name: "Первичное обучение KC", members: 8, coach: "", progress: 86},
    {id: 104, date: new Date("2021-10-10"), name: "Вторичное обучение KC", members: 18, coach: "", progress: 82},
    {id: 105, date: new Date("2021-10-05"), name: "Вклады: теория и практика", members: 6, coach: "", progress: 79},
    {id: 106, date: new Date("2021-09-27"), name: "Очное обучние менеджеров", members: 20, coach: "", progress: 73},
    {id: 107, date: new Date("2021-09-23"), name: "Собачий лай в 5 утра", members: 14, coach: "", progress: 56},
    {id: 108, date: new Date("2021-09-19"), name: "Жим лежа 20 раз по 20", members: 9, coach: "", progress: 32},
    {id: 109, date: new Date("2021-08-27"), name: "Организация и ведение рыночных отношений", members: 4, coach: "", progress: 21},
    {id: 110, date: new Date("2021-08-23"), name: "Гостиничный сервис", members: 21, coach: "", progress: 15},
]
// let someUsers = users.filter(item => item.id < 3)



export const planningReducer = (state = initialStore, action) => {
    switch (action.type) {
        case deletePlanningItemConstant:
            return state.filter(item=> item.id != action.id)
        case addPlanningItemConstant:
            return [...state, {id: 111, date: action.date, name: action.name, members: action.members, coach: action.coach, progress: 0}]
        default:
            return state
    }
}

export const deletePlanningItem = (id) => ({ type: deletePlanningItemConstant, id})
export const addPlanningItem = (name, members, coach, date) => ({ type: addPlanningItemConstant, name, members, coach, date})