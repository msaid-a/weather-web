import React, { CSSProperties, ReactNode } from 'react'
import './style.css'
import classnames from 'classnames'

interface props {

    headImage? : string,
    children?: ReactNode,
    className?: string,
    style?:CSSProperties,
    onClick?: () => void

}



const index : React.FC<props> = (props) => {
    
    const className= classnames('card my-1.5', props.className)

    return (
        <div className={className} style={props.style} onClick={props.onClick}>
            <img src={props.headImage} alt="Avatar" 
            style={{width: 280, height: 280, objectFit: 'cover', borderRadius: 20}} />
            <div className="container-card">
                {props.children}
            </div>
        </div>    
    )
}

export default index
