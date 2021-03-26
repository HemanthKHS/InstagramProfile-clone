import React,{useState} from "react";
import './Profile.css'
import Profile_Top from './Profile-Top/Profile_Top'
import Posts from './Posts/Posts'
import Preview from "../Preview/Preview";

function Profile() {
    const [selectedimg, setSelectedimg] = useState(null)

    
    return (
        <div /*style={{ background : "orange"}}*/ className='Profile'>
           
           <Profile_Top />
           <Posts className='posts-div' setSelectedimg = {setSelectedimg} />
           { selectedimg && <Preview selectedimg={selectedimg} setSelectedimg={setSelectedimg}/> }
        </div>
    )
}

export default Profile