import React from 'react'

import { MdHome, MdInfo } from 'react-icons/md'

const Header: React.FC = () => {
  const iconSize = 24

  return (
    <header className="h-16 flex">
      <a className="w-full hover:bg-white hover:bg-opacity-20 pointer" href="/">
        <div className="h-full flex items-center justify-center">
          <MdHome size={iconSize} title="Home" />
        </div>
      </a>
      <a
        className="w-full hover:bg-white hover:bg-opacity-20 pointer"
        href="/about"
      >
        <div className="h-full flex items-center justify-center">
          <MdInfo size={iconSize} title="About" />
        </div>
      </a>
    </header>
  )
}

export default Header
