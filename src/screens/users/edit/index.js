import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";
import UserEditForm from '../../../components/users/user_edit_form';
import UsersEditFormPassword from "../../../components/users/user_edit_password_form";
import UsersDelete from "../../../components/users/user_delete";


const UserEditScreen = () => (
  <Fragment>
    <HeaderLogged />
    <Section size="medium" className="users">
      <Container>
        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              User informations
            </Title>
            <Card>
              <Card.Content>
                <UserEditForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>

        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              Password
            </Title>
            <Card>
              <Card.Content>
                <UsersEditFormPassword />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        <Column.Group centered>
          <Column size={4} className="has-text-right">
            <UsersDelete />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default UserEditScreen;