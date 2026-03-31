/**
 * Server-side API helpers -- auto-inject auth token from Better Auth session.
 * Use these in Server Components and API routes.
 */

import { cache } from "react"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import * as api from "./client"

export const getSession = cache(async () => {
  try {
    return await auth.api.getSession({ headers: await headers() })
  } catch {
    return null
  }
})

async function getToken(): Promise<string | null> {
  const session = await getSession()
  if (!session?.user?.id) return null

  // Better Auth stores the Keycloak access token in the account table
  // We need to query it directly since the session doesn't expose it
  try {
    const Database = (await import("better-sqlite3")).default
    const db = new Database("./auth.db")
    const account = db.prepare(
      "SELECT accessToken FROM account WHERE userId = ? AND providerId = 'glow' LIMIT 1"
    ).get(session.user.id) as { accessToken: string } | undefined
    db.close()
    return account?.accessToken || null
  } catch {
    return null
  }
}

/** Get current user info from Glow API */
export async function getMe() {
  const token = await getToken()
  if (!token) return null
  try {
    return await api.getMe(token)
  } catch {
    return null
  }
}

/** Get user's departments */
export async function listDepartments() {
  const token = await getToken()
  if (!token) return []
  try {
    const result = await api.listDepartments(token)
    return result.departments || []
  } catch {
    return []
  }
}
