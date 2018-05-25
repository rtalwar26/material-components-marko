module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './example'
    },
    entry: {
        button: "./example/button/client.js"
    },
    output: {
        path: __dirname,
        filename: "static/[name].js"
    },
    devtool:"eval-source-map",
    resolve: {
        extensions: ['.js', '.marko'],
        modules: ['./', 'node_modules']
    },
    module: {
        rules: [{
                test: /\.marko$/,
                use: 'marko-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'static/bundle.css',
                        },
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules','./components']
                        }

                    },
                ]
            }
        ]
    }
}