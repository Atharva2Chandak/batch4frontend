import { createTheme } from "@mui/material"

export const HTTP_METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
}


export const THEME = createTheme({
  palette: {
    primary: {
      main: '#0B3954'
    },
    secondary: {
      main: '#FF6663'
    },
    common: {
      white: '#FEFFFE'
    }
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif"
  }
})

export const APP_PATHS = {
  HOME: '/',
  USER : {
    LOGIN: '/user/login/',
    DASHBOARD: '/user/dashboard/',
    LIST_LOANS: '/user/listloans/',
    LIST_ITEMS_PURCHASED: '/user/listitemspurchased/'
  },
  ADMIN: {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin/dashboard/',
    LIST_CUSTOMERS: '/admin/managecustomers/',
    LIST_LOANS: '/admin/manageloans/',
    LIST_ITEMS: '/admin/manageitems/'
  }
}

// append the user's name at the end as the seed param
export const AVATAR_BASE_URL='https://api.dicebear.com/6.x/initials/svg?seed='


const API_BASE_URL='http://localhost:8080/api'

export const API_PATHS = {
  GET_ALL_EMPLOYEES: `${API_BASE_URL}/employee/all`,
  CREATE_EMPLOYEE: `${API_BASE_URL}/employee/create`,
  EDIT_EMPLOYEE: `${API_BASE_URL}/employee/update/`,
  DELETE_EMPLOYEE: `${API_BASE_URL}/employee/delete/`,
}