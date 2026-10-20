import React from "react";

const Info: React.FC = () => {
  const YEAR: number = new Date().getFullYear();
  return (
    <div>
      <h4>Авторы проекта:</h4>
      <ul>
        <li>Екатерина Кренть</li>
        <li>Маргарита Мамай</li>
        <li>Яна Рагиская</li>
      </ul>
      <h4>Руководитель:</h4>
      <ul>
        <li>Дмитрий Меньков</li>
      </ul>
      <div>{`© ${YEAR === 2026 ? 2026 : 2026 + " - " + YEAR}  Коллектив авторов проекта`}</div>
    </div>
  );
};

export default Info;
