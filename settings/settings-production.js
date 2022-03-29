const settings = {
    graphql: {
      uri: '',
    },
    meta: {
      rootUrl: 'https://walborgevent.com',
      title: 'Walborg Events',
      description:
        'Välkommen till en magisk oas i centrala Göteborg! Här arrangerar vi allt från utbildningar, konferenser till stora fester.',
      social: {
        graphic: 'https://walborgevent.com/walborg-event-thumbnail.png',
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