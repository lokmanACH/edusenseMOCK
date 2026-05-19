# EduSense Frontend - Mock Only Version

This version is fully frontend-only. It does not require the Laravel backend, FastAPI model server, Cloudinary, report API, or any external API.

## What changed

- `lib/api.ts` was replaced with a local mock API.
- All old API routes now return local mock data from `localStorage`.
- File upload actions are simulated with browser blob URLs.
- AI feedback and report PDF generation are simulated locally.
- Authentication uses mock users and localStorage.
- Google font loading was removed from layouts to keep the app self-contained.

## Run

```bash
npm install
npm run dev
```

Open the app at `http://localhost:3000`.

## Demo accounts

Use any password, or use `demo123`.

Teacher:

```text
teacher@edusense.demo
```

Student:

```text
student@edusense.demo
```

The app also works if you open `/teacher` or `/student` directly; it will create a mock session automatically.

## Useful mock class codes

```text
MAT10X
PHY11B
CHE10A
```

## Reset mock data

In the browser console:

```js
localStorage.removeItem("edusense_mock_db_v2");
localStorage.removeItem("edusense_token");
localStorage.removeItem("edusense_user");
location.reload();
```
