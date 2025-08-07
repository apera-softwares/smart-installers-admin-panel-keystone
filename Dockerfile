# Use a Node.js base image
FROM node:20-alpine3.16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the entire application code to the container
COPY . .

# Build the KeystoneJS application (if applicable, e.g., for production builds)
# RUN npm run build

# Expose the port your KeystoneJS application listens on (default is 3000)
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"] 