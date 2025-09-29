import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 70vw;
  max-width: 90vw;
  height: 80vh;
  overflow: auto;
  scrollbar-gutter: stable;
  margin: 0 auto;
  padding: 1vw;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: clamp(4px, 0.6vw, 8px);
  table-layout: auto;
  min-width: 300px;
  overflow: hidden;

  th, td {
    padding-top: 1vh;
    padding-bottom: 1vh;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
    word-wrap: break-word;
    font-size: clamp(10px, 1.5vw, 16px);
    min-width: 50px;
  }

  td {
    border-bottom: 0.07vw solid #eee;
  }

  thead th {
    padding: 2vh 0;
    background-color: tomato;
    color: white;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    padding-bottom: 2vh;
  }
`;

export const ActionButton = styled.button`
  padding: clamp(8px, 1vh, 14px) clamp(12px, 1vw, 20px);
  font-size: clamp(12px, 1.2vw, 16px);
  border-radius: clamp(4px, 0.3vw, 8px);
  cursor: pointer;
  color: white;
  transition: background-color 0.3s, transform 0.2s;
  white-space: nowrap;
  max-width: 100%;
  border: none;
  margin: 0.8vh 0.2vw;

  background-color: ${({ type }) =>
    type === 'edit' ? '#28a745' : type === 'delete' ? '#dc3545' : '#e0e0e0'};

  &:hover {
    background-color: ${({ type }) =>
      type === 'edit' ? '#218838' : type === 'delete' ? '#c82333' : '#d0d0d0'};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    border-radius: 0.5vw;
  }

  @media (max-width: 480px) {
    border-radius: 0.5vw;
  }
`;


