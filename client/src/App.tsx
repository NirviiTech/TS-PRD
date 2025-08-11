// App.tsx ✅ no Router here
import { AuthProvider } from './context/AuthContext.js';
import AppRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
