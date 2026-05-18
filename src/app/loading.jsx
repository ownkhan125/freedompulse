export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-5">
        <svg
          viewBox="0 0 80 24"
          className="h-6 w-24 text-accent"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 12 H14 L18 4 L26 20 L32 8 L36 12 H78"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset="1"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1"
              to="0"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          Loading
        </span>
      </div>
    </div>
  )
}
