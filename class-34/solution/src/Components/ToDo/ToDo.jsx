import { useEffect, useState, useContext, useCallback } from 'react';
import useForm from '../../hooks/form.js';
import useAxios from '../../hooks/axios.js';
import { Card, Grid, Text, TextInput, createStyles, Button, Slider } from '@mantine/core';
import List from '../List/List';
import Auth from '../Auth/Auth';
import { AuthContext } from '../../Context/Auth/Auth';

const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    width: '80%',
  },
}));

const ToDo = () => {
  const { classes } = useStyles();
  const [incomplete, setIncomplete] = useState([]);
  const [defaultValues] = useState({ difficulty: 4 });
  const [list, setList] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { can } = useContext(AuthContext);
  const { makeRequest, response } = useAxios();

  function addItem(item) {
    const config = {
      method: 'post',
      baseURL: 'https://api-js401.herokuapp.com/api/v1',
      url: '/todo',
      data: item,
    };
    makeRequest(config);
  }

  function deleteItem(id) {
    const config = {
      method: 'delete',
      baseURL: 'https://api-js401.herokuapp.com/api/v1',
      url: `/todo/${id}`,
    };
    makeRequest(config);
  }

  function toggleComplete(id) {
    if (can('update')) {
      const item = list.filter(i => i._id === id)[0] || {};
      if (item._id) {
        const config = {
          method: 'put',
          baseURL: 'https://api-js401.herokuapp.com/api/v1',
          url: `/todo/${id}`,
          data: { ...item, complete: !item.complete },
        };
        makeRequest(config);
      }
    }
  }

  const getToDoList = useCallback(async () => {
    const options = {
      baseURL: 'https://api-js401.herokuapp.com/api/v1',
      url: '/todo',
      method: 'get',
    };
    makeRequest(options);

  }, [makeRequest]);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  useEffect(() => {
    if (response.results) {
      setList(response.results);
    }
    else {
      getToDoList();
    }
  }, [response, getToDoList]);

  useEffect(() => {
    getToDoList();
  }, [getToDoList]);

  return (
    <>
      <h1 className={classes.h1}>To Do List: {incomplete} items pending</h1>

      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Auth capability="create">
            <Card withBorder p="xs">
              <Text className={classes.formHeading}>Add To Do Item</Text>
              <form onSubmit={handleSubmit}>

                <TextInput
                  mb="sm"
                  onChange={handleChange}
                  name="text"
                  placeholder="Item Details"
                  label="To Do Item"
                />

                <TextInput
                  mb="sm"
                  onChange={handleChange}
                  name="assignee"
                  placeholder="Assignee Name"
                  label="Assigned To"
                />

                <Text>Difficulty</Text>
                <Slider
                  mb="lg"
                  onChange={handleChange}
                  defaultValue={defaultValues.difficulty}
                  step={1}
                  min={1}
                  max={5}
                  name="difficulty"
                />
                <Button type="submit">Add Item</Button>
              </form>
            </Card>
          </Auth>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <Auth capability="read">
            <List
              list={list}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          </Auth>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default ToDo;
