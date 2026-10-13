import type { CollectionEntry } from "astro:content";

export const reinventUrl = "https://reinvent.michalparkola.com/";

export const reinventReading = [
    {
        slug: "juicy-goals-find-out-what-people-actually-care-about",
        title: "Juicy Goals",
        summary: "Find the need behind a request such as “build an app.”",
    },
    {
        slug: "meaningful",
        title: "Make Your Communication Meaningful",
        summary:
            "Listen for customer needs and use customer language in your offer.",
    },
    {
        slug: "how-to-start-with-why",
        title: "How to Start with WHY",
        summary: "Identify who benefits and what result matters to them.",
    },
];

export function resolveReading(posts: CollectionEntry<"blog">[]) {
    return reinventReading.map((item) => {
        const post = posts.find((p) => p.id === item.slug);
        if (!post) throw new Error(`re_invent reading: missing post "${item.slug}"`);
        return { ...item, post };
    });
}
