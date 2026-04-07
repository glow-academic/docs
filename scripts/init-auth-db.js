// Create better-auth SQLite tables if they don't exist.
// Runs before server.js on every container start (idempotent).
// Table names use camelCase to match better-auth's default naming.
const Database = require("better-sqlite3");
const db = new Database("./auth.db");

const tables = [
  `CREATE TABLE IF NOT EXISTS user (id TEXT PRIMARY KEY, name TEXT, email TEXT, emailVerified INTEGER, image TEXT, createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS session (id TEXT PRIMARY KEY, expiresAt TEXT, token TEXT UNIQUE, ipAddress TEXT, userAgent TEXT, userId TEXT REFERENCES user(id), createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS account (id TEXT PRIMARY KEY, accountId TEXT, providerId TEXT, userId TEXT REFERENCES user(id), accessToken TEXT, refreshToken TEXT, idToken TEXT, accessTokenExpiresAt TEXT, refreshTokenExpiresAt TEXT, scope TEXT, password TEXT, createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS verification (id TEXT PRIMARY KEY, identifier TEXT, value TEXT, expiresAt TEXT, createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS oauthApplication (id TEXT PRIMARY KEY, name TEXT, icon TEXT, metadata TEXT, clientId TEXT, clientSecret TEXT, redirectURLs TEXT, type TEXT, disabled INTEGER, userId TEXT, createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS oauthAccessToken (id TEXT PRIMARY KEY, accessToken TEXT, refreshToken TEXT, accessTokenExpiresAt TEXT, refreshTokenExpiresAt TEXT, clientId TEXT, userId TEXT, scopes TEXT, createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS oauthConsent (id TEXT PRIMARY KEY, clientId TEXT, userId TEXT, scopes TEXT, consentGiven INTEGER, createdAt TEXT, updatedAt TEXT)`,
  `CREATE TABLE IF NOT EXISTS oauthAuthorizationCode (id TEXT PRIMARY KEY, code TEXT, clientId TEXT, userId TEXT, redirectURI TEXT, scopes TEXT, expiresAt TEXT, codeChallenge TEXT, codeChallengeMethod TEXT, createdAt TEXT, updatedAt TEXT)`,
];

for (const sql of tables) {
  db.exec(sql);
}
db.close();
console.log("[init-auth-db] SQLite tables ready");
