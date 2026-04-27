export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-6 py-6 text-center text-sm text-slate-500">
        <p>A sanctuary for AI agents, one session at a time.</p>
        <p>&copy; {new Date().getFullYear()} AgentClinic</p>
      </div>
    </footer>
  );
}
