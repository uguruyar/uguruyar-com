import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4">
        <Link href="/">About</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/sp1">Sample Page 1</Link>
        <Link href="/sp2">Sample Page 2</Link>
      </nav>
    </header>
  )
}
