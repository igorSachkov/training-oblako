import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import listIcon from "./../../../icons/list-item-icon.png"
import deletePng from "./../../../icons/Delete.png"
import ModalWindowEdit from './EditItem/ModalWindowEdit';

const ListItemIcon = ({ deletePlanningItem, editPlanningItem, targetId, item }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCloseAndDelete = () => {
        setAnchorEl(null);
        deletePlanningItem(targetId)
    };
    const handleCloseAndEdit = () => {
        setAnchorEl(null);
        
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={listIcon} className="listIcon" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <MenuItem onClick={handleCloseAndEdit}><ModalWindowEdit editPlanningItem={editPlanningItem} item={item}/></MenuItem>
                <MenuItem onClick={handleCloseAndDelete}><img src={deletePng} /> Удалить слот</MenuItem>
            </Menu>
        </div>
    )
};


export default ListItemIcon;