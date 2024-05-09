import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";



const RootLayout = ({children} : {children: any}) => {
  return (
    <>
        <Navbar />
            <Box className="rootlayout-container" pb={{xs: 'calc(30vh + 6rem)', md: 'calc(20vh + 6rem)'}}>
            {children}
            </Box>
        <Footer />
    </>
  );
}

export default RootLayout;