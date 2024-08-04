import {
  Box,
  Button,
  FormControl,
  Input,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";
import Footer from "./Footer";

// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
//       width: 580,
//     },
//   },
// };
const city = [
  "london",
  "Vienna,Austria",
  "Brussels,Belgium",
  "Berlin,Germany",
  "Full Europe",
  "Rome,Italy",
];

const Inputtxt = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    width: "calc(100% - 30px)",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 13,
    // width: '600px',
    margin: "2px 0 10px 0",
    padding: "10px 0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

// const Inputselect = styled(Select)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
//     border: '1px solid',
//     borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
//     fontSize: 13,
//     width: '600px',
//     margin:"2px 0 10px 0",
//     padding: '10px 12px',
//   },
// }));

const Contactus = () => {
  const [travel, setTravel] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTravel(typeof value === "string" ? value.split(",") : value);
  };
  // const [travel, setTravel] = useState();

  // const handleChange = (e) => {
  //   setTravel(e.target.value);
  // };

  return (
    <>
      <Paper
        component="form"
        
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "25ch" },
          width: { xs: "300px", sm: "400px", md: "800px" },
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          margin: "auto",
          height: "500px",
          borderRadius: "50px",
          marginTop: "50px",
        }}
      >
       
        <FormControl
          
          sx={{ width: "calc(100% - 30px)" }}
        >
          <Typography variant="caption" sx={{marginLeft:"20px",marginBottom:"5px"}}>Name</Typography>
          <OutlinedInput sx={{ width: "calc(100% - 30px)", height: "45px",display: "flex" ,alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              margin: "auto", }} defaultValue="Enter Your Name" />
        </FormControl>
        <FormControl variant="standard" sx={{ width: "calc(100% - 30px)",  m:{md:1}, bgcolor: "#fff"  }}>
          <Typography variant="caption" sx={{marginLeft:"20px",marginBottom:"5px"}}>
            Email
          </Typography>
          <OutlinedInput  sx={{ width: "calc(100% - 30px)", height: "45px",display: "flex" ,alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              margin: "auto", }} defaultValue="Example@gmail.com" />
        </FormControl>
        <FormControl variant="standard" sx={{ width: "calc(100% - 30px)",  bgcolor: "#fff"  }}>
          <Typography variant="caption" sx={{marginLeft:"20px",marginBottom:"5px"}}>
            Phone
          </Typography>
          <OutlinedInput sx={{ width: "calc(100% - 30px)", height: "45px",display: "flex" ,alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              margin: "auto", }} defaultValue="0123456789"/>
        </FormControl>
        {/* <FormControl  variant="standard" border="none" sx={{width: "calc(100% - 30px)"}}>
        <InputLabel shrink>
          Wich travel information would you like to recive?
        </InputLabel>
        <Inputselect
        sx={{width: "calc(100% - 30px)"}}
          //  defaultValue="Wich travel information would you like to recive?"
          value={travel}
          label="Wich travel information would you like to recive?"
          onChange={handleChange}
        >
          <MenuItem value={10}>london</MenuItem>
          <MenuItem value={20}>Vienna,Austria</MenuItem>
          <MenuItem value={30}>Brussels,Belgium</MenuItem>
          <MenuItem value={10}>Berlin,Germany</MenuItem>
          <MenuItem value={20}>Full Europe</MenuItem>
          <MenuItem value={30}>Rome,Italy</MenuItem>
        </Inputselect>
      </FormControl> */}
        <FormControl
          border="none"
          sx={[
            {  m:{ xs:2,md:3}, bgcolor: "#fff", width: "calc(100% - 30px)" },
            (theme) => ({
              transition: theme.transitions.create([
                "border-color",
                "background-color",
                "box-shadow",
              ]),
            }),
          ]}
        >
          <Select
            sx={{ width: "calc(100% - 30px)", height: "45px",display: "flex" ,alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              margin: "auto", }}
            multiple
            displayEmpty
            value={travel}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <span>Wich travel information would you like to recive?</span>
                );
              }

              return selected.join(", ");
            }}
            // MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {city.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "calc(100% - 30px)" ,  bgcolor: "#fff" }}>
          <Button
            variant="contained"
            sx={{ marginTop: "30px", width: "calc(100% - 30px)" ,height: "50px",display: "flex" ,alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              margin: "auto",textTransform: "capitalize"}}
          >
            Get Free Consultancy
          </Button>
        </FormControl>
       
      </Paper>
      {/* <Footer/> */}
    </>
  );
};

export default Contactus;
