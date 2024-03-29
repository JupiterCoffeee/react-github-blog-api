import styled from "styled-components";

export const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    height: 16.25rem;

    background-color: ${props => props.theme['dark-blue-600']};
    border-radius: 0.625rem;
    cursor: pointer;

    header {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        align-items: flex-start;

        h4 {
            text-wrap: wrap;
            font-size: 1.25rem;
        }

        span {
            text-wrap: nowrap;
            font-size: 0.875rem;
            margin-top: 5px;
        }
    }

    div {
        overflow: hidden;
    }

    &:hover {
        box-shadow: 0 0 0 2px ${props => props.theme['dark-blue-400']};
    }
`;