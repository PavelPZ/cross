d:
cd %1
rmdir %1\node_modules /s /q

copy d:\cross\create-app\package.json %1\package.json

call json -I -f package.json -e "this.name=\"%2\""
call json -I -f package.json -e "this.jspm.name=\"%2\""

call d:\cross\create-app\install-common-npm.cmd

rmdir %1\node_modules\@types\node /s /q