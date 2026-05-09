import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-orange/15 to-brand-yellow/25 shadow-glow ring-1 ring-brand-orange/15">
        <Image
          src="/Blue and White Modern Kids Logo.png"
          alt="Hai Buddy robot mascot"
          fill
          priority
          className="object-contain object-center p-1"
        />
      </div>
      <div>
        <div className="font-[var(--font-heading)] text-lg font-bold text-brand-ink">Hai Buddy</div>
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-brand-slate">AI Education Co.</div>
      </div>
    </Link>
  );
}
