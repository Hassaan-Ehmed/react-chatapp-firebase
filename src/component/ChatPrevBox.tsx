import React from 'react'

export default function ChatPrevBox() {
  return (

    // <div className="chat-prev-box bg-slate-700 ">

        
    <button className="relative btn h-[4.75rem] w-[18rem] flex justify-around items-center">
        <div className="avatar  absolute left-2">
        <div className="w-14 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>

         <span className='m-4 '>
         Jasmine
        <br />
   </span>
        </div>
  <div className="badge absolute top-2 right-1">Now</div>
</button>
    // </div>

  )
}

