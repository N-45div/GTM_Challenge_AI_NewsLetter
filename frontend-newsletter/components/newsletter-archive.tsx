"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { NewsletterCampaign } from "@/lib/types"
// truncateText is no longer needed as description is removed from display
import { Loader2 } from "lucide-react"
// Tooltip components are no longer needed as description is removed
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function NewsletterArchive() {
  const [campaigns, setCampaigns] = useState<NewsletterCampaign[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchArchives() {
      try {
        const res = await fetch("/api/campaigns", {
          cache: "no-store", // always fresh
        })
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error ?? `Failed to fetch newsletter archives. Status: ${res.status}`)
        }
        const data: NewsletterCampaign[] = await res.json()
        setCampaigns(data)
      } catch (err: any) {
        setError(err.message ?? "Unexpected error.")
        console.error("NewsletterArchive error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchArchives()
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto mt-8">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Newsletter Archives</CardTitle>
        <CardDescription>Catch up on our past editions.</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Loader2 className="h-8 w-8 animate-spin text-gray-900" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4">{error}</div>
        ) : campaigns.length === 0 ? (
          <div className="text-gray-500 text-center p-4">No archives available yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Removed TooltipProvider as Tooltip is no longer used */}
            {campaigns.map((c) => (
              // Removed Tooltip as description is no longer displayed
              <Card key={c.id} className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                  <CardDescription>Published: {new Date(c.sendTime).toLocaleDateString()}</CardDescription>
                </CardHeader>
                {/* Removed CardContent with description text */}
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
