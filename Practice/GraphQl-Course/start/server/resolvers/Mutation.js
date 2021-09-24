const {animals} = require('../db')

const {v4} = require('uuid')
const Mutation ={
	addAnimal:(parent, args, ctx)=>{
	const	{
				image,
			  	rating,
			  	price,
			  	discription,
			  	slug,
			  	stock,
			  	onSale,
			  	category,
		} = args
	 // console.log(args)
	 let newAnimal =	{
	 			id: v4(),
				image,
			  	rating,
			  	price,
			  	discription,
			  	slug,
			  	stock,
			  	onSale,
			  	category,
		}
		animals.push(newAnimal)
		console.log(newAnimal)

		return newAnimal
	 
	}
}
module.exports = Mutation
