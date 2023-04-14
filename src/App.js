// Підключаємо потрібні функції для налаштування роутінгу
// Роутінг - це налаштування відображення певної сторінки за певним посиланням
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Імпортуємо сторінку Налаштувань
import Settings from "./page/Settings";
// Імпортуємо сторінку Чатів
import Chats from "./page/Chats";
// Імпортуємо сторінку Діалогу
import Dialog from "./page/Dialog";

// Генеруємо наш додаток, який потім у файлі index.js ми будемо виводити в браузері
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Підключаємо сторінку Чати за посиланням /chats */}
        <Route path="/chats" element={<Chats />} />

        {/* Підключаємо сторінку Налаштування за посиланням /settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Підключаємо сторінку Діалог за посиланням /dialog */}
        <Route path="/dialog" element={<Dialog />} />

        {/* Якщо користувач заходить на головну сторінку, то його переводять на сторінку /chats */}
        <Route path="/" element={<Navigate to="/chats" />} />
      </Routes>
    </BrowserRouter>
  );
}
