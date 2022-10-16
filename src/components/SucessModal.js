import React,{useContext} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GlobalContext from '../contexts/GlobalContext';
import alertImg from '../assets/alert-sucess.png'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color:'secondary',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:200,
  bgcolor:'white',
  boxShadow: 2,
  p: 2,
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  borderRadius:"10px",
  gap:"20px"
};

const textStyle = {
    textAlign:"center"
}

export default function SucessModal() {

  const {openModalSucess,setOpenModalSucess} = useContext(GlobalContext)

  return (
    <div>
      <Modal
        open={openModalSucess}
        onClose={()=>setOpenModalSucess(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography sx={textStyle} id="modal-modal-title" variant="h6" component="h2">
            Feito!
          </Typography>
          <Typography>
            <img src={alertImg} style={{width: "50px"}}alt="error"/>
          </Typography> 
          <Typography sx={textStyle} id="modal-modal-description" >
            Compra realizada com sucesso.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}