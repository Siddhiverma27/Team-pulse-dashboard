export default function Avatar({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-9 w-9 rounded-full ring-1 ring-slate-200 object-cover bg-white" />
  );
}
