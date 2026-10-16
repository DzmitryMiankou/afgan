import { TitleTs } from "../../../App";
import { St } from "./mainPage.style";
import Imge from "../../../img/IMG3_7745.png";

const MainPage: React.FC<{ biography: TitleTs }> = ({
  biography: { firstName, mainText, lastName, patronymic },
}) => {
  return (
    <St.Container>
      <link rel="preload" as="image" href={Imge} fetchPriority="high" />
      <St.Img src={Imge} alt="png" fetchPriority="high" draggable="false" />
      <div>
        <p>{`${firstName} ${patronymic} ${lastName}`}</p>
        <p>{mainText}</p>
      </div>
    </St.Container>
  );
};

export default MainPage;
