import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title
    const upsert = (selector, key, value, content) => {
      let el = document.head.querySelector(selector)
      if (!el) { el = document.createElement('meta'); el.setAttribute(key, value); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    upsert('meta[name=\"description\"]', 'name', 'description', description)
    upsert('meta[property=\"og:title\"]', 'property', 'og:title', title)
    upsert('meta[property=\"og:description\"]', 'property', 'og:description', description)
    upsert('meta[property=\"og:type\"]', 'property', 'og:type', 'website')
    upsert('meta[name=\"twitter:card\"]', 'name', 'twitter:card', 'summary_large_image')
    upsert('meta[name=\"twitter:title\"]', 'name', 'twitter:title', title)
    upsert('meta[name=\"twitter:description\"]', 'name', 'twitter:description', description)
  }, [title, description])
  return null
}
