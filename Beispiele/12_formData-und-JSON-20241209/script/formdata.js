(function init(){
    "use strict";

    const form = document.forms[0];
    // const data = new FormData();
    // console.log(data);

    const submit = document.querySelector("[type=submit]");
    submit.addEventListener("click",
                            e=> {
                                e.preventDefault();
                                let fData = new FormData(form);
                                // console.log(fData);
                            },
                            false
    );

    form.addEventListener("formdata",
                            e =>{
                                let data = e.formData;
                                console.log(data);
                                console.log(data.entries);
                                for(let value of data.entries()){
                                    console.log(value);
                                    // console.log(value[0]);
                                }
                                for(let value of data.entries()){
                                    data[value[0]] = value[1];
                                }
                                let JSONformData = JSON.stringify(data);
                                console.log(JSONformData);
                            },
                            false
    );
})();