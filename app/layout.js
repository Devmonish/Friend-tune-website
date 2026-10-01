import './globals.css'
import MusicPlayer from '@/components/MusicPlayer'
import PageNav from '@/components/PageNav'

export const metadata = {
  title: 'For you ✨',
  description: 'A little space created just for you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fredoka:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        {/* Layout stays mounted between pages, so the tune keeps playing without restarting. */}
        <MusicPlayer />
        {children}
        <PageNav />
      </body>
    </html>
  )
}
