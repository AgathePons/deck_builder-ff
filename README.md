# Deck builder Final Fantasy

Little deck builder Final Fantasy (nodeJS / Express / session / PostgreSQL)

## How to run

Install dependencies

```cmd
npm i
```

Create DB (with postgres superuser)

```cmd
createdb <dbname>
```

Seed DB

```cmd
psql -U <user> -d <dbname> -f data/create_db.sql
```

Create `.env`

```cmd
PORT=5000
PGURL="postgresql://user:mdp@localhost:5432/db"
```

Start server

```cmd
npm start
```
