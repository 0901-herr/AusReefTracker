# Aus Reef Tracker

## Description
Welcome to our Coral Reef Data Analytics website! Our platform provides real-time tracking and monitoring of critical coral reef data. Our team has leveraged cutting-edge technologies, including Docker, Nginx, Gunicorn, Flask, and React, to create an intuitive and user-friendly website for analyzing and visualizing coral reef data.

With our website, you can access comprehensive data analysis, including information on water temperature, acidity, and pollution levels. Our user-friendly interface allows you to easily explore and track key reef indicators, and receive real-time updates on any changes.

We are committed to providing a reliable and insightful resource for researchers, policymakers, and other stakeholders interested in coral reef conservation. Thank you for choosing our Coral Reef Data Analytics website as your go-to source for up-to-date information on this vital ecosystem.


## Local Installation: How to run locally on your computer 
To test the web server on your computer follow these steps
1. Make sure Docker is installed on your computer
2. In the root directory run 'docker build -t ausreeftracker/aus-reef-tracker-repo:test .'
3. In order for the server to run it needs a web certificate and a private key so create one with this command
## ⚠️ WARNING:(NOTE DO NOT USE THESE KEYS IN PRD - THEY ARE FOR LOCAL TESTING ONLY)
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```
4. Now you just need to build the project
'''
docker build -t aus-reef-tracker .
'''

5. Now that you have the keys just run this command to host the docker file
```
 docker run -p 80:80 \
  -p 443:443 \
  -v $(pwd)/server.crt:/etc/nginx/ssl/certificate \
  -v $(pwd)/server.key:/etc/nginx/ssl/key \
  aus-reef-tracker
```

## Server Installation:
To set up this website on a server, we recommend using GitLab Runner. This will allow the YAML file to handle all of the installation steps for you. If you do not have access to a GitLab Runner, you can still run the Docker image manually on the server by following the same steps outlined above. The only difference is that you should not use self-signed certificates. Instead, obtain a proper certificate and private key and reference their file locations instead of using "$(pwd)".

## Support
Contact the owner of this repo for more support

## Authors and acknowledgment
Created by Robert Davidovic, Kuangyi Chen and Yong Liang Herr

## License
MIT
