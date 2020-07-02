import React, { Component } from "react";
import axios from 'axios';


export default class APDUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offenseSelectedFile: null,
            arrestSelectedFile: null,
            suspectSelectedFile: null,
            victimSelectedFile: null,
            narrativeSelectedFile: null,
        }
    }


    //OFFENSE
    offenseOnChangeHandler=event=>{
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
           .then(res => {
            console.log(res.statusText)
            alert("Uploaded Successfully")
         })
        } else {
            alert("No File Selected")
        }
    }

    //ARREST
    arrestOnChangeHandler=event=>{
        if(event.target.files[0].name==='GT2-Arr.xls') {
            this.setState({
                arrestSelectedFile: event.target.files[0],
                loaded: 0,
              })
        } else {
            alert('Only "GT2-Arr.xls" File May Be Selected')
        }
    }
    arrestOnClickHandler = () => {
        if(this.state.arrestSelectedFile) {
            const data = new FormData()
            data.append('file', this.state.arrestSelectedFile)
            axios.post("/uploadArrest", data, { 
               // receive two    parameter endpoint url ,form data
           })
           .then(res => {
            console.log(res.statusText)
            alert("Uploaded Successfully")
         })
        } else {
            alert("No File Selected")
        }
    }

    //SUSPECT
    suspectOnChangeHandler=event=>{
        if(event.target.files[0].name==='GT2-Sus.xls') {
            this.setState({
                suspectSelectedFile: event.target.files[0],
                loaded: 0,
              })
        } else {
            alert('Only "GT2-Sus.xls" File May Be Selected')
        }
    }
    suspectOnClickHandler = () => {
        if(this.state.suspectSelectedFile) {
            const data = new FormData()
            data.append('file', this.state.suspectSelectedFile)
            axios.post("/uploadSuspect", data, { 
               // receive two    parameter endpoint url ,form data
           })
           .then(res => {
            console.log(res.statusText)
            alert("Uploaded Successfully")
         })
        } else {
            alert("No File Selected")
        }
    }

    //VICTIM
    victimOnChangeHandler=event=>{
        if(event.target.files[0].name==='GT2-Vic.xls') {
            this.setState({
                victimSelectedFile: event.target.files[0],
                loaded: 0,
              })
        } else {
            alert('Only "GT2-Vic.xls" File May Be Selected')
        }
    }
    victimOnClickHandler = () => {
        if(this.state.victimSelectedFile) {
            const data = new FormData()
            data.append('file', this.state.victimSelectedFile)
            axios.post("/uploadVictim", data, { 
               // receive two    parameter endpoint url ,form data
           })
           .then(res => {
            console.log(res.statusText)
            alert("Uploaded Successfully")
         })
        } else {
            alert("No File Selected")
        }
    }

    //NARRATIVE
    narrativeOnChangeHandler=event=>{
        if(event.target.files[0].name==='GT2-Nar2.xls') {
            this.setState({
                narrativeSelectedFile: event.target.files[0],
                loaded: 0,
              })
        } else {
            alert('Only "GT2-Nar2.xls" File May Be Selected')
        }
    }
    narrativeOnClickHandler = () => {
        if(this.state.narrativeSelectedFile) {
            const data = new FormData()
            data.append('file', this.state.narrativeSelectedFile)
            axios.post("/uploadNarrative", data, { 
               // receive two    parameter endpoint url ,form data
           })
           .then(res => {
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
                        <input style={{marginBottom:'20px'}} type="file" name="file" onChange={this.arrestOnChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.arrestOnClickHandler}>Upload</button> 
                    </div>
                </div>

                <div className='card' style={{marginTop:'30px'}}>
                    <div className='card-header'>
                        <b style={{fontSize:'25px'}}>APD Suspect</b> <i>(GT2-Sus.xls)</i>
                    </div>
                    <div className='card-body'>
                        <input style={{marginBottom:'20px'}} type="file" name="file" onChange={this.suspectOnChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.suspectOnClickHandler}>Upload</button> 
                    </div>
                </div>

                <div className='card' style={{marginTop:'30px'}}>
                    <div className='card-header'>
                        <b style={{fontSize:'25px'}}>APD Victim</b> <i>(GT2-Vic.xls)</i>
                    </div>
                    <div className='card-body'>
                        <input style={{marginBottom:'20px'}} type="file" name="file" onChange={this.victimOnChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.victimOnClickHandler}>Upload</button> 
                    </div>
                </div>

                <div className='card' style={{marginTop:'30px'}}>
                    <div className='card-header'>
                        <b style={{fontSize:'25px'}}>APD Narrative</b> <i>(GT2-Nar2.xls)</i>
                    </div>
                    <div className='card-body'>
                        <input style={{marginBottom:'20px'}} type="file" name="file" onChange={this.narrativeOnChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.narrativeOnClickHandler}>Upload</button> 
                    </div>
                </div>
                
            </div>
        );
    }
}