import { createRoot } from "react-dom/client";
import { App } from "./App";

const contaiter = document.getElementById('root')!; //Adicionar a exclamação no final da linha
const root = createRoot(contaiter);
root.render(<App />);