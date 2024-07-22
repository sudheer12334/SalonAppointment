export const validate = (customer) => {
    let errors = {};
    let regex = /^[A-Za-z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let pass = /[A-Za-z0-9]+[.-_@$^*]/;
    let user = /[a-z]+[0-9]/;

    if (!customer.name) {
        errors["nameErr"] = "Name is required !";
    }

    if (!customer.userName) {
        errors.userName = "UserName is required !";
    } else if (!user.test(customer.userName)) {
        errors.userName = "User Name Must include Letters and Numbers!";
    }

    if (!customer.email) {
        errors.email = "Email is required !";
    } else if (!regex.test(customer.email)) {
        errors.email = "Invalid Email !";
    }

    if (!customer.userPassword) {
        errors["userPassword"] = "Password is required.";
    } else if (!pass.test(customer.userPassword)) {
        errors.userPassword = "Password Must End with a Special character(.-_@$^*)";
    }
    if (!customer.contactNo) {
        errors["contactNo"] = "Contact Number is required !";
    }
    if (!customer.dob) {
        errors["dob"] = "DOB is required !";
    }
    if (!customer.doorNo) {
        errors["doorNo"] = "Door Number is required !";
    }
    if (!customer.street) {
        errors["street"] = "Street is required !";
    }
    if (!customer.area) {
        errors["area"] = "Area is required !";
    }
    if (!customer.city) {
        errors["city"] = "City is required !";
    }
    if (!customer.state) {
        errors["state"] = "State is required !";
    }
    if (!customer.pincode) {
        errors["pincode"] = "Pincode is required !";
    }
    return errors;
}
