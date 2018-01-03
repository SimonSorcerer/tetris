var path = require('path');

module.exports = {
    entry: './js/entry.jsx',
    output: {
        filename: './target/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /styles/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.css$/,
                include: /styles/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.jsx?$/,
                include: /js/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'babel-preset-stage-2']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'js/actions/'),
            controllers: path.resolve(__dirname, 'js/controllers'),
            helpers: path.resolve(__dirname, 'js/helpers'),
            reducers: path.resolve(__dirname, 'js/reducers/'),
            services: path.resolve(__dirname, 'js/services/'),
            views: path.resolve(__dirname, 'js/views/')
        },
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    externals: {
    },
};
