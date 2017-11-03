d:

rem call rmdir d:\rw\lib\rw-native\node_modules\rw-router /s /q
rem call rmdir d:\rw\lib\rw-native\node_modules\rw-utils /s /q

rem cd d:\rw\lib\rw-native\node_modules
rem md rw-router
rem md rw-utils

cd d:\rw\lib\rw-router\
xcopy *.js d:\rw\lib\rw-native\node_modules\rw-router /S /Y /D /EXCLUDE:d:\rw\lib\rw-native\copy-to-nodemodules.txt 
rem xcopy package.json d:\rw\lib\rw-native\node_modules\rw-router /Q /Y 

cd d:\rw\lib\rw-utils\
xcopy *.js d:\rw\lib\rw-native\node_modules\rw-utils /S /Y /D /EXCLUDE:d:\rw\lib\rw-native\copy-to-nodemodules.txt
rem xcopy package.json d:\rw\lib\rw-native\node_modules\rw-utils /Q /Y 