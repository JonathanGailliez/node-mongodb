# Node.js and MongoDB for Bitbucket Pipelines

This repository contains a Dockerfile as well as a simple example that shows how you can run your own Docker container with Node.js and MongoDB on Bitbucket Pipelines.

The Docker image is using node 4.6 and MongoDB 3.2

## Quickstart

###Using the image with Bitbucket Pipelines

Just copy/paste the YML below in your bitbucket-pipelines.yml and adapt the script to your needs.

```yaml
# This is a sample build configuration for Javascript.
# Only use spaces to indent your .yml configuration.
# -----
# This is using a custom node image that also contains MongoDB
image: spittet/node-mongodb

pipelines:
  default:
    - step:
        script:
          - npm install mongoose     
          - service mongod start     # Run this command to start the Mongo daemon
          - node test.js             # Replace this with any command you need.
```

## Create your own image

If you want to use a different version of Node.js you can simply create your own image for it. Just copy the content of the Dockerfile and replace the first line.

```
FROM node:4.6 # Replace this with the version of node you need.
RUN apt-get update
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org
```

### Build the image

```bash
docker build -t <your-docker-account>/node-mongodb .
```

### Run the image locally with bash to make some tests

```bash
docker run -i -t <your-docker-account>/node-mongodb /bin/bash
```

### Push the image back to the DockerHub

```bash
docker push <your-docker-account>/node-mongodb
```
