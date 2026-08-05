import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { PAGE_SEO, SITE } from '@/utils/seoConfig'

/**
 * SEO component - drop anywhere in the tree (or once in Layout).
 * Reads the current route and applies the matching title, meta, OG,
 * Twitter card, canonical, structured data, and geo/language tags.
 *
 * Usage (automatic, route-driven):
 *   <SEO />
 *
 * Usage (override for blog post pages):
 *   <SEO
 *     title="My Post Title | Flow Wizards"
 *     description="Post description..."
 *     canonical="https://www.flowwizards.com/blog/my-post"
 *   />
 */
const SEO = ({ title, description, canonical, keywords, ogImage, noIndex, schema }) => {
  const { pathname } = useLocation()

  // Match exact path first, then try without trailing slash
  const cfg =
    PAGE_SEO[pathname] ||
    PAGE_SEO[pathname.replace(/\/$/, '')] ||
    PAGE_SEO['/']

  const resolvedTitle       = title       || cfg.title
  const resolvedDescription = description || cfg.description
  const resolvedCanonical   = canonical   || cfg.canonical
  const resolvedKeywords    = keywords    || cfg.keywords    || ''
  const resolvedOgImage     = ogImage     || cfg.ogImage     || SITE.logo
  const resolvedNoIndex     = noIndex     ?? cfg.noIndex     ?? false
  const resolvedSchema      = schema      || cfg.schema      || null

  return (
    <Helmet>
      {/* ── Core ─────────────────────────────────────── */}
      <html lang="en" />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords && <meta name="keywords" content={resolvedKeywords} />}
      <link rel="canonical" href={resolvedCanonical} />

      {/* ── Robots ───────────────────────────────────── */}
      {resolvedNoIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      }

      {/* ── Open Graph ───────────────────────────────── */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE.name} />
      <meta property="og:title"       content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url"         content={resolvedCanonical} />
      <meta property="og:image"       content={resolvedOgImage} />
      <meta property="og:locale"      content="en_US" />
      {/* Additional OG locales for geo targeting */}
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_AU" />

      {/* ── Twitter Card ─────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={SITE.twitterHandle} />
      <meta name="twitter:title"       content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image"       content={resolvedOgImage} />

      {/* ── Geo / Language targeting ─────────────────── */}
      {/* Helps Google understand we serve US, CA, UK, AU markets */}
      <meta name="geo.region"    content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="language"      content="English" />

      {/* hreflang - signals English content to all English markets */}
      <link rel="alternate" hrefLang="en"    href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en-US" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en-GB" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en-CA" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en-AU" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="x-default" href={resolvedCanonical} />

      {/* ── Structured Data / Schema.org ─────────────── */}
      {resolvedSchema && (
        <script type="application/ld+json">
          {JSON.stringify(resolvedSchema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
