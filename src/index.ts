'use strict';
import 'reflect-metadata';
import Application from "./Application";

var app;
try {
	 app = new Application();
} catch(e) {
	console.log(e);
}

export default app;