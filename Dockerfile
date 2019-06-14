#base image
FROM ruby:2.5

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

#Create the working directory
ENV APP_HOME /wanderlust
RUN mkdir -p $APP_HOME

COPY ./backend/Gemfile* $APP_HOME/backend/
WORKDIR $APP_HOME/backend
RUN bundle install

WORKDIR $APP_HOME
COPY . .

WORKDIR $APP_HOME/backend


