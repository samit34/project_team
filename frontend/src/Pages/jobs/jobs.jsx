import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AllServiceDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fullservice = () => {
    console.log("this is a service function");
    axios.post('http://localhost:8000/user/fullServices', { id })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  };

  useEffect(() => {
    fullservice();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      <ul className="space-y-2">
        {Object.entries(data[0] || {}).map(([key, value]) => {
          if (Array.isArray(value)) {
            return (
              <li key={key}>
                <strong className="capitalize">{key}:</strong>
                <ul className="ml-4 list-disc">
                  {value.map((item, idx) => (
                    <li key={idx}>
                      {typeof item === 'object'
                        ? Object.entries(item).map(([k, v]) => (
                          <div key={k}>
                            <span className="capitalize">{k}:</span> {String(v)}
                          </div>
                        ))
                        : String(item)}
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else if (value && typeof value === 'object') {
            return (
              <li key={key}>
                <strong className="capitalize">{key}:</strong>
                <div className="ml-4">
                  {Object.entries(value).map(([k, v]) => (
                    <div key={k}>
                      <span className="capitalize">{k}:</span> {String(v)}
                    </div>
                  ))}
                </div>
              </li>
            );
          } else {
            return (
              <li key={key}>
                <strong className="capitalize">{key}:</strong> {String(value)}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default AllServiceDetail;
