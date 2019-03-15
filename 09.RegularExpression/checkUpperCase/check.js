function checkFirstLetterOf(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("The first character of string is an uppercase");
    }
    else {
        console.log("The first character of string is not an uppercase");
    }
}