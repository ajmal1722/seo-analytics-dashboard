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
        content: 'Sample content'
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
        content: 'Sample content'
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
        content: 'Sample content'
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
            🚀 We just launched our new dashboard! Check it out here: [link] #SEO #Analytics
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
        content: 'Sample content'
    }
];
