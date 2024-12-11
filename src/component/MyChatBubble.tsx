import React from 'react'

function MyChatBubble({name,message,time,profileImage}:any) {
  return (
    <div className="chat chat-end">
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        {profileImage ? <img alt="Tailwind CSS chat bubble component"
          src={profileImage} /> : <span className="text-3xl">{name.split("")[0].toUpperCase()}</span>
 }
      </div>
    </div>
    <div className="chat-header">
      {name}
      <time className="text-xs opacity-50">{time}</time>
    </div>
    <div className="chat-bubble">{message}</div>
    {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
  </div> 
  )
}

export default MyChatBubble
