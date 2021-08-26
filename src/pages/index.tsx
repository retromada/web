import React from 'react'

import TeamMember from '../api/TeamMember'
import { useFetch } from '../hooks/useFetch'

const Home: React.FC = () => {
  const { data } = useFetch<TeamMember[]>('/api/team')

  return (
    <div className="h-wide-2x md:h-wide flex">
      <div className="w-full grid grid-flow-col">
        <div className="row-span-1 col-span-2 md:px-2 md:py-5 flex items-center justify-center md:block">
          <div className="flex flex-col tracking-tighter leading-loose">
            <span className="text-5xl font-extrabold md:border-b-2 w-max">
              Retromada
            </span>
            <p className="hidden md:block">Retronic Madachine</p>
          </div>
        </div>
        <div className="md:w-52 md:row-start-2 row-span-1 md:row-span-2 col-span-1">
          <div className="w-screen md:w-auto h-full md:h-auto md:absolute md:mt-20 md:ml-4 text-2xl md:text-sm">
            <div className="h-full md:h-auto flex flex-col items-center justify-center md:-space-y-1.5">
              {data?.map((dev) => (
                <div key={dev.user.id} className="space-x-1">
                  <strong
                    style={{
                      color: dev.department.hex_color
                    }}
                  >
                    {dev.department.acronym}
                  </strong>
                  <span>{dev.user.username}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row-start-4 md:row-start-3 md:col-start-2 col-span-2 md:col-span-1">
          <span className="flex justify-center md:justify-start text-2xl md:text-sm">
            retromada-sys
          </span>
        </div>
        <div className="row-start-5 md:row-start-4 col-span-2">
          <div className="h-full flex flex-col items-center justify-center text-2xl text-center md:text-xs">
            <span className="mx-1 md:mx-auto">
              all intellectual property rights and copyrights are reserved by{' '}
              <strong>tentaclesoft</strong>
            </span>
            <span>ネオヒューマンセーフティスパム機</span>
          </div>
        </div>
        <div className="row-start-3 row-end-3 md:row-start-2 md:row-end-2 col-start-1 md:col-start-2 col-span-2 md:col-span-1 flex">
          <img className="object-contain" src="/png/wide.png" alt="wide" />
        </div>
      </div>
    </div>
  )
}

export default Home
