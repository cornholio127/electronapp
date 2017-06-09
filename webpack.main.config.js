const path = require('path');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (env) => {
    return {
        entry: './src/app.ts',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'main.js'
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'awesome-typescript-loader'
                }
            ]
        },
        resolve: {
            extensions: [ '.ts', '.tsx', '.js', '.jsx', '.scss' ],
            plugins: [
                new TsConfigPathsPlugin({
                    configFileName: 'tsconfig.json',
                    compiler: 'typescript'
                })
            ]
        },
        target: 'electron-main',
        node: {
            __dirname: false,
            __filename: false
        }
    };
};
