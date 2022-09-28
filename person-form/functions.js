function createHeaderFragment(){
    return `
        <tr>
            <th onclick="sortByFirstName()">Firstname</th>
            <th onclick="sortByLastName()">Lastname</th>
            <th onclick="sortBySalary()">Salary</th>
        </tr>
    `;
}

function createEmployeeListFragment(pEmployeeList){
    const html = pEmployeeList.map((emp) => `
                                        <tr>
                                            <td>${emp.firstName}</td>
                                            <td>${emp.lastName}</td>
                                            <td>${emp.salary}</td>
                                            <td onclick="deleteEmployee(${emp.id})">sil</td>
                                        </tr>
                                    `);
    return html.join("");
}

function createCaptionFragment(){
    return `<caption>ABC sirketinin calisanlari ve maaslari</caption>`;
}

function createTableFragment(pEmployeeList){
    return `
        <table>
            ${createCaptionFragment()}

            ${createHeaderFragment()}

            ${createEmployeeListFragment(pEmployeeList)}
        </table>
    `;
}

// main definition
function render(pEmployeeList){
    return createTableFragment(pEmployeeList);
}

