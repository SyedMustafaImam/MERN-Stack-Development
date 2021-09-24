const {mainCards, animals, categories} = require('../db');

const  Query = {
    mainCards:() => mainCards,
    animals:()=> animals,

    animal: (parent, args, {animals})=> {
	    //console.log('args =>', args.slug);
	    let animalSearch = animals.find((animal)=>{
	    	return animal.slug === args.slug
	     })
	     
    	 return animalSearch
    },
    
  	categories: ()=> categories,

  	category: (parent, args, {categories})=> {
	   // console.log('args =>', args.slug);
	    let categorySearch = categories.find((category)=>{
	    	return category.slug === args.slug
	     });
	     
    	 return categorySearch;
    },
  }
  module.exports = Query
