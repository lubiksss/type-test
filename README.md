

1. typescript에서 import로 썻다고 esm인게 아니라
2. 옵션에 있는 module에 따라서 cjs, esm으로 바꿔주는거같음.
3. 어쨋거나 nextron 여기도 타입스크립트 설정이 module이 esm이기 때문에 esm으로 바뀌는데,
4. 근데 templ은 nextron설정에 의해서 다시 commonjs로 바뀌는거같음.(확인함 바벨 설정에 targetLibrary = commonjs2)
5. 그래서 pure esm모듈들은 실행이 안됨. ex) clipboardy@v3