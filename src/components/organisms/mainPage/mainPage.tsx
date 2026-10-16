import { TitleTs } from "../../../App";

const MainPage: React.FC<{ biography: TitleTs }> = ({
  biography: { firstName, mainText, lastName, patronymic },
}) => {
  return (
    <>
      <p>{`${firstName} ${patronymic} ${lastName}`}</p>
      <p>{mainText}</p>
    </>
  );
};

export default MainPage;
