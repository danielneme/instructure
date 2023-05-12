import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


import { TaskContextProvider } from "./context/TaskProvider";
import { RegionContextProvider } from "./context/RegionProvider";
import { PersonaContextProvider } from "./context/PersonaProvider";

import NotFound from "./pages/NotFound";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import RegionForm from "./pages/RegionesForm";
import RegionesPage from "./pages/RegionesPage";
import PersonasPage from "./pages/PersonasPage";
import PersonaForm from "./pages/PersonaForm";






function App() {
  return (
    <div>
      <Navbar />
      <div>
        <TaskContextProvider>
        <RegionContextProvider>
        <PersonaContextProvider>
          <Routes>
            <Route path="/" element={<PersonasPage />} /> {/*Se cambia dependiendo que se quiere mostrar como select principal*/}
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="/regiones" element={<RegionesPage />} />
            <Route path="/regionnew" element={<RegionForm />} />
            <Route path="/edregs/:id" element={<RegionForm />} />
            <Route path="/personanew" element={<PersonaForm />} />
            <Route path="/edpers/:id" element={<PersonaForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </PersonaContextProvider>
          </RegionContextProvider>
        </TaskContextProvider>

      </div>
    </div>
  );
}

export default App;