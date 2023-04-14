// Підключаємо потрібні технології
import styled from "styled-components";

// Компонент який відповідає за текст, коли список пустий
export default function Empty({ children }) {
  return <Text>{children}</Text>;
}

// Елемент "Текст" для пустого тексту
const Text = styled.div`
  /* Колір тексту */
  color: #111;
  /* Розмір тексту */
  font-size: 16px;
  /* Відступи вертикальні та горизонтальні */
  padding: 15px;
  /* Включаємо режим верстки */
  display: flex;
  /* Робимо текст по центру */
  justify-content: center;
`;
