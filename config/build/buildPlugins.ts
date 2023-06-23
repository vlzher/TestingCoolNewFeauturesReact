import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(params: BuildOptions): webpack.ProgressPlugin[] {
  return [
    new MiniCssExtractPlugin({
        filename:  "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].chunk.css",
    }
    ),
    new HtmlWebpackPlugin({
      template: params.paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
