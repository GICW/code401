import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});

const friends = dynamoose.model('friends', schema);

export const handler = async (event) => {
  const response = { statusCode: null, body: null, };
  const id = event?.pathParameters?.id;
  // dynamoose docs imply that adding json is correct, note that parsing is in fact necessary
  let parsedBody = JSON.parse(event.body);

  try {
    let results = await friends.update({ id }, parsedBody);
    console.log('results-------', results);

    response.body = JSON.stringify(results);
    response.statusCode = 200;
  } catch (e) {
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }

  return response;
};
