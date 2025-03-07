import React from 'react';
import BannerImage4 from '../../../public/assets/plumber.jpeg?url'; // Import the local image
import { Link } from 'react-router-dom';

// Dummy data array with multiple user objects
const dummyUsers = [
  {
    id: 'special-001',
    name: 'asli',
    photo:  BannerImage4,
  },
  {
    id: 'special-002',
    name: 'John',
    photo: BannerImage4,
  },
  {
    id: 'special-003',
    name: 'Alice',
    photo:  BannerImage4,
  },
  {
    id: 'special-004',
    name: 'Bob',
    photo:  BannerImage4,
  },
];

const Chatuser = () => {
  return (
    <div>
      {dummyUsers.map((user) => (
        <Link  to={`/providerDash/chat/${user.id}`}  >
        <div 
          key={user.id} 
          style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}
        >
          <img 
            src={user.photo} 
            alt={user.name} 
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px'
            }}
          />
          <h2>{user.name}</h2>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Chatuser;
