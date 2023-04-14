// Це технічний файл, який автоматично генерується технологією react.js
// Імпортуємо потрібні функції технології react.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Імпортуємо наш додаток
import App from "./App";

// Генеруємо місце в браузері, куди ми будемо вбудовувати наш інтерфейс
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Генеруємо наш інтерфейс в браузері
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
