const settings = {
  graphql: {
    uri: 'http://localhost:3001/graphql',
  },
  meta: {
    rootUrl: 'http://localhost:3000',
    title: 'Walborg Events',
    description:
      'Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester.',
    social: {
      graphic: 'https://walborgevent.com/walborg-events-logo-black.png',
    },
  },

  routes: {
    authenticated: {
      pathAfterFailure: '/login',
      pathAfterSuccess: '/',
    },
    public: {
      pathAfterFailure: '/documents',
      pathAfterSuccess: '/',
    },
  },
}

export default settings