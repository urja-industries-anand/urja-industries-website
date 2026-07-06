function SpecTable({ rows }) {
  return (
    <div className="rounded-lg border border-outline-variant overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="text-left font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant px-4 sm:px-6 py-3 border-b border-outline-variant w-2/5">
              Parameter
            </th>
            <th className="text-left font-technical text-xs uppercase tracking-[0.05em] text-on-surface-variant px-4 sm:px-6 py-3 border-b border-outline-variant">
              Specification Details
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.parameter}
              className={
                index === rows.length - 1
                  ? 'bg-surface-container-lowest'
                  : 'bg-surface-container-lowest border-b border-outline-variant'
              }
            >
              <td className="font-body text-sm font-600 text-on-surface px-4 sm:px-6 py-3.5">
                {row.parameter}
              </td>
              <td
                className={
                  row.highlight
                    ? 'font-body text-sm text-primary px-4 sm:px-6 py-3.5'
                    : 'font-body text-sm text-on-surface-variant px-4 sm:px-6 py-3.5'
                }
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpecTable
