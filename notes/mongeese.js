// require the mongoose node module 
var mongoose = require('mongoose')

//connect to a local database 
//- use myAwesomeDB - mongo shell
// calling a method on the mongoose database

// mongoose.connect('mongodb://localhost/candyDB') // this is like saying use in mongo shell

// //let's us define how our collections look.  
// //we do this by developing a schema

// var candySchema = mongoose.Schema({//takes an object for an argument.  Schema is a contructor
// 	name			: {type: String, required : true},
// 	highfructose	: {type: Boolean, default : true},
// 	nuts			: Boolean,
// 	calories		: Number,
// 	sweetness		: Number,
// 	bestfriend		: String,
// });

// // entry point into Database collection
// var Candy = mongoose.model('Candy', candySchema) //calling a method on mongoose then call the model method.  


// var heathBar = new Candy({
// 	name : 'Heath Bar',
// 	highfructose : false,
// 	nuts : true,
// 	calories: 1020,
// 	sweetness: 8,
// 	bestfriend: 'Cadbury Egg'
// })

// var scoobyDoo = new Candy({
// 	name : 'Scooby Snack',
// 	highfructose : false,
// 	nuts : true,
// 	calories: 400,
// 	sweetness: 8,
// 	bestfriend: 'Cadbury Egg'
// })

// heathBar.save( function(err, data){   //once we create this we need to call a method to get it to the database.
// 	console.log('ERR : ', err)
// 	console.log('DATA : ', data)

// 	//super basic error handling.
// 	if(err){
// 		res.send('A candy with that email already exists')
// 	} else {
// 		res.send(data)
// 	}
// })

// FIND documents from the database
// db.collectionName.find()

// Candy.find({nuts: false}, function(err, candies){ // left empty to pull all candies in the database.
// 	console.log('Candy w/o nuts : ', candies)
// })

// Candy.find({calories : {$gt : 500}}, function(err, candies){ // left empty to pull all candies in the database.
// 	console.log('Candy w/o nuts : ', candies)
// })

// console.log('---------', allMyCandy)


// Candy
// .find
// .findOne -> most useful when using _id property to query 
// .update

// .populate -> used for populating referential data

// newDoc = new Candy({})
//.save -> used when constructing a new document










