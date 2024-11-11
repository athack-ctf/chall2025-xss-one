# Start from the official Node.js image
FROM node:18-slim

#RUN apt-get update && apt-get install -y curl gnupg wget
#RUN curl -o- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#    && echo "deb https://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
#    && apt-get -y install google-chrome-stable libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev libasound2

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install curl gnupg -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /chall

COPY chall/ .

# Using unpriviliged user 'app'
RUN useradd -m user
RUN chown -R user .
USER user

RUN npm install --silent
#RUN npx puppeteer browsers install chrome

# Run the Puppeteer chall script
CMD ["npm", "start"]
