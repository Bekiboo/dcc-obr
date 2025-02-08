import { cn } from '../lib/utils'

const PlayersPanel = ({ className }: { className?: string }) => {
  return (
    <div className={cn('p-4', className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Players</h2>
        <button className="underline text-accent">Add Player</button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary"></div>
            <span>Player 1</span>
          </div>
          <button className="underline text-accent">Edit</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary"></div>
            <span>Player 2</span>
          </div>
          <button className="underline text-accent">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default PlayersPanel
