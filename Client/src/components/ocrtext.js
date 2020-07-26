import React, {useState}  from 'react';
import 'semantic-ui-css/semantic.min.css'
import { withRouter } from 'react-router-dom';
import DisplayBoard from "./DisplayBoard"
import FileHolder from './FileHolder';
import {FileContext} from '../hooks/FileContext';

const Ocrtext = () =>  {
    const [isLoading, setLoading] = useState(false);
    const [result, setResult] = useState({ FileType: "", FileContent: "" }); 
    return (
        <div>
            {console.log("Value - ", window.localStorage.getItem("userid"))}
            {window.localStorage.getItem("userid") === null?
            window.location.replace("/")
            :
              <div className="App-content">
                <FileContext.Provider value={[result, setResult, isLoading, setLoading]}>
                    <FileHolder />
                    <DisplayBoard />
                </FileContext.Provider>
            </div>
            }
        </div>
    )
}

export default withRouter(Ocrtext);