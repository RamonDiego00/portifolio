# Deploy do portfólio na Vercel

Repositório: [github.com/RamonDiego00/portifolio](https://github.com/RamonDiego00/portifolio)

## Conectar e fazer push

No terminal, na pasta do projeto:

```bash
git remote set-url origin https://github.com/RamonDiego00/portifolio.git
git add .
git commit -m "Portfolio React + Vite com deploy para Vercel"
git push -u origin main
```

Se a branch local for `master`, use: `git push -u origin master`

## Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub.
2. Clique em **Add New… → Project**.
3. Importe o repositório **RamonDiego00/portifolio**.
4. As configurações são detectadas automaticamente (Vite):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**.

A cada `push` na branch `main` (ou `master`), a Vercel fará o redeploy automático.

O site ficará disponível em uma URL no formato:

**https://portifolio-ramondiego00.vercel.app**

(A URL exata é gerada pela Vercel no momento do primeiro deploy.)
