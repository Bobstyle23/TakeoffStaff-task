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

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
    console.log(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const handleDelete = (users) => {
  //   console.log(users);
  // };
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
                <Button variant="danger" onClick={() => onDelete(contact.id)}>
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
