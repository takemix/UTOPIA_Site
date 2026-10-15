const leaves = [
  { left: 5, top: 8, size: 115, angle: -24, crop: "0 0 400 435" },
  { left: 73, top: 3, size: 95, angle: 42, crop: "760 105 300 300" },
  { left: 91, top: 32, size: 135, angle: -52, crop: "740 430 320 365" },
  { left: 21, top: 36, size: 85, angle: 68, crop: "0 435 270 265" },
  { left: 57, top: 53, size: 105, angle: -12, crop: "0 790 350 390" },
  { left: 2, top: 76, size: 125, angle: 28, crop: "0 1180 285 290" },
  { left: 78, top: 84, size: 90, angle: -78, crop: "790 1180 270 290" },
];

export default function AutumnLeaves({ variant = 0 }: { variant?: number }) {
  return (
    <div className="autumn-leaves" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <svg
          key={i}
          className="autumn-leaf"
          viewBox={leaf.crop}
          style={{
            left: `${(leaf.left + variant * 13) % 96}%`,
            top: `${(leaf.top + variant * 19) % 92}%`,
            width: `clamp(55px, ${leaf.size / 12}vw, ${leaf.size}px)`,
            transform: `rotate(${leaf.angle + variant * 31}deg)`,
          }}
          focusable="false"
        >
          <image href="/images/autumn-maple-frame.png" width="1060" height="1484" />
        </svg>
      ))}
    </div>
  );
}
