# Deploy do portfólio no GitHub Pages

Repositório: [github.com/RamonDiego00/portifolio](https://github.com/RamonDiego00/portifolio)

## Conectar e fazer push

No terminal, na pasta do projeto:

```bash
git remote set-url origin https://github.com/RamonDiego00/portifolio.git
git add .
git commit -m "Portfolio React + Vite com deploy para GitHub Pages"
git push -u origin main
```

Se a branch local for `master`, use: `git push -u origin master`

## GitHub Pages

1. No repositório: **Settings** → **Pages**.
2. Em **Build and deployment**, **Source:** **GitHub Actions**.

Depois do push, o workflow faz o deploy. O site fica em:

**https://ramondiego00.github.io/portifolio/**

(URLs do GitHub Pages são em minúsculas.)
