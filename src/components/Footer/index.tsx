import { VFC } from 'react'

export const Footer: VFC = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content min-h-fit">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
    </footer>
  )
}
