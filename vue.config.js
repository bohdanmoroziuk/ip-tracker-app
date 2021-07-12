module.exports = {
  devServer: {
    proxy: {
      '^/ipify': {
        target: 'https://geo.ipify.org/api/v1',
        changeOrigin: true,
        pathRewrite: {
          '^/ipify': '',
        },
      },
    },
  },
};
