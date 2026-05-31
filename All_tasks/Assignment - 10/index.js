// Assignment 
// 2.
function exhauc(state) {
    switch (state.state) {
        case "loading":
            return state.data;
        case "success":
            return state.error;
        default:
            var exhaustive = state;
            return exhaustive;
    }
}
// 4.
function isSuccess(res) {
    return res.success;
}
function checkRes(res) {
    if (isSuccess(res)) {
        return res.data;
    }
    else {
        return "Error: ".concat(res.error);
    }
}
