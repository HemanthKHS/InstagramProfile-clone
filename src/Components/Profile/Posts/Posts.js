import React , {useState} from "react";
import './Post.css'
import UseFirestore from "../../../Firebase/UseFirestore";


function Posts( {setSelectedimg} ){

    const { docs  } = UseFirestore('image');

    return (
        <div className="post-total">
            <div className='Profile_Navigation'>
            < div className='posts-icon'>
            <svg aria-label="Posts" class="_8-yf5 " fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path></svg>
            <p>POSTS</p>
            </div>
            </div>
        <div className='Post-space'>
           
            {
                docs && docs.map(doc => (
                    
                    <img className="insta_post"  onClick={() => {setSelectedimg(doc.url) ;}} key={doc.id} src={doc.url} alt=""/>
                  
                ))
            }

        </div>
        </div>
    )
}
export default Posts;