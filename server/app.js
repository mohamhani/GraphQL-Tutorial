const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

/*Connect to mlab database*/
mongoose.connect('mongodb+srv://Mo:graph_ql@graphql-tutorial-onfqf.mongodb.net/test?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  // pass in a schema property
  schema,
  graphiql:true
}));

app.listen(8000, () => {
  console.log('now listening for requests on port 8000');
});
