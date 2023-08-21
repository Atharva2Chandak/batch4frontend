// import { METHODS } from "http";
import { API_PATHS, HTTP_METHODS } from "../const";
import { IEmployee } from "../types/employee";
import { ILoan } from "../types/loan";

export async function getAllEmployees() : Promise<IEmployee[]> {

  const response = await fetch(API_PATHS.GET_ALL_EMPLOYEES, {
    method: HTTP_METHODS.GET,
  }).catch(e=>console.log(e));
  const employees = await response?.json();
  return employees as IEmployee[];
}

export async function getAllLoans() : Promise<ILoan[]> {

  const response = await fetch(API_PATHS.GET_ALL_LOANS, {
    method: HTTP_METHODS.GET,
  }).catch(e=>console.log(e));
  const loans = await response?.json();
  return loans as ILoan[];
export async function createEmployee(customer: IEmployee & {password: string}) : Promise<IEmployee> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    name: customer.name,
    password: customer.password,
    department: customer.department,
    designation: customer.designation,
    gender: customer.gender ? customer.gender[0] : 'm', 
    dob: customer.dob,
    doj: customer.doj
  })
  const response = await fetch(API_PATHS.CREATE_EMPLOYEE, {
    method: HTTP_METHODS.POST,
    headers: myHeaders,
    body: body,
    redirect: 'follow'
  }) 
  const employee = await response.json();
  return employee as IEmployee;
}

export async function deleteEmployee(empId: string): Promise<string> {
  var headers = new Headers();
  const response = await fetch(API_PATHS.DELETE_EMPLOYEE + empId, {
    method: HTTP_METHODS.DELETE,
    headers: headers,
    redirect: 'follow'
  })

  const status = await response.text();
  return status as string;
}

export async function editEmployee(customer: IEmployee, empId: string) : Promise<IEmployee> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    name: customer.name,
    department: customer.department,
    designation: customer.designation,
    gender: customer.gender ? customer.gender[0] : 'm', 
    dob: customer.dob,
    doj: customer.doj
  })
  const response = await fetch(API_PATHS.EDIT_EMPLOYEE + empId, {
    method: HTTP_METHODS.PATCH,
    headers: myHeaders,
    body: body,
    redirect: 'follow'
  }) 
  const employee = await response.json();
  return employee as IEmployee;
}

export async function getEmployeeById(empId: string) : Promise<IEmployee> {
  const response = await fetch(API_PATHS.GET_EMPLOYEE_BY_ID + empId, {
    method: HTTP_METHODS.GET,
  }).catch(e=>console.log(e));
  const employee = await response?.json();
  return employee as IEmployee;
}