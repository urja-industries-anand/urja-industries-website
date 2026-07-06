const TONES = {
  stock: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
  efficiency: 'bg-primary-fixed text-on-primary-fixed-variant',
  duty: 'bg-secondary-fixed text-on-secondary-fixed-variant',
}

function TechnicalChip({ label, tone = 'efficiency' }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 font-technical text-xs uppercase tracking-[0.05em] ${TONES[tone]}`}
    >
      {label}
    </span>
  )
}

export default TechnicalChip
