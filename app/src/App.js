import React from 'react';
import UserForm from './Component/User/UserForm';
import UserList from './Component/User/UserList';

function App() {
  return (
    <div align="center">
      <div>
        <h1>Registration</h1>
        <UserForm />
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
}
export default App;