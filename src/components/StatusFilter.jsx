import { useDispatch, useSelector } from "react-redux";
import { setFilterStatus } from "../redux/slices/uiSlice";

const options = ["All", "Working", "Break", "Meeting", "Off"];

export default function StatusFilter() {
  const dispatch = useDispatch();
  const value = useSelector(s => s.ui.filterStatus);
  return (
    <select
      value={value}
      onChange={(e)=>dispatch(setFilterStatus(e.target.value))}
      className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
    >
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
