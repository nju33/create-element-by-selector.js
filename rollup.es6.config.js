import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'lib/create-element-by-selector.js',
  dest: 'es/create-element-by-selector.js',
  plugins: [
    nodeResolve({
      jsnext: true
    })
  ]
};
