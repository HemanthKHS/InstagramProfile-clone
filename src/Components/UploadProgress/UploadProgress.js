import  React  from "react";
import  useStorage  from "../../Firebase/UseStorage";


export default function ProgressBar({ file , setFile}){
    const {url , progress }= useStorage(file);
    console.log(progress,url)

    return(
        <div className='Progress-Bar'>

        </div>
    )
}

