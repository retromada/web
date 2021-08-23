import React from 'react'

const Button: React.FC = ({ children, ...rest }) => (
  <button className="w-full h-7 text-white border border-gray-300 hover:text-black hover:bg-white">
    {children}
  </button>
)

export default Button
