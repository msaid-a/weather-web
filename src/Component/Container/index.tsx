import React, { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import {Loading} from '../index'
import './style.css'

interface props {
    loading?: Boolean,
    children: ReactNode,
    style?: CSSProperties,
    className?: string
}


const Container:React.FC<props> = (props) => {

const containerClass = classNames('container custom-header', props.className)

    return (
        <div>
            <div style={props.style} className={containerClass}>
                {props.loading ? <Loading/> : props.children}
            </div>
        </div>
    )
}

export default Container
