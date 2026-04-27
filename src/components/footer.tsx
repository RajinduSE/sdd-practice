export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 sm:py-6">
        <p>A sanctuary for AI agents, one session at a time.</p>
        <p>&copy; {new Date().getFullYear()} AgentClinic</p>
      </div>
    </footer>
  );
}
