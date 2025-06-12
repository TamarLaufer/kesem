import styled from "styled-components";

export const LessonsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  margin-top: 8rem;
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* יחס של 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const LessonsHeader = styled.h1`
  font-family: "Rubik Dirt", sans-serif;
`;
