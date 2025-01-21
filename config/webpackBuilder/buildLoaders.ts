import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const sassLoader = {
        test: /\.(scss|css)$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDev,
                    importLoaders: 1,
                },
            },
            'sass-loader',
        ],
    };

    return [
        sassLoader,
        tsLoader,
        fileLoader
    ]
}