import React from "react";
import styles from "../styles/BlogPage.module.css";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    // <div className={styles.grid}>
    <div className={styles.cardBody}>
      {post.yoast_head_json.og_image && post.yoast_head_json.og_image[0] && (
        <img
          className={styles.cardImage}
          src={post.yoast_head_json.og_image[0].url}
          alt="OG Image"
        />
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{post.yoast_head_json.title}</h2>
        <p className={styles.author}>
          Author: {post.yoast_head_json.author}
        </p>{" "}
        <p className={styles.date}>
          Publication Date:{" "}
          {new Date(
            post.yoast_head_json.article_published_time
          ).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <p style={{ fontWeight: 700 }}> {post.yoast_head_json.description}</p>
        <Link href={`/${post.id}`}>
          <button className={styles.button}>Read Full Post</button>{" "}
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default BlogCard;
