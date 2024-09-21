const mongoose = require('mongoose')

console.log(process.argv)

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://maxvhanamane:${password}@cluster0.1cbul.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', true)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
}, { strict: "throw" })

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'HTML is easy',
    important: false,
},)

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
}).catch(err => console.log("errrr aaya", err))
