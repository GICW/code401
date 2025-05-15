import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { When } from 'react-if';
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
  const { pageItems, completed } = useContext(SettingsContext);
  const [page, setPage] = useState(1);

  //pagination
  const renderList = completed ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page -1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(renderList.length / pageItems)
  const displayList = renderList ? renderList.slice(listStart, listEnd) : [];

  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} withBorder shadow="md" radius="sm" pb="xs" mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group position="left">
                <Badge
                  color={item.complete ? "red" : "green"}
                  variant="filled"
                  className={classes.badge}
                  onClick={() => toggleComplete(item.id)}
                >
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <Group>
                <CloseButton
                  title="Close ToDo Item"
                  onClick={() => deleteItem(item.id)}
                />
              </Group>
            </Group>
          </Card.Section>

          <Text align="left" mt="sm">{item.text}</Text>
          <Text align="right"><small>Difficulty: {item.difficulty}</small></Text>
        </Card>
      ))}
      <When condition={renderList.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;
