import List from "./List"
import Filters from "./Filters"
import FullWidthTabs from "./FullWidthTabs"

import GroupPlanningBody from "./GroupPlanningBody"


const Body = ({ items }) => {
    return (
        <div>
            <div>
                <FullWidthTabs items={items}/>
            </div>


        </div>
    )
}

export default Body