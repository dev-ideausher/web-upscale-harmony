FROM node:lts-bookworm as buildenv

LABEL org.opencontainers.image.authors="S. Ryan Quick <ryan@providentiaworldwide.com>, Idea Usher"
ARG DEBIAN_FRONTEND=noninteractive
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# set working directory
RUN mkdir /app
WORKDIR /app

#RUN yarn global add typescript
#RUN yarn global add gatsby
#RUN yarn global add gatsby-cli
#RUN gatsby telemetry --disable
#RUN yarn

# Build environment speedup

# install and cache app dependencies using yarn


COPY package.json .
COPY jsconfig.json ./
COPY modules ./
COPY next.config.js ./
COPY package-lock.json ./
COPY public ./
COPY src ./
COPY utils ./
RUN npm install \
	&& npm ci
RUN yarn build



FROM nginx:1.25-bookworm
COPY --from=buildenv /app/node_modules ./node_modules
COPY --from=buildenv /app/public /usr/share/nginx/html/
COPY docker/nginx/nginx-upscale.conf /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/ssl_certs/wildcard.providentiaworldwide.com.pem /etc/ssl/wildcard.providentiaworldwide.com.pem
COPY docker/nginx/ssl_certs/wildcard.providentiaworldwide.com.key /etc/ssl/wildcard.providentiaworldwide.com.key

# nginx http
EXPOSE 80
EXPOSE 443
# nginx stats
EXPOSE 8080
