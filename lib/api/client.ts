/**
 * Glow API client for the docs app.
 *
 * Used to fetch user info and department membership
 * to scope which docs pages are visible.
 */

const API_URL = process.env.GLOW_API_URL || "http://localhost:8000"

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
  }
}

async function apiFetch<T>(
  path: string,
  token: string,
  options: RequestInit = {},
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  if (!res.ok) {
    const body = await res.text()
    throw new ApiError(res.status, body)
  }

  if (res.status === 204) return undefined as T
  return res.json()
}

// -- Auth --

export function getMe(token: string) {
  return apiFetch<{ profile_id: string; email: string; name: string; role: string }>(
    "/context",
    token,
    { method: "POST", body: JSON.stringify({}) },
  )
}

// -- Departments --

export function listDepartments(token: string) {
  return apiFetch<{ departments: { id: string; name: string }[] }>("/departments/search", token, {
    method: "POST",
    body: JSON.stringify({}),
  })
}
