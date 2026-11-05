FROM node:22-alpine

WORKDIR /app
COPY app.js package.json ./
COPY public ./public

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
