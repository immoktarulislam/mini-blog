import Link from "next/link";

const posts = [
    {
        slug: "react",
        title: "Learn React",
    },
    {
        slug: "nextjssssssssss",
        title: "Learn Next.js",
    },
    {
        slug: "typescript",
        title: "Learn TypeScript",
    },
];


const page = () => {
    return (
        <div className="container">
            <h1>My Blog</h1>

            {posts.map((post) => (
                <div className="card" key={post.slug}>
                    <h2>{post.title}</h2>

                    <Link href={`/blog/${post.slug}`}>
                        Read Article →
                    </Link>
                </div>
            ))}
        </div>
    );

};

export default page;