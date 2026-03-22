import Image from "next/image";
import { cn } from "@/lib/utils";

type ClinicLogoProps = {
  /** Extra classes on the image (parent should be relative with fixed size) */
  className?: string;
  alt?: string;
  /** Override asset (e.g. footer variant with transparent outside) */
  src?: string;
  /** LCP: use in header */
  priority?: boolean;
  /** Hint for responsive `sizes` when not default header/mobile sizes */
  sizes?: string;
};

export function ClinicLogo({
  className,
  alt = "ALL DENT — стоматология",
  src = "/logo-all-dent.png",
  priority,
  sizes = "(max-width: 640px) 40px, 44px",
}: ClinicLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-contain bg-transparent", className)}
    />
  );
}
