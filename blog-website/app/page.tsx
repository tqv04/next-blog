"use client";
import Section1 from "@/component/section1";
import PostCard from "./postcard/page";
import Subscribe from "@/component/subcribe";
import FeaturePosts from "./featurepost/page";
export default function Home() {
  return (
    <>
      <Section1 />
      <PostCard />
      <FeaturePosts />
      <Subscribe />
    </>
  );
}
