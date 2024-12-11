import React, { useState } from 'react'
import MyChatBubble from './MyChatBubble'
import UserChatBubble from './UserChatBubble'
import defaultImage from '../../public/images/default-profile-image.jpg'
import { collection, getDoc } from 'firebase/firestore';
import { getMsgs } from '../Firebase/helper';
import { currentUrlPath } from '../utils/helper';

function Chatting() {

    const [msgData,setMsgData] = useState([]);
 
    const uname = currentUrlPath() == "me" ?  "Hassaan" : "Professor"; 

    
    React.useEffect(()=>{
        
        
        getMsgs(uname);

    },[])

  return (
    <div className='bg-slate-200 p-3 h-[90%] w-full  overflow-y-auto'>



<MyChatBubble name={'Hassaan'} message={"Hello , Prof wassup!!! , Day going well"} time={"12:45"} profileImage={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}/>
<UserChatBubble name={'Professor'} message={"Hi, Hassaan how was your day ??"} time={"12:46"} profileImage={defaultImage}/>

    </div>
  )
}

export default Chatting
