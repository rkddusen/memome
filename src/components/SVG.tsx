import React from 'react'

interface SVGComponentProps {
  svgStyle: string
  children: React.ReactNode
}
const SVG:React.FC<SVGComponentProps> = ({ svgStyle, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={svgStyle}
      strokeLinecap="round"
      strokeLinejoin="round">
        {children}
    </svg>
  )
}

export default SVG
