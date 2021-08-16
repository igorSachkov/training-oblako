import List from "./List"
import Filters from "./Filters"


const GroupPlanningBody = ({items}) => {
    return (
        <div>
            <Filters />
            <List items={items}/>
        </div>
    )
}

export default GroupPlanningBody