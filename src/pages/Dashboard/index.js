import React from 'react';
import api from '~/services/api';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>01 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Guilherme Camargo</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time available>
          <strong>10:00</strong>
          <span>William Maia</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Eduardo Quintanilha</span>
        </Time>
      </ul>
    </Container>
  );
}
