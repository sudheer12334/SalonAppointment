export const validateAddService = (service) => {
    let errors = {}

    if(!service.serviceName){
        errors["serviceNameErr"]="Service Name required ";
    }
    if(!service.price){
        errors["priceErr"]="Price required ";
    }
    if(!service.duration){
        errors["durationErr"]="Duration required ";
    }
    if(!service.discount){
        errors["discountErr"]="Discount required give as 0 if no discount";
    }
    if(!service.image){
        errors["imageErr"]="Image Required";
    }
    return errors;
}
export const validateAppointment = (appointment) => {
    let errors = {}

    if(!appointment.date){
        errors["dateErr"]="Date required ";
    }
    if(!appointment.time){
        errors["timeErr"]="Time preference required for Hassle-Free Services";
    }
    if(!appointment.location){
        errors["locationErr"]="location required ";
    }
    return errors;
}