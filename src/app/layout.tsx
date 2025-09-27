import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Poppins, Roboto, Work_Sans } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { ToastContainer } from "react-toastify";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-poppins',
})
export const metadata = {
  title: "Fluxrware Website"
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout(props: Readonly<{ children: React.ReactNode;}>) {  
  return (
      <html lang="en" className={poppins.variable}>
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {props.children}
              <ToastContainer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
  );
}