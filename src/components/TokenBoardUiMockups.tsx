import { useState, useEffect } from 'react'

export function PremiumTokenBoardUi({ compact = false }: { compact?: boolean }) {
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
    <div
      className={`w-full mx-auto aspect-[16/9] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col font-sans select-none ${compact ? 'max-w-full' : 'max-w-[800px]'}`}
    >
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <div className={`flex-1 text-center border-r border-gray-100 ${compact ? 'py-2' : 'py-4'}`}>
          <h2
            className={`font-extrabold text-navy tracking-widest uppercase ${compact ? 'text-sm' : 'text-xl md:text-3xl'}`}
          >
            Preparing
          </h2>
        </div>
        <div className={`flex-1 text-center ${compact ? 'py-2' : 'py-4'}`}>
          <h2
            className={`font-extrabold text-navy tracking-widest uppercase ${compact ? 'text-sm' : 'text-xl md:text-3xl'}`}
          >
            Ready to Pickup
          </h2>
        </div>
      </div>
      <div className="flex-1 flex bg-white relative">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200"></div>
        <div className={`flex-1 flex justify-center ${compact ? 'p-3' : 'p-6 md:p-10'}`}>
          <div
            className={`flex flex-wrap justify-center content-start h-full ${compact ? 'gap-2' : 'gap-3 md:gap-6'}`}
          >
            {preparing.map((token) => (
              <div
                key={`prep-${token}`}
                className={`bg-[#0ea5e9] text-white font-bold rounded shadow-sm flex items-center justify-center animate-in fade-in zoom-in duration-500 ${compact ? 'w-12 h-8 text-lg' : 'w-20 h-16 md:w-32 md:h-24 text-3xl md:text-5xl rounded-lg'}`}
              >
                {token}
              </div>
            ))}
          </div>
        </div>
        <div className={`flex-1 flex justify-center ${compact ? 'p-3' : 'p-6 md:p-10'}`}>
          <div
            className={`flex flex-wrap justify-center content-start h-full ${compact ? 'gap-2' : 'gap-3 md:gap-6'}`}
          >
            {ready.map((token) => (
              <div
                key={`ready-${token}`}
                className={`bg-[#22c55e] text-white font-bold rounded shadow-sm flex items-center justify-center animate-in fade-in zoom-in duration-500 shadow-green-500/20 ${compact ? 'w-12 h-8 text-lg' : 'w-20 h-16 md:w-32 md:h-24 text-3xl md:text-5xl rounded-lg'}`}
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
