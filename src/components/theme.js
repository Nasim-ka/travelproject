import { createTheme} from '@mui/material/styles';
import { deepOrange, grey } from '@mui/material/colors';




export const theme = createTheme({
    typography:{
      fontFamily:"roboto",
    },
    palette : {
        primary : {
        main: "#cecac5",
        light: '#cecac5',
        dark: '#1565c0',
        contrastText: '#fff',
          }, 
          success:{
            main:grey[900],
          },
          secondary: {
            main: '#edf2ff',
          },
      },
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    
  });
