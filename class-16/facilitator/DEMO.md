# Demos: AWS: Cloud Servers

Use this document to describe the demo(s). Generally, this is going to take the format of either how to build the demo step by step, or less specifically, talking points surrounding the outcomes of the demo segment and code snippets to highlight.

Note, the full text of this demo file has been provided to the students as well, so that they have a reference and can follow along

## Demo 1: Tour of AWS

- Create a privacy.com proxy credit card account, limit to 10
- Create an account at AWS using that card
- Take the students on a tour ...
  - My Account
    - View the billing screen to see what you're getting charged for
  - Budgets
    - Set cost alerts and create a budget
  - Services
    - Databases
    - APIs
    - Code Commit
    - Lambdas
    - EC2
    - Other interesting services
- Show how to turn things off
  - A big reminder here about how important this is!!
  - A possible shortcut for this is [AWS Nuke](https://github.com/rebuy-de/aws-nuke) but be careful

> **Remind students that at the end of this module, they should turn every service off so that charges to not accrue.**

## Demo 2: Use the GUI to Create a Deployment

> `/demo/server`

First, write the server. Should be the most barebones NodeJS server possible, "Hello World" is sufficient. The goal today is not to code out Express, but to get a server running at Elastic Beanstalk

- Choose NodeJS as your platform
- Create and upload a .zip file with your application source code
  - Do not include `node_modules` or `package-lock.json`
- This will create your application and environment in one step, giving you a full GUI from where you can manage the app
- Once it's installed, follow the link given to see the running server output in your browser

Primarily, in this part of the demo, we want to show students everything that happens when Elastic Beanstalk runs. Cement this point: EB does much of the provisioning and configuration work for you, so you can focus on code, not the mechanics.

- Go to the EC2 page, you'll see that it's created an instance for you
- Go to S3, you'll see a new bucket where your source code lives

![GUI](../assets/eb-gui.png)

## Demo 3: Use the Command Line to create a deployment

> `/demo/server`

First, ensure that you've installed the [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and the [aws eb](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) command line utilities.

We're going to take the same server and install it a second time, in a new environment, using EB from the command line.

When you're done, you'll have 2 identical servers deployed, giving the students both options

1. `eb init` - Initializes your folder as an Elastic Beanstalk application

- Choose your region (`us-west-2`)
- Choose `[Create new Application]`
  - Note: If you already have an application, you could also choose that to connect
- Answer the other questions as appropriate
  - Choose Node.js at the correct version

1. `eb create my-environment-name` - Create an "environment" for your app to reside in
1. `eb deploy` to deploy your new application to your new environment

- You'll also use this whenever you make code changes

You can then use some other `eb` commands to manage your apps

- `eb open` to open your app in the browser
- `eb list` to get a list of apps
- `eb ssh` to ssh (login) to one of your apps
- `eb health` to get a health check on  your environments
