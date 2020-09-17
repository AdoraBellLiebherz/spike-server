"use strict";
var AdminBro = require('admin-bro');
var AdminBroExpress = require('@admin-bro/express');
var AdminBroSequelize = require('@admin-bro/sequelize');
var express = require('express');
var app = express();
var adminBro = new AdminBro({
    databases: [],
    rootPath: '/admin',
});
AdminBro.registerAdapter(AdminBroSequelize);
var router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);
app.listen(8080, function () { return console.log('AdminBro is under localhost:8080/admin'); });
