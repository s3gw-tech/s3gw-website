import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import type * as PagesPlugin from '@docusaurus/plugin-content-pages'
import type * as ThemePlugin from '@docusaurus/theme-classic'

const config: Config = {
  title: 'S3GW Project',
  tagline: 'Lightweght S3-Compatible Object Store',
  url: 'https://s3gw.tech',
  baseUrl: '/',

  favicon: 'img/favicon.ico',

  organizationName: 's3gw.tech', // Usually your GitHub org/user name.
  projectName: 's3gw website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,
  themeConfig: {
    image: 'img/s3gw-tech-social-card.png',
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    navbar: {
      title: 'S3GW',
      logo: {
        alt: 's3gw.tech logo',
        src: 'img/s3gw-tech-logo-round-solo.png',
        srcDark: 'img/s3gw-tech-logo-round-dark-solo.png',
      },
      items: [
        {
          label: 'Why',
          to: '/#why-s3gw',
          position: 'left',
        },
        {
          label: 'How',
          to: '/#how-it-works',
          position: 'left',
        },
        {
          label: 'Get Started',
          to: '/#get-started',
          position: 'left',
        },
        {
          href: 'https://docs.s3gw.tech',
          position: 'right',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/s3gw-tech/s3gw',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Discussions',
          href: 'https://github.com/orgs/s3gw-tech/discussions',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Why',
              to: '/#why-s3gw',
            },
            {
              label: 'How',
              to: '/#how-it-works',
            },
            {
              label: 'Get Started',
              to: '/#get-started',
            },
          ],
        },
        {
          title: 'S3GW Project',
          items: [
            {
              label: 'Documentation',
              href: 'https://docs.s3gw.tech',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/s3gw-tech/s3gw',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/orgs/s3gw-tech/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'ArtifactHub',
              href: 'https://artifacthub.io/packages/helm/s3gw/s3gw',
            },
            {
              label: 'Quay',
              href: 'https://quay.io/organization/s3gw',
            },
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} s3gw contributors`,
      copyright: `
      <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">
      Copyright © ${new Date().getFullYear()} s3gw contributors<br/>
      <a property="dct:title" rel="cc:attributionURL" href="https://s3gw.tech">s3gw.tech</a> by <span property="cc:attributionName">s3gw.tech Contributors</span> is licensed under <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p>`,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '',
      } satisfies PagesPlugin.Options,
    ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: ['./src/css/custom.css'],
      } satisfies ThemePlugin.PluginOptions,
    ],
  ],
}

export default config
