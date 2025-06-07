interface HryvniaIconProps {
  className?: string
  size?: number
}

export function HryvniaIcon({ className, size = 20 }: HryvniaIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 12h12" />
      <path d="M6 16h12" />
      <path d="M8 4c2.5 0 4.5 1.5 4.5 4s-2 4-4.5 4" />
      <path d="M16 4c-2.5 0-4.5 1.5-4.5 4s2 4 4.5 4" />
      <path d="M8 12c2.5 0 4.5 1.5 4.5 4s-2 4-4.5 4" />
      <path d="M16 12c-2.5 0-4.5 1.5-4.5 4s2 4 4.5 4" />
    </svg>
  )
}
