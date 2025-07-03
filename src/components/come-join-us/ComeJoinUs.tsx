"use client";

import { STRINGS } from "@/strings/common";
import { Container, Text, SecondaryText } from "./ComeJoinUs.styles";

const ComeJoinUs = () => {
  return (
    <Container>
      <Text>{STRINGS.COME_JOIN_US_PAGE.COMING_SOON}</Text>
      <SecondaryText>{STRINGS.COME_JOIN_US_PAGE.MEANTIME}</SecondaryText>
      <SecondaryText>{STRINGS.COME_JOIN_US_PAGE.EMAIL}</SecondaryText>
    </Container>
  );
};

export default ComeJoinUs;
