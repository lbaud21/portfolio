import {
  ContactMeSection,
  ContactMeContainer,
  ContactMeTextLeft,
  ContactMeTextRight,
} from "./contactElements";
import { useSectionRef } from "../../contexts/refContext";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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
    </ContactMeSection>
  );
};

export default Contact;
