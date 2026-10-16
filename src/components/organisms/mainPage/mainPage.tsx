import { TitleTs } from "../../../App";
import { St } from "./mainPage.style";
import Imge from "../../../img/IMG3_7745.png";

const MainPage: React.FC<{ biography: TitleTs }> = ({
  biography: { firstName, mainText, lastName, patronymic },
}) => {
  return (
    <St.Container>
      <img style={{ maxWidth: "500px" }} src={Imge} alt="png" />
      <div>
        <p>{`${firstName} ${patronymic} ${lastName}`}</p>
        <p>{mainText}</p>
      </div>
    </St.Container>
  );
};

export default MainPage;
