import './Popup.css'
import React from 'react'


 function Popup (msg,resetForm) {

  
   resetForm = () =>{
      this.setState({
        name : '',
        phonenumber:'',
        email:'',
        message:'',
        sent: false,
        showPopup:false
      })
  }

    const data = {msg:'',resetForm}
  return (
    <div className='popup'>
        <div className="popup-content">
            <span className='popup-msg'>{data.msg}</span>
            <span className='close' onClick={data.resetForm}>X</span>
        </div>
    </div>
  )
}
export default Popup;