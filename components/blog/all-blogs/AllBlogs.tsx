import { useState } from "react"; 
import { motion } from "framer-motion";
import Blog from "./Blog"; 
import styles from "./all-blogs.module.css"; 
import Img from "../../utils/image/Img";
import Pagination from "../../blog/pagination/Pagination";
import Head from "next/head"; 

 

const AllBlogs = ({ blogs }: any) => { 
  const [isHover, setIsHover] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const productPerPage = 10;

  const totalItems = blogs.total; // Total number of items from the API
 
  const totalPages = Math.ceil(totalItems / productPerPage);

  // handlers
  const handleSearchInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchVal(e.target.value);
  };
  const handleClickOnSearchBtn = () => {
    const queryParams = new URLSearchParams();
    setSearchQuery(searchVal);
    if (searchVal) {
      queryParams.set("search", searchVal);
    }
    if (currentPage) {
      queryParams.set("page", currentPage.toString());
    }
    const newUrl = `/blog?${queryParams.toString()}`;
    window.location.href = newUrl;
  
  };
 

  return (
    <>
      <Head>
        <link rel="canonical" href={`/blog?page=${currentPage}`} />
        {currentPage > 1 && (
          <link rel="prev" href={`/blog?page=${currentPage - 1}`} />
        )}
        {currentPage < totalPages && (
          <link rel="next" href={`/blog?page=${currentPage + 1}`} />
        )}
      </Head>
      <section className={styles.all_blogs} style={{ position: "relative" }}>
        <div className={styles.wrapper}>
          <h2 className={styles.section_title + " heading__primary"}>
            More Tech-savvy reads for the modern world
          </h2>
          <div className={`${styles.search_area + " container"}`}>
            <div className={styles.search_bar}>
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearchInputOnChange}
                onKeyPress={(e: any) =>
                  e.key === "Enter" && handleClickOnSearchBtn()
                }
              />
              <motion.div
                className={styles.arrows_wrapper}
                onHoverStart={() => setIsHover(true)}
                onHoverEnd={() => setIsHover(false)}
                onClick={handleClickOnSearchBtn}
              >
                <motion.div
                  className={styles.arrows}
                  animate={
                    isHover
                      ? {
                          y: "-1.5vw",
                          x: "-0.4vw",
                        }
                      : { y: "0.3vw", x: "-0.48vw" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.outlineArrowBox}>
                    <Img
                      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/search.svg`}
                      alt="Internet service provider"
                      sizes={{
                        default: [2, 2],
                        mobile: [19.4, 16],
                      }}
                    />
                  </div>
                  <div className={styles.darkArrowBox}>
                    <Img
                      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/search.svg`}
                      alt="Internet service provider"
                      sizes={{
                        default: [2, 2],
                        mobile: [19.4, 16],
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
            {/* <div
              className={styles.categories + `${loading ? " not_allowed" : ""}`}
            >
              {categories?.length > 0 && (
                <Swiper
                  className="categries_slider"
                  slidesPerView={width < breakpoint.mobile ? 4 : 6}
                  modules={[Autoplay]}
                  autoplay={{ delay: 2500 }}
                >
                  <SwiperSlide>
                    <button
                      onClick={() => {
                        setCategory("");
                        setCurrentPage(1);
                      }}
                      className={category === "" ? styles.active : ""}
                    >
                      All
                    </button>
                  </SwiperSlide>
                  {categories?.map((c: any) => (
                    <SwiperSlide key={c._id}>
                      <button
                        onClick={() => {
                          setCategory(c._id);
                          setCurrentPage(1);
                        }}
                        className={category === c._id ? styles.active : ""}
                      >
                        {c.name}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div> */}
          </div>

          <>
            <div className={styles.blogs}>
              {blogs &&
                blogs.blogs.map((b: any) => {
                  return (
                    <Blog
                      key={b._id}
                      id={b._id}
                      heading={b.title}
                      createdAt={b.created_at}
                      category={b.category}
                      readTime={b.read_time}
                      image={b.image}
                      excerpt={b.excerpt}
                      slug={b.slug}
                    />
                  );
                })}
            </div>
           

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              searchQuery = {searchQuery}
            />
          </>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
