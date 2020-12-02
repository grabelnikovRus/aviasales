import React from 'react';

import CardTicket from '../card-ticket/card-ticket';

const Tickets = ({ tickets }) => {
  const ticketsArr = tickets.map((tick) => <CardTicket {...tick} key={tick.id} />);

  return <div>{ticketsArr}</div>;
};

export default Tickets;
