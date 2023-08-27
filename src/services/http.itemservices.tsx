import { API_PATHS, HTTP_METHODS } from "../const";

import { Item } from "../types/item";


export async function getItemById(itemId: string) : Promise<Item> {
    const response = await fetch(API_PATHS.GET_ITEM_BY_ID + itemId, {
      method: HTTP_METHODS.GET,
    }).catch(e=>console.log(e));
    const item = await response?.json();
    return item as Item;
}

export async function getAllItems() : Promise<Item[]> {
    const response = await fetch(API_PATHS.GET_ALL_ITEMS, {
        method: HTTP_METHODS.GET,
    }).catch(e=>console.log(e));
    const employees = await response?.json();
    return employees as Item[];
}

export async function createItem(item: Item ) : Promise<Item> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        id: item.id,
        itemValuation: item.itemValuation,
        itemMake: item.itemMake,
        itemCategory: item.itemCategory,
        issueStatus: item.issueStatus=="Yes"?'1':'0',
        itemDescription: item.itemDescription,
    })
    const response = await fetch(API_PATHS.CREATE_ITEM, {
        method: HTTP_METHODS.POST,
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    }) 
    const employee = await response.json();
    return employee as Item;
}

export async function deleteItem(itemId: string): Promise<string> {
    var headers = new Headers();
    const response = await fetch(API_PATHS.DELETE_ITEM + itemId, {
        method: HTTP_METHODS.DELETE,
        headers: headers,
        redirect: 'follow'
    })

    const status = await response.text();
    return status as string;
}

export async function editItem(item: Item, itemId: string) : Promise<Item> {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        itemValuation: item.itemValuation,
        itemMake: item.itemMake,
        itemCategory: item.itemCategory,
        issueStatus: item.issueStatus=="Yes"||item.issueStatus=="1"?'1':'0',
        itemDescription: item.itemDescription
    })
    console.log(body)

    const response = await fetch(API_PATHS.EDIT_ITEM + itemId, {
        method: HTTP_METHODS.PATCH,
        headers: myHeaders,
        body: body,
        redirect: 'follow'
    }) 
    const employee = await response.json();
    return employee as Item;
}
