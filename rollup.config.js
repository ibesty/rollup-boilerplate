export default [{
  input: './src/index.js',
  output: {
    file: './bin/bundle.es.js',
    format: 'es'
  }
},{
  input: './src/index.js',
  output: {
    file: './bin/bundle.common.js',
    format: 'cjs'
  }
}]