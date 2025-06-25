import { CardContent } from "@/components/ui/card"
import { CardDescription } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { NewsletterForm } from "@/components/newsletter-form"
import { NewsletterArchive } from "@/components/newsletter-archive"
import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl lg:text-7xl">
          AI Insights Daily
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your daily dose of cutting-edge AI news, curated and delivered straight to your inbox.
        </p>
      </header>

      <NewsletterForm />

      {/* Adjusted margin for the admin dashboard button */}
      <div className="mt-6 mb-8">
        {" "}
        {/* Reduced top margin, added bottom margin */}
        <Link href="/admin" passHref>
          <Button variant="outline">Go to Admin Dashboard</Button>
        </Link>
      </div>

      <Suspense
        fallback={
          <Card className="w-full max-w-md mx-auto mt-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Newsletter Archives</CardTitle>
              <CardDescription>Catch up on our past editions.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </CardContent>
          </Card>
        }
      >
        <NewsletterArchive />
      </Suspense>
    </div>
  )
}
