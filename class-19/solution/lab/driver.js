'use strict';

const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer');
const Chance = require('chance');
const chance = new Chance();

async function confirmDelivery(data){
  let order = {};
  try {
    // original body from received message
    let originalMessageBody = JSON.parse(data.Body);

    order = JSON.parse(originalMessageBody.Message);

    // all order properties parsed and accessible
    console.log(order); 
  } catch (e){
    console.log('this did not work', e.message);
  }

  // connect to vendor specific standard SQS Standard Queue
  const producer = Producer.create({
  queueUrl: order.vendorId,
  region: 'us-west-2'
});

  // payload body must be a string, aka json
  let stringifiedMessage = JSON.stringify(`order delivered for: ${order.customer}`)

  let payload = {
    id: order.orderId,
    body: stringifiedMessage,
  }
  
  try {
    // payload sent to vendor specific standard SQS Standard Queue
    let response = await producer.send(payload);
    console.log(response);
  } catch (e) {
    console.log(e)
  }
}
/**
 * consume messages from SQS FIFO Queue pacakages, 
 * relayed from SNS FIFO Topic pickup
 */
const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/356127598444/pacakgestest.fifo',
  handleMessage: confirmDelivery
});


app.start();
