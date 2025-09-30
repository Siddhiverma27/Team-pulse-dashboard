import Avatar from "./Avatar";
import Badge from "./Badge";

const colors = {
  Working: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Break: "bg-amber-50 text-amber-700 ring-amber-200",
  Meeting: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Off: "bg-slate-50 text-slate-600 ring-slate-200",
};

export default function MemberCard({ member, onStatusChange, tasksCount = 0 }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Avatar src={member.avatar} alt={member.name} />
        <div className="flex-1">
          <div className="font-medium text-slate-900">{member.name}</div>
          <div className="text-xs text-slate-500">{member.roleTitle}</div>
        </div>
        <span className={"inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring " + (colors[member.status] || "bg-slate-50")}>
          <span className="h-2 w-2 rounded-full bg-current"></span>
          {member.status}
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <Badge>{tasksCount} tasks</Badge>
        {onStatusChange && (
          <select
            className="rounded-md border border-slate-300 px-2 py-1 text-xs"
            value={member.status}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            {["Working","Break","Meeting","Off"].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        )}
      </div>
    </div>
  );
}
