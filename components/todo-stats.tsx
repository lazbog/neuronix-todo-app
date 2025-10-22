interface TodoStatsProps {
  total: number;
  completed: number;
  active: number;
}

export default function TodoStats({ total, completed, active }: TodoStatsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
      <span>
        <span className="font-medium text-gray-900">{active}</span> {active === 1 ? 'item' : 'items'} left
      </span>
      {completed > 0 && (
        <span>
          <span className="font-medium text-gray-900">{completed}</span> completed
        </span>
      )}
      {total > 0 && (
        <span>
          <span className="font-medium text-gray-900">{total}</span> total
        </span>
      )}
    </div>
  );
}