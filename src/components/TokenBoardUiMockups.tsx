import { useState, useEffect } from 'react'

export function PremiumTokenBoardUi() {
  const [preparing, setPreparing] = useState(['102', '105', '106', '108', '110', '112'])
  const [ready, setReady] = useState(['98', '99', '100', '101'])

  useEffect(() => {
    const interval = setInterval(() => {
      setPreparing((prev) => {
        if (prev.length === 0) return prev
        const tokenToMove = prev[0]
        const newPreparing = prev.slice(1)

        if (Math.random() > 0.3) {
          const maxToken = Math.max(
            ...newPreparing.map(Number),
            ...ready.map(Number),
            parseInt(tokenToMove),
          )
          newPreparing.push((maxToken + 1).toString())
        }

        setReady((currentReady) => {
          const newReady = [...currentReady, tokenToMove]
          if (newReady.length > 8) newReady.shift()
          return newReady
        })

        return newPreparing
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [ready])

  return (
    <div className="w-full max-w-[800px] mx-auto aspect-[16/9] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col font-sans select-none">
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <div className="flex-1 py-4 text-center border-r border-gray-100">
          <h2 className="text-xl md:text-3xl font-extrabold text-navy tracking-widest uppercase">
            Preparing
          </h2>
        </div>
        <div className="flex-1 py-4 text-center">
          <h2 className="text-xl md:text-3xl font-extrabold text-navy tracking-widest uppercase">
            Ready to Pickup
          </h2>
        </div>
      </div>
      <div className="flex-1 flex bg-white relative">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200"></div>
        <div className="flex-1 p-6 md:p-10">
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center content-start h-full">
            {preparing.map((token) => (
              <div
                key={`prep-${token}`}
                className="bg-[#0ea5e9] text-white text-3xl md:text-5xl font-bold rounded-lg shadow-sm w-20 h-16 md:w-32 md:h-24 flex items-center justify-center animate-in fade-in zoom-in duration-500"
              >
                {token}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-6 md:p-10">
          <div className="flex flex-wrap gap-3 md:gap-6 justify-center content-start h-full">
            {ready.map((token) => (
              <div
                key={`ready-${token}`}
                className="bg-[#22c55e] text-white text-3xl md:text-5xl font-bold rounded-lg shadow-sm w-20 h-16 md:w-32 md:h-24 flex items-center justify-center animate-in fade-in zoom-in duration-500 shadow-green-500/20"
              >
                {token}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
