import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import "../css/LeftPane.css";

class LeftPane extends Component {

    render() {
        return (
            <div class="LeftPane-container">
                 <h2 class="">
                        Convert Image to Text
                 </h2>
                <h3 class="LeftPane-content">
                OCR stands for Optical Character Recognition. It is a widespread technology to recognise text inside images, 
                such as scanned documents and photos.
                </h3>
                <div class="LeftPane-display">
                <div class="modal-body row">
                    <div class="col-md-2">
                        <Icon name='image' size='huge' /> 
                        Image 
                    </div>
                    <div class="col-md-2">
                    <Icon name='arrow right' size='huge' />
                    </div>
                    <div class="col-md-2">
                    <Icon name='file text' size='huge' />
                    Text
                    </div>
                    <div class="col-md-2">
                    <Icon name='arrow right' size='huge' />
                    </div>
                    <div class="col-md-2">
                    <Icon name='file pdf' size='huge' />
                    PDF
                    </div>
                </div>
                
                </div>
                
            </div>
        )
    }
}

export default LeftPane;