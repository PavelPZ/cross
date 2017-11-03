d:
cd %1
rmdir %1\node_modules /s /q

copy d:\cross\create-app\package.json %1\package.json

call json -I -f package.json -e "this.name=\"%2\""
call json -I -f package.json -e "this.main=\"node_modules/expo/AppEntry.js\""

call npm install --save tslib lodash invariant react react-dom redux react-redux redux-saga history prop-types https://github.com/expo/react-native/archive/sdk-22.0.1.tar.gz babel-preset-react-native expo 
call npm install --save @types/react @types/react-dom @types/lodash @types/react-native @types/history @types/react-redux

call npm link --save ../rw-router
call npm link --save ../rw-utils

rmdir %1\node_modules\@types\node /s /q