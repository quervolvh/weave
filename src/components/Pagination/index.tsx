import React from 'react';
import { PaginationPages } from './PaginationPages';

export const Pagination: React.FC<Props> = (props) => {

    const { pages, page, isMobile } = props;

    const clickHer = (e: { page: number }) => props.onClick(e);

    return (

        <div className='pagination'>

            <div className="pagination-flex">

                <PaginationPages

                    isMobile={isMobile}

                    page={page || 1}

                    pages={pages || 1}

                    onClick={e => clickHer({ page: e })}

                />

            </div>

        </div>

    );
};

interface Props {
    dataCount: number,
    isMobile: boolean,
    pages: number,
    page: number,
    perPage?: number,
    onClick: (e: { page: number }) => void,
}
