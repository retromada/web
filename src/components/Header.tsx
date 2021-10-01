import React from 'react'

import { Link, IconBox } from '@styles/components/Header'
import { Icons, IconSizes } from '@utils/Icons'

const Header: React.FC = () => {
  return (
    <header className="h-16 flex">
      {Icons.Menu.map(({ title, redirect, Icon }, index) => (
        <Link key={index} href={redirect}>
          <IconBox>
            <Icon size={IconSizes.medium} title={title} />
          </IconBox>
        </Link>
      ))}
    </header>
  )
}

export default Header
