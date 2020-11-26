import React, { createContext, useCallback, useState } from 'react';
import { v4 as uuid_v4 } from 'uuid';

interface IReminderData {
  message: string;
  city: string;
  hour: string;
  date: string;
  cor: string;
}

interface ReminderContextData {
  reminderSave(informacoes: IReminderData): void;
  removeAll(): void;
  removeInfo(id: string): void;
}

export const ReminderContext = createContext<ReminderContextData>({} as ReminderContextData);

export const ReminderProvider: React.FC = ({ children }) => {
  const reminderSave = useCallback( async ({ message, city, hour, date, cor }) => {  
    const reminder = JSON.parse(localStorage.getItem('reminder') || '[]');
    const id = uuid_v4();

    reminder.push({
      id,
      message,
      city,
      hour,
      date,
      cor
    })
    localStorage.setItem('reminder', JSON.stringify(reminder));
    console.log(localStorage.getItem('reminder'))  
  },[])

  const removeAll = useCallback(() => {
    localStorage.clear('reminder');
  },[])

  const removeInfo = useCallback(({ id }) => {
    console.log(JSON.parse(localStorage.key(`reminder:${id}`)));
    
  },[])

  return (
    <ReminderContext.Provider value={{ reminderSave, removeAll, removeInfo }}>
      {children}
    </ReminderContext.Provider>
  );
}
