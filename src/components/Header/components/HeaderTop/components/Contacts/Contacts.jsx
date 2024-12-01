import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PhoneText = styled.a`
  font-size: 16px;
  font-weight: 700;
  line-height: 2.2;
`;

const MailText = styled.a`
  font-size: 16px;
  font-weight: 500;
  line-height: 2.2;
`;

const Icon = styled.img`
  width: 30px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Contacts() {
  return (
    <Wrapper>
      <Column>
        <Icons>
          <Icon src="./public/icons/social/telegram.svg" alt="telegram icon" />
          <Icon src="./public/icons/social/viber.svg" alt="viber icon" />
          <Icon
            src="./public/icons/social/whats-app.svg"
            alt="whats-app icon"
          />
        </Icons>
        <PhoneText href="tel:+74952150744">+7 495 215 0744</PhoneText>
      </Column>
      <Column>
        <Icon src="./public/icons/social/mail.svg" alt="mail icon" />
        <MailText href="mailto:sales@tele-optics.ru">
          sales@tele-optics.ru
        </MailText>
      </Column>
    </Wrapper>
  );
}
