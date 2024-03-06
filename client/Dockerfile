# Specify the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy `package.json` and `package-lock.json` files (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application's source files
COPY . .

# Build the application for production
RUN npm run build

# Install a HTTP server to serve static resources
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Run the HTTP server to serve the built application
CMD ["serve", "-s", "build", "-l", "3000"]
