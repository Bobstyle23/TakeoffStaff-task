import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import AddContact from "./AddContact";
const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (users) => {
    console.log(users);
  };
  return (
    <div>
      <AddContact />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.address["city"]}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(contact)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
