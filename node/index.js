const express = require('express')
const app = express()
const port = 3000
const peopleRepository = require('./repositories/peopleRepository')

// Routes
const repository = new peopleRepository();
repository.init();

app.get('/', (req, res) => {
    // Adding a person to DB
    repository.addPerson("Adriano");

    // Getting people from DB
    repository.getPeople((people) => {
        console.log(`2. people = ${people}`);

        let peopleList = [];
        people.forEach(person => {
            peopleList += `<br><h5>${person.name}</h5>`
        });

        console.log(`3. peopleList = ${peopleList}`);

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            ${peopleList}
        `)
    });
})

app.get('/name/:name', (req, res) => {
    const { name } = req.params;
    repository.addPerson(name);

    res.send(`<h1>Nome cadastrado: ${name}</h1>`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})