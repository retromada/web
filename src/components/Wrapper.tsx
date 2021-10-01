import React from 'react'

import Header from './Header'

const Wrapper: React.FC = ({ children }) => (
  <div className="md:container mx-auto md:max-w-xl text-white font-sans">
    <Header />
    {children}
  </div>
)

export default Wrapper
