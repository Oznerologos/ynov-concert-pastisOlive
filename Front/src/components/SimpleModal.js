import React from 'react';
import Modal from '@material-ui/core/Modal';
import menu from '../media/img/menu.png';
import { Button } from '@material-ui/core';
  
  export default function SimpleModal() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <img src={menu} alt="menu" width="1200px"/>    
    </div>
  );

  return (
    <div>
      <Button variant="contained" className="bg-dark text-white" size="large" type="button" onClick={handleOpen}>
                        LA CARTE
                    </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal-carte"
      >
        {body}
      </Modal>
    </div>
  );
}