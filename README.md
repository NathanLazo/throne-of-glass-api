
# Throne of Glass API

Just an API made when I was bored to practice with TypeScript.

## 🛠 Skills
JavaScript, TypeScript, HTML, CSS


## How to run

```bash
git clone <'repo-url'>
```

```bash
  cd <'project-name'>
  npm install
```

You need to configure your prisma and mysql DB
    
## API Reference

#### Get item

```http
  GET /api/characters/{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | This is for getting only one character |

#### Get items

```http
  GET /api/characters?limit={number}&skip={number}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limit`      | `number` | Limit characters request |
| `skip`       | `number` | Skip characters request |
