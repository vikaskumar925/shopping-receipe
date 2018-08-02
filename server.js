'use strict';

require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');

const { provideModuleMap } = require('@ngUniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/shopping-reciepe/main.bundle');

function angularRouter(req, res){
	res.render('index',{ req, res });
}

const app = express();

app.engine('html', ngUniversal.ngExpressFunction({
	bootstrap:AppServerModuleNgFactory,
	providers:[
		provideModuleMap(LAZY_MODULE_MAP)
	]
}))
app.set('view engine','html');
app.set('views','dist');
app.get('/', angularRouter);
app.use(express.static(`${__dirname}/dist/shopping-recipe`))
app.get('*',angularRouter);

app.listen(3000, ()=>{
		console.log('Listeningo on port 3000');
});