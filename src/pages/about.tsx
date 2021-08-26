import React from 'react'

import TeamMember from '../api/TeamMember'
import { useFetch } from '../hooks/useFetch'

const About: React.FC = () => {
  const { data } = useFetch<TeamMember[]>('/api/team')

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center my-5">
        <h2 className="text-lg font-semibold mb-3">RMCYBERCOM</h2>
        <div className="inline-flex flex-wrap justify-center">
          {data?.map((dev) => (
            <div
              key={dev.user.id}
              className="h-full flex items-center space-x-3 p-3 transform hover:scale-110 transition ease-out duration-300 cursor-default hover:bg-white hover:bg-opacity-5"
            >
              <img
                className="h-16"
                src={dev.user.display_avatar_url}
                alt={dev.user.username}
              />
              <span
                className="font-semibold"
                style={{
                  color: dev.department.hex_color
                }}
              >
                {dev.user.username}
              </span>
            </div>
          ))}
        </div>
      </div>
      <footer className="h-24 flex items-center text-gray-300 text-opacity-75 tracking-tight">
        <nav className="flex flex-1 justify-center">
          <div className="flex items-center">
            <a className="px-1 hover:text-white" href="/github">
              Github
            </a>
            <a className="px-1 hover:text-white" href="/discord">
              Discord
            </a>
            <span className="px-1 cursor-default">
              License: <strong>BSD 4 Clause</strong>
            </span>
          </div>
        </nav>
      </footer>
    </div>
  )
}

export default About
