const CompressionPlugin = require('compression-webpack-plugin')

const externals = {
    'vue': 'Vue',    
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'nprogress': 'NProgress',
    'vconsole': 'VConsole',
    'element-ui': 'ELEMENT',
}

module.exports = {
    publicPath: './',
    outputDir: './dockerfiles/dist',
    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                externals: externals,
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|.\css/,
                        threshold: 10240, //对超过10k的数据压缩
                        deleteOriginalAssets: false //删除源文件
                    })
                ]
            }
        } 
        else {
            return {
                externals: {
                    ...externals
                }
            }
        }
    },
    pages: {
        h5: {          
            entry: 'src/views/h5/main.js',          
            template: 'public/h5.html',
            chunks: ['chunk-vendors', 'chunk-common', 'h5'],
            title: '加载中'
        },        
        admin: {          
            entry: 'src/views/admin/main.js',          
            template: 'public/admin.html',        
            chunks: ['chunk-vendors', 'chunk-common', 'admin'],
            title: '加载中'
        },
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    '@color-primary': '#1c97fc',
                    '@color-success': '#1c97fc',
                    '@color-info': '#32ae57'
                }
            },
            sass: {
                prependData: `@import "@/assets/sass/main.scss";`
            }
        }
    },
    chainWebpack: config => {
        let arr = ['vue-modules', 'vue', 'normal-modules', 'normal']
        arr.forEach(match => {
            config.module
                .rule('scss')
                .oneOf(match)
                .use('sass-loader')
                .tap(opt =>
                    Object.assign(
                        opt,
                        { data: `@import '~@/assets/sass/main.scss';` },
                    )
                )
        })
    },
    productionSourceMap: process.env.NODE_ENV !== 'production',
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        disableHostCheck: true,
        port: 8090,
        proxy: {
            '^/api': {
                target: 'http://unip-test.zwjk.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    }
}
