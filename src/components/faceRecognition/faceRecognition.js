import React from "react"
import './faceRecognition.css'

const FaceRecognition = ({ image, box }) => {
    return (
        <div className="center mt3">
          <div className="absolute mt2" style={{zIndex: 10}}>
            <img id="inputImage" style={{width: '500px', height: "auto"}} src={image} alt="" />
            <div className='boundingBox' style={{top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol}}></div>
          </div>
        </div>
    )
}

export default FaceRecognition