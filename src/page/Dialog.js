// Підключаємо потрібні технології
import React from "react";
import styled from "styled-components";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список повідомлень в чаті

// const MESSAGE_LIST = [
//   {
//     id: 1,
//     message: "Привіт. Як справи?",
//   },
//   {
//     id: 2,
//     message: "Все добре. В тебе як?",
//   }
// ];

// ============================================
// Генеруємо сторінку "Діалог чату"
export default function Dialog() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Діалог чату" />
      <DialogView>
        <Empty>Список повідомлень пустий</Empty>
      </DialogView>
      <Menu />
    </Page>
  );
}

// Відповідає за коректне відображення основного вмісту Діалогу
const DialogView = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

// Відповідає за коректне відображення вмісту компонента "Поле вводу" та "Кнопка відправити"
const SendMessageBlock = styled.div`
  /* Колір фону */
  background-color: #f6f6f6;
  /* Відступи всередені вертикальні та горизонтальні */
  padding: 15px;
  /* Розмір та Колір сітки країв блока*/
  border-top: 1px #d7d7d7 solid;

  display: grid;
  grid-template-columns: 1fr 32px;
  gap: 15px;
`;
