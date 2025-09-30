import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../redux/slices/uiSlice";

export default function RoleSwitcher() {
  const dispatch = useDispatch();
  const role = useSelector(s => s.ui.role);
  return (
    <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
      {["lead","member"].map(r => (
        <button
          key={r}
          onClick={() => dispatch(setRole(r))}
          className={(r===role ? "bg-white shadow ":"bg-transparent ") + "px-3 py-1 rounded-lg text-sm capitalize"}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
