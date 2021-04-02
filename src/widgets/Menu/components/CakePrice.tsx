import React from "react";
import styled from "styled-components";
import { LogoRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
  priceLink?: string;
}

const PriceLinkA = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, priceLink }) => {
  return cakePriceUsd ? (
    <PriceLinkA href={priceLink ?? "/"} target="_blank">
      <LogoRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLinkA>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
