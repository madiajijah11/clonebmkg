import "./App.css";
import SearchAppBar from "./components/AppBar/AppBar";
import { Container, Typography } from "@mui/material";
import Gempa from "./components/Gempa/Gempa";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <QueryClientProvider client={queryClient}>
          <Gempa />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </Container>
      <footer style={{ paddingBottom: 20 }}>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          align="center"
          component="p"
        >
          © All rights reserved made by GenzoDR
        </Typography>
      </footer>
    </div>
  );
}

export default App;
