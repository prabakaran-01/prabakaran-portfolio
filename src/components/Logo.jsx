export function BrandIcon({ className = 'w-8 h-8', ...props }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-hidden="true"
      {...props}
    >
      {/* Dark container tile with border */}
      <rect
        width="44"
        height="44"
        rx="11"
        fill="#17171C"
        stroke="#29292F"
        strokeWidth="1.5"
        className="transition-colors duration-300 group-hover:stroke-[#B7FF3C]/50"
      />
      {/* Vertical Pillar of 'P' in Neon Lime */}
      <path
        d="M12 11C12 9.89543 12.8954 9 14 9H17C18.1046 9 19 9.89543 19 11V33C19 34.1046 18.1046 35 17 35H14C12.8954 35 12 34.1046 12 33V11Z"
        fill="#B7FF3C"
      />
      {/* Upper Loop of 'P' in Neon Lime */}
      <path
        d="M17 14.5H25C28.5899 14.5 31.5 17.4101 31.5 21C31.5 24.5899 28.5899 27.5 25 27.5H17"
        stroke="#B7FF3C"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner M-accent chevron creating PM monogram interplay */}
      <path
        d="M22 18L25.5 21L22 24"
        stroke="#17171C"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({
  showWordmark = true,
  iconSize = 'w-8 h-8 sm:w-9 sm:h-9',
  className = '',
}) {
  return (
    <div className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Custom Geometric Icon */}
      <BrandIcon className={iconSize} />

      {/* Wordmark: PRABAKARAN. */}
      {showWordmark && (
        <span className="text-base sm:text-lg font-extrabold tracking-[0.04em] text-[#F5F5F5] transition-colors duration-300 flex items-baseline">
          <span>PRABAKARAN</span>
          <span className="text-[#B7FF3C] text-lg sm:text-xl font-black ml-0.5 inline-block group-hover:scale-125 transition-transform duration-300">
            .
          </span>
        </span>
      )}
    </div>
  )
}
