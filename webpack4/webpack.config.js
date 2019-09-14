const path     = require('path');
module.exports = {
    //入口文件
    // entry: "./src/index.js",

    //配置多入口文件
    entry : {
        app  : "./src/index.js",
        hello: "./src/hello.js",
    },
    //出口
    output: {
        path    : path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },

    //开发模式
    mode: "development",

    //配置loader
    module : {
        rules: [
            {
                //匹配文件
                test   : /\.m?js$/,
                //忽略文件
                exclude: /(node_modules|bower_components)/,
                //引入插件和loader名称
                use    : {
                    loader : 'babel-loader',
                    options: {
                        //插件集 和 单个插件 配置
                        // presets: [
                        //     [
                        //         "@babel/preset-env",
                        //         {
                        //             "debug": true
                        //         }
                        //     ]
                        // ],
                        // plugins: [ [ "@babel/plugin-proposal-decorators", { "legacy": true } ] ]
                    }
                }
            }
        ]
    },
    devtool: false,
};
