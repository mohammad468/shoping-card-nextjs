import MyNav from "../components/MyNav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MyNav />
      <h1>homePage</h1>
      <Link href="/products">
        <a>go to products</a>
      </Link>
    </>
  );
}
