import React from "react"
import Tilt from 'react-tilt'
import './logo.css'
import Brain from './brain.png'

const Logo = () => {
    return (
        <div className="logoImage ma4 mt0">
            <Tilt id="logo" className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 130, width: 130 }} >
                <div style={{zIndex: 10}} className="Tilt-inner pa3">
                    <img src={Brain} alt="logo" />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo