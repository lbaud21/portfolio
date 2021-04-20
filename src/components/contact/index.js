import {
  ContactMeSection,
  ContactMeContainer,
  ContactMeTextLeft,
  ContactMeTextRight,
} from "./contactElements";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Contact = () => {
  const { contactSectionRef, contactMeVisible } = useIntersectionObserver();

  return (
    <ContactMeSection
      ref={contactSectionRef}
      backgroundColor="white"
      id="contact"
    >
      <ContactMeContainer>
        <ContactMeTextLeft visible={contactMeVisible}>
          Want to work with me?
        </ContactMeTextLeft>
        <ContactMeTextRight visible={contactMeVisible}>
          Send me an email
        </ContactMeTextRight>
      </ContactMeContainer>
    </ContactMeSection>
  );
};

export default Contact;
