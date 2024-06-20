import React from 'react';
import clientsData from './data/ClientsData.json';
import './styles/Clients.css';

function Clients() {
  return (
    <div className="clients-container" id='clients'>
      <h1>Our Clients</h1>
      <p  style={{ color: 'white', fontSize: '18px' }} >Our clients aren't just clients; they are valued partners in progress. We take pride in understanding their unique needs, tailoring solutions, and fostering long-term relationships.</p>
      <div className="marquee">
        <div className="marquee-content">
          {clientsData.map(client => (
            <img key={client.id} src={client.img} alt={`Client ${client.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
