# Deploy do portfólio no GitHub Pages

## 1. Criar o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new).
2. **Repository name:** use `meu-portfolio` (ou outro nome; se mudar, veja o passo 4).
3. Deixe **Public** e **não** marque "Add a README" (o projeto já tem arquivos).
4. Clique em **Create repository**.

## 2. Conectar o projeto e fazer o primeiro push

No terminal, na pasta do projeto:

```bash
git add .
git commit -m "Initial commit: portfolio com deploy para GitHub Pages"
git remote add origin https://github.com/SEU_USUARIO/meu-portfolio.git
git branch -M main
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu usuário do GitHub. Se o repositório foi criado com outro nome, use esse nome no lugar de `meu-portfolio` na URL.

## 3. Ativar o GitHub Pages com GitHub Actions

1. No repositório no GitHub: **Settings** → **Pages**.
2. Em **Build and deployment**:
   - **Source:** GitHub Actions.
3. Não é necessário escolher um workflow; o arquivo `.github/workflows/deploy.yml` já faz o deploy.

Depois de um push na branch `main` (ou `master`), o workflow **Deploy to GitHub Pages** vai rodar. Quando terminar, o site estará em:

**https://SEU_USUARIO.github.io/meu-portfolio/**

(Substitua `SEU_USUARIO` e `meu-portfolio` se tiver usado outros nomes.)

## 4. Se o repositório tiver outro nome

Se o repositório **não** se chamar `meu-portfolio`, edite o `base` no `vite.config.js`:

```js
base: '/NOME_DO_SEU_REPOSITORIO/',
```

Exemplo: se o repo for `portfolio`, use `base: '/portfolio/'`.

## Resumo

- **Deploy:** a cada `git push` na branch `main` (ou `master`), o GitHub Actions faz o build e publica no GitHub Pages.
- **URL do site:** `https://SEU_USUARIO.github.io/meu-portfolio/`
