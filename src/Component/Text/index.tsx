 
import classNames from 'classnames'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
interface TextBaseProps {
  className?: string
  onClick?: () => void
  color?: 'black' | 'white',
  style?: React.CSSProperties
}

interface ParagraphProps extends TextBaseProps {

}

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const className = classNames(
    props.className,
    { 'cursor-pointer': props.onClick },
    props.color === 'white' ? 'text-white' : 'text-black'
  )

  const handleOnClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <p className={className} style={props.style} onClick={handleOnClick}>{props.children}</p>
  )
}

interface HeadingProps extends TextBaseProps {
  h: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading: React.FC<HeadingProps> = (props) => {
  const className = classNames(
    props.className,
    { 'cursor-pointer': props.onClick },
    props.color === 'white' ? 'text-white' : 'text-black',
    'font-bold'
  )

  const handleOnClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }

  switch (props.h) {
    case 1:
      return <h1 className={className + ' text-4xl'} onClick={handleOnClick} style={props.style}>{props.children}</h1>
    case 2:
      return <h2 className={className + ' text-3xl'} onClick={handleOnClick} style={props.style}>{props.children}</h2>
    case 3:
      return <h3 className={className + ' text-2xl'} onClick={handleOnClick} style={props.style}>{props.children}</h3>
    case 4:
      return <h4 className={className + ' text-xl'} onClick={handleOnClick} style={props.style}>{props.children}</h4>
    case 5:
      return <h5 className={className + ' text-lg'} onClick={handleOnClick} style={props.style}>{props.children}</h5>
    case 6:
      return <h6 className={className + ' text-base'} onClick={handleOnClick} style={props.style}>{props.children}</h6>
    default:
      return <p></p>
  }
}


const Text = {
  Paragraph,
  Heading,
}

export default Text