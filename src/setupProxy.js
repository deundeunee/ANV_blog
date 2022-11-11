const { createProxyMiddleware } = require('http-proxy-middleware');

// API 호출시 프록시 설정
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.youtube.com',
      changeOrigin: true,
    })
  );
};