import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          AgentClinic
        </Link>

        <nav>
          <ul className="flex gap-6 text-sm font-medium text-slate-600">
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
