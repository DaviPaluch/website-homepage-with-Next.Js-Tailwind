import { Logo } from './Logo'

export default function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="flex w-full items-center gap-2 border rounded-lg border-zinc-300 px-3 py-2 shadow-sm"></div>
    </aside>
  )
}
