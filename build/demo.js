"use strict";
class Employee {
    constructor(empid, empname, empdesignation, empsalary, empproject) {
        this.empid = empid;
        this.empname = empname;
        this.empdesignation = empdesignation;
        this.empsalary = empsalary;
        this.empproject = empproject;
    }
    getempdetail() {
        console.log("employee id=" + this.empid +" "+ "employee name:" + this.empname +" "+ "employee designation:" + this.empdesignation +" "+ "employee salary:" + this.empsalary +" "+ "employee project:" + this.empproject);
    }
}
const emp = new Employee(15, "Siva", "Developer", 20000, "angular");
emp.getempdetail();
