const path = require('path');

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack: (config, { defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\/__tests__\//,
      })
    );

    config.module.rules.push({
      test: /\.vtt/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'file-loader',
        },
      ],
    });

    config.resolve.modules = [path.resolve(__dirname, './'), 'node_modules'];

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  staticPageGenerationTimeout: 120,
  reactStrictMode: true,
};
