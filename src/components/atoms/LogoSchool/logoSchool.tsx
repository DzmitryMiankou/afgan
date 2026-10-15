import { St } from "./logoSchool.style";
import LogoS from "./../../../img/LogoS.png";

const LogoSchool: React.FC = () => {
  return (
    <St.LogoSchool>
      <a
        href="https://gim7mol.uomrik.gov.by/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img width={100} src={LogoS} alt="Logo" />
      </a>
    </St.LogoSchool>
  );
};

export default LogoSchool;
