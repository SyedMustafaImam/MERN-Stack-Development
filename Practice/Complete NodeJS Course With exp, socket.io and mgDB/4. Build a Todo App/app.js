const express = require('express');
const app = express();
const item = require('./models/items.js');
const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://mustafa_list:mustafa123@clustertodo.f1yfn.mongodb.net/item-database?retryWrites=true&w=majority'

// Package for dymanic html
app.set('view engine', 'ejs');

// connecting to mongo db
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("Connected")
    app.listen(9090, () => { console.log('Listing at port 9090') });
}).catch(err => console.log(err));




app.use(express.static('src'));


app.get('/', (req, res) => {
    // res.sendFile('./pages/todo.html', { root: __dirname });
    // const items = [
    //     { name: "Rice", price: 180 },
    //     { name: "Tamato", price: 50 },
    //     { name: "Yougart", price: 45 }
    // ]
    // res.render('todo', { items })

    res.redirect('/get-items');
});

app.get('/get-items', (req, res) => {
    item.find().then(result => {
        res.render('todo', { items: result })

    }).catch(err => console.log(err));
})


app.get('/add-item', (req, res) => {
    // res.sendFile('./pages/add-item.html', { root: __dirname });
    res.render('add-item')
});



// Just for learing

// // Saving Items to the mongo db DataBase
// app.get('/create-item', (req, res) => {
//     const Item = new item({
//         name: 'Onin',
//         price: 200
//     });
//     Item.save().then(result => res.send(result)).catch(err => console.log(err));
// });

// // Select * from the DB (Like its showing the all the data of the specific field)
// app.get('/get-items', (req, res) => {
//     item.find().then(result => res.send(result)).catch(err => console.log(err));
// })

// // Now finding the element by the specific id. (in this case it will show the Rice data for id = 6046814be2778f104d2906e3)
// app.get('/get-item', (req, res) => {
//     item.findById('6046814be2778f104d2906e3').then(result => res.send(result)).catch(err => console.log(err));
// })


// Error Page Always at the end
app.use((req, res) => {
    res.render('error')
        // res.sendFile('./pages/error.html', { root: __dirname });
});