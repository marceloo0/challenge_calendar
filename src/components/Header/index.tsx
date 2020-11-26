import React from 'react';

import { Container, Current, Previous, Next, Logo } from '../../styles/components/Header/style';

export default function Header({ value, setValue }) {

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY")
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <Container>
      <Previous 
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        { !thisMonth() ? String.fromCharCode(171) : null}
      </Previous>
      <Current>
        {currMonthName()} - {currYear()}
      </Current>
      <Next onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(187)}
      </Next>
    </Container>
  )
}