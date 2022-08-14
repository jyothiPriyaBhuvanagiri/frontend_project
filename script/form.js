
//$(document).ready(function(){
//click on button submit
//  $("#submit").on('click',
//    function () {

let form_data = new FormData();
$.ajax({
    type: "POST",
    url: "file.json",
    dataType: 'json',
    data: $("#form").serialize(),
    success: function (response) {
        console.log(response)
    }

});


let object = {


    contact: {
        standard: [
            {
                field_name: "email",
                "marketing-in-one": "email",
                email: "",
                datatype: "Email",
                required: 1,
                html_label: "Email",
                html_placeholder: "Email",
                html_hidden_field: 0,
                field_type: "Standard",
                php_type: "string",
                regex: "^[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*(.[a-z]{2,9})$"
            },
            {
                field_name: "last_name",
                "marketing-in-one": "last_name",
                last_name: "",
                datatype: "Text",
                required: 0,
                html_label: "Text",
                html_placeholder: "LastName",
                html_hidden_field: 0,
                field_type: "Standard",
                php_type: "string",
                regex: ".*"
            },
            {
                field_name: "last_name",
                "marketing-in-one": "last_name",
                last_name: "",
                datatype: "Text",
                required: 0,
                html_label: "Text",
                html_placeholder: "LastName",
                html_hidden_field: 0,
                field_type: "Standard",
                php_type: "string",
                regex: ".*"
            },
            {
                field_name: "salutation",
                "marketing-in-one": "salutation",
                salutation: "",
                datatype: "Text",
                required: 0,
                html_label: "Text",
                html_placeholder: "Salutation",
                html_hidden_field: 0,
                field_type: "Standard",
                php_type: "string",
                regex: ".*"
            },
            {
                field_name: "street",
                "marketing-in-one": "street",
                street: "",
                datatype: "Text",
                required: 0,
                html_label: "Text",
                html_placeholder: "Street",
                html_hidden_field: 0,
                field_type: "Standard",
                php_type: "string",
                regex: ".*"
            },
            {
                field_name: "phone",
                "marketing-in-one": "phone",
                phone: "",
                datatype: "Phone",
                required: 0,
                html_label: "Phone",
                html_placeholder: "Phone",
                html_hidden_field: 1,
                field_type: "Standard",
                php_type: "string",
                regex: "[0-9-/ ()+]*"
            }
        ]
    }
}



console.log(Object.keys(object))
console.log(Object.keys(object.contact.standard[0]))
console.log(Object.values(object.contact.standard[1]))
console.log(Object.values(object.contact.standard[2]))
console.log(Object.values(object.contact.standard[3]))
console.log(Object.values(object.contact.standard[4]))
console.log(Object.values(object.contact.standard[5]))


// for (let key of Object.keys(object.contact.standard[0])) {
//console.log(key);
// }










