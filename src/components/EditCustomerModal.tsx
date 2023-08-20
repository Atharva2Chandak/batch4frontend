import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, TextField, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IEmployee } from "../types/employee";
import dayjs from "dayjs";
import { DEPARTMENTS, DESIGNATION, GENDER_DROPDOWN as GENDER } from "../const";
import { editEmployee, getEmployeeById } from "../services/http.services";

export default function EditCustomerModal(props: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createdNewEmployee: number;
  setCreatedNewEmployee: React.Dispatch<React.SetStateAction<number>>;
  customerId: string;
}): React.JSX.Element {
  const theme = useTheme();

  const initialCustomerState = {
    name: "",
    department: "",
    designation: "",
    gender: "",
    dob: "",
    doj: "",
    password: "",
  };

  React.useEffect(() => {
    getEmployeeById(props.customerId).then(employee => setCustomer(employee))
  }, [props.customerId])
  

  const [customer, setCustomer] = React.useState<
    IEmployee
  >(initialCustomerState);

  const handleClose = () => {
    props.setModalOpen(false)
  };
  
  const [allgood, setAllgood] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
      customer?.name !== "" &&
      customer?.gender !== "" &&
      customer?.department !== "" &&
      customer?.designation !== "" &&
      customer?.doj !== "" &&
      customer?.dob !== ""
    )
      setAllgood(true);
    else setAllgood(false);
  }, [customer]);

  return (
    <Modal
      id='modal'
      keepMounted={false}
      open={props.modalOpen}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
        }}
        component='form'
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            value={customer?.name || ""}
            disabled
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            label='Employee Name'
          />
          <Autocomplete
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            disablePortal
            options={DEPARTMENTS}
            defaultValue={customer?.department}
            onChange={(e, newVal) =>
              setCustomer({ ...customer, department: newVal as string })
            }
            renderInput={(params) => (
              <TextField color='secondary' {...params} label='Department' />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Autocomplete
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            disablePortal
            options={DESIGNATION}
            defaultValue={customer?.designation}
            onChange={(e, newVal) =>
              setCustomer({ ...customer, designation: newVal as string })
            }
            renderInput={(params) => (
              <TextField color='secondary' {...params} label='Designation' />
            )}
          />
          <Autocomplete
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            disablePortal
            options={GENDER}
            defaultValue={customer?.gender}
            onChange={(e, newVal) =>
              setCustomer({ ...customer, gender: newVal as string })
            }
            renderInput={(params) => (
              <TextField color='secondary' {...params} label='Gender' />
            )}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {/* <TextField color='secondary' sx={{ flex: 1, m: 2 }} label='DOB' /> */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label='DOB'
              sx={{ flex: 1, m: 2 }}
              value={dayjs(customer?.dob)}
              onChange={(e) =>
                setCustomer({ ...customer, dob: e?.format("DD-MM-YYYY") })
              }
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
            />
            <DatePicker
              label='DOJ'
              sx={{ flex: 1, m: 2 }}
              value={dayjs(customer?.doj)}
              onChange={(e) => {
                setCustomer({ ...customer, doj: e?.format("DD-MM-YYYY") });
                console.log(customer);
              }}
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
            />
          </LocalizationProvider>
        </Box>
        

        <Box>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: theme.palette.common.white, m: 2 }}
            disabled={!allgood}
            onClick={() => {
              editEmployee(customer, props.customerId)
              props.setModalOpen(false)
              props.setCreatedNewEmployee(props.createdNewEmployee + 1);
            }}
          >
            Update Employee
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
