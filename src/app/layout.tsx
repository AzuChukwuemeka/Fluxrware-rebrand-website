import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Head from "next/head";
import { ViewportBoundary } from "next/dist/lib/framework/boundary-components";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
export const metadata = {
  title: "Fluxrware Website"
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout(props: Readonly<{ children: React.ReactNode;}>) {
  return (
      <html lang="en" className={roboto.variable}>
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
  );
}
