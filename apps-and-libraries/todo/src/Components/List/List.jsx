import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { When } from 'react-if';
import Auth from '../Auth/Auth';
import { Badge, Card, CloseButton, Group, Pagination, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px'
  },
}));

const List = ({ list, toggleComplete, deleteItem }) => {
  const { classes } = useStyles();
  const { pageItems, showCompleted } = useContext(SettingsContext);
  const [page, setPage] = useState(1);

  //pagination
  const renderList = showCompleted ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(renderList.length / pageItems)
  const displayList = renderList ? renderList.slice(listStart, listEnd) : [];

  return (
    <>
      {displayList.map(item => (
        <Card key={item._id} withBorder shadow="md" radius="sm" pb="xs" mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group position="left">
                <Badge
                  data-testid={`${item._id}-complete`}
                  color={item.complete ? "red" : "green"}
                  variant="filled"
                  className={classes.badge}
                  onClick={() => toggleComplete(item._id)}
                >
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                <Text data-testid={`${item._id}-assignee`}>{item.assignee}</Text>
              </Group>
              <Group>
                <Auth capability="delete">
                  <CloseButton
                    title="Close ToDo Item"
                    onClick={() => deleteItem(item._id)}
                  />
                </Auth>
              </Group>
            </Group>
          </Card.Section>

          <Text data-testid={`${item._id}-text`} align="left" mt="sm">{item.text}</Text>
          <Text data-testid={`${item._id}-difficulty`} align="right"><small>Difficulty: {item.difficulty}</small></Text>
        </Card>
      ))}
      <When condition={renderList.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;
