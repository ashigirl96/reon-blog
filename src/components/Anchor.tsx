import Link from 'next/link'
import { FC } from 'react'

// @ts-expect-error
export const Anchor: FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a
        className="underline hover:bg-yellow hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Link>
  )
}
