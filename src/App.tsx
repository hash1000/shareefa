import { Outlet } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner"

const App = () => {
  return (
    <div>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default App;
