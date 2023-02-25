
let num = 0;
var tableData = [];




var addRow = document.getElementById('addRow');
addRow.addEventListener("click", function () {
    num++;
    var row = document.createElement("tr");
    var tData1 = document.createElement("td");
    tData1.textContent = num;
    row.appendChild(tData1);


    var studentName = document.createElement("input");
    studentName.setAttribute("type", "text");
    // studentName.setAttribute("name", "username");
    studentName.setAttribute("id", "sName");
    studentName.setAttribute("required", "");
    var tData2 = document.createElement("td");
    tData2.appendChild(studentName);
    row.appendChild(tData2);
    // console.log(studentName);
    // console.log(row);

    var studentRoll = document.createElement("input");
    studentRoll.setAttribute("type", "number");
    // studentRoll.setAttribute("name", "roll");
    studentRoll.setAttribute("id", "rollNum");
    studentRoll.setAttribute("required", "true");
    var tData3 = document.createElement("td");
    tData3.appendChild(studentRoll);
    row.appendChild(tData3);

    var subject = document.createElement("input");
    subject.setAttribute("type", "text");
    // subject.setAttribute("name", "subject");
    subject.setAttribute("required", "true");
    var tData4 = document.createElement("td");
    tData4.appendChild(subject);
    row.appendChild(tData4);

    var marks = document.createElement("input");
    marks.setAttribute("type", "number");
    // marks.setAttribute("name", "marks");
    marks.setAttribute("required", "true");
    var tData5 = document.createElement("td");
    tData5.appendChild(marks);
    row.appendChild(tData5);

    var markedBy = document.createElement("input");
    markedBy.setAttribute("type", "email");
    // markedBy.setAttribute("name", "email");
    markedBy.setAttribute("required", "true");
    var tData6 = document.createElement("td");
    tData6.appendChild(markedBy);
    row.appendChild(tData6);

    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.type = "submit";
    saveBtn.addEventListener("click", function () {
        // alert("save Array");
        let row = document.querySelector("table").rows[tableData.length+1];
        // console.log(row);
        let inputs = document.querySelectorAll('input');
        // console.log(inputs.length);
        let obj ={
            id : num,
            student_name : inputs[inputs.length-5].value,
            student_roll : inputs[inputs.length-4].value,
            subject : inputs[inputs.length-3].value,
            marks : inputs[inputs.length-2].value,
            markedBy : inputs[inputs.length-1].value
        }
        console.log(obj);
        tableData.push(obj);
        console.log(tableData);
        // for(let i=0;i<inputs.length;i++){
        //     console.log(inputs[i].value);
        // }
    })
    // saveBtn.onsubmit = addToArray;
    saveBtn.id = "saveClick";
    var tData7 = document.createElement("td");
    tData7.appendChild(saveBtn);
    row.appendChild(tData7);

    // var tabForm = document.createElement("form");
    // tabForm.appendChild(row)

    var tableBody = document.getElementById("tBody");
    tableBody.appendChild(row);
});

// var save = document.getElementById()












/*

let num = 1;
var array = [];




var addRow = document.getElementById('addRow');
addRow.addEventListener("click", function () {
    num++;
    var row = document.createElement("tr");
    var tData1 = document.createElement("td");
    tData1.textContent = num;
    row.appendChild(tData1);


    var studentName = document.createElement("input");
    studentName.setAttribute("type", "text");
    studentName.setAttribute("name", "username");
    studentName.setAttribute("id", "sName");
    studentName.setAttribute("required", "");
    var tData2 = document.createElement("td");
    tData2.appendChild(studentName);
    row.appendChild(tData2);
    // console.log(studentName);
    // console.log(row);

    var studentRoll = document.createElement("input");
    studentRoll.setAttribute("type", "number");
    studentRoll.setAttribute("name", "roll");
    studentRoll.setAttribute("id", "rollNum");
    studentRoll.setAttribute("required", "true");
    var tData3 = document.createElement("td");
    tData3.appendChild(studentRoll);
    row.appendChild(tData3);

    var subject = document.createElement("input");
    subject.setAttribute("type", "text");
    subject.setAttribute("name", "subject");
    subject.setAttribute("required", "true");
    var tData4 = document.createElement("td");
    tData4.appendChild(subject);
    row.appendChild(tData4);

    var marks = document.createElement("input");
    marks.setAttribute("type", "number");
    marks.setAttribute("name", "marks");
    marks.setAttribute("required", "true");
    var tData5 = document.createElement("td");
    tData5.appendChild(marks);
    row.appendChild(tData5);

    var markedBy = document.createElement("input");
    markedBy.setAttribute("type", "email");
    markedBy.setAttribute("name", "email");
    markedBy.setAttribute("required", "true");
    var tData6 = document.createElement("td");
    tData6.appendChild(markedBy);
    row.appendChild(tData6);

    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.type = "submit";
    // saveBtn.onsubmit = addToArray;
    saveBtn.id = "saveClick";
    var tData7 = document.createElement("td");
    tData7.appendChild(saveBtn);
    row.appendChild(tData7);

    // var tabForm = document.createElement("form");
    // tabForm.appendChild(row)

    var tableBody = document.getElementById("tBody");
    tableBody.appendChild(row);
});

// var save = document.getElementById()


// saveBtn.addEventListener("click", function () {
//     alert("save Array");
// })
 */



































// var row = document.createElement("tr");
// let num= 1;
// var tData1 = document.createElement("td");
// tData1.appendChild(num);
// row.appendChild(tData1);


// var studentName = document.createElement("input");
// studentName.setAttribute("type", "text");
// studentName.setAttribute("name", "username");
// studentName.setAttribute("required", "true");
// var tData2 = document.createElement("td");
// tData2.appendChild(studentName);
// row.appendChild(tData2);

// var studentRoll = document.createElement("input");
// studentRoll.setAttribute("type", "number");
// studentRoll.setAttribute("name", "roll");
// studentRoll.setAttribute("required", "true");
// var tData3 = document.createElement("td");
// tData3.appendChild(studentRoll);
// row.appendChild(tData3);

// var subject = document.createElement("input");
// subject.setAttribute("type", "text");
// subject.setAttribute("name", "subject");
// subject.setAttribute("required", "true");
// var tData4 = document.createElement("td");
// tData4.appendChild(Subject);
// row.appendChild(tData4);

// var marks = document.createElement("input");
// marks.setAttribute("type", "number");
// marks.setAttribute("name", "marks");
// marks.setAttribute("required", "true");
// var tData5 = document.createElement("td");
// tData5.appendChild(marks);
// row.appendChild(tData5);

// var markedBy = document.createElement("input");
// markedBy.setAttribute("type", "email");
// markedBy.setAttribute("name", "email");
// markedBy.setAttribute("required", "true");
// var tData6 = document.createElement("td");
// tData6.appendChild(markedBy);
// row.appendChild(tData6);

// var saveBtn = document.createElement("button");
// saveBtn.textContent = "Save";
// var tData7 = document.createElement("td");
// tData7.appendChild(saveBtn);
// row.appendChild(tData7);
// saveBtn.addEventListener("click", function() {
//     alert("Button clicked!");
//   });

// var tableBody = document.getElementById(tBody);
// tableBody.appendChild(row);
