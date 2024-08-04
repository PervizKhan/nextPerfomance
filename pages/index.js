import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const imageSrc = "/4.png";

  return {
    props: {
      imageSrc,
    },
  };
}

const HomePage = ({ imageSrc }) => {
  const imageElements = Array.from({ length: 100 }).map((_, i) => (
    <div key={i} style={{ marginBottom: "10px" }}>
      <Image
        src={imageSrc}
        alt={`Image ${i}`}
        width={800}
        height={600}
        layout="responsive"
      />
    </div>
  ));

  return (
    <div>
      <Link href="/page2">Go to Page 2</Link>
      {imageElements}
    </div>
  );
};

export default HomePage;
