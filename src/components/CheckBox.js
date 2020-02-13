import React from 'react'

const CheckBox = props => {
    return(
        <span onClick={e => props.toggle(e)} className={props.value ? "checkmark checked" : "checkmark"}>
            {props.value &&
                    <i className="fas fa-check"></i>
            }
        </span>
    )
}

export default CheckBox;