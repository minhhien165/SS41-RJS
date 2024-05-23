import React from 'react'

export default function Ex05() {
  return (
    <div className="w-64 h-44 bg-sky-300 relative border-8 border-sky-200">
        <p className="absolute top-3 left-5">Relative Parent</p>
        <div className="absolute w-24 h-14 text-sm flex items-center justify-center text-white rounded-lg bg-sky-500 bottom-0 left-0 ">Absolute child</div>
  </div>
  )
}
