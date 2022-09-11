const express = require('express');
const fs = require('fs');

const app = express();
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'hello from server side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You may post to this url...');
// });

//-------------API------------------------

const tours=JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) =>{
    res.status(200).json({
        status:'sucess',
        data:{
            "message":"hii"
        }
    })
})

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
