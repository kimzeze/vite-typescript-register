[🎨스타일]: 마크업&스타일 관련된 코드 작성 및 수정했을 때

[🔀병합]: 브랜치 병합했을 때

[📃문서]: 마크다운 파일을 생성하거나 수정했을 때

[✨기능] 기능 개발을 했을 때

[🔧수정] 수정이 필요한 코드 수정

[🎸기타]: 무의미한 작업을 실행했을 때

[⚙설정]: 초기 및 공통 세팅 파일을 만들거나 수정했을 때

[🐞버그]: 작업에서 에러가 발생했거나 고쳤을 때

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# vite-typescript-register
