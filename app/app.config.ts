export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/C4E03AQHQ5sEmazJ6VA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626969399923?e=1761177600&v=beta&t=SmE2jnxqiOrzBGDNC707asThOnEvUMs3gYK5l_Wp0Gw',
      light: 'https://media.licdn.com/dms/image/v2/C4E03AQHQ5sEmazJ6VA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626969399923?e=1761177600&v=beta&t=SmE2jnxqiOrzBGDNC707asThOnEvUMs3gYK5l_Wp0Gw',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'khoatbui.idea@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Made by Miguel with ♥️`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/miguel-bui/',
      'target': '_blank',
      'aria-label': 'Miguel on Linkedin'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/im_miguel_bui',
      'target': '_blank',
      'aria-label': 'Miguel on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/imkhoat',
      'target': '_blank',
      'aria-label': 'Miguel on GitHub'
    }]
  }
})
