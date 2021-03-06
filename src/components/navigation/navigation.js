import React from 'react'

const Navigation = ({ onRouteChange }) => {
    return (
        <div className="navigation">
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signIn')} style={{zIndex: 2}} className="f3 link dim black underline pa3 pointer">Sign out</p>
            </nav>
        </div>
    )
}

export default Navigation
