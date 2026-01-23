const role = "ADMIN";

switch (role){
    case ADMIN:
        console.log("Full Access.")
        break;
    case USER:
        console.log("Limited Access.")
        break;
    case MANAGER:
        console.log("Moderate Access.")
        break;
    default:
        console.log("Invalid role.")
        break;
} 