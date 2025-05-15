import { createStyles, Header, Navbar, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
  },
}));

const AppHeader = ({ incomplete }) => {
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header" style={{ borderBottom: 0 }}>
    <Navbar className={classes.navbar}>
      <Text>Home</Text>
    </Navbar>
  </Header>
  )
};

export default AppHeader
