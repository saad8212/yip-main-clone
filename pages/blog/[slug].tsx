import Head from "next/head";
import { useRouter } from "next/router";
import Banner from "../../components/detail-blog/banner/Banner";
import Content from "../../components/detail-blog/content/Content";

import getBlog from "../../controllers/getBlog";
import getBlogs from "../../controllers/getBlogs";
import Popup from "../../components/global/popup/Popup";
import Header from "../../components/xfinity/Header/Header";
import Discliamer from "../../components/disclaimer/disclaimer";

const Detail = ({ data }: any) => {
  console.log(' blog path check >> ', data?.blog);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{data?.blog.title}</title>
        <meta name="title" content={data?.blog.title} />
        <meta name="description" content={data?.blog.excerpt} />
        <meta name="keywords" content={data?.blog.meta_keywords.join(",")} />
        <meta name="robots" content="index,follow" />
        {/* <meta name="robots" content="index,follow" /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.yourinternetprovider.us/blog/${data?.blog.slug}`}
        />
        <meta property="og:title" content={data?.blog.title} />
        <meta property="og:description" content={data?.blog.excerpt} />
        <meta property="og:image" content={data?.blog.image} />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={data?.blog.image} />
        <meta property="twitter:title" content={data?.blog.title} />
        <meta property="twitter:description" content={data?.blog.excerpt} />
        <meta property="twitter:image" content={data?.blog.image}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="alternate"
          href={`https://www.yourinternetprovider.us/blog/${data?.blog.slug}`}
          hrefLang="en-us"
        />
      </Head>
      <main className="arial_font">
        {data?.blog.slug === 'how-to-cancel-comcast-xfinity-internet' ?
          (
            <div style={{ position: "relative", top: '12vh', width: '100vw' }}>
              <Header number="+1(888) 412-5051" />
            </div>
          ) : null
        }
        <Banner blog={data?.blog} />
        <Content blog={data?.blog} relatedBlogs={data?.relatedBlogs} />
      </main>

      {data?.blog.slug === 'how-to-cancel-comcast-xfinity-internet' ?
        (
          <>
          <Discliamer provider="Xfiniy Comcast"/>
          <Popup
            color="linear-gradient(90deg,#ff7f7f 28%,#a80909)"
            url="/xfinity/xfinity-authorized-dealer-logo.png"
            logoWidth="200px"
            number="1(888) 894-1238"
            text="Call To Cancel Comcast Xfinity"
          />
          </>
        ) : null
      }

    </>
  );
};

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const blog = (await getBlog(slug)) as any[];
  const relatedBlogs = await getBlogs(1, 2, "", blog[0].category?._id);

  if (blog.length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: { blog: blog[0], relatedBlogs },
    },
  };
}
export async function getStaticPaths() {
  const response = (await getBlogs(1, null)) as { blogs: any[] };

  // Get the paths we want to pre-render based on blogs
  const paths = response?.blogs?.map((blog: { slug: string }) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: true };
}

export default Detail;
