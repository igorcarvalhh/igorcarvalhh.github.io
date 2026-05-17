FROM ruby:3.2

RUN apt-get update && apt-get install -y build-essential nodejs npm

WORKDIR /srv/jekyll

RUN gem install bundler

RUN gem install jekyll -v 3.10.0

EXPOSE 4000
