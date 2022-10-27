module.exports = {
  extends: [
    '@ahdcreative/eslint-config-ahd-base',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
