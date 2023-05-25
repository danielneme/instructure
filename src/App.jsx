import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


import { TaskContextProvider } from "./context/TaskProvider";
import { RegionContextProvider } from "./context/RegionProvider";
import { PersonaContextProvider } from "./context/PersonaProvider";
import { EmpresaContextProvider } from "./context/EmpresaProvider";
import { NodoContextProvider } from "./context/NodoProvider";

import NotFound from "./pages/NotFound";
import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import RegionForm from "./pages/RegionesForm";
import RegionesPage from "./pages/RegionesPage";
import PersonasPage from "./pages/PersonasPage";
import PersonaForm from "./pages/PersonaForm";
import EmpresasPage from "./pages/EmpresasPage";
import EmpresaForm from "./pages/EmpresaForm";
import NodosPage from "./pages/NodosPage";
import NodoForm from "./pages/NodoForm";







function App() {
  return (
    <div>
      <Navbar />
      <div>
        <TaskContextProvider>
        <RegionContextProvider>
        <PersonaContextProvider>
        <EmpresaContextProvider>
        <NodoContextProvider>
          <Routes>
            <Route path="/" element={<NodosPage />} /> {/*Se cambia dependiendo que se quiere mostrar como select principal*/}
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="/regiones" element={<RegionesPage />} />
            <Route path="/regionnew" element={<RegionForm />} />
            <Route path="/edregs/:id" element={<RegionForm />} />
            <Route path="/personanew" element={<PersonaForm />} />
            <Route path="/edpers/:id" element={<PersonaForm />} />
            <Route path="/empresanew" element={<EmpresaForm />} />
            <Route path="/edempr/:id" element={<EmpresaForm />} />
            <Route path="/nodonew" element={<NodoForm />} />
            <Route path="/ednodo/:id" element={<NodoForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </NodoContextProvider>
          </EmpresaContextProvider>
          </PersonaContextProvider>
          </RegionContextProvider>
        </TaskContextProvider>

      </div>
    </div>
  );
}

export default App;