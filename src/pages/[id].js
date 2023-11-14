import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/BlogPage.module.css";

const BlogPost = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        // Make an API request using the id
        const response = await fetch(
          `https://wowtalent.live/wp-json/wp/v2/posts/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setPost(data);
          setLoading(false);
        } else {
          setLoading(false);
          console.error("Failed to fetch post data");
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchPostData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.main}>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className={styles.container}>
        <div>
          {post?.yoast_head_json.og_image &&
            post?.yoast_head_json.og_image[0] && (
              <img
                className={styles.cardImage}
                src={post?.yoast_head_json.og_image[0].url}
                alt="OG Image"
              />
            )}
          <div className={styles.content}>
            <h2 className={styles.title}>{post?.yoast_head_json.title}</h2>
            <p className={styles.author}>
              Author: {post?.yoast_head_json.author}
            </p>{" "}
            <p className={styles.date}>
              Publication Date:{" "}
              {new Date(
                post?.yoast_head_json.article_published_time
              ).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
            <p> {post?.yoast_head_json.description}</p>
          </div>
        </div>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1 style={{ color: "white" }}>
            <span style={{ color: "	#FF7F50" }}>Sample </span> blog post
          </h1>
          <p style={{ paddingBottom: "30px" }}>
            {new Date(
              post?.yoast_head_json.article_published_time
            ).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}{" "}
            by <span>{post?.yoast_head_json.author}</span>
          </p>

          <hr />
          <p>
            Cum sociis natoque penatibus et magnis , nascetur ridiculus mus.
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
            consectetur purus sit amet fermentum.
          </p>
          <blockquote>
            <p>
              Curabitur blandit tempus porttitor.{" "}
              <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
              leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
          </blockquote>
          <p>
            Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </p>
          <div style={{ paddingTop: "30px" }}>
            <h2 style={{ color: "	#FF7F50" }}>Heading</h2>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </div>
          <div
            style={{
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <h3
              style={{
                color: "	#FF7F50",
              }}
            >
              Sub-heading
            </h3>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
            <pre>
              <code>Example code block</code>
            </pre>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
              malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa.
            </p>
          </div>

          <h3 style={{ color: "	#FF7F50" }}>Sub-heading</h3>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
            consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus.
          </p>
          <ul>
            <li>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.
            </li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
            libero, a pharetra augue.
          </p>
          <ol>
            <li>Vestibulum id ligula porta felis euismod semper.</li>
            <li>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </li>
            <li>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </li>
          </ol>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Sed posuere
            consectetur est at lobortis.
          </p>
        </div>
        {/* jjjjjjjjjjjjjj */}
      </main>
      <div className={styles.footer}>
        <img
          style={{ width: "260px" }}
          src="https://wowtalent.live/wp-content/themes/wow/asset/img/logo.png"
          alt="companyLogo"
        />
        <div style={{ textAlign: "center" }}>
          <p>
            <strong>{post?.yoast_head_json.title}</strong>
          </p>
          <p>Copyright 2023,</p>
          <p>{post?.yoast_head_json.author}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
