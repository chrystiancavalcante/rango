// JavaScript Document
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mongodb = require('mongodb')
const mongoCliente = mongodb.mongoClient

let database

app.set('view engine' , 'ejs')
app.use(express.static('public'))

const insert =(db, collection, doc)=> {
	return new promisse((resolve, reject)=>{
		const collection = db.collection(collectionName)
		collection.isert(doc, (err, result)=> {
			if(err){
				reject(err)
				}else{
					resolve(result)
			}
		})
	})
}

const find = (db, collectionName, filter)=>{
	return new promisse((resolve, reject)=>{
		const collection = db.collection(collectionName)
		collection.find(filter,(err, result)=>{
			if(err){
				reject(err)
			}else{
				resolve(results)
			}
		})
	})
}

app.get('/',(req, res) => res.render('index'))

app.get('/restaurantes', async(req, res) => //{
	//const restaurantes = await find(database, 'restaurantes',{})
	res.render('restaurantes'))//, //{restaurantes}))
//})
app.get('/localizar', async(req, res) => 
res.render('localizar'))

app.get('/teste', async(req, res) => 
res.render('teste'))


//mongoCliente.connect('mongodb://localhost:27017/irango',(err, db)=>database = db
app.listen(port, () => console.log('running..'))


	
	
	
	