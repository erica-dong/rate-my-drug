import Link from 'next/link'

export default function HeaderLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
        <header className="w-full bg-black px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">
                Rate My Drug
            </Link>

            <div className="w-1/3">
                {/* <SearchBar /> */}
            </div>
            </header>
          <main>{children}</main>
        </body>
      </html>
    )
  }