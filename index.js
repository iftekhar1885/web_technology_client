const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data/Course.json');

app.get('/', (req, res) =>{
    res.send('Web API Running');
});

app.get('/course-categories', (req, res)=> {
    res.send(categories)

})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courses.find( c => c._id === id);
    res.send(selectedCourse);

})

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '08'){
        res.send(courses)
    }
    else{
        const category_course = courses.filter( c => c.category_id === id);
        res.send(category_course);
    }
    
})
app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.listen(port, () =>{
    console.log('web technology server running on port', port);
})
app.get('/new')