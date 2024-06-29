import LatestBlogBox from "../../home/latest-blogs/LatestBlogBox";
import styles from "./phoneLatestBlogs.module.css"

const LatestBlogs = ({ blogs }: any) => {
  return (
    <>
      <div className={styles.latest_blog}>
        <h2 className="heading__primary color__secondary">
          Read the Latest from our Blogs
        </h2>
        <div className={styles.internet_latest_row}>
          {blogs?.blogs.map((blog: any) => {
            return (
              <LatestBlogBox
                key={blog._id}
                date={blog.created_at}
                title={blog.title}
                description={blog.excerpt}
                slug={blog.slug}
                color={true}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
