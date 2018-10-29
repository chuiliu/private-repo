import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';

import baseConfig from './webpack.base.config';

export default merge(baseConfig, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true
            }
        }),
        new CleanWebpackPlugin(
            ['js', 'imgs'],
            {
                root: path.resolve(__dirname, '../build'),
                verbose: true,  // TODO:
                exclude: ['css', 'favicon.ico']
            }
        )
    ]
})