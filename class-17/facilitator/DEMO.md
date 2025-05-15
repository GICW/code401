# Demos: AWS: S3 and Lambda

Use this document to describe the demo(s). Generally, this is going to take the format of either how to build the demo step by step, or less specifically, talking points surrounding the outcomes of the demo segment and code snippets to highlight.

## Demo 1: Basic Lambda, with tests

> `/demo/adding`

Overview

- Create a new lambda, using the "adding/index.js" sample
- Upload it to AWS
- Set up a test for it, using this sample object:
  ```json
  {
    "body": {
      "a": 5,
      "b": 9
    }
  }
  ```
- Run the test, and observe the output, which should log the object and show the right output in the body

Explain to the class that this potentially gets sent to an API request or some other service that runs this function

Which begs the question: **How do we actually RUN Lambda functions?**

They are triggered by other services at AWS -- using Network Events


## Demo 2: S3 Bucket

> `/demo/images`

In this demo, we will create an S3 Bucket at AWS and connect it to Lambda.

- Showcase what S3 is
  - Container for files of any time
  - Buckets and Objects are Folders and Files
- Create a simple bucket with closed permissions
  - Why would you want to open up permissions?
    - Website hosting, video storage (i.e. starting a youtube competitor)

Once you have the bucket created ... "Let's make a function that gets alerted when you upload a file"

- Create a new lambda, using the "image/index.js" sample
- Upload it to AWS
- Setup a test for it, using the S3 Template
- Run the test, and observe the output, which should match the test data

Now, let's do that for real.

- Go to the S3 Bucket and choose:
  - Properties
    - Event Notifications
      - Fill in the form, choosing your new lambda as the destination
  - Upload an image

Once the image is uploaded, return to your function and open cloudwatch. This should show you all the data that S3 adds into the event object

Our lambda is simple, it only gets information given to it. It can potentially call on other services (like S3 or a database) to do additional work. This will require permissions and maybe some additional libraries...

## Lambda Triggers - Recap

What can you do with this newfound power?

- Email someone every time an image is uploaded
- Send an SMS if more than 50 images are there
- Resize the images as they get upload to fit a certain shape for a website


## Deployment Demo

If you have time, cover this. If not, you can save this for code review in the nex class

Deploying from GitHub automatically is a huge time saver and ease of strain on the dev ops team.

You'll find a `.github` folder in the main demo folder that has a **sample** action that creates a .zip file and does 2 function deployments.

You will need to move this into a repo with lambda functions, add the AWS secrets to the **secrets** section of your repository (under its settings) and edit the sections where it builds out the .zip files and the function names. This is not generic, but it works when edited properly

This demo showcases how you can have shared code between functions and still auto-deploy.
