# AI Insights Daily Newsletter

This project is a Next.js application designed to manage an AI newsletter, featuring a user-facing subscription page and a secure admin dashboard for tracking key metrics and recent campaigns.

## Features

### Frontend (User-Facing)
*   **Newsletter Subscription Form**: A clean and responsive form allowing users to subscribe to the newsletter.
*   **Mailchimp Integration**: Seamlessly integrates with Mailchimp for subscriber management.
*   **Newsletter Archives**: Displays a list of past newsletter editions, fetched directly from Mailchimp. Each archive card shows the newsletter title and publication date.

### Admin Dashboard
*   **Secure Login**: A password-protected admin dashboard to ensure only authorized users can access sensitive metrics.
*   **Key Metrics Overview**: Displays essential newsletter performance indicators:
    *   Total Subscribers
    *   Total Published Newsletters
    *   Average Open Rate
    *   Average Click Rate
*   **Recent Campaigns**: Lists the 5 most recent newsletter campaigns with their individual performance metrics (emails sent, open rate, click rate, and a truncated preview text).
*   **System Uptime Placeholder**: A section indicating where system uptime and reliability statistics could be integrated with a dedicated monitoring service.

## Technologies Used

*   **Next.js**: Utilizes the App Router for efficient routing, Server Components for performance, and Server Actions for secure backend logic (e.g., Mailchimp API calls, admin authentication).
*   **React**: For building interactive user interfaces.
*   **Tailwind CSS**: For utility-first styling and responsive design.
*   **shadcn/ui**: A collection of beautifully designed, accessible, and customizable UI components built with Radix UI and Tailwind CSS.
*   **Mailchimp API**: Integrated for managing newsletter subscriptions and fetching campaign data and metrics.

## Automation with n8n Workflow

This project leverages **n8n** for powerful workflow automation, enabling seamless integration and orchestration of various tasks related to the newsletter. While the frontend handles user subscriptions and dashboard display, n8n can be used for:

*   **Automated Newsletter Sending**: Triggering Mailchimp campaigns based on a schedule or specific events.
*   **Data Synchronization**: Syncing subscriber data or campaign metrics with other platforms or databases.
*   **Content Curation**: Automating the collection and processing of AI news articles before they are sent out.
*   **Notifications**: Sending internal notifications to your team about new subscribers, campaign performance, or system alerts.

n8n provides a visual workflow editor, allowing you to connect various services (including Mailchimp, databases, and other APIs) without writing extensive code. This ensures that the backend processes for your newsletter run smoothly and efficiently.

![image](https://github.com/user-attachments/assets/93d8f396-cf8d-4eee-b79b-34d80afb3638)

## 🚀 Setup and Installation


### 1️⃣ Clone the Repository

```bash
git clone https://github.com/N-45div/GTM_Challenge_AI_NewsLetter.git
cd GTM_Challenge_AI_NewsLetter
```


### 2️⃣ Install Dependencies

Use your preferred package manager:

```bash
npm install
```


### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory of the project, and add the following:

```env
MAILCHIMP_API_KEY=your_mailchimp_api_key-usX        
MAILCHIMP_AUDIENCE_ID=your_mailchimp_audience_id    
ADMIN_DASHBOARD_PASSWORD=your_secure_admin_password
NEXT_PUBLIC_VERCEL_URL=/        
```



### 4️⃣ Start the Development Server

```bash
npm run dev
```

Subscriber Screenshot :

![image](https://github.com/user-attachments/assets/46db31d2-f64d-40c8-b7d0-db7dfc525bc9)

