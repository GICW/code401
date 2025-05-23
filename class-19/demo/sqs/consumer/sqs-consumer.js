'use strict';

const { Consumer } = require('sqs-consumer');
const { SQSClient } = require('@aws-sdk/client-sqs');
const QUEUE_URL = process.env.QUEUE_URL || 'https://sqs.us-west-2.amazonaws.com/<AWS_SQS_QUEUE_ID_AND_NAME>'

const app = Consumer.create({
  queueUrl: QUEUE_URL,
  handleMessage: async (message) => {
    console.log(message.Body);
  },
  sqs: new SQSClient({
    region: 'us-west-2',
  })
});

// use this for demo
// app.start();

// use this for testing
module.exports = app;

