import { IInfoProps } from "./Info.types";
import { InfoWrapper, StyledIcon } from "./Info.styles";

const Info = (props: IInfoProps) => {
  return (
    <InfoWrapper>
      <StyledIcon></StyledIcon>
      <span className="label">No movie matchs your search</span>
    </InfoWrapper>
  );
};

export default Info;
