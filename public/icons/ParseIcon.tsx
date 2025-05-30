export function ParseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="24"
      height="24"
    >
      {/* White circle background */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#fff"
        stroke="#fff"
        strokeWidth="9"
      />

      {/* Properly shaped Parse logo outline with transparent fill */}
      <path
        d="M45.5,61H16.5C9.7,61,6,65.9,6,71.5C6,76.3,9.6,80,14.8,80
          C21.3,80,24.9,75.1,25.3,69H37.5C36.3,87.4,24.3,95.6,8.8,95.6
          C-6.7,95.6,-17,84.6,-17,68.5C-17,50.7,-4.3,38,15.5,38H44.6
          C64.6,38,78,23.3,78,4.5C78,-15.1,64.3,-28,46.1,-28
          C26.9,-28,11.4,-13.1,11.4,12.1V28.8H-5.7V1.8
          C-5.7,-33.1,15.7,-56,45.8,-56C72.9,-56,94,-34.1,94,-7.4
          C94,46.6,61.4,61,45.5,61Z"
        fill="black"
        transform="scale(0.5) translate(70, 80)"
      />
    </svg>
  );
}
