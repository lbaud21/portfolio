import {
  ContactMeSection,
  ContactMeContainer,
  ContactMeTextLeft,
  ContactMeTextRight,
} from "./contactElements";
import { useSectionRef } from "../../contexts/refContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Envelope from "./envelope/Envelope";

const Contact = () => {
  const { contactSectionRef } = useSectionRef();

  const visible = useIntersectionObserver(contactSectionRef);

  return (
    <ContactMeSection
      ref={contactSectionRef}
      backgroundColor="white"
      id="contact"
    >
      <ContactMeContainer>
        <ContactMeTextLeft visible={visible}>
          Want to work with me?
        </ContactMeTextLeft>
        <ContactMeTextRight visible={visible}>
          Send me an email
        </ContactMeTextRight>
      </ContactMeContainer>
      <Envelope />
    </ContactMeSection>
  );
};

export default Contact;
