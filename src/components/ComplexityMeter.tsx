import { UpcomingComplexity } from '@/types'

const LEVEL: Record<UpcomingComplexity, number> = {
  'Low': 1,
  'Low-Medium': 2,
  'Medium': 3,
  'Medium-High': 4,
  'High': 5,
}

interface Props {
  complexity: UpcomingComplexity
}

/** Segmented power-meter readout for build complexity. */
export default function ComplexityMeter({ complexity }: Props) {
  const level = LEVEL[complexity] ?? 0

  return (
    <span className="inline-flex items-center gap-2" title={`Complexity: ${complexity}`}>
      <span className="inline-flex items-end gap-[3px]">
        {[1, 2, 3, 4, 5].map((seg) => (
          <span
            key={seg}
            className={`meter-seg ${seg <= level ? `on-${level}` : ''}`}
            style={{ height: `${5 + seg * 1.6}px` }}
          />
        ))}
      </span>
      <span className="terminal text-[9px] uppercase tracking-wider text-[var(--text-secondary)]">
        {complexity}
      </span>
    </span>
  )
}
