/**
 * Analysis
 * 
 * 1) Write html code with some dummy data
 * 2) Find fragments from the html
 * 3) Move the fragments into JS as functions
 */
 const appContainer = document.querySelector("#app");

// call render function
const resultHtml = render(employeeList);
appContainer.innerHTML = resultHtml;

