const express = require('express');
var cors = require('cors');
const path = require('path');
const app = express();
const port = 8080;
var mongoClient = require("mongodb").MongoClient;
app.options('*', cors())
//app.use(express.static(__dirname + '/img'));
app.use('/img', express.static('img'));
app.get('/', (req, res)=>{
	mongoClient.connect("mongodb://panaderia:kBz8uW18Ek9Mw3LhSF3EL6QRQZKGk1euSDYY2YbvcL50UEr1ULi2SudzarLNTPNpcQ5CNXfexsLXACDbOEvoWA%3D%3D@panaderia.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@panaderia@", function (err, db) {
		var dbo = db.db("panes");
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
	mongoClient.connect("mongodb://panaderia:kBz8uW18Ek9Mw3LhSF3EL6QRQZKGk1euSDYY2YbvcL50UEr1ULi2SudzarLNTPNpcQ5CNXfexsLXACDbOEvoWA%3D%3D@panaderia.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@panaderia@", function (err, db) {
		var dbo = db.db("panes");
		dbo.collection("panes").deleteOne(JSON.parse(`{"id":${idPan}}`),(err, obj)=>{
			if (err){ res.send(JSON.parse('{"status": "1"}')); throw err;} 
			console.log("1 document deleted");
			console.log(obj);
			res.send(JSON.parse('{"status":"0"}'));
			db.close();
		});

	});
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})