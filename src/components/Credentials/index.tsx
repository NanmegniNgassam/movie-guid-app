import { FaExternalLinkAlt } from "react-icons/fa";
import { Wrapper } from "./Credential.styles";


const Credentials = () => {
    return (
        <Wrapper>
            @Copyrights October 2024 | All rights reserved to
            <a
                href="https://gilles-ngassam.pisoftlite.com/"
                target="_blank"
                rel="noreferrer"
            >
                Gilles NGASSAM <FaExternalLinkAlt />
            </a>
        </Wrapper>
    );
}
 
export default Credentials;