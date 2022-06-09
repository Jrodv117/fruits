const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {
	useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'You need to add a fruit name'],
	},
	rating: {
		type: Number,
		min: 1,
		max: 10,
	},
	review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
	name: 'apple',
	rating: 7,
	review: 'solid fruit',
});

// const banana = new Fruit({
// 	name: 'banana',
// 	rating: 7,
// 	review: 'solid fruit',
// });

// const kiwi = new Fruit({
// 	name: 'kiwi',
// 	rating: 9,
// 	review: 'solid fruit',
// });

// Fruit.insertMany([banana, kiwi], (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('success');
// 	}
// });

const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
	name: 'John',
	age: 37,
});

// person.save();

Fruit.find((err, fruits) => {
	//finds all of our fruit from fruits array
	if (err) {
		console.log(err);
	} else {
		console.log(fruits);
	}

	// mongoose.connection.close();

	//loops through our fruits array and forEach fruit prints out their name
	fruits.forEach((fruit) => {
		console.log(fruit.name);
	});
});

//updates an entry thats mising name field
// Fruit.updateOne(
// 	{ _id: '62a25587468393f4e9fcfbf5' },
// 	{ name: 'peach' },
// 	(err) => {
// 		if (!err) {
//             console.log('Update succesful');
//         } else {
// 			console.log(err);
// 		}
// 	}
// );

//deletes one entry with the mathing id condition
// Fruit.deleteOne({_id: '62a25587468393f4e9fcfbf5'}, (err) {
//     if(!err){
//         console.log(yes)
//     } else {
//         (err)
//     }
// })
