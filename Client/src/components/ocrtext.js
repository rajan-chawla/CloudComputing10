import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class ocrtext extends Component {

    componentWillMount() {

    }

    componentDidMount() {

    }

    getText = async (imgfile) =>{
        var formdata = new FormData();
        formdata.append("photo", imgfile);
        console.log(formdata);
        await axios({
            method: 'post',
            url: '/api/converttotext',
            data: formdata,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }


    render() {
        return (
            <div>
                <h1>Upload photo</h1> 
                <input type="file" className="form-control"  onChange={e => this.getText(e.target.files[0])} />
            </div>
        )
    }
}

export default withRouter(ocrtext);