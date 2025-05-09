import type { DocsLayoutProps } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import { baseOptions, linkItems } from '@/app/layout.config'
import { source } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [linkItems[linkItems.length - 1]],
  sidebar: {
    tabs: {
      transform(option, node) {
        const meta = source.getNodeMeta(node)
        if (!meta || !node.icon)
          return option

        return {
          ...option,
          icon: node.icon,
        }
      },
    },
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...docsOptions}>{children}</DocsLayout>
}
