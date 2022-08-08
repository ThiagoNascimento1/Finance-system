import styled from 'styled-components';

export const TableRow = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color};
    `;

export const Value = styled.div<{expense: boolean}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${props => props.expense ? 'red' : 'green'};
`;

export const IconTrash = styled.div`
    font-size: 20px;
    color: darkblue;
    padding: 5px;
    cursor: pointer;
`;