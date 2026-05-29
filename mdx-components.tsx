import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import DemoVideo from './components/DemoVideo'
import { VersionPin } from './components/VersionPin'

const docsComponents = getDocsMDXComponents()

// Globally-available MDX components. Anything added here can be used
// in any .mdx page without an explicit import.
export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...docsComponents,
    DemoVideo,
    VersionPin,
    ...components,
  }
}
