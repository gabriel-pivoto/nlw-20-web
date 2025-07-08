import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Room } from "./pages/room";
const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<CreateRoom />} index />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
