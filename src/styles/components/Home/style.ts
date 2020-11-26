import styled from 'styled-components'

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

`;
export const Section = styled.div`
  position: sticky;
  top: 42px;
  left: 20px;

  width: 100%;
  height: 100%;
`;

export const Calendar = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  max-width: 550px;
  margin-top: 15px;
  margin-bottom: 30px;
  border: 1px solid #28262E;
  border-radius: 10px;
`;
export const DayNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;

  > div {
    background-color: #28262E;
    width: calc(100% / 7);
    height: 44px;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase;
    color: #F4EDE8;
    font-weight: 400;
  }
`;
export const Day = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 60px;
  display: inline-block;
  background-color: #28262E;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
  position: relative;
  
  > div {
    width: 68px;
    height: 50px;
    border-radius: 10px;
    position: relative;
    color: #F4EDE8;
    /* z-index: 100; */
    /* line-height: 44px; */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }

  > div.before {
    color: #666360;
  }

  > div.selected {
    background-color: #FF9000;
    color: #232129;
    font-weight: bold;
  }

  > div.today {
    background-color: #3E3B47;
  }
`;

export const ListReminder = styled.div`
  width: 100%;
  padding: 30px;
  border-left: 1px solid #232318;
`;

export const Top = styled.div`

`;

export const Reminder = styled.div`
  background: ${(props) => (props.color ? props.color : "#FF9000")};
  height: 25px;
  width: 25px;
  border-radius: 20px;
  position: fixed;
`;


export const Campo = styled.div`

  margin-top: 15px;
  display: flex;
  flex-direction: column;

  > #input {
    height: 45px;
    width: 80%;
    border: none;
    border-radius: 10px;
    padding: 24px;
    font-size: 24px;
    background: #232129;
    color: #F4EDE8
  }

  > button {
    height: 45px;
    width: 30%;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    background: #FF9000;
    margin-top: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const DataHora = styled.div`
  display: flex;
  margin: 15px 0 15px 0;

  > #hour {
    height: 45px;
    width: 30%;
    border: none;
    border-radius: 10px;
    padding: 24px;
    font-size: 24px;
    background: #232129;
    color: #F4EDE8;
  }

  > #date {
    height: 45px;
    width: 30%;
    border: none;
    border-radius: 10px;
    padding: 24px;
    font-size: 24px;
    background: #232129;
    margin-left: 10px;
    color: #F4EDE8;
  }

`;

export const Text = styled.div`
  margin-bottom: 10px;
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const ItemList = styled.div`

`;

export const Item = styled.div`
  height: 120px;
  width: 100%;
  border-left: 4px solid ${(props) => (props.color ? props.color : "#FF9000")};
  border-radius: 10px;
  padding: 20px;
  margin-top: 12px;
  background: #3E3B47;

  display: flex;
  /* flex-direction: flex; */
  justify-content: space-between;



`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-weight: bold;
    font-size: 24px;
  }

`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  margin-right: 20px;

  > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;
