import getExactPost from "@/lib/getExactPost";
import styles from "../../page.module.css";

export default async function SinglePost({ params }) {
    const { id } = params;
    const exactPost = await getExactPost(id);

    return (
        <div className={styles.container}>
            <h1>Post {id}</h1>
            <p>{exactPost.body}</p>
        </div>
    );
}
