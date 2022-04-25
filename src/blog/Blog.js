import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {Helmet} from "react-helmet";
import Communityheader from "../layout/Communityheader";
import Footer from "../layout/Footer";

import './css/animate.min.css';
import './css/magnific-popup.css';
import './css/slick.css';
import './css/jquery-nice-select.min.css';
import './css/style.css';
import Header from "../layout/Header";


export const Blog = () => {
    var localStorageLang = localStorage.getItem("lang");
    if (localStorageLang === null) {
      localStorageLang = "Japanese";
    }

      return (
          
        <div style={{ minheight: "400px" }}>
            {/* <Communityheader /> */}
            <Header/>
          
            <section className="banner-section">
                <div className="banner-slider">
                    <div className="sinlge-banner">
                        <div className="banner-wrapper">
                            <div className="banner-bg" style={{backgroundImage: "url(/images/01.jpg)"}}></div>
                            <div className="banner-content" data-animation="fadeInUp" data-delay="0.3s">
                                <h3 className="title" data-animation="fadeInUp" data-delay="0.6s">
                                    <a href="#">
                                        The Olivier da Costa restaurant experience in Lisbon
                                    </a>
                                </h3>
                                <ul className="meta" data-animation="fadeInUp" data-delay="0.8s">
                                    <li><a href="#">By - Zhon Smith</a></li>
                                    <li><a href="#">Travel,</a><a href="#">Design,</a><a href="#">Nature</a></li>
                                </ul>
                                <p data-animation="fadeInUp" data-delay="1s">
                                    When it comes to creating is a website for your busin an attractive design will only get you
                                    far. With people increasingly using their tablets and smartphones and shop online,...
                                </p>
                                <a href="blog-details.html" className="read-more" data-animation="fadeInUp" data-delay="1.2s">
                                    Read More <i className="fas fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sinlge-banner">
                        <div className="banner-wrapper">
                            <div className="banner-bg" style={{backgroundImage: "url(/images/02.jpg)"}}></div>
                            <div className="banner-content" data-animation="fadeInUp" data-delay="0.3s">
                                <h3 className="title" data-animation="fadeInUp" data-delay="0.6s">
                                    <a href="#">
                                        The Olivier da Costa restaurant experience in Lisbon
                                    </a>
                                </h3>
                                <ul className="meta" data-animation="fadeInUp" data-delay="0.8s">
                                    <li><a href="#">By - Zhon Smith</a></li>
                                    <li><a href="#">Travel,</a><a href="#">Design,</a><a href="#">Nature</a></li>
                                </ul>
                                <p data-animation="fadeInUp" data-delay="1s">
                                    When it comes to creating is a website for your busin an attractive design will only get you
                                    far. With people increasingly using their tablets and smartphones and shop online,...
                                </p>
                                <a href="blog-details.html" className="read-more" data-animation="fadeInUp" data-delay="1.2s">
                                    Read More <i className="fas fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-nav"></div>
            </section>

            {/* content area */}
            <section className="post-area with-sidebar" id="postWarpperLoaded">
                <div className="container container-1250">
                    <div className="post-area-inner">
                        <div className="entry-posts two-column masonary-posts row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="entry-post">
                                    <div className="entry-thumbnail">
                                        <img src="/img/posts/01.jpg" alt="Image"/>
                                    </div>
                                    <div className="entry-content">
                                        <h4 className="title">
                                            <a href="blog-details.html">
                                                Best Investment 2022
                                            </a>
                                        </h4>
                                        <ul className="post-meta">
                                            <li className="date">
                                                <a href="#">18-04-21</a>
                                            </li>
                                            <li className="categories">
                                                <a href="#">Design,</a>
                                                <a href="#">Travel,</a>
                                                <a href="#">photography,</a>
                                                <a href="#">Nature</a>
                                            </li>
                                        </ul>
                                        <p>
                                            When it comes to creating is a website for your business, an attractive design
                                            will only get you far. With people increasingly using their tablets and
                                            smartphones and shop online,...
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read More <i className="fas fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="entry-post">
                                    <div className="entry-thumbnail">
                                        <img src="/img/posts/02.jpg" alt="Image"/>
                                    </div>
                                    <div className="entry-content">
                                        <h4 className="title">
                                            <a href="blog-details.html">
                                                Nature Photography Best Focus
                                            </a>
                                        </h4>
                                        <ul className="post-meta">
                                            <li className="date">
                                                <a href="#">18-04-21</a>
                                            </li>
                                            <li className="categories">
                                                <a href="#">Design,</a>
                                                <a href="#">Travel,</a>
                                                <a href="#">photography,</a>
                                                <a href="#">Nature</a>
                                            </li>
                                        </ul>
                                        <p>
                                            When it comes to creating is a website for your business, an attractive design
                                            will only get you far. With people increasingly using their tablets and
                                            smartphones and shop online,...
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read More <i className="fas fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="entry-post">
                                    <div className="entry-thumbnail">
                                        <img src="/img/posts/04.jpg" alt="Image"/>
                                    </div>
                                    <div className="entry-content">
                                        <h4 className="title">
                                            <a href="blog-details.html">
                                                Tasty Burger Food Review
                                            </a>
                                        </h4>
                                        <ul className="post-meta">
                                            <li className="date">
                                                <a href="#">18-04-21</a>
                                            </li>
                                            <li className="categories">
                                                <a href="#">Design,</a>
                                                <a href="#">Travel,</a>
                                                <a href="#">photography,</a>
                                                <a href="#">Nature</a>
                                            </li>
                                        </ul>
                                        <p>
                                            When it comes to creating is a website for your business, an attractive design
                                            will only get you far. With people increasingly using their tablets and
                                            smartphones and shop online,...
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read More <i className="fas fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="entry-post">
                                    <div className="entry-thumbnail">
                                        <img src="/img/posts/03.jpg" alt="Image"/>
                                    </div>
                                    <div className="entry-content">
                                        <h4 className="title">
                                            <a href="blog-details.html">
                                                World Best Travel Place in 2020
                                            </a>
                                        </h4>
                                        <ul className="post-meta">
                                            <li className="date">
                                                <a href="#">18-04-21</a>
                                            </li>
                                            <li className="categories">
                                                <a href="#">Design,</a>
                                                <a href="#">Travel,</a>
                                                <a href="#">photography,</a>
                                                <a href="#">Nature</a>
                                            </li>
                                        </ul>
                                        <p>
                                            When it comes to creating is a website for your business, an attractive design
                                            will only get you far. With people increasingly using their tablets and
                                            smartphones and shop online,...
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read More <i className="fas fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="entry-post">
                                    <div className="entry-thumbnail">
                                        <img src="/img/posts/05.jpg" alt="Image"/>
                                    </div>
                                    <div className="entry-content">
                                        <h4 className="title">
                                            <a href="blog-details.html">
                                                New Dress For 2021, Exclusive Collection
                                            </a>
                                        </h4>
                                        <ul className="post-meta">
                                            <li className="date">
                                                <a href="#">18-04-21</a>
                                            </li>
                                            <li className="categories">
                                                <a href="#">Design,</a>
                                                <a href="#">Travel,</a>
                                                <a href="#">photography,</a>
                                                <a href="#">Nature</a>
                                            </li>
                                        </ul>
                                        <p>
                                            When it comes to creating is a website for your business, an attractive design
                                            will only get you far. With people increasingly using their tablets and
                                            smartphones and shop online,...
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read More <i className="fas fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="entry-post">
                                    <div className="entry-thumbnail">
                                        <img src="/img/posts/06.jpg" alt="Image"/>
                                    </div>
                                    <div className="entry-content">
                                        <h4 className="title">
                                            <a href="blog-details.html">
                                            Best Investment in 2021
                                            </a>
                                        </h4>
                                        <ul className="post-meta">
                                            <li className="date">
                                                <a href="#">18-04-21</a>
                                            </li>
                                            <li className="categories">
                                                <a href="#">Design,</a>
                                                <a href="#">Travel,</a>
                                                <a href="#">photography,</a>
                                                <a href="#">Nature</a>
                                            </li>
                                        </ul>
                                        <p>
                                            When it comes to creating is a website for your business, an attractive design
                                            will only get you far. With people increasingly using their tablets and
                                            smartphones and shop online,...
                                        </p>
                                        <a href="blog-details.html" className="read-more">
                                            Read More <i className="fas fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center">
                                    <a href="#" className="load-more-btn">Load More</a>
                                </div>
                            </div>
                        </div>
                        <div className="primary-sidebar clearfix">
                            <div className="sidebar-masonary row justify-content-center">
                                <div className="col-lg-12 col-md-6 col-sm-8 widget author-widget">
                                    <div className="author-img">
                                        <img src="/img/sidebar/author.jpg" alt="Post-Author"/>
                                    </div>
                                    <h5 className="widget-title">I am a Bloger</h5>
                                    <p>
                                        When it comes to creating is a website for your business, an attractive design will only
                                        get you far,...
                                    </p>
                                    <div className="author-signature">
                                        <img src="/img/sidebar/author-signature.png" alt="Signature"/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-8 widget categories-widget">
                                    <h5 className="widget-title">Categoriesr</h5>
                                    <div className="categories">
                                        <div className="categorie" style={{backgroundImage: "url(/img/sidebar/cat/01.jpg)"}}>
                                            <a href="#">
                                                Business
                                            </a>
                                        </div>
                                        <div className="categorie" style={{backgroundImage: "url(/img/sidebar/cat/02.jpg)"}}>
                                            <a href="#">
                                                Fashion
                                            </a>
                                        </div>
                                        <div className="categorie" style={{backgroundImage: "url(/img/sidebar/cat/03.jpg)"}}>
                                            <a href="#">
                                                Artistic
                                            </a>
                                        </div>
                                        <div className="categorie" style={{backgroundImage: "url(/img/sidebar/cat/04.jpg)"}}>
                                            <a href="#">
                                                Media
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-8 widget social-widget">
                                    <h5 className="widget-title">Subscribe</h5>
                                    <div className="social-links">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>Facebook
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>Twitter
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-instagram"></i>Instagram
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>YouTube
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-pinterest-p"></i>Pinterest
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-8 widget popular-articles">
                                    <h5 className="widget-title">Popular Articles</h5>
                                    <div className="articles">
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/01.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Best Wordpress Theme of 2018</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/02.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Dating While Studying Abroad—Maximize Fun
                                                        Minimize Heartbreak</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/03.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Nature Photography Best Place Focus</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/04.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Best Wordpress Theme of 2018</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-8 widget ad-widget">
                                    <img src="/img/sidebar/ad.jpg" alt="Image"/>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-8 widget popular-articles">
                                    <h5 className="widget-title">Recent Articles</h5>
                                    <div className="articles">
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/01.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Best Wordpress Theme of 2018</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/02.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Dating While Studying Abroad—Maximize Fun
                                                        Minimize Heartbreak</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/03.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Nature Photography Best Place Focus</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                        <div className="article">
                                            <div className="thumb">
                                                <img src="/img/sidebar/articles/04.jpg" alt="Image"/>
                                            </div>
                                            <div className="desc">
                                                <h6><a href="blog-details.html">Best Wordpress Theme of 2018</a></h6>
                                                <span className="post-date">Audust 23, 2015</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-sm-8 widget ad-widget">
                                    <img src="/img/sidebar/ad.jpg" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /end */}
	
          <Footer />
        </div>
      );



    };
    

