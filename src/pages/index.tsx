import React, { useState, useEffect, useMemo, useContext, useCallback } from 'react';
import Head from 'next/head';
import { TwitterPicker } from 'react-color';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import { MdEdit } from 'react-icons/md';
import { FaMinusCircle } from 'react-icons/fa';
import { ReminderContext } from '../context/ReminderContext';

import buildCalendar from '../components/Calendar/build';
import dayStyles, { beforeToday } from '../components/Calendar/styles';
import Header from '../components/Header/index';

import { Container, Content, Section, Calendar, DataHora, ListReminder, Info, Icons, Top, Text, Reminder, ItemList, Item, DayNames, Day, Campo, Formulario } from '../styles/components/Home/style';

interface IReminderFormData {
  message: string;
  city: string;
  hour: string;
  date: string;
  cor: string;
}

export default function Home() {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [color, setColor] = useState("");
  const [informacoes, setInformacoes] = useState([]);
  const [mode, setMode] = useState('INFO');
  const [info, setInfo] = useState('INFORMACOES');

  const { reminderSave, removeAll, removeInfo } = useContext(ReminderContext);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value])

  function loadInfo() {
    const reminder = localStorage.getItem('reminder');
    setInformacoes(JSON.parse(reminder));
    console.log(informacoes);
  }

  function handleRemove() {
    removeAll();
    loadInfo();
  }

  function handleInfo() {
    setInfo('INFO')
  }

  useEffect(() => {
    loadInfo()
  }, [])

  const onSubmit = useCallback((data: IReminderFormData) => {
    try {
      reminderSave({
        message: data.message,
        city: data.city,
        hour: data.hour,
        date: selectedDate,
        cor: color,
      })

      
       handleInfo();
       setMode('INFO')
       loadInfo();
      
    } catch (error) {
      
    }
  },[])

  function handleClick(day) {
    setSelectedDate(day.format('DD/MM/YYYY'))
    console.log(selectedDate)

    setMode('CAD')
  }

  return (
    <Container>
      <Head>
        <title>Calendar App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Content>
        <Section>
          <Calendar>
          <Header value={value} setValue={setValue}/>
              <DayNames>
                  {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                    <div>{d}</div>
                  ))}
                </DayNames>
              {calendar.map((week) => (
                <div>
                  {week.map((day) => (
                    <Day onClick={() => !beforeToday(day) && setValue(day)}>
                      <div className={dayStyles(day, value)} onClick={() => handleClick(day)} >
                        {day.format("D").toString()}
                      </div>
                      
                    </Day>
                  ))}
                </div>
              ))}
          </Calendar>

          { mode === 'CAD' && 
            <Formulario>
            <Formik 
              onSubmit={onSubmit}
              initialValues={{
                message: '',
                city: '',
                hour: '',
                date: '',
                cor: '',
              }}>
              {({ values, setFieldValue }) => (
                <Form>
                  <h1>Controle suas tarefas</h1>                
                    <Campo>
                      <Field id="input" name="message" value={values.message} type='text' placeholder= "Message" />
                    </Campo>
                    <Campo>
                      <Field id="input" name="city" value={values.city} type="text" placeholder="City" />
                    </Campo>
                    <DataHora>
                      <Field id="hour" name="hour" value={values.hour} type="time" min="0:00" max="23:59" required />
                      <Field id="date" name="date" value={selectedDate} type="text" /> 
                    </DataHora>
                    <Text>Dê dois cliques para adicionar uma cor para sua tarefa.</Text>
                    <TwitterPicker color={color} 
                      onChangeComplete={(color) => setColor(color.hex)}
                    />
                    <Campo>
                      <button type="submit">Enviar</button>
                    </Campo>
                  
                </Form>
              )}
            </Formik>
            </Formulario>
          }
        </Section>

          <ListReminder>
          { !informacoes ? (
              <>
                <h2>Você não possui agendamentos.</h2>
                <h2>Dê dois cliques em uma data válida para agendar.</h2>
              </>
            ) : (
              <ItemList>
                {informacoes.map(item => {
                  return (
                    <Item key={item.id} color={item.cor}>
                      <Info>
                        <h2>{item.message}</h2>
                        <strong >{item.city}</strong>
                        <span >{item.date}</span>
                        <span >{item.hour}</span>
                      </Info>
                      <Icons>
                        <MdEdit />
                        <FaMinusCircle onClick={() => handleRemove()} />
                      </Icons>
                    </Item>
                  )
                })}
              </ItemList>
            )}
          </ListReminder>
      </Content>
    </Container>
  )
}
