import { useState } from 'react';
import ChatPrevBox from './ChatPrevBox'
import Chatting from './Chatting'
import { toast } from 'react-toastify';
import { currentUrlPath} from '../utils/helper';
import { addMsg } from '../Firebase/helper';

function StructureBox() {

    const [inputMsg,setInputMsg] = useState("");

const whichChat = currentUrlPath().split("/")[2];
let uname = whichChat == "me" ? "Hassaan" : "Professor";

const handleInput = (e:any)=>{

    setInputMsg(e?.target?.value)
    console.log();

}


const handleSendMsg=(e:any)=>{

    if(e.keyCode== 13){
        
        if(inputMsg){

            addMsg(uname,inputMsg);
            setInputMsg("");
        }else{
            toast.warn("Empty msg can't send",{
                autoClose:1000,
                position:'top-center'
            })
        }
    }
}

  return (
    <div className="flex w-full flex-col lg:flex-row">
    <div className="card w-[20%] bg-base-300 rounded-box grid h-32 flex-grow place-items-center">

    <div className="chat-list relative">

    <ChatPrevBox name={whichChat == "me" ? "Hassaan" : "Professor"}/>
    </div>

    </div>

    <div className="divider lg:divider-horizontal"></div>


    <div className=" artboard artboard-horizontal phone-2 w-[80%] bg-slate-200 flex flex-col justify-between items-center">
        <Chatting/>
    <div className="join">
  <input className="input input-bordered join-item rounded-full" placeholder="Type message" value={inputMsg} onKeyDown={handleSendMsg} onChange={handleInput}/>
  <button className="btn join-item rounded-full" >send</button>
</div>
    </div>

  </div>
  )
}

export default StructureBox
