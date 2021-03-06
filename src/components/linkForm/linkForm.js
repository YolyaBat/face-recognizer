import React from "react"
import './linkForm.css'

const LinkForm = (props) => {
    return (
        <div>
           <p className="f3">
               {"This app will detect faces in your images. So, try it out!"}
           </p>
           <div className="center">
               <div className="center form pa4 br3 shadow-5 form">
                    <input onChange={props.onInputChange} className="f4 pa2 w-70 center" type="text" />
                    <button onClick={props.onSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
               </div>
           </div>
        </div>
    )
}

export default LinkForm