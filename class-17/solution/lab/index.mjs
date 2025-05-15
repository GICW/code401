// no need to install locally if using the lambda text editor
// notice ES Module syntax in import and export
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { processStream } from './processStream.mjs';

export const handler = async(event) => {
  let s3Client = new S3Client({region: 'us-west-2'});

  let bucketName = event.Records[0].s3.bucket.name;
  let name = event.Records[0].s3.object.key;
  let size = event.Records[0].s3.object.size;
  let type = '.jpg';
  let newImageDetails = { name, size, type };
  console.log('new image details', newImageDetails);

  // see docs: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/getobjectcommand.html
  let getCommand = {
    Bucket: bucketName,
    Key: 'output/images.json',
  }
  let putCommand = {
    ...getCommand,
    Body: null,
    ContentType: 'application/json'
  }

  let imageDetails;
  try {
    let results = await s3Client.send(new GetObjectCommand(getCommand));
    let retrievedImageDetails = await processStream(results.Body) // converts response into usable array
    imageDetails = retrievedImageDetails; // at this point we have the array if json exists
  }catch(e){
    console.log('get object error', e);
    imageDetails = [];
  }

  imageDetails.push(newImageDetails);
  console.log('our image details array', imageDetails);

  let stringifiedDetails = JSON.stringify(imageDetails, undefined, '  ');
  putCommand.Body = stringifiedDetails;
  console.log('put input object', putCommand);

  try {
    await s3Client.send(new PutObjectCommand(putCommand));
  } catch(e){
    console.warn('failed to put', e)
  }
  const response = {
      statusCode: 200,
      body: stringifiedDetails,
  };
  return response;
};
