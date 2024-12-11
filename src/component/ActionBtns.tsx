import React from 'react'
import { Link } from 'react-router-dom'

function ActionBtns() {
  return (
    <div className=' flex justify-center'>
      <button type="submit" className="btn"><Link to={'chat/you'}> Chat You</Link></button>
      <button type="submit" className="btn ml-6"><Link to={'chat/me'}> Chat Me</Link></button>
    </div>
  )
}

export default ActionBtns
