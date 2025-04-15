import { TitleWrapper } from "./Title.styles";

interface ITitleProps {
    title: string
}

const Title = ({title}: ITitleProps) => {
    return (
        <TitleWrapper>
            {title}
        </TitleWrapper>
    );
}
 
export default Title;