import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      const res = await fetch(`/data/posts.json`);
      const posts = await res.json();
      const postDetail = posts.find((post) => post.id.toString() === id);
      setPostDetails(postDetail);
    };

    if (id) {
      fetchPostDetails();
    }
  }, [id]);

  if (!postDetails) return <div>Loading...</div>;

  return (
    <div className="container mx-auto flex flex-col items-center">
      <img w-full h-60 src={`/${postDetails.img}`} alt={postDetails.name} />
      <h1 className="text-3xl font-bold my-8">{postDetails.name}</h1>
      <p>
        <strong>Foundation Date:</strong> {postDetails.foundation_date}
      </p>
      <p>
        <strong>Popularity Score:</strong> {postDetails.popularity_score}
      </p>
    </div>
  );
};

export default PostDetail;