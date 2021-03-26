import React from 'react';
import './Profile_Top.css';
import UploadPost  from '../../Upload/Upload';
import UseFirestore from "../../../Firebase/UseFirestore";
import DP from './DP.jpeg';

function Profile_Top (){

    const { count } = UseFirestore('image');
    const number_of_posts = count;
    console.log(typeof number_of_posts)


    return (
        <div className="Profile_Top" /*style={{ background : "red"}} */>
           
            <div className='profile_picture' /*style={{ background : "yellow"}} */>
                <img className='profile_picture_img' src={DP} alt=""/>
            </div>

            <div className='UserName'  >
                <span  >KHS_Hemanth</span>
            </div>
            
            <div className="Upload_post">
            <UploadPost className="Upload_post" />
            </div>

            <div  className='Profile-Numbers'>
                <p> <span style={{ fontWeight : "bold"}}> { number_of_posts} </span> Posts</p>
            </div>

            
            <div  className='Profile-Bio'>
                <p><span style={{fontWeight:"bold"}}>Web Developper | Full stack</span> <br/>
                <span className="grey-font">NIT Warangal | 3rd Year Mechanical </span> <br/>
                This is intagram Profile page clone made <br/>
                as a part of <span style={{fontWeight:"bold"}}>OMBRE task</span><br/>
                created using react.js ,firebase(storage, firestore) <br/>
                check Gitub link below for code <br/>
                link : <a href="https://github.com/HemanthKHS/InstagramProfile-clone" target="_blank" id='link' >https://github.com/HemanthKHS/In.....</a> 
                </p>
            </div>
            
        </div>
    )
}

export default Profile_Top;