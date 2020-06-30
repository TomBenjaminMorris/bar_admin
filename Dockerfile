FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
ARG api_key=defaultkey
ENV REACT_APP_API_KEY=${api_key}
ARG map_api_key=defaultkey
ENV REACT_APP_MAP_API_KEY=${map_api_key}
RUN yarn run build

FROM nginx
EXPOSE 4000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
