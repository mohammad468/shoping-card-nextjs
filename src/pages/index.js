import MyNav from "../components/MyNav";
import Link from "next/link";
import MyDropdown from "../components/MyDropdown";

export default function Home() {
  return (
    <>
      <MyNav />
      <h1 className="text-center my-5 text-9xl font-black antialiased tracking-tighter">
        HomePage
      </h1>
      {/* <MyDropdown /> */}
      {/* <h1>homePage</h1>
      <Link href="/products">
        <a>go to products</a>
      </Link> */}
    </>
  );
}
