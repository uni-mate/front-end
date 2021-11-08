import React from "react"

import "./RecommendRoomPreviewSK.css"

const RecommendRoomPreviewSK = () => {
  return (
    <div className="sk-recroom-preview">
      <div className="sk-recroom-preview__image">
        <div className="sk-recroom-preview__desc">
          <div className="recroom-preview__count"></div>
          <div className="recroom-preview__meet-status"></div>
        </div>
      </div>
      <div className="sk-recroom-preview__line"></div>
      <div className="sk-recroom-preview__body">
        <div className="sk-recroom-preview__body--desc"></div>
      </div>
    </div>
  )
}

export default RecommendRoomPreviewSK
