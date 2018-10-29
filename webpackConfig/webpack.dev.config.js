import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';

export default merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        inline: true,
        hot: true,
        open: true,
        publicPath: '/',  // TODO:
        contentBase: 'dist',
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});