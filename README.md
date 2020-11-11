1. scoop 설치(PowerShell)
   Set-ExecutionPolicy RemoteSigned -scope CurrentUser
   <!-- $env:SCOOP='C:\Scoop' -->

   iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
   scoop install aria2
   scoop install git

2. TypeScript 설치
   npm i -g typescript

3. touch
   scoop install touch

4. ts-node - js변환 후 실행
   npm i -g ts-node

- tsc file.ts - 컴파일
- tsc file.ts --target es2015 --module commonjs => 때로 js 파일로 변경이 안될 경우(iterator 등)과 같은 경우 대상을 정해줘서 컴파일
- node file.js - 실행

5. 함수 응용, 람다 넘김.
