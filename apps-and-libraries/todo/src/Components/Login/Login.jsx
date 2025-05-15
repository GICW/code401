import { useContext, useState } from 'react';
import { If, Then, Else } from 'react-if';
import { Button, Group, TextInput } from '@mantine/core';
import useForm from '../../hooks/form.js';
import { AuthContext } from '../../Context/Auth/Auth';

const Login = () => {
  const [defaultValues] = useState({})
  const { handleChange, handleSubmit } = useForm(handleLogin, defaultValues);
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  function handleLogin(user) {
    login(user.username, user.password);
  }

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color="red" onClick={logout}>Log Out</Button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
            <Group style={{width: '500px'}}>
            <TextInput
              onChange={handleChange}
              name="username"
              placeholder="Username"
            />
            <TextInput
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button color="gray.8" type="submit" >Login</Button>
            </Group>
          </form>
        </Else>
      </If>
    </>
  );
};

export default Login;
