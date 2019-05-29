#base image
FROM ruby:2.5

#Create the working directory
ENV APP_HOME /wanderlust
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY ./backend/Gemfile* $APP_HOME/
RUN bundle install
COPY . $APP_HOME

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]