export interface NewsletterCampaign {
  id: string
  title: string
  archiveUrl: string
  sendTime: string
  description?: string | null // Will be populated by Mailchimp's preview_text
}

export interface CampaignMetric {
  id: string
  title: string
  sendTime: string
  emailsSent: number
  openRate: number
  clickRate: number
  description?: string | null // Will be populated by Mailchimp's preview_text
}

export interface AdminMetrics {
  subscriberCount: number
  publishedNewsletterCount: number
  // dailyGrowth: DailySubscriberGrowth[] // Removed as chart is removed
  campaigns: CampaignMetric[] // Kept for recent campaigns
  totalOpenRate?: number // For aggregate open rate
  totalClickRate?: number // For aggregate click rate
}

// DailySubscriberGrowth is no longer needed if chart is removed
// export interface DailySubscriberGrowth {
//   date: string // YYYY-MM-DD
//   newSubscribers: number
// }
