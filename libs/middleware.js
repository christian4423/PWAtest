
import serveIndex from "serve-index";
import express from "express";
import logger from "morgan";
import path from "path";
import favicon from "serve-favicon"
import bodyParser from "body-parser";
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import helmet from 'helmet';
var compression = require('compression')
module.exports = app => {
    const _env = app.get("environment");
    const port = app.get("port");
    // view engine setup
    app.set('views', path.join(__dirname, '../Views'));
    app.set('view engine', 'pug');
    app.use(favicon(path.join(__dirname, '../favicon.ico')));
    app.set("json spaces", 4);
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(compression())
    // const corsOptions = {
    //     origin: '*',
    //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
    // }
    app.use("/files", serveIndex(path.join(__dirname, '../'), { icons: true }));
    app.use("/public", express.static(path.join(__dirname, '../public')));
    if (_env === "production") {
        //Access-Control
        app.use(helmet());
    }
    else {
        //Hot Reload
        const config = require('../webpack.dev.config');
        const compiler = webpack(config);
        const dev_middleware = webpackDevMiddleware(compiler, {
            hot: true,
            filename: config.output.filename,
            publicPath: config.output.publicPath,
            stats: {
                colors: true,
            },
            noInfo: true
        });
        const hot_middleware = webpackHotMiddleware(compiler, {
            log: console.log,
            heartbeat: 10 * 1000
        });
        app.use(dev_middleware);
        app.use(hot_middleware);
        app.use(function (req, res, next) {
            const METHODS = ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"];
            const HEADERS = ["Origin", "X-Requested-With", "Content-Type", "Access-Control-*", "Accept", "Authorization"];
            res.setHeader('Access-Control-Allow-Origin', "*");
            // Request methods you wish to allow
            res.setHeader('Access-Control-Expose-Headers', HEADERS);
            res.setHeader('Access-Control-Allow-Methods', METHODS);
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', HEADERS);

            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);
            next()
        });



        //Routes

    }

    //error report view
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
        next()
    });
}