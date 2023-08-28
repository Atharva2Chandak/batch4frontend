import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
import { API_PATHS, HTTP_METHODS } from "../const";
import { Item } from "../types/item";

export async function getItemById(itemId: string): Promise<Item> {
  const headers = new Headers();
  const token = Cookies.get("bearer-token") || "";
  headers.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.GET_ITEM_BY_ID + itemId, {
    method: HTTP_METHODS.GET,
    headers: headers,
  });
  const item = await response?.json();
  if(response.ok)
    return item as Item;
  else throw new Error(`${item.message} [${response.status}]`);
  
}

export async function getAllItems(): Promise<Item[]> {
  const headers = new Headers();
  const token = Cookies.get("bearer-token") || '';
  headers.append("Authorization", `Bearer ${token}`);
  const response = await fetch(API_PATHS.GET_ALL_ITEMS, {
    method: HTTP_METHODS.GET,
  })

  const employees = await response?.json();
  if(response.ok)
    return employees as Item[];
  else throw new Error(`${employees.message} [${response.status}]`)
}

export async function createItem(item: Item): Promise<Item> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = Cookies.get('bearer-token') || '';
  myHeaders.append('Authorization', `Bearer ${token}`);
  const body = JSON.stringify({
    id: item.id,
    itemValuation: item.itemValuation,
    itemMake: item.itemMake,
    itemCategory: item.itemCategory,
    issueStatus: item.issueStatus === "Yes" ? "1" : "0",
    itemDescription: item.itemDescription,
  });
  const response = await fetch(API_PATHS.CREATE_ITEM, {
    method: HTTP_METHODS.POST,
    headers: myHeaders,
    body: body,
    redirect: "follow",
  });
  const employee = await response.json();
  if(response.ok)
    return employee as Item;
  else throw new Error(`${employee.message} [${response.status}]`)
}

export async function deleteItem(itemId: string): Promise<string> {
  var headers = new Headers();
  const token = Cookies.get('bearer-token') || '';
  headers.append('Authorization', `Bearer ${token}`);
  const response = await fetch(API_PATHS.DELETE_ITEM + itemId, {
    method: HTTP_METHODS.DELETE,
    headers: headers,
    redirect: "follow",
  });

  if(response.ok) {
    const status = await response.text();
    return status as string;
  }
  else {
    const status = await response.json();
    throw new Error(`${status.message} ${response.status}`)
  }
}

export async function editItem(item: Item, itemId: string): Promise<Item> {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const token = Cookies.get('bearer-token') || '';
  myHeaders.append('Authorization', `Bearer ${token}`);
  const body = JSON.stringify({
    itemValuation: item.itemValuation,
    itemMake: item.itemMake,
    itemCategory: item.itemCategory,
    issueStatus:
      item.issueStatus === "Yes" || item.issueStatus === "1" ? "1" : "0",
    itemDescription: item.itemDescription,
  });
  console.log(body);

  const response = await fetch(API_PATHS.EDIT_ITEM + itemId, {
    method: HTTP_METHODS.PATCH,
    headers: myHeaders,
    body: body,
    redirect: "follow",
  });
  const employee = await response.json();
  if(response.ok)
    return employee as Item;
  else throw new Error(`${employee.message} [${response.status}]`)
}
