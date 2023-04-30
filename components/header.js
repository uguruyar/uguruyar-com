import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4">
        <div>
          <Link href="/">Uğur Uyar</Link>
        </div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/bookmarks">Bookmarks</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
