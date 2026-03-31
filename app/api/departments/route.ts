import { listDepartments } from "@/lib/api/server"

export async function GET() {
  const departments = await listDepartments()
  return Response.json({ departments })
}
