import React,{useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GlobalContext from '../contexts/GlobalContext';
import alertImg from '../assets/alert-error.png'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color:'#b2b2b2',
  transform: 'translate(-50%, -50%)',
  width: 400,
  ehgiht:200,
  bgcolor:'white',
  boxShadow: 2,
  p: 2,
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  borderRadius:"10px",
  justifyContent:"center",
  gap:"20px"
};

const textStyle = {
    textAlign:"center"
}

export default function FailedModal() {

  const {openModalFailed,setOpenModalFailed} = useContext(GlobalContext)

  return (
    <div>
      <Modal
        open={openModalFailed}
        onClose={()=>setOpenModalFailed(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={textStyle} id="modal-modal-title" variant="h6" component="h2">
            Não foi possível finalizar sua compra!
          </Typography>
          <Typography>
            <img src={alertImg} style={{width: "50px"}}alt="error"/>
          </Typography> 
          <Typography sx={textStyle} id="modal-modal-description" >
            Tente novamente.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}