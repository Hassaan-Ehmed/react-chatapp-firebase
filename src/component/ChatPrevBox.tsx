import React from 'react'

export default function ChatPrevBox({name}) {
  return (

    // <div className="chat-prev-box bg-slate-700 ">

    <div className=" cursor-pointer p-[0.5em] absolute top-0 card bg-base-100 w-66 h-58 shadow-xl">
  <figure>
    <img className='w-24 h-20 rounded-lg'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    @{name}
      <div className="badge badge-secondary">+3</div>
    </h2>
    <p>If a dog chews...</p>
    <div className="card-actions justify-center">

      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    // </div>

  )
}

