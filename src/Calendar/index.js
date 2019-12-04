import React from 'react';
import styled from 'styled-components';

const DECEMBER = [
  { day: 'SUNDAY', number: 1, isInMonth: true },
  { day: 'MONDAY', number: 2, isInMonth: true },
  { day: 'TUESDAY', number: 3, isInMonth: true },
  { day: 'WEDNESDAY', number: 4, isInMonth: true },
  { day: 'THURSDAY', number: 5, isInMonth: true },
  { day: 'FRIDAY', number: 6, isInMonth: true },
  { day: 'SATURDAY', number: 7, isInMonth: true },
  { day: 'SUNDAY', number: 8, isInMonth: true },
  { day: 'MONDAY', number: 9, isInMonth: true },
  { day: 'TUESDAY', number: 10, isInMonth: true },
  { day: 'WEDNESDAY', number: 11, isInMonth: true },
  { day: 'THURSDAY', number: 12, isInMonth: true },
  { day: 'FRIDAY', number: 13, isInMonth: true },
  { day: 'SATURDAY', number: 14, isInMonth: true },
  { day: 'SUNDAY', number: 15, isInMonth: true },
  { day: 'MONDAY', number: 16, isInMonth: true },
  { day: 'TUESDAY', number: 17, isInMonth: true },
  { day: 'WEDNESDAY', number: 18, isInMonth: true },
  { day: 'THURSDAY', number: 19, isInMonth: true },
  { day: 'FRIDAY', number: 20, isInMonth: true },
  { day: 'SATURDAY', number: 21, isInMonth: true },
  { day: 'SUNDAY', number: 22, isInMonth: true },
  { day: 'MONDAY', number: 23, isInMonth: true },
  { day: 'TUESDAY', number: 24, isInMonth: true },
  { day: 'WEDNESDAY', number: 25, isInMonth: true },
  { day: 'THURSDAY', number: 26, isInMonth: true },
  { day: 'FRIDAY', number: 27, isInMonth: true },
  { day: 'SATURDAY', number: 28, isInMonth: true },
  { day: 'SUNDAY', number: 29, isInMonth: true },
  { day: 'MONDAY', number: 30, isInMonth: true },
  { day: 'TUESDAY', number: 31, isInMonth: true },
  { day: 'WEDNESDAY', number: 1, isInMonth: false },
  { day: 'THURSDAY', number: 2, isInMonth: false },
  { day: 'FRIDAY', number: 3, isInMonth: false },
  { day: 'SATURDAY', number: 4, isInMonth: false }
];

const DAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Title = styled.div`
  flex: 1 0 auto;

  margin-bottom: 15px;

  font-size: 30px;
`;

const Content = styled.div`
  border: 1px solid black;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
`;

const DateBox = styled.div`
  flex: 0 0 auto;

  width: 100px;
  height: 100px;
  box-sizing: border-box;

  border: 1px solid black;

  padding: 5px 0 0 5px;

  font-size: 15px;
  color: ${props => (props.isInMonth ? '#000' : '#b3b3b3')};
`;

const Day = styled.div`
  display: inline-block;

  width: 100px;
  box-sizing: border-box;

  padding-left: 5px;
  margin-bottom: 7px;

  font-size: 15px;
`;

export default function() {
  return (
    <div>
      <Title>December 2019</Title>
      {DAY_NAMES.map(name => (
        <Day>{name}</Day>
      ))}
      <Content>
        {DECEMBER.map(({ number, isInMonth }) => (
          <DateBox key={Math.random()} isInMonth={isInMonth}>
            {number}
          </DateBox>
        ))}
      </Content>
    </div>
  );
}
