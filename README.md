# Setup 

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