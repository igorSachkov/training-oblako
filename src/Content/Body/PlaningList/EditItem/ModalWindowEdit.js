import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalForm from './ModalForm';
import editPng from "./../../../../icons/Edit.png"
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 8, 6),
  },
}));

const ModalWindowEdit = ({editPlanningItem, item}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = ({name, members, coach})=> {
    debugger
    editPlanningItem(item.id, name, members, coach)
    
  }

  return (
    <div>
      <div onClick={handleOpen}>
      <img src={editPng} />Редактировать
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ModalForm onSubmit={handleSubmit} item={item}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalWindowEdit