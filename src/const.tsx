import { createTheme } from "@mui/material"

export const HTTP_METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
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
  GET_EMPLOYEE_BY_ID: `${API_BASE_URL}/employee/`,


  GET_ALL_ITEMS: `${API_BASE_URL}/item/all`,
  GET_ITEM_BY_ID: `${API_BASE_URL}/item/`,
  CREATE_ITEM: `${API_BASE_URL}/item/create/`,
  EDIT_ITEM: `${API_BASE_URL}/item/update/`,
  DELETE_ITEM: `${API_BASE_URL}/item/delete/`,

  GET_ALL_LOANS: `${API_BASE_URL}/loan/all/`,
  CREATE_LOAN: `${API_BASE_URL}/loan/create/`,
  EDIT_LOAN:  `${API_BASE_URL}/loan/update/`,
  DELETE_LOAN:  `${API_BASE_URL}/loan/delete/`,
  GET_LOAN_BY_ID:  `${API_BASE_URL}/loan/`,

  SIGN_IN: `${API_BASE_URL}/auth/signin/`,

}

export const GENDER_DROPDOWN = [
  'male', 'female'
]

export const DEPARTMENTS = [
  'CT',
  'DTI',
  'HR',
  'LnD',
  'Cyber Sec',
  'CTO'
]

export const DESIGNATION = [
  'Program Associate',
  'Software Engineer',
  'Senior Software Engineer',
  'Manager',

]

export const USER_ROLES = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER',
}