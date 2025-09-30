import { useDispatch, useSelector } from "react-redux";
import { setTaskStatus, reassignTask, removeTask } from "../redux/slices/tasksSlice";

export default function TaskRow({ task }) {
  const dispatch = useDispatch();
  const members = useSelector(s => s.members);
  const assignee = members.find(m => m.id === task.assigneeId);

  return (
    <tr className="border-b border-slate-100">
      <td className="px-3 py-2 text-slate-900">{task.title}</td>
      <td className="px-3 py-2">{assignee ? assignee.name : "-"}</td>
      <td className="px-3 py-2">{task.priority}</td>
      <td className="px-3 py-2">{task.due}</td>
      <td className="px-3 py-2">
        <select
          className="rounded-md border border-slate-300 px-2 py-1 text-xs"
          value={task.status}
          onChange={(e)=>dispatch(setTaskStatus({id: task.id, status: e.target.value}))}
        >
          {["Todo","In Progress","Done"].map(s => <option value={s} key={s}>{s}</option>)}
        </select>
      </td>
      <td className="px-3 py-2">
        <select
          className="rounded-md border border-slate-300 px-2 py-1 text-xs"
          value={task.assigneeId}
          onChange={(e)=>dispatch(reassignTask({id: task.id, assigneeId: Number(e.target.value)}))}
        >
          {members.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
      </td>
      <td className="px-3 py-2">
        <button onClick={()=>dispatch(removeTask(task.id))} className="text-xs text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  );
}
