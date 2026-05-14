import Image from "next/image";

type LogoProps = {
  variant?: "full" | "monogram";
  size?: number;
  className?: string;
};

const LOGO_SRC = "/brand/logo.png";
const FIRM_NAME = "Shekhar & Associates Consulting Firm";

export function Logo({ variant = "full", size = 40, className }: LogoProps) {
  if (variant === "monogram") {
    const inner = Math.round(size * 2.5);
    return (
      <div
        className={className}
        style={{
          width: size,
          height: size,
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
        role="img"
        aria-label={`${FIRM_NAME} monogram`}
      >
        <Image
          src={LOGO_SRC}
          alt=""
          width={inner}
          height={inner}
          priority
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: inner,
            height: inner,
            maxWidth: "none",
          }}
        />
      </div>
    );
  }

  return (
    <Image
      src={LOGO_SRC}
      alt={FIRM_NAME}
      width={size}
      height={size}
      priority
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
