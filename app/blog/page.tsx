import { title } from "@/components/primitives";
import { Posts } from "./components/Posts";

import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function BlogPage() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });
  return (
    <div>
      <h1 className={title()}>
        <Posts posts={posts} />
      </h1>
    </div>
  );
}
