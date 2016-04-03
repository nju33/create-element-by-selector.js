import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
const banner = `
/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/create-element-by-selector.js
 */
`;

export default {
  banner: banner.trim(),
  entry: 'lib/create-element-by-selector.js',
  format: 'umd',
  dest: 'dist/create-element-by-selector.js',
  moduleName: 'createElementBySelector',
  plugins: [
    babel(),
    nodeResolve({
      jsnext: true
    })
  ]
};
