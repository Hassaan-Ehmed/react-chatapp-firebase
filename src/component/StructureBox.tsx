import React from 'react'
import ChatPrevBox from './ChatPrevBox'

function StructureBox() {
  return (
    <div className="flex w-full flex-col lg:flex-row">
    <div className="card w-[30%] bg-base-300 rounded-box grid h-32 flex-grow place-items-center">

    <div className="chat-list">

    <ChatPrevBox/>
    </div>

    </div>

    <div className="divider lg:divider-horizontal"></div>
    <div className="card w-[70%] bg-base-300 rounded-box grid h-32 flex-grow place-items-center">chat window</div>
  </div>
  )
}

export default StructureBox
