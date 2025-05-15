const AWS = require('aws-sdk');
const { Consumer } = require('sqs-consumer');
const Chance = require('chance');
const chance = new Chance();

// sdk and terminal manage credentials, region necessary
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:356127598444:pickuptest.fifo';
const queueUrl = 'https://sqs.us-west-2.amazonaws.com/356127598444/flowerstest';

setInterval(() => {

  let orderDetails = {
    orderId: chance.guid(),
    customer: chance.name(),
    vendorId: queueUrl
  }

  const messageString = JSON.stringify(orderDetails);

  /**
   * TopicArn will manage the connection to the SNS FIFO Topic pickup
   * MessageGroupId and  MessageDeduplicationId properties necessary with FIFO SNS Topic
   */
  const payload = {
    Message: messageString,
    TopicArn: topic,
    MessageGroupId: 'flowers123',
    MessageDeduplicationId: chance.guid()
  }

  // payload sent to SNS FIFO Topic Pickup 
  sns.publish(payload).promise()
    .then(data => console.log(data))
    .catch(err => console.log(err));

}, 6000);

/**
 * connection to SQS Standard Queue flowers made
 * consume (receive) delivery confirmations and complete event cylce
 */
const app = Consumer.create({
  queueUrl: queueUrl,
  handleMessage: (data) => {
    let body = JSON.parse(data.Body);
    console.log(body);
  }
});

app.start();
