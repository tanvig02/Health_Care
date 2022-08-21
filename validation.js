function validation(){
    var name = document.forms["myForm"]["Name"];
    var gender = document.forms["myForm"]["Gender"];
    var symptom = document.forms["myForm"]["Symptoms"];
    var slot_time = document.forms["myForm"]["Slot_Time"];

    if(name.value == ""){
        window.alert("Please enter your Name");
        name.focus();
        return false;
    }

    if(gender.value == ""){
        window.alert("Please enter your Gender");
        gender.focus();
        return false;
    }

    if(symptom.value == ""){
        window.alert("Please enter your symptom");
        symptom.focus();
        return false;
    }

    if(slot_time.value == ""){
        window.alert("Please enter your slot time");
        slot_time.focus();
        return false;
    }

    return true;
    
} 