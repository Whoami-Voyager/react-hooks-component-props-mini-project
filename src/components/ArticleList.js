import Article from "./Article"

function ArticleList({ posts }) {
    const posting = posts.map((blog) => {
        return <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview} />
    })
    return (
        <main>
            {posting}
        </main>
    )
}

export default ArticleList