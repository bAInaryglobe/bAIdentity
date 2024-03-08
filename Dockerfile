# Select a Node.js base image
FROM node:lts-alpine

# Create a working directory inside the container
WORKDIR /app

# Copy your project files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Specify the command to run your application
CMD ["node", "index.js"]
# Replace 'app.js' with your main file

# Expose the port your application listens on
EXPOSE 3000 # Replace with your app's port
