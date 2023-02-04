const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
        target: 'https://opendata.resas-portal.go.jp',
        changeOrigin: true,
        pathRewrite: {
            "^/": "",
        },
      })
    );
}