import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <Image src="/logo-loopla.png" alt="Loopla" width={100} height={100} className={className} />
  )
}

