'use client'

import { useEffect, useState } from 'react'

interface Department {
  id: string
  name: string
}

export function DepartmentPicker() {
  const [departments, setDepartments] = useState<Department[]>([])
  const [selectedDept, setSelectedDept] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/docs')
      .then(r => r.json())
      .then(data => {
        if (!data.authenticated) {
          setLoading(false)
          return
        }
        // Fetch departments
        fetch('/api/departments')
          .then(r => r.json())
          .then(deptData => {
            setDepartments(deptData.departments || [])
            // Restore saved selection or pick first
            const saved = localStorage.getItem('glow-docs-department')
            if (saved && deptData.departments?.some((d: Department) => d.id === saved)) {
              setSelectedDept(saved)
            } else if (deptData.departments?.length > 0) {
              setSelectedDept(deptData.departments[0].id)
              localStorage.setItem('glow-docs-department', deptData.departments[0].id)
            }
            setLoading(false)
          })
          .catch(() => setLoading(false))
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading || departments.length === 0) return null

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const deptId = e.target.value
    setSelectedDept(deptId)
    localStorage.setItem('glow-docs-department', deptId)
    // Dispatch event so other components can react
    window.dispatchEvent(new CustomEvent('department-changed', { detail: { deptId } }))
  }

  return (
    <select
      value={selectedDept}
      onChange={handleChange}
      style={{
        fontSize: '0.8rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.375rem',
        border: '1px solid #e5e7eb',
        background: 'transparent',
        cursor: 'pointer',
        maxWidth: '180px',
      }}
    >
      {departments.map(dept => (
        <option key={dept.id} value={dept.id}>{dept.name}</option>
      ))}
    </select>
  )
}
