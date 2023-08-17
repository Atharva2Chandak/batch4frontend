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