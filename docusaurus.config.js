
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
      disableSwitch: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: 'logo',
        src: 'img/logo.svg'
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
          className: 'navbar__github btn btn-secondary icon-github',
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
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};
