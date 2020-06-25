import React, { Component } from "react";
import axios from 'axios'; 


export default class APDUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offenseSelectedFile: null,
        }
    }


    offenseOnChangeHandler=event=>{
        console.log(event.target.files[0])
        if(event.target.files[0].name==='GT2-Off.xls') {
            this.setState({
                offenseSelectedFile: event.target.files[0],
                loaded: 0,
              })
        } else {
            alert('Only "GT2-Off.xls" File May Be Selected')
        }
    }
    offenseOnClickHandler = () => {
        if(this.state.offenseSelectedFile) {
            const data = new FormData()
            data.append('file', this.state.offenseSelectedFile)
            axios.post("/uploadOffense", data, { 
               // receive two    parameter endpoint url ,form data
           })
           .then(res => { // then print response status
            console.log(res.statusText)
            alert("Uploaded Successfully")
         })
        } else {
            alert("No File Selected")
        }
        
    }


    render() {
        return (
            <div className="container">
                <div className='card'>
                    <div className='card-header'>
                        <b style={{fontSize:'25px'}}>APD Offense</b> <i>(GT2-Off.xls)</i>
                    </div>
                    <div className='card-body'>
                        <input style={{marginBottom:'20px'}} type="file" name="file" onChange={this.offenseOnChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.offenseOnClickHandler}>Upload</button> 
                    </div>
                </div>
                <div className='card' style={{marginTop:'30px'}}>
                    <div className='card-header'>
                        <b style={{fontSize:'25px'}}>APD Arrest</b> <i>(GT2-Arr.xls)</i>
                    </div>
                    <div className='card-body'>
                        <input style={{marginBottom:'20px'}} type="file" name="file" onChange={this.offenseOnChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.offenseOnClickHandler}>Upload</button> 
                    </div>
                </div>
            </div>
        );
    }
}