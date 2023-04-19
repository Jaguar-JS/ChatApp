// Імпортуємо потрібні технології
import React from "react";

// Імпортуємо заготовлений компонент "Посилання"
// який дасть можливість зробити посилання на сторінки в меню
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";
// Підключаємо іконку непрочитаного повідомлення
import { ReactComponent as UnreadIcon } from "../file/chat/unread.svg";
// Підключаємо іконку прочитаного повідомлення
import { ReactComponent as ReadIcon } from "../file/chat/read.svg";

// Генеруємо компонент "Список чатів"
export default function ChatList({ list }) {
  return <List>{list.map(ChatItem)}</List>;
}
// Створюємо елемент "Cписок", який відповідає за секцію списку чатів
const List = styled.div`
  /* Задаємо колір фону */
  background-color: #fff;
  /* Включаємо режим grid, щоб всі елементи списку ставали вертикально */
  display: grid;
  /* Задаємо сірі рамки знизу та зверху списку */
  border-top: solid #d7d7d7 1px;
  border-bottom: solid #d7d7d7 1px;
`;

// Генеруємо компонент "Один Чат", в якому ми отримуємо дані одного чату та виводимо їх
function ChatItem({
  photo,
  message,
  name,
  id,

  messageAmount,
  notifyOff,
  isRead,
  isUnread,
  time,
  user,
  hashtag
}) {
  return (
    <React.Fragment key={id}>
      <Item to="/dialog">
        <Image src={photo} />
        <Content>
          <Row>
            <InfoColumn>
              <Name>{name}</Name>
              <User>{user}</User>
              <Message>{message}</Message>
              <Hashtag>{hashtag}</Hashtag>
            </InfoColumn>
            <StatusColumn>
              <Time>{time}</Time>

              {messageAmount && (
                <MessageAmount notifyOff={notifyOff}>
                  {messageAmount}
                </MessageAmount>
              )}
              {isRead && (
                <Icon>
                  <ReadIcon />
                </Icon>
              )}
              {isUnread && (
                <Icon>
                  <UnreadIcon />
                </Icon>
              )}
            </StatusColumn>
          </Row>
        </Content>
      </Item>
    </React.Fragment>
  );
}
const Hashtag = styled.div`
  font-size: 14px;
  color: #037ee5;
`;

const User = styled.div`
  font-size: 14px;
  color: #111;
`;

const Time = styled.div`
  font-size: 14px;
  color: #8e8e93;
`;
// Елемент "Повідомлення"
const Message = styled.div`
  font-size: 14px;
  color: #8e8e93;
`;
// Елемент "Ім'я"
const Name = styled.div`
  font-size: 16px;
  color: #111;
`;

// ======================================
// Елемент "Іконка"
const Icon = styled.div`
  height: 42px;
  width: 42px;

  & > svg {
    height: 24px;
    width: 24px;
  }
`;

const MessageAmount = styled.div`
  font-size: 12px;
  color: #fff;
  background-color: #037ee5;
  padding: 2px 8px;
  border-radius: 50%;

  ${({ notifyOff }) => {
    if (notifyOff === true) {
      return css`
        background-color: #8e8e93;
      `;
    }
  }}
`;

// ======================================
// Далі йдуть елементи, які відповідають за відображення даних одного чату в потрібній структурі
// Елемент колонки статусів
const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
// Елементи колонки з головної інформації
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
// Елемент, який відповідає за рядок, в якому виводять колонки
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

// =========================================

// Елемент "Картинка" чату
const Image = styled.img`
  /* Задаємо ширину та висоту */
  width: 60px;
  height: 60px;
  /* Відступ праворуч, щоб текст опції не притискався до картинки */
  margin-right: 16px;
  /* Відступ зверху та знизу, щоб картинка не налазила на рамку карточки опції */
  margin-top: 8px;
  margin-bottom: 8px;
  /* Робимо закруглення країв */
  border-radius: 50%;
`;

// Елемент "Контент", в якому знаходяться основні дані про чат
const Content = styled.div`
  /* Задаємо текст  на всю вільну ширину */
  width: 100%;
  /* Відступ зверху та знизу, щоб елемент не налазив на рамку карточки чату */
  padding-top: 8px;
  padding-bottom: 8px;
  /* Включаємо режим верстки flex, робимо відображення елементів вертикально */
  display: flex;
  flex-direction: column;
  /* Робимо вертикальний відступ між елементами */
  gap: 2px;
`;

// Елемент "Один чат", який відповідає за відображення карточки одного чату
const Item = styled(Link)`
  /* Включаємо режим flex */
  display: flex;
  /* Відступ справа та зліва, щоб елементи не налазили на краї */
  padding-left: 16px;
  padding-right: 16px;
  /* Робимо, щоб всі елементи "Заголовок" окрім останнього */
  /* мали знизу сіру лінію */
  &:not(:last-of-type) > ${Content} {
    border-bottom: 1px solid #d7d7d7;
  }
  /* Задаємо можливість робити анімацію */
  transition: opacity 0.7s;
  /* Рибимо анімацію при наведені курсором мишки*/
  &:hover {
    /* Виставляємо прозорість на 50% */
    opacity: 0.5;
    /* Робимо інший дизайн курсору */
    cursor: pointer;
  }
`;
