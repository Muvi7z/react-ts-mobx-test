import React from 'react';
import {observer} from "mobx-react";
import Navbar from "./Components/Navbar";
import {Box, Container} from "@mui/material";
import {BrowserRouter, Link, Routes} from "react-router-dom";
import {ROUTES} from "./routes";
import {Route} from "react-router";

const App = observer(() => {
  return (
      <BrowserRouter>
          <Box sx={{ display: 'flex' }}>
              <Navbar />
              <React.Fragment>
                  <Container
                      maxWidth="lg"
                      sx={{
                          mt: '90px',
                      }}
                  >
                      <Routes>
                          {ROUTES.map((rout) => (
                              <Route key={rout.path} path={rout.path} element={rout.component} />
                          ))}
                      </Routes>
                  </Container >
              </React.Fragment>
          </Box>

      </BrowserRouter>
  )
})

export default App;
