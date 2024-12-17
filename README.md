# Setup - React Router DOM

01 - Rodar o comando para criar o projeto ReactJS. Trocar o nome do projeto

```bash
npm create vite@latest NOME-DO-PROJETO -- --template react-ts
```

03 - Abrir a pasta do projeto criado

04 - Instalar as dependências (node modules)

```bash
npm install
```

05 - Excluir arquivos CSS desnecessários `(index.css, app.css)`

06 - No arquivo `main.tsx` excluir o `import './index.css'`

11 - Limpar o arquivo `App.tsx`

```bash
function App() {
  return <h1>Hellou</h1>;
}

export default App;
```

07 - Instalar o `react-router-dom`

```bash
npm i react-router-dom
```

08 - Dentro de `src` criar as pastas `components`, `configs` e `pages`

08 - Dentro de `pages`, criar os arquivos que vão representar as páginas, ex: `Home.tsx`

```bash
export function Home() {
  return (
    <div>
      <h1>Hellou</h1>
    </div>
  );
}
```

09 - Dentro de `config` criar a pasta `routes` e o arquivo `AppRoutes.tsx`

```bash
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
```

10 - Chamar o `AppRoutes` dentro do `App.tsx`

```bash
import { AppRoutes } from "./configs/routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
```

12 - Rodar o script dev para subir o frontEnd. No terminal acessar o link local (ctrl + clique) http://localhost:5173/

```bash
npm run dev
```
# Instalação MUI Material

01 - Instalar o MUI Material

```bash
npm install @mui/material @emotion/react @emotion/styled
```

02 - Instalar os icones

```bash
npm install @mui/icons-material
```

04 - Dentro da pasta `configs` criar a pasta `global`, criar o arquivo `GlobalStyled.tsx` e inserir o código abaixo:

```bash
import { CssBaseline, CSSObject, GlobalStyles } from "@mui/material";

const styles: Record<string, CSSObject> = {
  body: {
    fontFamily: "",
  },
};

export function GlobalStyled() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
}

```

05 - Chamar o `GlobalStyled` no arquivo `App.tsx`

```bash
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";

function App() {
  return (
    <>
      <GlobalStyled />
      <AppRoutes />
    </>
  );
}

export default App;
```