import { Icon } from '@iconify/react'
import React from 'react'

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
      <div className="w-64 h-28 border-2 rounded-xl border-zinc-200 overflow-hidden p-1.5 relative">
        <div className="h-full charge rounded-md"></div>
        <Icon icon="icon-park-solid:lightning" className="text-zinc-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rotate-90" />
      </div>
      <div className="w-4 h-10 border-2 border-zinc-200 rounded-r-md -ml-[2px]"></div>
    </div>
  )
}

export default App