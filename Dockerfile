FROM opensuse/tumbleweed as opensuse/jekyll

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN zypper --non-interactive install -t pattern \
      devel_ruby \
      devel_C_C++ \
 && zypper --non-interactive install \
      ruby-devel \
 && zypper clean --all \
 && gem install \
      jekyll \
      bundler \
 && mkdir -p /jekyllapp

WORKDIR /jekyllapp

FROM opensuse/jekyll

COPY . /jekyllapp
RUN bundle install
EXPOSE 4000

CMD [ "bundle", "exec", "jekyll", "serve", "--host=0.0.0.0" ]
