var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
     // .addStyleEntry('css/plugins', './assets/css/plugins.scss')
    // require( "../plugins/martxa/css/animate.css");
    // require( "../plugins/martxa/css/owl.carousel.css");
    // require( "../plugins/martxa/css/font-awesome.min.css");
    // require( "../plugins/martxa/css/magnific-popup.css");
    // require( "../plugins/martxa/css/slicknav.min.css");
    // require( "../plugins/martxa/css/styles.css");
    // require( "../plugins/martxa/css/responsive.css");
    //  .addStyleEntry('animated', './assets/plugins/martxa/css/animate.css')

    .addEntry('app', './assets/js/app.js')
    .addEntry('jquery',"./assets/plugins/martxa/js/vendor/jquery-1.12.4.min.js")
    // .addEntry('modernizr',"./assets/plugins/martxa/js/vendor/modernizr-2.8.3.min.js")
    .addEntry('bootstrap',"./assets/plugins/martxa/js/bootstrap.min.js")
    .addEntry('carousel',"./assets/plugins/martxa/js/owl.carousel.min.js")
    .addEntry('counterup',"./assets/plugins/martxa/js/counterup.main.js")
    .addEntry('imagesloaded',"./assets/plugins/martxa/js/imagesloaded.pkgd.min.js")
    .addEntry('isotope',"./assets/plugins/martxa/js/isotope.pkgd.min.js")
    .addEntry('jquery.waypoints',"./assets/plugins/martxa/js/jquery.waypoints.min.js")
    .addEntry('jquery.magnific-popup',"./assets/plugins/martxa/js/jquery.magnific-popup.min.js")
    .addEntry('jquery.slicknav',"./assets/plugins/martxa/js/jquery.slicknav.min.js")
    .addEntry('snake',"./assets/plugins/martxa/js/snake.min.js")
    .addEntry('wow',"./assets/plugins/martxa/js/wow.min.js")
    .addEntry('plugins',"./assets/plugins/martxa/js/plugins.js")
    .addEntry('scripts',"./assets/plugins/martxa/js/scripts.js")
    // .addEntry('js/plugins', './assets/js/plu gins.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    //.addEntry('plugins', './assets/plugins/**')


    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })
    // .configureCssLoader( )
    // .enablePostCssLoader(postCssConfig)
    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()
    // .configureBabel(function(babelConfig) {
    //     babelConfig.plugins = [
    //         "@babel/transform-runtime",
    //         "@babel/transform-async-to-generator"
    //     ]
    // })

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    .copyFiles({
        from: './assets/plugins/martxa/images',
        // optional target path, relative to the output dir
        to: '../martxa/assets/images/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        // to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        pattern: /\.(png|jpg|jpeg)$/
    })
;
//Encore.configureCssLoader(cssLoader.toLocaleString);

encoreConfig = Encore.getWebpackConfig();

module.exports = encoreConfig;
