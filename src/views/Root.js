import React, { useState } from "react";
import UsersList from "components/organism/UsersList/UsersList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/globalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "components/organism/Form/Form";
import { users as usersData } from "data/users";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";

const initialFormstate = {
  name: "",
  attendance: "",
  average: "",
};

const Root = (props) => {
  const [users, setUsers] = useState(usersData);
  const [formData, setFormData] = useState(initialFormstate);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const { name, attendance, average } = formData;
    const newUser = {
      name,
      attendance,
      average,
    };

    setUsers([newUser, ...users]);
    setFormData(initialFormstate);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Dashboard deleteUser={deleteUser} users={users} />
              </Route>
              <Route exact path="/add-user">
                <AddUser
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleAddUser={handleAddUser}
                />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
