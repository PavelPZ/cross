d:
cd %1
rmdir %1\jspm_packages\npm /s /q
rmdir %1\jspm_packages\local /s /q
rmdir %1\node_modules /s /q

copy d:\cross\create-app\package.json %1\package.json
copy d:\cross\create-app\jspm.config.js %1\jspm.config.js

call json -I -f package.json -e "this.jspm.name=\"%2\""
call json -I -f package.json -e "this.name=\"%2\""
call jspm install npm:tslib npm:lodash npm:invariant npm:core-js npm:whatwg-fetch npm:classname npm:history npm:prop-types npm:react npm:react-dom npm:redux npm:react-redux npm:redux-saga npm:material-ui@next npm:material-ui-icons  

call d:\cross\create-app\install-common-npm.cmd

rmdir %1\node_modules\@types\node /s /q