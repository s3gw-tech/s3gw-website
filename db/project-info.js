import { CloudSVG, TorchSVG, ContainerSVG, GithubSVG, SlackSVG } from '@/assets/images'

export const PROJECT_CONFIGURATION = {
  projectTitle: 'Aquarium',
  projectSubtitle: 'An easy-to-use, rock solid storage appliance built on Ceph',
  projectNavigation: {
    links: [
      {
        title: 'Documentation',
        href: 'https://github.com/aquarist-labs/aquarium/blob/main/doc/from-zero-to-hero.md'
      },
      {
        title: 'Blog',
        href: 'https://www.suse.com/c/inside-the-aquarium-investigating-a-storage-appliance-built-on-ceph/'
      }
    ],
    social: [
      {
        url: 'https://github.com/aquarist-labs/aquarium',
        icon: GithubSVG
      },
      {
        url: 'https://join.slack.com/t/aquaristlabs/shared_invite/zt-nphn0jhg-QYKw__It8JPMkUR_sArOug',
        icon: SlackSVG
      },
    ]
  },
  projectVideo: {
    isEnable: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=C_2wvFDgh9g&t=631s'
  },
  projectCta: {
    title: 'About Aquarium',
    description: 'Made up of five logical components - host operating system, host management console, simplified management UI, support diagnostics, and a workload orientated deployment - Aquarium extracts the complications of Ceph and provides a series of simple management consoles to help support your file and object storage needs.'
  },
  // ℹ️ No more than 3 items for a better structure.
  projectBulletPoints: [
    'A storage appliance build in an opinionated fashion',
    'Easy to manage deployment and day 1 operations',
    'Support diagnostics and workload-orientated deployment tools'
  ],
  projectRepoURL: 'https://github.com/aquarist-labs/aquarium',
  projectDocumentationURL: 'https://github.com/aquarist-labs/aquarium/blob/main/doc/from-zero-to-hero.md',
  projectHow: {
    description: ''
  },
  // ℹ️ No more than 3 items for a better structure.
  projectGetStarted: [
    'git clone git@github.com:aquarist-labs/aquarium',
    'cd aquarium',
    './tools/setup-dev.sh',
    'source tools/venv/bin/activate'
  ],
  projectFAQ: {
    isEnabled: true,
    elements:
      [
        {
          title: 'What is a storage appliance?',
          description: 'A storage appliance is something that can provide or manage data without an application context to add simplification to the day 1 installer experience. This is often displayed in the form of a wizard-driven installation process, but it can also mean a fixed hardware configuration.',
        },
        {
          title: 'How is this project related to Ceph?',
          description: 'Being Ceph developers and enthusiasts, we’re building Aquarium on top of Ceph. Providing an appliance style deployment and a service-based GUI, but it’s still Ceph underneath.',
        },
        {
          title: 'Is this an open source project?',
          description: 'Absolutely! Everything we’re doing is in the open: development, discussions, decision making, even our meetings.',
        },
        {
          title: 'How do I get involved?',
          description: 'Have a look at our issue list in the GitHub repository and please join our Slack channel. We would love to hear from you.',
        },

        {
          title: 'Does Aquarium support the same services and features as Ceph?',
          description: 'We deliberately do not expose all features in order to simplify deployment and management for what we think are common or useful deployment scenarios.',
        },
      ]
  },
  projectSponsors: {
    isEnable: false,
    elements: [
      {
        sponsor: 'aws',
        href: 'http://www.google.com',
        // logo: AWS_LOGO
      },
    ]
  },
  projectFooterLinks: [
    {
      title: 'License',
      href: 'https://github.com/aquarist-labs/aquarium/blob/main/COPYING',
    },
    {
      title: 'Feedback',
      href: 'https://github.com/aquarist-labs/aquarium/issues',
    },
  ]
}
