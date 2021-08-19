import { Grid } from "@material-ui/core"

const EditItemForm = () => {
    return (
        <div className="list__item">
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={1}>
                    {/* {`${item.date.getDate()} ${item.date.getMonth()}`} */}
                </Grid>
                <Grid item xs={5}>
                    {/* {item.name} */}
                </Grid>
                <Grid item xs={2}>
                    {/* {item.members} */}
                    члены
                </Grid>
                <Grid item xs={2}>
                    {/* {item.coach} */}
                </Grid>
                <Grid item xs={1}>
                    {/* {item.progress} */}
                    прогресс
                </Grid>
                <Grid item xs={1}>
                    {/* <ListItemIcon targetId={item.id} deletePlanningItem={deletePlanningItem} /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default EditItemForm