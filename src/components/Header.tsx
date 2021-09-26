import React from 'react'
import { IconType } from 'react-icons'
import { MdHome, MdInfo } from 'react-icons/md'

import { Link, IconBox } from '@styles/components/Header'

interface MenuIcon {
  title: string
  redirect: string
  icon: IconType
}

const Header: React.FC = () => {
  const iconSize = 24
  const menuIcons: MenuIcon[] = [
    { title: 'Home', redirect: '/', icon: MdHome },
    { title: 'About', redirect: '/about', icon: MdInfo }
  ]

  return (
    <header className="h-16 flex">
      {menuIcons.map((icon, index) => (
        <Link key={index} href={icon.redirect}>
          <IconBox>
            <icon.icon size={iconSize} title={icon.title} />
          </IconBox>
        </Link>
      ))}
    </header>
  )
}

export default Header
