import React from 'react'

export default function SingleImageDisplay(props) {
  return (
    <>
      <div>
        <img src={props.src} alt="" />
      </div>
    </>
  )
}
