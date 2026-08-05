/**
 * Centralized SEO configuration for Flow Wizards
 *
 * Business:  Flow Wizards - automation consulting agency
 * Parent:    Tuesday Wizard
 * Services:  n8n consulting, Zapier, Make, HubSpot, Airtable, Pipedrive,
 *            Jotform, AI automation, workflow automation, software setup
 * GEO:       USA, Canada, UK, Australia (English-speaking markets)
 * Pricing:   Starting at $25/hour
 */

export const SITE = {
  name: 'Flow Wizards',
  url: 'https://www.flowwizards.com',
  twitterHandle: '@flowwizards',
  logo: 'https://www.flowwizards.com/favicon.png',
  defaultLocale: 'en_US',
}

/**
 * Per-page SEO definitions.
 * Keys map 1-to-1 with route paths.
 */
export const PAGE_SEO = {

  // ── Home ──────────────────────────────────────────────────────────────
  '/': {
    title: 'Flow Wizards | n8n & Automation Consulting - Starting at $25/hr',
    description:
      'Expert workflow automation consulting starting at $25/hour. We build n8n, Zapier, Make, and AI-powered automations that save your team 20+ hours per week. Trusted by 500+ businesses.',
    canonical: 'https://www.flowwizards.com/',
    keywords:
      'n8n consulting, automation consulting, workflow automation, Zapier consultant, business automation, n8n automation, AI automation',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Flow Wizards',
      url: 'https://www.flowwizards.com',
      logo: 'https://www.flowwizards.com/favicon.png',
      description: 'Expert workflow automation consulting powered by Tuesday Wizard. Specializing in n8n, Zapier, Make, HubSpot, and AI-powered business automation.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
      areaServed: ['US', 'CA', 'GB', 'AU'],
      priceRange: '$25 - $$$',
      sameAs: [],
    },
  },

  // ── n8n Consulting ─────────────────────────────────────────────────────
  '/n8n-consulting': {
    title: 'n8n Consulting & Automation Services | Flow Wizards - From $25/hr',
    description:
      'Hire expert n8n consultants to design, build, and deploy powerful workflow automations. Self-hosted setup, Zapier migration, AI pipelines. Starting at $25/hour.',
    canonical: 'https://www.flowwizards.com/n8n-consulting',
    keywords:
      'n8n consulting, n8n consultant, n8n automation, n8n workflow, n8n self-hosted, n8n setup, hire n8n developer, n8n agency, n8n integration, Zapier to n8n migration',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'n8n Consulting & Automation',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Expert n8n consulting services including workflow design, self-hosted setup, AI pipeline automation, and Zapier migration. Starting at $25/hour.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '25',
        priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'USD', price: '25', unitText: 'HOUR' },
      },
    },
  },

  // ── Zapier Consultant ──────────────────────────────────────────────────
  '/zapier-consultant': {
    title: 'Zapier Consultant | Expert Zapier Automation Services | Flow Wizards',
    description:
      'Certified Zapier consultants who build, fix, and optimize complex Zap workflows. From simple automations to enterprise-grade multi-step pipelines. Book a free discovery call.',
    canonical: 'https://www.flowwizards.com/zapier-consultant',
    keywords:
      'Zapier consultant, Zapier automation, Zapier expert, hire Zapier developer, Zapier integration, Zapier agency, Zapier workflow, fix Zapier, Zapier optimization',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Zapier Consulting & Automation',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Expert Zapier consulting - workflow design, broken Zap fixes, API integrations, and ongoing optimization. Premier Zapier partner.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── AI Automation ──────────────────────────────────────────────────────
  '/ai-automation-services': {
    title: 'AI Automation Services | Flow Wizards - AI-Powered Business Automation',
    description:
      'AI-powered automation services for business growth. We build intelligent workflows using GPT-4, Claude, and custom AI models integrated with your existing tools via n8n and Zapier.',
    canonical: 'https://www.flowwizards.com/ai-automation-services',
    keywords:
      'AI automation, AI workflow automation, GPT automation, business AI, AI integration, AI consulting, AI-powered workflows, automation AI agency',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Automation Services',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'AI-powered automation consulting using GPT-4, Claude, and custom models integrated into n8n, Zapier, and Make workflows.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Workflow Automation ────────────────────────────────────────────────
  '/workflow-automation': {
    title: 'Workflow Automation Services | Flow Wizards - Eliminate Manual Work',
    description:
      'End-to-end workflow automation consulting. We design, build, and maintain automations across your CRM, marketing, support, and operations - so your business runs on autopilot.',
    canonical: 'https://www.flowwizards.com/workflow-automation',
    keywords:
      'workflow automation, business process automation, automation consultant, workflow design, automation agency, process automation, RPA alternative, no-code automation',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Workflow Automation Services',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Professional workflow automation design and implementation across CRM, marketing, operations, and support.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Fractional CAO ────────────────────────────────────────────────────
  '/fractional-chief-automation': {
    title: 'Fractional Chief Automation Officer | Flow Wizards',
    description:
      'Get a dedicated Chief Automation Officer without the full-time cost. Strategy-led automation, ongoing implementation, and a trusted partner to scale your operations.',
    canonical: 'https://www.flowwizards.com/fractional-chief-automation',
    keywords:
      'fractional CAO, fractional chief automation officer, automation strategy, automation leadership, outsourced automation, automation consultant',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Fractional Chief Automation Officer',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Fractional CAO services providing strategic automation leadership and implementation without full-time hiring cost.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Software Setup ─────────────────────────────────────────────────────
  '/software-setup-services': {
    title: 'Software Setup & Optimization Services | Flow Wizards',
    description:
      'Expert software configuration, optimization, and integration services. We set up and connect your tech stack so every tool works together perfectly from day one.',
    canonical: 'https://www.flowwizards.com/software-setup-services',
    keywords:
      'software setup, software optimization, SaaS configuration, tech stack setup, software integration, CRM setup, tool configuration',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Software Setup & Optimization',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Professional software configuration and optimization services for SaaS tools and CRM platforms.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── HubSpot ────────────────────────────────────────────────────────────
  '/hubspot-consultant': {
    title: 'HubSpot Consultant | HubSpot CRM Setup & Automation | Flow Wizards',
    description:
      'Certified HubSpot consultants for CRM setup, marketing automation, sales pipeline configuration, and HubSpot integrations. Book a free discovery call.',
    canonical: 'https://www.flowwizards.com/hubspot-consultant',
    keywords:
      'HubSpot consultant, HubSpot CRM, HubSpot automation, HubSpot setup, HubSpot integration, HubSpot agency, HubSpot expert, hire HubSpot consultant',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'HubSpot Consulting',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Certified HubSpot consulting including CRM setup, marketing automation, sales pipeline, and integrations.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Airtable ───────────────────────────────────────────────────────────
  '/airtable-consultant': {
    title: 'Airtable Consultant | Airtable Setup, Automation & Integration | Flow Wizards',
    description:
      'Expert Airtable consultants for database design, custom interface building, workflow automation, and API integrations. Transform how your team works with Airtable.',
    canonical: 'https://www.flowwizards.com/airtable-consultant',
    keywords:
      'Airtable consultant, Airtable automation, Airtable setup, Airtable integration, Airtable expert, Airtable agency, hire Airtable developer, Airtable database',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Airtable Consulting',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Expert Airtable consulting for database design, automation, custom interfaces, and integrations.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Pipedrive ──────────────────────────────────────────────────────────
  '/pipedrive-consultant': {
    title: 'Pipedrive Consultant | Pipedrive CRM Setup & Automation | Flow Wizards',
    description:
      'Premier Pipedrive consultants for CRM setup, pipeline customization, sales automation, and integrations. Close more deals with a properly configured Pipedrive.',
    canonical: 'https://www.flowwizards.com/pipedrive-consultant',
    keywords:
      'Pipedrive consultant, Pipedrive CRM, Pipedrive setup, Pipedrive automation, Pipedrive integration, Pipedrive expert, hire Pipedrive consultant',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Pipedrive Consulting',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Premier Pipedrive CRM consulting including pipeline setup, sales automation, and integrations.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Jotform ────────────────────────────────────────────────────────────
  '/jotform-consultant': {
    title: 'Jotform Consultant | Jotform Setup, Automation & Integration | Flow Wizards',
    description:
      'Expert Jotform consultants for form design, workflow automation, payment integrations, and connecting Jotform to your CRM and business tools.',
    canonical: 'https://www.flowwizards.com/jotform-consultant',
    keywords:
      'Jotform consultant, Jotform expert, Jotform automation, Jotform integration, Jotform setup, hire Jotform consultant, Jotform agency',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Jotform Consulting',
      provider: { '@type': 'Organization', name: 'Flow Wizards', url: 'https://www.flowwizards.com' },
      description: 'Expert Jotform consulting for form design, automation, payment integrations, and CRM connections.',
      areaServed: ['US', 'CA', 'GB', 'AU'],
    },
  },

  // ── Pricing ────────────────────────────────────────────────────────────
  '/pricing': {
    title: 'Automation Consulting Pricing | Flow Wizards - From $25/hr',
    description:
      'Transparent automation consulting pricing. n8n & Zapier consulting from $25/hour. Hourly packages, project-based, and monthly retainers available. No surprise fees.',
    canonical: 'https://www.flowwizards.com/pricing',
    keywords:
      'automation consulting pricing, n8n consulting cost, Zapier consultant price, automation agency pricing, workflow automation cost',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Automation Consulting Pricing',
      url: 'https://www.flowwizards.com/pricing',
      description: 'Transparent pricing for n8n, Zapier, and workflow automation consulting starting at $25/hour.',
    },
  },

  // ── Case Studies ───────────────────────────────────────────────────────
  '/case-studies': {
    title: 'Automation Case Studies | Flow Wizards - Real Results',
    description:
      'See how Flow Wizards has helped 500+ businesses save thousands of hours with custom automation. Real case studies across e-commerce, SaaS, agencies, and more.',
    canonical: 'https://www.flowwizards.com/case-studies',
    keywords:
      'automation case studies, workflow automation results, n8n case study, Zapier case study, automation ROI, business automation examples',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Automation Case Studies',
      url: 'https://www.flowwizards.com/case-studies',
      description: 'Real automation case studies from Flow Wizards clients across e-commerce, SaaS, and professional services.',
    },
  },

  // ── About ──────────────────────────────────────────────────────────────
  '/about': {
    title: 'About Flow Wizards | Expert Automation Consulting Team',
    description:
      'Flow Wizards is a specialist automation consulting agency powered by Tuesday Wizard. We help businesses automate their operations using n8n, Zapier, Make, and AI tools.',
    canonical: 'https://www.flowwizards.com/about',
    keywords:
      'about Flow Wizards, automation agency, Tuesday Wizard, automation consulting team, n8n agency',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Flow Wizards',
      url: 'https://www.flowwizards.com/about',
      description: 'Learn about Flow Wizards - an automation consulting agency powered by Tuesday Wizard.',
    },
  },

  // ── Blog ───────────────────────────────────────────────────────────────
  '/blog': {
    title: 'Automation Blog | Flow Wizards - n8n, Zapier & Workflow Tips',
    description:
      'Practical automation guides, n8n tutorials, Zapier tips, and workflow strategy articles from the Flow Wizards team. Level up your business automation.',
    canonical: 'https://www.flowwizards.com/blog',
    keywords:
      'automation blog, n8n tutorial, Zapier tips, workflow automation guide, business automation articles',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Flow Wizards Automation Blog',
      url: 'https://www.flowwizards.com/blog',
      description: 'Automation guides, n8n tutorials, and workflow tips from the Flow Wizards team.',
    },
  },

  // ── Contact ────────────────────────────────────────────────────────────
  '/contact': {
    title: 'Contact Flow Wizards | Book a Free Automation Discovery Call',
    description:
      'Get in touch with Flow Wizards to discuss your automation needs. Book a free 30-minute discovery call and start saving time with custom n8n and Zapier workflows.',
    canonical: 'https://www.flowwizards.com/contact',
    keywords:
      'contact Flow Wizards, book automation call, automation consultation, hire automation consultant',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Flow Wizards',
      url: 'https://www.flowwizards.com/contact',
      description: 'Book a free discovery call with Flow Wizards to start your automation journey.',
    },
  },

  // ── Thank You ──────────────────────────────────────────────────────────
  '/thank-you-page': {
    title: 'Thank You | Flow Wizards',
    description: 'Thank you for reaching out to Flow Wizards. We will be in touch shortly to discuss your automation needs.',
    canonical: 'https://www.flowwizards.com/thank-you-page',
    keywords: '',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    noIndex: true,
  },

  // ── Legal ──────────────────────────────────────────────────────────────
  '/privacy-policy': {
    title: 'Privacy Policy | Flow Wizards',
    description: 'Flow Wizards privacy policy - how we collect, use, and protect your personal information.',
    canonical: 'https://www.flowwizards.com/privacy-policy',
    keywords: '',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    noIndex: true,
  },
  '/terms-of-service': {
    title: 'Terms of Service | Flow Wizards',
    description: 'Flow Wizards terms of service agreement.',
    canonical: 'https://www.flowwizards.com/terms-of-service',
    keywords: '',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    noIndex: true,
  },
  '/msa': {
    title: 'Master Service Agreement | Flow Wizards',
    description: 'Flow Wizards master service agreement.',
    canonical: 'https://www.flowwizards.com/msa',
    keywords: '',
    ogImage: 'https://www.flowwizards.com/favicon.png',
    noIndex: true,
  },
}
