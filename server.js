const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const port = process.env.PORT || 6000;


let exams = [];

app.post('/addExam', (req, res) => {
    let examID = req.body.examID;
    let examType = req.body.examType;
    let studentID = req.body.studentID;
    let examContent = req.body.examContent;

    let newExam = {'examID': examID,
                   'examType': examType,
                   'studentID': studentID,
                   'examContent': examContent};
    exams.push(newExam);
    res.json(newExam);
});
app.listen(port);
console.log("Server started on port " + port);