const path = require('path')

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname,'dist'),
                publicPath: '/'
            },
            {
                directory: path.join(__dirname,'public'),
                publicPath: '/public'
            }
        ]
    }
}