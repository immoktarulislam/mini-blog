export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="container">
            <h1>Blog Post</h1>

            <p>
                You are reading:
            </p>

            <h2>{slug}</h2>
        </div>
    );
}