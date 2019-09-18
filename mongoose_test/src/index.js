const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongoose_test", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we're connected");
});

// With Mongoose, everything is derived from a Schema.
const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function(){
  var geeting = this.name ?
    'Meow name is ' + this.name:
    'I don\'t have a name'
  console.log(geeting)
}

// compiling our schema into a Model.
const Kitten = mongoose.model("Test", kittySchema);
const silence = new Kitten({ name: "Silence", 'tewt':'xxx' });
silence.save((err, self)=>{
  if(err) return console.error(err)
  console.log(self)
})

