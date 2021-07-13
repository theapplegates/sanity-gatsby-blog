export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60edfc0d38d4f960fd3ed6c8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e6guh5to",
                  apiId: "3bc323b1-e0dc-426c-a7a1-b4781ae0f129",
                },
                {
                  buildHookId: "60edfc0dfbbe4d5eba05ea9c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-r6ji1zs6",
                  apiId: "1658824e-bb39-4d2a-be50-c91930a8492b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/theapplegates/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-r6ji1zs6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
