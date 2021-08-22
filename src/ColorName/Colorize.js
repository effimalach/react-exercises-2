import React from 'react'

export default function Colorize(props) {
    return (
        <div>
            <span className="color--red">{props.colorName}</span>
        </div>
    )
}
