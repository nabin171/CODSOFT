# Stage 1: Build Vite app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build        # creates dist/ folder

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built dist folder to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]