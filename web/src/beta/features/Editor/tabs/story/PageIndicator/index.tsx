import { FC, useMemo } from "react";

import { styled } from "@reearth/services/theme";

type Props = {
  currentPage: number;
  maxPage: number;
  onPageChange: (page: number) => void;
};

const StoryPageIndicator: FC<Props> = ({ currentPage, maxPage, onPageChange }) => {
  const widthPercentage = useMemo(() => {
    const onePageWidth = 100 / maxPage;
    const base = currentPage * onePageWidth;
    return base;
  }, [currentPage, maxPage]);
  return (
    <Wrapper widthPercentage={widthPercentage}>
      {[...Array(maxPage)].map((_, i) => {
        return <Indicator key={i} type="button" onClick={() => onPageChange(i + 1)} />;
      })}
    </Wrapper>
  );
};

export default StoryPageIndicator;

// TODO: fix colors/transitions including hover
const Wrapper = styled.div<{ widthPercentage: number }>`
  position: relative;
  display: flex;
  background-color: #c2deff;

  :after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.select.main};
    transition: width 0.2s ease-out;
    width: ${({ widthPercentage }) => widthPercentage}%;
  }
`;

const Indicator = styled.button`
  position: relative;
  flex: 1;
  height: 8px;
  z-index: 1;
  :hover {
    opacity: 0.8;
  }

  :not(:first-of-type) {
    border-left: 1px solid #ffffff;
  }
`;
