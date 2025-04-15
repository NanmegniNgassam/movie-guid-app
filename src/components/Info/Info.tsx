import { InfoWrapper, StyledIcon } from "./Info.styles";

interface IInfoProps{}

const Info = (props: IInfoProps) => {
  return (
    <InfoWrapper>
      <StyledIcon />
      <span className="label">No movie matchs your search</span>
    </InfoWrapper>
  );
};

export default Info;
