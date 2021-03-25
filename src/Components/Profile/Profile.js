import React from "react";
import './Profile.css'
import Profile_Top from './Profile-Top/Profile_Top'
import Posts from './Posts/Posts'

function Profile() {

    return (
        <div /*style={{ background : "orange"}}*/ className='Profile'>
           
           <Profile_Top />
           <Posts />
        </div>
    )
}

export default Profile