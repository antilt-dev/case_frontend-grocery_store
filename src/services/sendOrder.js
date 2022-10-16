import axios from "axios";

const sendOrder = (url,body,setOpenSucess,setOpenFailed) => {

    const headers = {headers:{
        "Content-Type":"application/json"
    }}

        axios
        .post(url,body,headers)
        .then((res)=>{
            setOpenSucess(true)
        })
        .catch((err)=>{
            console.log(err.response.data)
            setOpenFailed(true)
        })
}

export default sendOrder