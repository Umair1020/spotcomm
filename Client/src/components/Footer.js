import React from 'react'
import "./footer.css"
import Demo from './Navbar'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
    
               {/* <Demo /> */}
                <div className="row justify-content-between">
                    <div className="col-lg-5 justify-content-start newsletter-wrap">
                        <div>
                            <h2 className='text-light'>
                                Subscribe
                            </h2>
                            <div className="d-lg-flex w-100 gap-2 Newsletter">
                                <form
                                   
                                >
                                    <div
                                        className="field--type-email field--name-mail field--widget-email-default js-form-wrapper form-wrapper"
                                        data-drupal-selector="edit-mail-wrapper"
                                        id="edit-mail-wrapper"
                                    >
                                        <div className="js-form-item form-item js-form-type-email form-item-mail-0-value js-form-item-mail-0-value">
                                            <label
                                                className="js-form-required form-required text-light"
                                                htmlFor="edit-mail-0-value"
                                            >
                                                Stay updated on how future of technology is shaping.
                                            </label>
                                            <input
                                                // aria-describedby="edit-mail-0-value--description"
                                                // aria-required="true"
                                                className="form-email "
                                               
                                                maxLength="254"
                                              
                                                placeholder="Enter your email here"
                                              
                                                size="60"
                                                type="email"
                                            />
                                            <div
                                                className="description"
                                                id="edit-mail-0-value--description"
                                            >
                                                The subscriber's email address.
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="field--type-simplenews-subscription field--name-subscriptions field--widget-simplenews-subscription-select js-form-wrapper form-wrapper"
                                        data-drupal-selector="edit-subscriptions-wrapper"
                                        id="edit-subscriptions-wrapper"
                                    />
                                    <div
                                        className="js-form-item form-item js-form-type-item form-item-message js-form-item-message form-no-label"
                                        id="edit-message"
                                    >
                                        Stay updated on how future of technology is shaping.
                                    </div>
                                    <input
                                        autoComplete="off"
                                        data-drupal-selector="form-wsxdbdnmmcronqyq9u1wsplvucjj4oiothfux9n9zb4"
                                        defaultValue="form-wsxdbDNMmCrONqYQ9u1WspLVUcJj4oIothFUX9n9ZB4"
                                        name="form_build_id"
                                        type="hidden"
                                    />
                                    <input
                                        data-drupal-selector="edit-simplenews-subscriptions-block-43e0caa8-a2cd-48ea-96f0-4819f0dd8666"
                                        defaultValue="simplenews_subscriptions_block_43e0caa8-a2cd-48ea-96f0-4819f0dd8666"
                                        name="form_id"
                                        type="hidden"
                                    />
                                    <div
                                        className="form-actions js-form-wrapper form-wrapper"
                                        data-drupal-selector="edit-actions"
                                        id="edit-actions--3"
                                    >
                                        <input
                                            className="button button--primary js-form-submit form-submit text-light"
                                            data-drupal-selector="edit-submit"
                                            id="edit-submit--2"
                                            name="op"
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 justify-content-end">
                        <div className="social-icons mt-4 pt-5 d-flex me-auto">
                        <a
                                className="icon"
                                href="https://www.linkedin.com/company/spotcomm/posts/?feedView=all"
                                target="_blank"
                                title="linkedin"
                            >
                                <img src='/x.svg ' />
                            </a>
                            <a
                                className="icon"
                                href="https://www.facebook.com/SpotcommDA/"
                                target="_blank"
                                title="facebook"
                            >
                               <img src='/facebook.svg' />
                            </a>
                            <a
                                className="icon"
                                href="#"
                                target="_blank"
                                title="instagram"
                            >
                                  <img src='/insta.png' />
                            </a>
                           
                            {/* <a
                                className="icon"
                                href="#"
                                target="_blank"
                                title="twitter"
                            >
                                 <img src='/linkedin.svg' />
                            </a> */}
                        </div>
                        <ul className="nav d-block d-lg-none mt-5">
                            <div>
                                <div
                                    className="views-element-container"
                                    id="block-views-block-footer-footer-menu"
                                >
                                    <div>
                                        <div className="js-view-dom-id-c5641dd4bf6b46edbe27d14fcdfa61c1ad015c42159a9ca65530a8d69ff197d7">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-muted"
                                                    href="#"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-muted"
                                                    href="#"
                                                >
                                                    Terms & Conditions
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-muted"
                                                    href="/sitemap"
                                                >
                                                    Sitemap
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-muted"
                                                    href="/cookie-policy"
                                                >
                                                    Cookie Policy
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center justify-content-md-start footer-bot">
                    <div className="col-lg-8">
                        <ul className="nav d-none d-lg-block">
                            <div>
                                <div
                                    className="views-element-container"
                                    id="block-views-block-footer-footer-menu"
                                >
                                    <div>
                                        <div className="js-view-dom-id-c5641dd4bf6b46edbe27d14fcdfa61c1ad015c42159a9ca65530a8d69ff197d7">
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-muted"
                                                    href="#"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-muted"
                                                    href="#"
                                                >
                                                    Terms & Conditions
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link text-muted"
                                                    to="/DISCLAIMER"
                                                >
                                                    DISCLAIMER
                                                </Link>
                                            </li>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                       
                    </div>
                    <div className="col-lg-4 text-copy">
                        © 2023 SpotComm LTD. All Rights Reserved.
                    </div>
                </div>
        
        </footer>
    )
}

export default Footer