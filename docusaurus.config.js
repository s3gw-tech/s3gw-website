
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 's3gw Project',
  tagline: 'Lightweght S3 service for Kubernetes',
  url: 'https://s3gw.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Aquarist Labs', // Usually your GitHub org/user name.
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
          to: 'https://rancher-users.slack.com/archives/C04DCMUV8SE',
          label: 'Slack',
          position: 'right',
          className: 'navbar__docs'
        },
        {
          to: 'https://github.com/aquarist-labs/s3gw',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__icon navbar__github',
        },
        {
          type: 'dropdown',
          label: 'More From SUSE',
          position: 'right',
          className: 'navbar__docs',
          items: [
            {
              label: 'Rancher',
              to: 'https://www.rancher.com',
              className: 'navbar__icon navbar__rancher',
            },
            {
              label: 'Rancher Desktop',
              to: "https://rancherdesktop.io",
              className: 'navbar__icon navbar__rd',
            },
            {
              label: 'Longhorn',
              to: "https://longhorn.io",
              className: 'navbar__icon navbar__longhorn',
            },
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              label: 'More Projects...',
              to: "https://opensource.suse.com",
              className: 'navbar__icon navbar__suse',
            },
          ],
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SUSE`,
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
