import React from 'react'

function Message({message}) {
  return (
   <>
    <p className="message">
          {/* On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀 */}
          {message}
        </p>
   </>
  )
}

export default Message