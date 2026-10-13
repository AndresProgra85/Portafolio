import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 antialiased selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-indigo-950/20 text-center space-y-8">
        {/* Status Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Entorno Configurado con Éxito
          </span>
        </div>

        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Andrés Parra
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            Portafolio profesional impulsado por Vite, React 19, TypeScript y Tailwind CSS v4.
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 pt-2">
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/80 text-indigo-300 border border-slate-700/60">
            ⚡ Vite
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/80 text-cyan-300 border border-slate-700/60">
            ⚛️ React 19
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/80 text-blue-300 border border-slate-700/60">
            📘 TypeScript
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800/80 text-teal-300 border border-slate-700/60">
            🎨 Tailwind CSS v4
          </span>
        </div>

        {/* Interactive Verification Button */}
        <div className="pt-4">
          <button
            type="button"
            id="counter-button"
            onClick={() => setCount((prev) => prev + 1)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-95 transition-all duration-200 text-white font-medium shadow-lg shadow-indigo-600/25 cursor-pointer"
          >
            <span>Verificar React State</span>
            <span className="px-2 py-0.5 rounded-md bg-white/20 text-xs font-bold">
              {count}
            </span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
