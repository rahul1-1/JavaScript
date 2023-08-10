// Fetch JSON data
(async function() {
    const data = await fetch("./data.json");
    const res = await data.json();

    // Initialize variables
    let employees = res;
    let selectedEmployeId = res[0].id;
    let selectedEmployee = res[0];
    let isEditMode = false;
    let editEmployeeId = null;


    // Get DOM elements
    const employeeList = document.querySelector(".employees__names--list");
    const employeeInfo = document.querySelector(".employee__single--info");
    const createEmployee = document.querySelector(".createEmployee");
    const addEmployeeModel = document.querySelector(".addEmployee");
    const addEmployeeForm = document.querySelector(".addEmployee__create");
    const dobInput = document.querySelector(".addEmployee__create--dob");

    // Event listener to show Add Employee form
    createEmployee.addEventListener("click", () => {
        addEmployeeForm.reset();
        addEmployeeModel.style.display = "flex";
    });

    // Event listener to close Add Employee form on background click
    addEmployeeModel.addEventListener("click", (e) => {
        if (e.target.className === "addEmployee") {
            addEmployeeModel.style.display = "none";
        }
    });

    // Event listener to handle form submission
    addEmployeeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if(isEditMode===true)
        {
           const editedEmp = {}
           const formData = new FormData(addEmployeeForm);
           const values = [...formData.entries()];
      
           values.forEach((val) => {
            editedEmp[val[0]] = val[1];
           });
           // Update the employee's data in the array
           editedEmp.id = editEmployeeId
        employees = employees.map(emp => (emp.id === editEmployeeId ? editedEmp : emp));
        
        // Reset the mode flag and editEmployeeId
        isEditMode = false;
        editEmployeeId = null;
        }
        else {
            const formData = new FormData(addEmployeeForm);
            const values = [...formData.entries()];
            let empData = {};
            values.forEach((val) => {
                empData[val[0]] = val[1];
            });
            empData.id = employees[employees.length - 1].id + 1;
            empData.age = new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
            empData.imageUrl = empData.imageUrl || "default-image-url";
            employees.push(empData);
        }
            renderEmployees();
            renderSingleEmployee();
            addEmployeeForm.reset();
            addEmployeeModel.style.display = "none";
         
    });

    // Set maximum date for Date of Birth input
    dobInput.max = `${new Date().getFullYear() - 18}-${new Date().toISOString().slice(5, 10)}`;

    // Event listener for employee list
    employeeList.addEventListener("click", (e) => {
        
        if (e.target.tagName === "SPAN" && selectedEmployeId !== e.target.id) {
            selectedEmployeId = e.target.id;
            renderEmployees();
            renderSingleEmployee();
        }
        
        if (e.target.tagName === "I" && e.target.className ==="employeeDelete") {
            
            // Handle employee deletion
            employees = employees.filter(emp => emp.id !== Number(e.target.parentNode.id));
            if (selectedEmployeId === e.target.parentNode.id) {
                selectedEmployeId = employees[0]?.id || -1;
                selectedEmployee = employees[0] || {};
                renderSingleEmployee();
            }

            renderEmployees();
        }
        if(e.target.tagName === "I" && e.target.className === "employeeEdit"){
            isEditMode = true;
           
            editEmployeeId = parseInt(e.target.parentNode.id);
            const selectedEditEmployee = employees.find(emp =>  emp.id === editEmployeeId);
            addEmployeeForm.firstName.value = selectedEditEmployee.firstName;
            addEmployeeForm.lastName.value = selectedEditEmployee.lastName;
            addEmployeeForm.imageUrl.value = selectedEditEmployee.imageUrl;
            addEmployeeForm.email.value = selectedEditEmployee.email;
            addEmployeeForm.contactNumber.value = selectedEditEmployee.contactNumber;
            addEmployeeForm.salary.value = selectedEditEmployee.salary;
            addEmployeeForm.address.value = selectedEditEmployee.address;
            addEmployeeForm.dob.value = selectedEditEmployee.dob
            addEmployeeModel.style.display = "flex";
        }

       
    });





    // Render employee list
    const renderEmployees = () => {
        employeeList.innerHTML = "";
        employees.forEach(emp => {
            const employee = document.createElement("span");
            employee.classList.add("employees__names--item");
            if (parseInt(selectedEmployeId, 10) === emp.id) {
                employee.classList.add("selected");
                selectedEmployee = emp;
            }
            employee.setAttribute("id", emp.id);
            employee.innerHTML = `${emp.firstName} ${emp.lastName}   <i class="employeeDelete">❌ </i> <i class="employeeEdit">✏️</i>`;
            employeeList.append(employee);
        });
    };

    // Render single employee details
    const renderSingleEmployee = () => {
        if (selectedEmployeId == -1) {
            employeeInfo.innerHTML = "";
            return;
        }
        employeeInfo.innerHTML = `
            <img src=${selectedEmployee.imageUrl}>
            <span class="employee__single--heading">${selectedEmployee.firstName} ${selectedEmployee.lastName} ${selectedEmployee.age}</span>
            <span>${selectedEmployee.address}</span>
            <span>${selectedEmployee.email}</span>
            <span>${selectedEmployee.contactNumber}</span>
            <span>${selectedEmployee.dob}</span>
        `;
    };

    // Initial rendering
    renderEmployees();
    renderSingleEmployee();
})();
