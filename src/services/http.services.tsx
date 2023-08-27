// import { METHODS } from "http";
import Cookies from "js-cookie";
import { API_PATHS, HTTP_METHODS } from "../const";
import { IEmployee } from "../types/employee";
import { ILoan } from "../types/loan";
import { ISignInRes } from "../types/siginInRes.d";

// #################### Employee ###############################
export async function getAllEmployees() : Promise<IEmployee[]> {
  var myHeaders = new Headers();
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.GET_ALL_EMPLOYEES, {
    method: HTTP_METHODS.GET,
    headers: myHeaders
  }).catch(e=>console.log(e));
  const employees = await response?.json();
  return employees as IEmployee[];
}

export async function createEmployee(customer: IEmployee & {password: string}) : Promise<IEmployee> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
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
  const token = Cookies.get('bearer-token') || ''
  headers.append("Authorization", `Bearer ${token}`);
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
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
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
  const myHeaders = new Headers();
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.GET_EMPLOYEE_BY_ID + empId, {
    method: HTTP_METHODS.GET,
    headers: myHeaders
  }).catch(e=>console.log(e));
  const employee = await response?.json();
  return employee as IEmployee;
}

///######################## loans #########################
export async function getAllLoans() : Promise<ILoan[]> {
  const myHeaders = new Headers();
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.GET_ALL_LOANS, {
    method: HTTP_METHODS.GET,
    headers: myHeaders,
  }).catch(e=>console.log(e));
  const loans = await response?.json();
  return loans as ILoan[];
}

export async function createLoan(card: ILoan) : Promise<ILoan> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  const body = JSON.stringify({
    loanType: card.loanType,
    durationInYears: card.durationInYears
  })
  const response = await fetch(API_PATHS.CREATE_LOAN, {
    method: HTTP_METHODS.POST,
    headers: myHeaders,
    body: body,
    redirect: 'follow'
  }) 
  const loan = await response.json();
  return loan as ILoan;
}

export async function deleteLoan(loanID: string): Promise<string> {
  var headers = new Headers();
  const token = Cookies.get('bearer-token') || ''
  headers.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.DELETE_LOAN + loanID, {
    method: HTTP_METHODS.DELETE,
    headers: headers,
    redirect: 'follow'
  })

  const status = await response.text();
  return status as string;
}

export async function editLoan(card: ILoan, loanID: string) : Promise<ILoan> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  const body = JSON.stringify({
    loanType: card.loanType,
    durationInYears: card.durationInYears
  })
  const response = await fetch(API_PATHS.EDIT_LOAN + loanID, {
    method: HTTP_METHODS.PATCH,
    headers: myHeaders,
    body: body,
    redirect: 'follow'
  }) 
  const loan = await response.json();
  return loan as ILoan;
}

export async function getLoanById(loanID: string) : Promise<ILoan> {
  const myHeaders = new Headers();
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.GET_LOAN_BY_ID + loanID, {
    method: HTTP_METHODS.GET,
    headers: myHeaders
  }).catch(e=>console.log(e));
  const loan = await response?.json();
  return loan as ILoan;
}

// ##################### AUTH #################
export async function signIn(username: string, password: string) : Promise<ISignInRes>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = Cookies.get('bearer-token') || ''
  myHeaders.append("Authorization", `Bearer ${token}`);
  var raw = JSON.stringify({
    username,
    password
  });


  const res = await fetch(API_PATHS.SIGN_IN, {
    method: HTTP_METHODS.POST,
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })
  const signInRes = await res.json();
  return signInRes as ISignInRes;

}

