import { useDispatch, useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import StatusFilter from "../components/StatusFilter";
import { updateStatus } from "../redux/slices/membersSlice";
import { addTask } from "../redux/slices/tasksSlice";
import TaskRow from "../components/TaskRow";
import { useMemo, useState } from "react";

export default function LeadDashboard() {
  const dispatch = useDispatch();
  const members = useSelector(s => s.members);
  const tasks = useSelector(s => s.tasks);
  const { search, filterStatus } = useSelector(s => s.ui);

  const filteredMembers = useMemo(() => {
    return members.filter(m => {
      const matchesSearch = (m.name + " " + m.roleTitle).toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === "All" ? true : m.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [members, search, filterStatus]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(t => {
      const targetMember = members.find(m => m.id === t.assigneeId);
      const inSearch = (t.title + " " + (targetMember?.name||"")).toLowerCase().includes(search.toLowerCase());
      return inSearch;
    });
  }, [tasks, search, members]);

  const [newTask, setNewTask] = useState({ title: "", assigneeId: members[0]?.id, priority: "Medium", due: "" });

  return (
    <div className="space-y-8">
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-900">Team Overview</h1>
        <div className="flex items-center gap-2">
          <StatusFilter />
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map(m => (
          <MemberCard
            key={m.id}
            member={m}
            tasksCount={tasks.filter(t => t.assigneeId === m.id).length}
            onStatusChange={(status)=>dispatch(updateStatus({id: m.id, status}))}
          />
        ))}
      </section>

      <section className="rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-semibold">Tasks</h2>
          <form className="flex items-center gap-2" onSubmit={(e)=>{e.preventDefault(); if(newTask.title){dispatch(addTask(newTask)); setNewTask({...newTask, title:""});}}}>
            <input
              className="rounded-md border border-slate-300 px-2 py-1 text-sm"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e)=>setNewTask({...newTask, title: e.target.value})}
            />
            <select
              className="rounded-md border border-slate-300 px-2 py-1 text-sm"
              value={newTask.assigneeId}
              onChange={(e)=>setNewTask({...newTask, assigneeId: Number(e.target.value)})}
            >
              {members.map(m => <option value={m.id} key={m.id}>{m.name}</option>)}
            </select>
            <select
              className="rounded-md border border-slate-300 px-2 py-1 text-sm"
              value={newTask.priority}
              onChange={(e)=>setNewTask({...newTask, priority: e.target.value})}
            >
              {["Low","Medium","High"].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <input
              type="date"
              className="rounded-md border border-slate-300 px-2 py-1 text-sm"
              value={newTask.due}
              onChange={(e)=>setNewTask({...newTask, due: e.target.value})}
            />
            <button className="rounded-md bg-brand-600 text-white px-3 py-1 text-sm">Add</button>
          </form>
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
              {filteredTasks.map(t => <TaskRow key={t.id} task={t} />)}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
