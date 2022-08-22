import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";

function Layout({ title, description, children }: any) {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#f0c000",
      },

      secondary: {
        main: "#208080",
      },
    },
  });
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Sanity Smartify` : "Sanity Smartify"}
        </title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static'>
          <Toolbar>
            <NextLink href='/' passHref>
              <Link>
                <h1 className='text-blue-500'>Smartify</h1>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>

        <Container component='main'>{children}</Container>
        <Box component='footer' className='text-blue-500'>
          <h1>All rights reserved, Sanity Smartify</h1>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Layout;
