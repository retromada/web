import React from 'react'

import { useFetch } from '../hooks/useFetch'
import { TeamDeveloperResponse } from '../responses'

const Home: React.FC = () => {
  const { data } = useFetch<TeamDeveloperResponse[]>('/api/team')

  return (
    <div className="h-wide-2x md:h-wide flex">
      <div className="w-full grid grid-flow-col">
        <div className="row-span-1 md:row-span-2 col-span-2 bg-purple-500"></div>
        <div className="md:row-start-3 row-span-2 col-span-2 md:col-span-1 bg-gray-500">
          <div className="md:absolute md:mt-20 md:ml-4 flex flex-col items-center leading-6 md:leading-4 text-2xl md:text-sm">
            {data?.map((dev) => (
              <div key={dev.id} className="space-x-1">
                <strong
                  style={{
                    color:
                      '#' + dev.department.color.toString(16).padStart(6, 'f')
                  }}
                >
                  {dev.department.acronym}
                </strong>
                <span>{dev.username}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="row-start-5 md:row-start-4 md:col-start-2 col-span-2 md:col-span-1 bg-green-500">
          <span className="h-full md:ml-5 flex justify-center md:justify-start text-2xl md:text-sm">
            retromada-sys
          </span>
        </div>
        <div className="row-start-6 md:row-start-5 col-span-2 bg-blue-500">
          <div className="h-full flex flex-col items-center justify-center text-2xl text-center md:text-xs">
            <span className="mx-1 md:mx-auto">
              all intellectual property rights and copyrights are reserved by{' '}
              <strong>tentaclesoft</strong>
            </span>
            <span>ネオヒューマンセーフティスパム機</span>
          </div>
        </div>
        <div className="row-start-4 row-end-4 md:row-start-3 md:row-end-3 col-start-1 md:col-start-2 col-span-2 md:col-span-1 bg-pink-500 bg-wide bg-no-repeat bg-center md:bg-right-bottom">
          <div className="w-auto md:w-44 h-60 md:h-96"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
