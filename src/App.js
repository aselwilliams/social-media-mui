import {Box, Stack } from "@mui/system";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

function App() {

  return (
    <Box>
      {/* navbar */}
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
