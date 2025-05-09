import type { ReactNode } from 'react'
import { baseOptions } from '@/app/layout.config'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  )
}

function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">WhoaNote</p>
          <p className="text-xs">
            Built with ❤️ by
            {' '}
            <span
              className="font-medium"
            >
              WhoaNote 的创作者们
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
