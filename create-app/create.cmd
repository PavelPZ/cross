call d:\cross\create-app\create-lib D:\cross\rw-utils rw-utils
call d:\cross\create-app\create-lib D:\cross\rw-router rw-router

call d:\cross\create-app\create-web-app D:\cross\test-w test-w
call jspm link ../rw-utils
call jspm link ../rw-router

rem call d:\cross\create-app\create-native-app D:\cross\rw-native rw-native
