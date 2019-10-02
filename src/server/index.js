const sass = require('node-sass')

require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react'],
})

require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'jpeg'],
    name: '/assets/[hash].[ext]',
})

require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]--[hash:base64:5]',
    extensions: ['.scss'],
    preprocessCss: (data, file) => sass.renderSync({ data, file }).css.toString('utf8'),
})

require('./server')
