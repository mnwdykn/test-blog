import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <head>
        <title>最初の投稿</title>
      </head>
      <h1>最初の投稿</h1>
      <h2>
        Move To <Link href="/">HOME!</Link>
      </h2>
    </div>
  );
}
