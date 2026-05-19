import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">404 Error</p>
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="text-slate-400">
          The page you are looking for does not exist. Return to the portfolio homepage for the latest projects and developer case studies.
        </p>
        <Link href="/" className="inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Back to home
        </Link>
      </div>
    </main>
  )
}
