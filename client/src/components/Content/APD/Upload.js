import React, { Component } from "react";


export default class APDUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_files: null,
            log: ''
        }
    }

    fileChangeHandler = event => {
        var files = event.target.files
        this.setState({ selected_files: files })
    }

    submitFiles = () => {
        this.setState({ log: '' })
        this.submitSync(0)
    }

    submitSync = (i) => {
        if (i >= this.state.selected_files.length) {
            console.log('done')
            this.setState({ log: this.state.log })
            return
        }
        var fileReader = new FileReader()
        fileReader.onloadend = (e) => {
            fetch('TONY\'s LINK',
                {
                    method: 'post',
                    body: fileReader.result
                }
            )
                .then(function (response) {
                    console.log(response)
                    return response
                })
                .then(results => {
                    console.log('done until: ', i)
                    results.text().then(data => {
                        console.log(this.state.selected_files[i])
                        this.state.log = this.state.log + this.state.selected_files[i].name + ':\n' + data + '\n\n'
                        this.setState({ log: this.state.log })
                        this.submitSync(i + 1, mode)
                    })
                })
                .catch(err => console.error(err))
        }


        fileReader.readAsText(this.state.selected_files[i])
    }


    render() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-10">
                        <label>Upload APD</label>
                        <div className="form-group files color">
                            <input type="file" className="form-control" multiple onChange={this.fileChangeHandler}></input>
                        </div>
                        {this.state.selected_files ?
                            <button type="button" className="btn btn-success btn-block" onClick={this.submitFiles}>Upload</button>
                            :
                            <button type="button" disabled className="btn btn-success btn-block">Upload</button>
                        }
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12">
                        <label>Server Log</label>
                        <div style={{ marginLeft: '50px', marginRight: '50px', whiteSpace: 'pre-wrap' }}>{this.state.log}</div>
                    </div>
                </div>
            </div>
        );
    }
}