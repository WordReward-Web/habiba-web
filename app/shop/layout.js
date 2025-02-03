import SearchBar from "@/components/shop/serchBar/searchBar.component";
import styles from "./layout.module.css";
import SideCanvas from "@/components/general/sideCanvas/sideCanvas.container";
import PagePresentationHeader from "@/components/general/pagePresentationHeader/pagePresentationHeader.component";
export default async function ShopLayout({ categories, products }) {
  return (
    <>
      <PagePresentationHeader
        content={{
          pageHeadingTxt: "Shop",
          mainPage: { txt: "Home", route: "/" },
          inBetweenPages: [],
          currentPageTxt: "Shop",
        }}
      />
      <section className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="gap-3 justify-content-between d-flex d-lg-block align-items-center mb-4 pb-1">
                <SearchBar />

                <div
                  className={`${styles.productHeader} d-grid d-sm-flex justify-content-end align-items-sm-center`}
                >
                  <SideCanvas placement={"start"} name={"Filter"}>
                    {categories}
                  </SideCanvas>
                </div>
              </div>
              <div className={`row ${styles.shopContainer}`}>{products}</div>
            </div>
            <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0 d-none d-lg-block">
              {categories}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
