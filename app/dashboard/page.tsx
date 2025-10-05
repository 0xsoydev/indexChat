"use client"

import { useSession, signIn, signOut } from "@/lib/auth-client"

export default function DashboardPage() {
  const { data: session, isPending } = useSession()

  if (isPending) {
    return <div className="p-8">Loading...</div>
  }

  if (!session || !session.user) {
    return (
      <div className="p-8">
        <p className="mb-4">You are not signed in.</p>
        <button
          className="underline"
          onClick={() => signIn.social({ provider: "github" })}
        >
          Sign in with GitHub
        </button>
      </div>
    )
  }

  return (
    <div className="p-8">
      <p className="mb-4">Signed in as {session.user.email ?? session.user.name ?? session.user.id}</p>
      <button className="underline" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

