const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
const port = 8080;
var mongoClient = require("mongodb").MongoClient;
//app.use(express.static(__dirname + '/img'));
app.use('/img', express.static('img'));
app.get('/', (req, res)=>{
	mongoClient.connect("mongodb://panaderia2:GP4muk8NOikR9rDs6gIdVIceTRsJXUdYeW8SR2BZUNLx5cFUdJALqJnLtm9sgOxT4LKspSqDmqaAJyx0xwpeOw==@panaderia2.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@panaderia2@", function (err, db) {
		var dbo = db.db("panaderiaDB");
		dbo.collection("panes").find().toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			res.send(result);
			db.close();
		});
		
	});
})
app.get('/delete/:id', (req, res)=>{
	const idPan = req.params.id;
	console.log(idPan);
	mongoClient.connect("mongodb://panaderia2:GP4muk8NOikR9rDs6gIdVIceTRsJXUdYeW8SR2BZUNLx5cFUdJALqJnLtm9sgOxT4LKspSqDmqaAJyx0xwpeOw==@panaderia2.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@panaderia2@", function (err, db) {
		var dbo = db.db("panaderiaDB");
		dbo.collection("panes").deleteOne(JSON.parse(`{"id":${idPan}}`),(err, obj)=>{
			if (err){ res.send("{status: 1}"); throw err;} 
			if (err){ res.send('{"status": "1"}'); throw err;} 
			console.log("1 document deleted");
			console.log(obj);
			res.send("{status:1}")
			res.send('{"status":"0"}');
			db.close();
		});

	});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})