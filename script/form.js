//Global variables
let jsonForm = [];


//this code will execute after page loading
$(document).ready(function () {
    let y = {};
    //take the file from the file.json
    takeFileFromJson();
});
/*
function showDataForTask(fileData) {
    let contact = fileData['contact'];
    console.log(contact);
    let standard = contact['standard'];
    console.log(standard);
    $.each(contact, function (key, value) {
        //console.log("this is key ----",key);
        //console.log("this is value---",value);
        //only one console.log();
        for (let i = 0; i < value.length; i++) {
            console.log(value[i]);

        }
    });
}

 */
        function takeFileFromJson() {
            $.ajax({
                type: "GET",
                async: "false",
                url: "data/file.json",
                success: function (response) {
                    //showDataForTask(response);
                    let dataFile =response;

                    for (let formValues of dataFile.contact.standard ) {
                        document.getElementById("formFile").innerHTML += formValues["field_name"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["marketing-in-one"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["email"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["datatype"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["required"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["html_label"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["html_placeholder"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["html_hidden_field"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["field_type"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["php_type"] + "</br>"
                        document.getElementById("formFile").innerHTML += formValues["regex"] + "</br>"
                        document.getElementById("formFile").innerHTML += "</br></br>"


                    }
                }
            });
        }





















