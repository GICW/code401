import { Link } from 'react-router-dom'
import { createStyles, Group, Header, Navbar } from '@mantine/core';
import Login from '../Login/Login';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  }
}));

const AppHeader = () => {
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header" style={{ borderBottom: 0 }}>
      <Navbar className={classes.navbar}>
        <Group position="apart">
          <Group>
            <Link className={classes.link} default to="/">Home</Link>
            <Link className={classes.link} to="/settings">Settings</Link>
          </Group>
            <Login />
        </Group>
      </Navbar>
    </Header>
  )
};

export default AppHeader
