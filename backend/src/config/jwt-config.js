const config = {
  jwt: {
    secret: 'secret_key_goes_here',
    options: {
      algorithm: 'HS256',
      expiresIn: '30m',
    },
  },
};

export default config;
