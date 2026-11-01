import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
        404 — Page Not Found
      </span>
      <h1 className="mt-2 text-3xl font-extrabold text-white">
        This page could not be found
      </h1>
      <p className="mt-2 text-sm text-slate-400 max-w-md">
        Return to WS Smart Solution to browse tech products, book OS & battery services, or view our project portfolio.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-xs font-extrabold text-slate-950"
      >
        Back to Homepage
      </Link>
    </div>
  );
}

