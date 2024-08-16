FROM python:3.9-slim


#Set up NGINX server
RUN apt-get update && apt-get install -y nginx
COPY /backend/nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/sites-enabled/default
RUN mkdir /etc/nginx/ssl

# Copy the Flask application files into the container
COPY . /app

WORKDIR /app

#Install React

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs


#Run Node installations
RUN npm install
RUN npx webpack 

# Install flask packages
#RUN apt-get update && apt-get install -y python3 python3-pip
# Install Flask
RUN pip3 install flask
RUN pip3 install gunicorn


#RUN pip install -r requirements.txt
EXPOSE 5000

WORKDIR /app/backend
CMD /usr/sbin/nginx && gunicorn -b 0.0.0.0:5000 wsgi:app