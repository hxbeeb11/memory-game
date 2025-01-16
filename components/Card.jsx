import React from 'react'

export default function Card({ id, content, flipped, solved, onClick }) {
  return (
    <div
      className={`card w-20 h-20 cursor-pointer ${flipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front bg-blue-500 text-white text-3xl rounded-lg flex items-center justify-center">
          ?
        </div>
        <div className={`card-back ${solved ? 'bg-yellow-500' : 'bg-green-500'} text-white text-3xl rounded-lg flex items-center justify-center`}>
          {content}
        </div>
      </div>
    </div>
  )
}

