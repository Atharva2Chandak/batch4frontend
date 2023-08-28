import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Autocomplete, Button, TextField, useTheme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { IEmployee } from "../types/employee";
import dayjs from "dayjs";
import { DEPARTMENTS, DESIGNATION, GENDER_DROPDOWN as GENDER } from "../const";
import { createEmployee } from "../services/http.services";
import { errorDetailsContext } from "../contexts/ErrorDetailsProvider";
import { IError } from "../types/IError";

export default function AddCustomerModal(props: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createdNewEmployee: number;
  setCreatedNewEmployee: React.Dispatch<React.SetStateAction<number>>;
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


  const [customer, setCustomer] = React.useState<
    IEmployee & { password: string }
  >(initialCustomerState);

  const handleClose = () => {
    setCustomer(initialCustomerState);
    setConfpass("");
    props.setModalOpen(false)
  };
  
  const [allgood, setAllgood] = React.useState<boolean>(false);
  const [confpass, setConfpass] = React.useState<string>("");
  const [, setGlobalError] = React.useContext(errorDetailsContext) as [IError, React.Dispatch<React.SetStateAction<IError>>];

  React.useEffect(() => {
    if (
      customer.password !== "" &&
      customer.password === confpass &&
      customer.name !== "" &&
      customer.gender !== "" &&
      customer.department !== "" &&
      customer.designation !== "" &&
      customer.doj !== "" &&
      customer.dob !== ""
    )
      setAllgood(true);
    else setAllgood(false);
  }, [customer, confpass]);

  return (
    <Modal
      id='modal'
      // keepMounted={false}
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
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            label='Employee Name'
          />
          <Autocomplete
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            disablePortal
            options={DEPARTMENTS}
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
              value={dayjs(customer.dob)}
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
              value={dayjs(customer.doj)}
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
        <Box sx={{ display: "flex" }}>
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            value={customer?.password || ""}
            onChange={(e) =>
              setCustomer({ ...customer, password: e.target.value })
            }
            label='Password'
            type='password'
          />
          <TextField
            color='secondary'
            sx={{ flex: 1, m: 2 }}
            value={confpass}
            onChange={(e) => setConfpass(e.target.value)}
            label='Confirm Password'
          />
        </Box>

        <Box>
          <Button
            variant='contained'
            color='secondary'
            sx={{ color: theme.palette.common.white, m: 2 }}
            disabled={!allgood}
            onClick={() => {              
              createEmployee(customer).catch(err=>setGlobalError({message: err, SnackBarOpen: true}));
              setCustomer(initialCustomerState);
              setConfpass("");
              props.setModalOpen(false)
              props.setCreatedNewEmployee(props.createdNewEmployee + 1);
            }}
          >
            Create Employee
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
