brew install nvm
source $(brew --prefix nvm)/nvm.sh
nvm use
npm install
./node_modules/.bin/bower install
./node_modules/.bin/gulp compile
