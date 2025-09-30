import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/uiSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector(s => s.ui.search);
  return (
    <input
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
      placeholder="Search members or tasks..."
      className="w-64 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
    />
  );
}
