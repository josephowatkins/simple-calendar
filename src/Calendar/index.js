import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import * as R from 'ramda';

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

const Date = styled.div`
  margin: 4px;
  padding: 4px;

  color: ${props => (props.isInMonth ? '#000' : '#b3b3b3')};

  ${props =>
    props.isToday &&
    css`
      height: 18px;
      width: 18px;

      text-align: center;

      border-radius: 50%;
      background-color: red;
      color: white;
    `}
`;

const Box = styled.div`
  flex: 0 0 auto;

  width: 100px;
  height: 100px;
  box-sizing: border-box;

  border: 1px solid black;
`;

function DateBox({ isInMonth, isToday, children }) {
  return (
    <Box>
      <Date isInMonth={isInMonth} isToday={isToday}>
        {children}
      </Date>
    </Box>
  );
}

const Day = styled.div`
  display: inline-block;

  width: 100px;
  box-sizing: border-box;

  padding-left: 5px;
  margin-bottom: 7px;

  font-size: 15px;
`;

function generateDays() {
  const today = moment().startOf('day');
  const start = moment()
    .startOf('month')
    .startOf('week');
  const end = moment()
    .endOf('month')
    .endOf('week');
  const startOfMonth = moment().startOf('month');
  const endOfMonth = moment().endOf('month');

  const days = R.unfold(
    date => (date.isAfter(end) ? false : [date.clone(), date.add(1, 'days')]),
    start
  );

  return days.map(day => ({
    number: day.date(),
    isToday: day.isSame(today),
    isInMonth: day.isBetween(startOfMonth, endOfMonth, null, '[]'),
    ISOString: day.toISOString()
  }));
}

export default function() {
  const days = generateDays();
  return (
    <div>
      <Title>December 2019</Title>
      {DAY_NAMES.map(name => (
        <Day key={name}>{name}</Day>
      ))}
      <Content>
        {days.map(({ number, isInMonth, isToday, ISOString }) => (
          <DateBox key={ISOString} isInMonth={isInMonth} isToday={isToday}>
            {number}
          </DateBox>
        ))}
      </Content>
    </div>
  );
}
