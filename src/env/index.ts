if (process.env.NODE_ENV !== 'production') {
  console.log('Using development .env variables from root directory.');
  // eslint-disable-next-line global-require
  require('dotenv').config();
}
