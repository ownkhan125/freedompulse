import Image from 'next/image'
import { cn } from '@/lib/cn'

/**
 * Remote image wrapper using next/image with `fill`.
 * Always renders an image inside an aspect-ratio container so empty/broken
 * image areas can never appear.
 */
export function Img({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/3]',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  ...rest
}) {
  return (
    <div className={cn('relative overflow-hidden bg-surface-2', aspect, className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]"
      />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('relative object-cover', imgClassName)}
        {...rest}
      />
    </div>
  )
}
