module.exports = {
	"swagger": "2.0",
	"info": {
		"version": "0.0.3",
		"title": "TRON API",
		"description": "игра Tron"
	},
	"basePath": "/api",
	"schemes": ["http"],
<<<<<<< HEAD
   	"host": "http://localhost:3001",
=======
	"host": "http://localhost:3000",
>>>>>>> sample/lesson-5

	paths: {
		'/messages': require('./resources/messages'),
		'/session': require('./resources/session'),
		'/user': require('./resources/user'),
	},

	definitions: {
		Message: require('./scheme/Message'),
		Session: require('./scheme/Session'),
		User: require('./scheme/User'),
	}

};
