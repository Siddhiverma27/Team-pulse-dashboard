import { useDispatch, useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import { updateStatus } from "../redux/slices/membersSlice";
import TaskRow from "../components/TaskRow";

export default function MemberDashboard() {
  const dispatch = useDispatch();
  const me = useSelector(s => s.members[0]); // Simulated logged-in member
  const tasks = useSelector(s => s.tasks.filter(t => t.assigneeId === me.id));

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-semibold text-slate-900">My Profile</h1>
        <div className="mt-4 max-w-md">
          <MemberCard member={me} onStatusChange={(status)=>dispatch(updateStatus({id: me.id, status}))} tasksCount={tasks.length} />
        </div>
      </section>

      <section className="rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="px-4 py-3 border-b border-slate-200">
          <h2 className="font-semibold">My Tasks</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left">
              <tr>
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Assignee</th>
                <th className="px-3 py-2">Priority</th>
                <th className="px-3 py-2">Due</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Reassign</th>
                <th className="px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(t => <TaskRow key={t.id} task={t} />)}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
