import {React ,useState} from'react';
import  ProgressBar  from "../UploadProgress/UploadProgress";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Upload.css';

function UploadPost()  {

    const [file, setFile] =  useState(null);
    const [error, setError] = useState(null)

    const AllowedTypes = [ 'image/png' , 'image/jpeg'];

    function ChnageHandler(e){
        let pic = e.target.files[0];
        if (pic && AllowedTypes.includes(pic.type)) {
            setFile(pic);
            setError(null);
        }
        else{
            setFile(null);
            setError(" Please select Jpeg or Png type image")

        }
    }

    return(
        <div>
                <label>
                <input className='Upload-button' type="file" onChange={ChnageHandler}/>
                
                {/* <Button className='Upload-button' type="file" variant="light">Light</Button>  */}

                <span className='Upload-button-label'>upload</span>
                </label>
                <div className="output">
                { error && <div className="error"> {error} </div> }
                {/* title */}
                {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
        </div>
    )
} ;

export default UploadPost;