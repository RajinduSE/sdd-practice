import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
        >
          AgentClinic
        </Link>

        <nav>
          <ul className="flex gap-4 text-sm font-medium text-slate-600 sm:gap-6">
            <li>
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
