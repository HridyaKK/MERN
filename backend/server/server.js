const express=require('express');
const app=express();

const books = [{ id: 1, title: "Book 1", author: "Author 1" },
{ id: 2, title: "Book 2", author: "Author 2" },
{ id: 3, title: "Book 3", author: "Author 3" },
]
app.get('/getbooks', (req, res) => {
    res.json(books);
});

app.post("/addbooks", (req, res) => {
    const book = req.body;
    books.push(book);
    res.send("Book added successfully");
})
app.get('/', (req, res) => {
  res.send('Library API is running');
});
const port=5000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port 5000`);
  console.log('Get Books: http://localhost:' + port + '/getbooks');
});