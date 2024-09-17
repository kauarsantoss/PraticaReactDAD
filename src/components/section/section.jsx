import styled from "styled-components";

const Divona = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');
    font-family: "Mulish", sans-serif;
`;

const Button = styled.div`
    display: flex;
    background-color: #FF0000;
    width: 77px;
    height: 35px;
    border-radius: 8px;
    justify-content: center;
    p {
        display: flex;
        color: white;
        align-items: center;
    }
`

export default function Section({title, cardName}) {
    return (
        <Divona>
            <h1>{title}</h1>
            <Button>
                <p>{cardName}</p>
            </Button>
        </Divona>
    );
  }