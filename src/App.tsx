import React from 'react';
import {observer} from "mobx-react";
import {counterStore} from "./Store/counter.store";
import UsersList from "./Components/UsersList";
import Navbar from "./Components/Navbar";
import {Box} from "@mui/material";

const App = observer(() => {
  return (
      <div>
          <Box sx={{ display: 'flex' }}>
              <Navbar />
              <UsersList/>
          </Box>

      </div>
  )
})

export default App;
