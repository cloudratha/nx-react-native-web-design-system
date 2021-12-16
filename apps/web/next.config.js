// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const withNx = require('@nrwl/next/plugins/with-nx');
const { withExpo } = require('@expo/next-adapter');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'react-native-web',
  'native-base',
]);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack5: true,
};

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: path.join(__dirname, '..', '..') }],
    [withExpo, { projectRoot: path.join(__dirname, '..', '..') }],
  ],
  withNx(nextConfig)
);
