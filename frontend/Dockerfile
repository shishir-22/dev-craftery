FROM node:20.11-alpine

RUN mkdir -p /var/app
WORKDIR /var/app

COPY . /var/app

# Change to the frontend directory
WORKDIR /var/app/frontend/dev-craftery

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install application dependencies
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
