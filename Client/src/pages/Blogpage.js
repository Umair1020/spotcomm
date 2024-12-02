import React from 'react'
import Header from '../components/Header'
import "../App.css"
import "./blog.css"
import $ from 'jquery'

window.jquery = window.$ = $


const Blogpage = () => {


    return (
        <div>
            <Header />

            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                    <div className="layout-container-component aem-GridColumn aem-GridColumn--default--12">

                        <div className="white img-position--">
                            <div className="layoutcontainer">
                                <div className="withoutmargin ">
                                    <div className="spacing">
                                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-banner-small aem-GridColumn aem-GridColumn--default--12">

                        <div className="banner home-banner">
                            {/* pop up html starts */}
                            {/* pop up html ends */}
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="banner-container tiles">
                                            <div className="new-videoBanner-container">
                                                {/* Hero banner video setion starts */}
                                                {/* Hero banner video setion ends */}
                                                {/* Hero banner single image starts*/}
                                                <div>
                                                    <div className="slide hbanner1 cus-mob-banner">
                                                        <div className="overlay-to-right mob-overlay-to-right cus-mob-cls" style={{ height: '100% !important', width: '100%' }}>

                                                            <div className="overlay">
                                                                <div className="ContentWrap">
                                                                    <div className="disc" style={{ backgroundColor: '#00000000' }} />
                                                                    <div className="slide-content text-akkurat-regular" tabIndex={0}>
                                                                        <div className="h1-akkurat-mono mob-h1-akkurat-mono" style={{ color: '#FFFFFF' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Hero banner single image ends*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* article publish date starts */}
                        <p className="article-publish-date"> </p>
                        {/* article publish date ends */}</div>
                    <div className="blog-list-latest aem-GridColumn aem-GridColumn--default--12">
                        <link rel="stylesheet" href="/etc.clientlibs/nexus/clientlib-blog-latest.lc-d753ef2c9856433fdab588b1ad178d4f-lc.min.css" type="text/css" />
                        {/* <div class="loader_wrapper">
        <div class="loader"></div>
    </div> */}
                        <div className="main_blog" data-enable-category="false" data-blog-path="/content/nexus/en/blogs">
                            <div className="blog_filters col-md-3 col-sm-12">
                                <input type="text" name id placeholder="Search.." />
                                <span className="search_icon" />
                                <span className="mob_clear_all">Clear all</span>
                                <div className="blog_filters_wrapper">
                                    <div className="filter_section">
                                        <h3>Filter</h3>
                                        <h4 className="filter_clearAll">Clear all</h4>
                                    </div>
                                    <select className="blog_theme selectpick">
                                        <option selected value>All category</option>
                                    </select>
                                    <select className="blog_industry selectpick">
                                        <option selected value>Industries/Services</option>
                                    </select>
                                    <select className="blog_year selectpick">
                                        <option selected value>All year</option>
                                    </select>
                                </div>
                            </div>
                            <div className="blog_latest col-md-9 col-sm-12" data-url="/content/nexus/en/blogs/jcr:content/par-1/blog_list_latest_cop" data-path="/content/nexus/en/blogs" data-pagesize={30} data-noresult="No Results found">
                                <div className="blogLargeCard" style={{ backgroundColor: 'rgb(60,11,102)' }}>
                                    <div className="blogLargeCard-bgImg desktop">
                                        <p className="bgImg">
                                            <img src="/content/dam/nexus/en/latest-blog-bg.jpg" className="show-desktop" alt="flowers" />
                                        </p>
                                    </div>
                                    <div className="blogLargeCard-bgImg mobile">
                                        <p className="bgImg">
                                            <img src="/content/dam/nexus/en/latest-blog-bg.jpg" className="show-desktop" alt="flowers" />
                                        </p>
                                    </div>
                                    <div className="blogLargeCard-textArea">
                                        <h1 className="heading">Editor's Pick</h1>
                                        <a href="/blogs/suzanne-j-dann/data-a-strategic-asset-enabling-value-creation-for-insurers/">
                                            <h3 className="sub-heading">Data: A Strategic Asset Enabling Value Creation for Insurers</h3>
                                        </a>
                                        <div className="blog-discription">
                                            <p>The insurance industry has tradionally relied on data sources such as claims history to underwrite known and measurable risk. </p>
                                        </div>
                                        <div className="blog-profile-area">
                                            <div className="blog-profile"><a href="/blogs/suzanne-j-dann/"><img src="/etc.clientlibs/nexus/clientlib-blog-latest/resources/face.jpg" /></a>
                                                <div className="blog_img">
                                                    <a href="/blogs/suzanne-j-dann/"> <span className="profileName">Suzanne J. Dann</span></a>
                                                    <span>March 24, 2023</span>
                                                </div>
                                            </div>
                                            <div className="blog-rating">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blogCard_wrapper">
                                </div>
                                <div className="blog_pagination">
                                    <button className="blog_prev">Previous</button>
                                    <ul id="pagin">
                                    </ul>
                                    <button className="blog_next">Next</button>
                                </div>
                            </div>
                            <div className="blog_filter_links">
                                <div className="industry_links">
                                    <h5>Blogs by Industries</h5>
                                </div>
                                <div className="theme_links">
                                    <h5>Blogs by Categories</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="interactive-image aem-GridColumn aem-GridColumn--default--12">
                        <style dangerouslySetInnerHTML={{ __html: "\n .selectpick .dropdown-menu.open{\nmax-height: 270px !important;\n}\n.bootstrap-select.btn-group .dropdown-menu.inner{\nmax-height: 260px !important;\n}\n " }} />
                    </div>
                </div>
            </div>
            <div>
                <div className="newpar new section">
                </div>
                <div className="par iparys_inherited">
                </div>
            </div>
           
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
            <div>
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                </div>
            </div>
           
           
          
        </div>
    )
}

export default Blogpage