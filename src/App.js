import React, { Component } from 'react'
import './App.css'
import Popup from './Components/Popup'

export default class App extends Component {

  constructor (props){
    super(props)
    this.state={
      name : '',
      phonenumber:'',
      email:'',
      message:'',
      sent: false,
      showPopup:false
    }
  }

  handlFullname = e =>{
      this.setState({
        name : e.target.value
      })
  }
  handlEmail = e =>{
      this.setState({
        email : e.target.value
      })
  }
  handlPhoneNum = e =>{
      this.setState({
        phonenumber : e.target.value
      })
  }
  handlMessage = e =>{
      this.setState({
        message : e.target.value
      })
  }
  handlSubmit = e =>{
    e.preventDefault()
    console.log(this.state);
      this.setState({
        showPopup: true,
        sent : true
      })
  }

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

  render() {
    return (
        <>
        <div className="form">
          <h1>Contact Us</h1>
          <form onSubmit={this.handlSubmit}>
            <div className='text_field'>
              <input type='text' required onChange={this.handlFullname} value={this.state.name} />
              <span></span>
              <label>Full Name</label>
            </div>
            <div className="text_field">
              <input type='number' required onChange={this.handlPhoneNum} value={this.state.phonenumber}/>
              <span/>
              <label>Phone Number</label>
            </div>
            <div className="text_field">
              <input type='email' required onChange={this.handlEmail} value={this.state.email}/>
              <span/>
              <label>Email</label>
            </div>
            <div className="text_field">
              <textarea type='text' required onChange={this.handlMessage} value={this.state.message}/>
              <span className='textarea_span'></span>
              <label className='textarea_label'>Message</label>
            </div>
            <div className="button">
              <button type='submit'>SEND</button>
            </div>
          </form>
        </div>
        {
          this.state.sent && this.state.showPopup ? <Popup msg=
          'Message has been sent successfully' resetForm={this.resetForm} /> : this.state.showPopup ? <Popup msg=
          'message has not sen somthing error' resetForm={this.resetForm} /> : null
        }
        </>
    )
  }
}
