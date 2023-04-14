// Підключаємо потрібні технології
import styled from "styled-components";
import React from "react";

// ============================================

// Імпортуємо файли потрібних іконок для списка опцій
import { ReactComponent as AlertIcon } from "../file/option/alert.svg";
import { ReactComponent as DataIcon } from "../file/option/data.svg";
import { ReactComponent as BatteryIcon } from "../file/option/battery.svg";

// ============================================

// Імпортуємо компонент "Список опцій"
import OptionList from "../component/OptionList";
// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список опцій

// id - це ідентифікатор опції, технічна змінна
// Image - туди кладемо іконку, яку до цього імпортували в наш файл коду
// title - це текст для назви нашої опції

const SETTINGS_LIST = [
  { id: 1, Image: AlertIcon, title: "Сповіщення" },
  { id: 2, Image: DataIcon, title: "Дані" },
  { id: 3, Image: BatteryIcon, title: "Батарея" }
];

// ============================================
// Генеруємо сторінку "Налаштування"

export default function Settings() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Налаштування" />
      <div>
        <SettingsView>
          {/* В list передаємо константу з даними списка опцій */}
          <OptionList list={SETTINGS_LIST} />
        </SettingsView>
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/settings" />
    </Page>
  );
}

// Компонент "Відображення Налаштувань" відповідає за правильне відображення основного вмісту сторінки налаштувань
const SettingsView = styled.div`
  /* надаємо систему верстки grid */
  display: grid;
  /* робимо вертикальні відступи для списку опцій */
  gap: 30px;
`;
