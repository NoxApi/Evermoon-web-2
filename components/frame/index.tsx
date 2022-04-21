import React from 'react'

export const GoldGradientFrame = () => {
  return (
    <div
      className="absolute inset-0  rounded-3xl p-[2px]"
      style={{
        background:
          'linear-gradient(180deg, #EEC377 0%, rgba(0,0,0,0) 90%, rgba(0,0,0,0) 100%)',
      }}
    >
      <div
        className=" rounded-3xl w-full h-full"
        style={{
          background:
            'linear-gradient(180deg, #0E1220 0%, rgba(18, 22, 36, 0.932292) 80.21%, rgba(18, 22, 36, 0) 100%)',
        }}
      ></div>
    </div>
  )
}
