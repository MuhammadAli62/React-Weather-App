import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({

  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          color:"#fff",
          textAlign:"center"
        }
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          color:"#fff",
          backgroundColor:"transparent",
        },
        icon:{
          color:"#fff",
        }
      }
    },
    MuiDivider:{
      styleOverrides:{
        root:{
          borderColor:"#fff"
        }
      }
    }

  }

})


theme = responsiveFontSizes(theme);
export default theme