import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import listIcon from "./../icons/list-item-icon.png"
import deletePng from "./../icons/Delete.png"
import editPng from "./../icons/Edit.png"

export default function ListItemIcon() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
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
                <MenuItem onClick={handleClose}><img src={editPng} />Редактировать</MenuItem>
                <MenuItem onClick={handleClose}><img src={deletePng} /> Удалить слот</MenuItem>

            </Menu>
        </div>
    );
}

