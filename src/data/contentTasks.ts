import type { ContentTask } from "../type/contentTask";

export const contentTasks: ContentTask[] = [
    {
        id: "1",
        title: "The Future of SEO in 2026",
        type: "Blog",
        status: "Draft",
        priority: "High",
        dueDate: "2026-02-15",
        slug: "/blog/future-of-seo-2026",
        wordCount: 1500,
        targetKeyword: "future of seo",
        assignee: "Alex Writer",
        content: `
            This article explores upcoming SEO trends in 2026, including AI-powered search,
            zero-click results, voice search optimization, and evolving ranking factors.
            The goal is to provide actionable insights for marketers to stay ahead of
            algorithm changes and maintain organic visibility.
        `
    },
    {
        id: "2",
        title: "Product Launch Landing Page",
        type: "Landing Page",
        status: "Review",
        priority: "High",
        dueDate: "2026-01-20",
        slug: "/lp/new-product-launch",
        wordCount: 800,
        targetKeyword: "analytics dashboard tool",
        assignee: "Sarah Design",
        content: `
            This landing page highlights the core features and benefits of the new analytics
            dashboard. It focuses on clear value propositions, conversion-focused copy,
            feature breakdowns, testimonials, and strong CTAs to drive product sign-ups.
        `
    },
    {
        id: "3",
        title: "Weekly Newsletter - Jan Week 3",
        type: "Email",
        status: "Planned",
        priority: "Medium",
        dueDate: "2026-01-18",
        slug: "n/a",
        wordCount: 400,
        targetKeyword: "n/a",
        assignee: "Mike Marketing",
        content: `
            This newsletter summarizes the latest blog posts, feature updates, and marketing
            tips from the past week. It aims to keep subscribers engaged with short insights,
            helpful links, and a friendly, conversational tone.
        `
    },
    {
        id: "4",
        title: "Social Media Announcement",
        type: "Social Post",
        status: "Published",
        priority: "Low",
        dueDate: "2026-01-10",
        slug: "n/a",
        wordCount: 100,
        targetKeyword: "new features",
        assignee: "Alex Writer",
        content: `
            🚀 We’ve officially launched our new analytics dashboard!
            Track performance, uncover insights, and grow faster—all in one place.
            👉 Check it out here: [link]
            #SEO #Analytics #ProductUpdate
        `
    },
    {
        id: "5",
        title: "How to Optimize Backlinks",
        type: "Blog",
        status: "Draft",
        priority: "Medium",
        dueDate: "2026-02-28",
        slug: "/blog/backlink-optimization-guide",
        wordCount: 2000,
        targetKeyword: "backlink optimization",
        assignee: "Guest Expert",
        content: `
            This in-depth guide covers backlink optimization strategies such as link audits,
            anchor text optimization, toxic link removal, and earning high-authority links.
            It is designed for SEO professionals looking to improve rankings and domain authority.
        `
    }
];
