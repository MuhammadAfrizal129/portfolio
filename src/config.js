module.exports = {
  siteTitle: 'Muhammad Afrizal',
  siteDescription:
    'Muhammad Afrizal is a Student at UIN Sunan Gunung Djati Bandung, Indonesia. Primarily interested in Education, Technology and Management.',
  siteKeywords:
    'Muhammad Afrizal, Muhammad, Afrizal, muhammadafrizal, project management, agile, kanban, project manager',
  siteUrl: 'https://www.linkedin.com/in/muhammadafrizal129/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Muhammad Afrizal',
  location: 'Bandung, Indonesia',
  email: 'muhammadafrizal129@gmail.com',
  github: 'https://github.com/MuhammadAfrizal129',
  linkedin: 'https://www.linkedin.com/in/muhammadafrizal129/',
  twitterHandle: '@',
  socialMedia: [
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/MuhammadAfrizal129',
    // },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/muhammadafrizal129/',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/muhammad_afriz',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/',
    // },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/6285779185969',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Certificate',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#f92c85',
    navy: '#fdf5df',
    darkNavy: '#fdf5df',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
