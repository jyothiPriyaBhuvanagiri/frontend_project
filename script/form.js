//Global variables
let x = [];
let file = [];
//this code will execute after page loading
$(document).ready(function () {
    let y = {};
    //take the file from the file.json
    takeFileFromJson();
});


function showDataForTask(fileData) {
    /*
    console.log("This is data from the file.json",fileData);
    console.log("this is the type of fileData ---",typeof(fileData));
    console.log("this is the type of fileData ---",typeof(x));
    console.log("this is the type of fileData ---",typeof(y));
    */
    let contact = fileData['contact'];
    // console.log(contact);
    let standard = contact['standard'];
    //console.log(standard);
    $.each(contact, function (key, value) {

        //console.log("this is key ----",key);
        //console.log("this is value---",value);
        //only one console.log();
        for (let i = 0; i < value.length; i++) {
            console.log(value[i]);
        }
    });
}


function takeFileFromJson() {
    $.ajax({
        type: "GET",
        async: "false",
        url: "data/file.json",
        success: function (response) {
            showDataForTask(response);
        }
    });


    function learningFunction(a, b, c, d) {
//vadukovatam vachu anatadaniki example
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
    }
}


//console.log(Object.keys(object.contact.standard[0]))
//console.log(Object.values(object.contact.standard[1]))
//console.log(Object.values(object.contact.standard[2]))
//console.log(Object.values(object.contact.standard[3]))
//console.log(Object.values(object.contact.standard[4]))
//console.log(Object.values(object.contact.standard[5]))


// for (let key of Object.keys(object.contact.standard[0])) {
//console.log(key);
// }










