// import { METHODS } from "http";
import { API_PATHS, HTTP_METHODS } from "../const";
import { IEmployee } from "../types/employee";

export async function getAllEmployees() : Promise<IEmployee[]> {

  const response = await fetch(API_PATHS.GET_ALL_EMPLOYEES, {
    method: HTTP_METHODS.GET,
  }).catch(e=>console.log(e));
  const employees = await response?.json();
  return employees as IEmployee[];
}

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