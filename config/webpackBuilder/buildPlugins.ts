import webpack, {Configuration} from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import Dotenv from 'dotenv-webpack'

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    const isDev = options.mode === 'development'

    const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({template: options.paths.html}),new Dotenv()]

    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
    }

    return plugins
}