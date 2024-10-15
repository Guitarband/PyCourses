# Use an appropriate base image
FROM python:3.8 AS python
FROM node:16 AS node

# Create a working directory
WORKDIR /app

# Copy application code
COPY . .

# Install any necessary dependencies for Node.js
RUN npm install

# Expose a port
EXPOSE 3000

# Start your Node.js application
CMD ["node", "server.js"]
