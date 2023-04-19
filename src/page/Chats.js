// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Список чатів"
import ChatList from "../component/ChatList";

// ============================================
// Імпортуємо файли потрібних картинок

import CatPhoto from "../file/photo/cat.png";
import DadPhoto from "../file/photo/dad-ivan.png";
import SonPhoto from "../file/photo/son-ilya.png";
import MaPhoto from "../file/photo/mother-nata.png";
// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: DadPhoto,
    name: "Dad",
    message: "And where is my Kitsya-matsitsa?",
    time: "8:15",
    isRead: true
  },
  {
    id: 2,
    photo: CatPhoto,
    name: "Про котів",
    message: "Я і є твоя киця-мациця!",

    user: "Dad",
    time: "8:20",
    isUnread: true,
    hashtag: "#Cats"
  },
  {
    id: 3,
    photo: MaPhoto,
    name: "Ma",
    message: "Я люблю пити молоко",
    messageAmount: 3,
    time: "9:00",
    isRead: false
  },
  {
    id: 4,
    photo: SonPhoto,
    name: "Son",
    message: "Я люблю пити молоко",
    time: "9:15",
    messageAmount: 3,
    notifyOff: true
  }
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Чати" />
      <div>
        <ChatList list={CHATS_LIST} />
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
