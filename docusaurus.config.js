
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 's3gw Project',
  tagline: 'Lightweght S3 service for small deployments',
  url: 'https://s3gw.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 's3gw.tech', // Usually your GitHub org/user name.
  projectName: 's3gw website', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          to:  'https://s3gw-docs.readthedocs.io/en/main/',
          position: 'right',
          label: 'Docs',
          className: 'navbar__docs',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'right',
          className: 'navbar__docs'
        },
        {
          to: 'https://github.com/s3gw-tech/s3gw',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__icon navbar__github',
        },        
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} s3gw contributors`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarCount: 30,
          blogSidebarTitle: 'Latest posts',
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};
