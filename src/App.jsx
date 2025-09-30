import { Outlet, NavLink } from "react-router-dom";
import RoleSwitcher from "./components/RoleSwitcher";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
          <div className="font-bold text-xl text-brand-700">Team Pulse</div>
          <nav className="flex items-center gap-3 text-sm">
            <NavLink to="/lead" className={({isActive}) => isActive ? "text-brand-700 font-semibold" : "text-slate-600 hover:text-slate-900"}>Team Lead</NavLink>
            <NavLink to="/member" className={({isActive}) => isActive ? "text-brand-700 font-semibold" : "text-slate-600 hover:text-slate-900"}>Team Member</NavLink>
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <SearchBar />
            <RoleSwitcher />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
      <footer className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500">
        Built for the Frontend Assignment: Dashboard with Role-Based Views.
      </footer>
    </div>
  );
}
