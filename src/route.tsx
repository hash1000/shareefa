import { Outlet, Navigate, useLocation } from 'react-router-dom';
import usePersist from './hooks/usePersist';


 function App() {
    const [auth] = usePersist('AMS_AUTH');

    const location = useLocation();

    return auth && auth.role !== 'INSPECTORE' ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
}
export default App;