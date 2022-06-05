import React from 'react';
import * as Styled from './List.styled';

type ListProps<Item extends Record<string, unknown>> = {
    renderItem: (item: Item, index: number) => JSX.Element;
    data: Item[];
};

function List<Item extends Record<string, unknown>>({ renderItem, data }: ListProps<Item>) {
    return (
        <Styled.List>
            {data.map(renderItem)}
        </Styled.List>
    )
}

export default List;
