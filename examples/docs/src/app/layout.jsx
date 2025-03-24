/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://me-cash.com'),
  title: {
    template: '%s - Nextra'
  },
  description: 'meCash Docs',
  applicationName: 'meCash',
  generator: 'Next.js',
  appleWebApp: {
    title: 'meCash'
  },
  other: {
    'msapplication-TileImage': '/mecashdark.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://me-cash.com'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Nextra</b>{' '}
          <span style={{ opacity: '60%' }}>meCash Docs</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/hEM84NMkRv"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="meCash Docs v1">meCash Docs v1</Banner>}
          navbar={navbar}
          footer={<Footer>meCash {new Date().getFullYear()} © meCash.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
