import React, { useState } from 'react';
import './time.css'; // Separate CSS file for styling

const Test = () => {
    // Data for timeline
    const timelineData = [
        {
            year: '2003',
            title: 'Eplanet Global',
            description: `In 2003, Eplanet Global was established as a Business Process Outsourcing (BPO) company...`,
            imgSrc: 'https://eplanetglobal.com/ep-90848/assets/img/about-us/timeline.webp'
        },
        {
            year: '2015',
            title: 'Olive Digital',
            description: `In 2015, Olive Digital was established to provide complete digital solutions...`,
            imgSrc: 'https://eplanetglobal.com/ep-90848/assets/img/about-us/timeline.webp'
        },
        {
            year: '2020',
            title: 'Spotcomm Global',
            description: `Spotcomm Global was formed as a state-of-the-art communications company...`,
            imgSrc: 'https://eplanetglobal.com/ep-90848/assets/img/about-us/timeline.webp'
        },
        // Add more timeline data as needed
    ];

    // State to track the currently selected timeline index
    const [selectedYearIndex, setSelectedYearIndex] = useState(0);

    return (
        <>
<link
        rel="icon"
        type="image/x-icon"
        href="https://eplanetglobal.com/ep-90848/assets/img/favicon.png"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/ajax/libs/normalize/5.0.0/normalize.min.css?ver=1727782369"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/ajax/libs/Swiper/3.4.2/css/swiper.min.css?ver=1727782369"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/ajax/libs/slick-carousel/1.8.1/slick.css?ver=1727782369"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/ajax/libs/slick-carousel/1.8.1/slick-theme.css?ver=1727782369"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/ajax/libs/meyer-reset/2.0/reset.min.css?ver=1727782369"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/wp-content/themes/eplanetglobal/assets/css/style.css?ver=1727782321"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/ajax/libs/fancybox/3.5.7/jquery.fancybox.css?ver=1727782321"
      />


      <link rel="dns-prefetch" href="//js.hs-scripts.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      <link
        rel="stylesheet"
        id="wp-block-library-css"
        href="https://eplanetglobal.com/ep-86246/css/dist/block-library/style.min.css?ver=6.6.2"
        media="all"
      />

      <link
        data-minify={1}
        rel="stylesheet"
        id="contact-form-7-css"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=1727782321"
        media="all"
      />
      <style
        id="contact-form-7-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            '\n    .wpcf7 .wpcf7-recaptcha iframe {\n      margin-bottom: 0;\n    }\n\n    .wpcf7 .wpcf7-recaptcha[data-align="center"]>div {\n      margin: 0 auto;\n    }\n\n    .wpcf7 .wpcf7-recaptcha[data-align="right"]>div {\n      margin: 0 0 0 auto;\n    }\n  '
        }}
      />
      <link
        rel="stylesheet"
        id="wpcf7-redirect-script-frontend-css"
        href="https://eplanetglobal.com/p-64297/build/css/wpcf7-redirect-frontend.min.css?ver=1.1"
        media="all"
      />
      <link
        data-minify={1}
        rel="stylesheet"
        id="eplanetglobal-style-css"
        href="https://eplanetglobal.com/ep-44876/cache/min/1/wp-content/themes/eplanetglobal/style.css?ver=1727782321"
        media="all"
      />
      <link rel="https://api.w.org/" href="https://eplanetglobal.com/wp-json/" />
      <link
        rel="alternate"
        title="JSON"
        type="application/json"
        href="https://eplanetglobal.com/wp-json/wp/v2/pages/14"
      />
      <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="https://eplanetglobal.com/xmlrpc.php?rsd"
      />

      <link rel="shortlink" href="https://eplanetglobal.com/?p=14" />
      <link
        rel="alternate"
        title="oEmbed (JSON)"
        type="application/json+oembed"
        href="https://eplanetglobal.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Feplanetglobal.com%2Fabout-us%2F"
      />
      <link
        rel="alternate"
        title="oEmbed (XML)"
        type="text/xml+oembed"
        href="https://eplanetglobal.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Feplanetglobal.com%2Fabout-us%2F&format=xml"
      />

      <link
        rel="icon"
        href="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        href="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
        sizes="192x192"
      />
      <link
        rel="apple-touch-icon"
        href="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
      />
            <link
                rel="stylesheet"
                id="wp-block-library-css"
                href="https://eplanetglobal.com/ep-86246/css/dist/block-library/style.min.css?ver=6.6.2"
                media="all"
            />
            <style
                id="classic-theme-styles-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    /*! This file is auto-generated */\n    .wp-block-button__link {\n      color: #fff;\n      background-color: #32373c;\n      border-radius: 9999px;\n      box-shadow: none;\n      text-decoration: none;\n      padding: calc(.667em + 2px) calc(1.333em + 2px);\n      font-size: 1.125em\n    }\n\n    .wp-block-file__button {\n      background: #32373c;\n      color: #fff;\n      text-decoration: none\n    }\n  "
                }}
            />
            <style
                id="global-styles-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    :root {\n      --wp--preset--aspect-ratio--square: 1;\n      --wp--preset--aspect-ratio--4-3: 4/3;\n      --wp--preset--aspect-ratio--3-4: 3/4;\n      --wp--preset--aspect-ratio--3-2: 3/2;\n      --wp--preset--aspect-ratio--2-3: 2/3;\n      --wp--preset--aspect-ratio--16-9: 16/9;\n      --wp--preset--aspect-ratio--9-16: 9/16;\n      --wp--preset--color--black: #000000;\n      --wp--preset--color--cyan-bluish-gray: #abb8c3;\n      --wp--preset--color--white: #ffffff;\n      --wp--preset--color--pale-pink: #f78da7;\n      --wp--preset--color--vivid-red: #cf2e2e;\n      --wp--preset--color--luminous-vivid-orange: #ff6900;\n      --wp--preset--color--luminous-vivid-amber: #fcb900;\n      --wp--preset--color--light-green-cyan: #7bdcb5;\n      --wp--preset--color--vivid-green-cyan: #00d084;\n      --wp--preset--color--pale-cyan-blue: #8ed1fc;\n      --wp--preset--color--vivid-cyan-blue: #0693e3;\n      --wp--preset--color--vivid-purple: #9b51e0;\n      --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);\n      --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);\n      --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);\n      --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);\n      --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);\n      --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);\n      --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);\n      --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);\n      --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);\n      --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);\n      --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);\n      --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);\n      --wp--preset--font-size--small: 13px;\n      --wp--preset--font-size--medium: 20px;\n      --wp--preset--font-size--large: 36px;\n      --wp--preset--font-size--x-large: 42px;\n      --wp--preset--spacing--20: 0.44rem;\n      --wp--preset--spacing--30: 0.67rem;\n      --wp--preset--spacing--40: 1rem;\n      --wp--preset--spacing--50: 1.5rem;\n      --wp--preset--spacing--60: 2.25rem;\n      --wp--preset--spacing--70: 3.38rem;\n      --wp--preset--spacing--80: 5.06rem;\n      --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);\n      --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);\n      --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);\n      --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);\n      --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);\n    }\n\n    :where(.is-layout-flex) {\n      gap: 0.5em;\n    }\n\n    :where(.is-layout-grid) {\n      gap: 0.5em;\n    }\n\n    body .is-layout-flex {\n      display: flex;\n    }\n\n    .is-layout-flex {\n      flex-wrap: wrap;\n      align-items: center;\n    }\n\n    .is-layout-flex> :is(*, div) {\n      margin: 0;\n    }\n\n    body .is-layout-grid {\n      display: grid;\n    }\n\n    .is-layout-grid> :is(*, div) {\n      margin: 0;\n    }\n\n    :where(.wp-block-columns.is-layout-flex) {\n      gap: 2em;\n    }\n\n    :where(.wp-block-columns.is-layout-grid) {\n      gap: 2em;\n    }\n\n    :where(.wp-block-post-template.is-layout-flex) {\n      gap: 1.25em;\n    }\n\n    :where(.wp-block-post-template.is-layout-grid) {\n      gap: 1.25em;\n    }\n\n    .has-black-color {\n      color: var(--wp--preset--color--black) !important;\n    }\n\n    .has-cyan-bluish-gray-color {\n      color: var(--wp--preset--color--cyan-bluish-gray) !important;\n    }\n\n    .has-white-color {\n      color: var(--wp--preset--color--white) !important;\n    }\n\n    .has-pale-pink-color {\n      color: var(--wp--preset--color--pale-pink) !important;\n    }\n\n    .has-vivid-red-color {\n      color: var(--wp--preset--color--vivid-red) !important;\n    }\n\n    .has-luminous-vivid-orange-color {\n      color: var(--wp--preset--color--luminous-vivid-orange) !important;\n    }\n\n    .has-luminous-vivid-amber-color {\n      color: var(--wp--preset--color--luminous-vivid-amber) !important;\n    }\n\n    .has-light-green-cyan-color {\n      color: var(--wp--preset--color--light-green-cyan) !important;\n    }\n\n    .has-vivid-green-cyan-color {\n      color: var(--wp--preset--color--vivid-green-cyan) !important;\n    }\n\n    .has-pale-cyan-blue-color {\n      color: var(--wp--preset--color--pale-cyan-blue) !important;\n    }\n\n    .has-vivid-cyan-blue-color {\n      color: var(--wp--preset--color--vivid-cyan-blue) !important;\n    }\n\n    .has-vivid-purple-color {\n      color: var(--wp--preset--color--vivid-purple) !important;\n    }\n\n    .has-black-background-color {\n      background-color: var(--wp--preset--color--black) !important;\n    }\n\n    .has-cyan-bluish-gray-background-color {\n      background-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n    }\n\n    .has-white-background-color {\n      background-color: var(--wp--preset--color--white) !important;\n    }\n\n    .has-pale-pink-background-color {\n      background-color: var(--wp--preset--color--pale-pink) !important;\n    }\n\n    .has-vivid-red-background-color {\n      background-color: var(--wp--preset--color--vivid-red) !important;\n    }\n\n    .has-luminous-vivid-orange-background-color {\n      background-color: var(--wp--preset--color--luminous-vivid-orange) !important;\n    }\n\n    .has-luminous-vivid-amber-background-color {\n      background-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n    }\n\n    .has-light-green-cyan-background-color {\n      background-color: var(--wp--preset--color--light-green-cyan) !important;\n    }\n\n    .has-vivid-green-cyan-background-color {\n      background-color: var(--wp--preset--color--vivid-green-cyan) !important;\n    }\n\n    .has-pale-cyan-blue-background-color {\n      background-color: var(--wp--preset--color--pale-cyan-blue) !important;\n    }\n\n    .has-vivid-cyan-blue-background-color {\n      background-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n    }\n\n    .has-vivid-purple-background-color {\n      background-color: var(--wp--preset--color--vivid-purple) !important;\n    }\n\n    .has-black-border-color {\n      border-color: var(--wp--preset--color--black) !important;\n    }\n\n    .has-cyan-bluish-gray-border-color {\n      border-color: var(--wp--preset--color--cyan-bluish-gray) !important;\n    }\n\n    .has-white-border-color {\n      border-color: var(--wp--preset--color--white) !important;\n    }\n\n    .has-pale-pink-border-color {\n      border-color: var(--wp--preset--color--pale-pink) !important;\n    }\n\n    .has-vivid-red-border-color {\n      border-color: var(--wp--preset--color--vivid-red) !important;\n    }\n\n    .has-luminous-vivid-orange-border-color {\n      border-color: var(--wp--preset--color--luminous-vivid-orange) !important;\n    }\n\n    .has-luminous-vivid-amber-border-color {\n      border-color: var(--wp--preset--color--luminous-vivid-amber) !important;\n    }\n\n    .has-light-green-cyan-border-color {\n      border-color: var(--wp--preset--color--light-green-cyan) !important;\n    }\n\n    .has-vivid-green-cyan-border-color {\n      border-color: var(--wp--preset--color--vivid-green-cyan) !important;\n    }\n\n    .has-pale-cyan-blue-border-color {\n      border-color: var(--wp--preset--color--pale-cyan-blue) !important;\n    }\n\n    .has-vivid-cyan-blue-border-color {\n      border-color: var(--wp--preset--color--vivid-cyan-blue) !important;\n    }\n\n    .has-vivid-purple-border-color {\n      border-color: var(--wp--preset--color--vivid-purple) !important;\n    }\n\n    .has-vivid-cyan-blue-to-vivid-purple-gradient-background {\n      background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;\n    }\n\n    .has-light-green-cyan-to-vivid-green-cyan-gradient-background {\n      background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;\n    }\n\n    .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {\n      background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;\n    }\n\n    .has-luminous-vivid-orange-to-vivid-red-gradient-background {\n      background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;\n    }\n\n    .has-very-light-gray-to-cyan-bluish-gray-gradient-background {\n      background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;\n    }\n\n    .has-cool-to-warm-spectrum-gradient-background {\n      background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;\n    }\n\n    .has-blush-light-purple-gradient-background {\n      background: var(--wp--preset--gradient--blush-light-purple) !important;\n    }\n\n    .has-blush-bordeaux-gradient-background {\n      background: var(--wp--preset--gradient--blush-bordeaux) !important;\n    }\n\n    .has-luminous-dusk-gradient-background {\n      background: var(--wp--preset--gradient--luminous-dusk) !important;\n    }\n\n    .has-pale-ocean-gradient-background {\n      background: var(--wp--preset--gradient--pale-ocean) !important;\n    }\n\n    .has-electric-grass-gradient-background {\n      background: var(--wp--preset--gradient--electric-grass) !important;\n    }\n\n    .has-midnight-gradient-background {\n      background: var(--wp--preset--gradient--midnight) !important;\n    }\n\n    .has-small-font-size {\n      font-size: var(--wp--preset--font-size--small) !important;\n    }\n\n    .has-medium-font-size {\n      font-size: var(--wp--preset--font-size--medium) !important;\n    }\n\n    .has-large-font-size {\n      font-size: var(--wp--preset--font-size--large) !important;\n    }\n\n    .has-x-large-font-size {\n      font-size: var(--wp--preset--font-size--x-large) !important;\n    }\n\n    :where(.wp-block-post-template.is-layout-flex) {\n      gap: 1.25em;\n    }\n\n    :where(.wp-block-post-template.is-layout-grid) {\n      gap: 1.25em;\n    }\n\n    :where(.wp-block-columns.is-layout-flex) {\n      gap: 2em;\n    }\n\n    :where(.wp-block-columns.is-layout-grid) {\n      gap: 2em;\n    }\n\n    :root :where(.wp-block-pullquote) {\n      font-size: 1.5em;\n      line-height: 1.6;\n    }\n  "
                }}
            />
            <link
                data-minify={1}
                rel="stylesheet"
                id="contact-form-7-css"
                href="https://eplanetglobal.com/ep-44876/cache/min/1/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=1727782321"
                media="all"
            />
            <style
                id="contact-form-7-inline-css"
                dangerouslySetInnerHTML={{
                    __html:
                        '\n    .wpcf7 .wpcf7-recaptcha iframe {\n      margin-bottom: 0;\n    }\n\n    .wpcf7 .wpcf7-recaptcha[data-align="center"]>div {\n      margin: 0 auto;\n    }\n\n    .wpcf7 .wpcf7-recaptcha[data-align="right"]>div {\n      margin: 0 0 0 auto;\n    }\n  '
                }}
            />
            <link
                rel="stylesheet"
                id="wpcf7-redirect-script-frontend-css"
                href="https://eplanetglobal.com/p-64297/build/css/wpcf7-redirect-frontend.min.css?ver=1.1"
                media="all"
            />
            <link
                data-minify={1}
                rel="stylesheet"
                id="eplanetglobal-style-css"
                href="https://eplanetglobal.com/ep-44876/cache/min/1/wp-content/themes/eplanetglobal/style.css?ver=1727782321"
                media="all"
            />
            <link rel="https://api.w.org/" href="https://eplanetglobal.com/wp-json/" />
            <link
                rel="alternate"
                title="JSON"
                type="application/json"
                href="https://eplanetglobal.com/wp-json/wp/v2/pages/14"
            />
            <link
                rel="EditURI"
                type="application/rsd+xml"
                title="RSD"
                href="https://eplanetglobal.com/xmlrpc.php?rsd"
            />
            <meta name="generator" content="WordPress 6.6.2" />
            <link rel="shortlink" href="https://eplanetglobal.com/?p=14" />
            <link
                rel="alternate"
                title="oEmbed (JSON)"
                type="application/json+oembed"
                href="https://eplanetglobal.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Feplanetglobal.com%2Fabout-us%2F"
            />
            <link
                rel="alternate"
                title="oEmbed (XML)"
                type="text/xml+oembed"
                href="https://eplanetglobal.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Feplanetglobal.com%2Fabout-us%2F&format=xml"
            />
            <meta name="generator" content="Site Kit by Google 1.137.0" />
            <link
                rel="icon"
                href="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
                sizes="32x32"
            />
            <link
                rel="icon"
                href="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
                sizes="192x192"
            />
            <link
                rel="apple-touch-icon"
                href="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
            />
            <meta
                name="msapplication-TileImage"
                content="https://eplanetglobal.com/ep-44876/uploads/2023/04/favicon.png"
            />
            <style
                id="wp-custom-css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .form_sec textarea {\n      height: 9em !important;\n    }\n\n\n    /* fotter uppercase css */\n    ul.links.list-unstyled li {\n      text-transform: uppercase;\n    }\n\n    .navbar-brand {\n      max-width: 166px;\n    }\n\n    .page-template-template-contact-us header {\n      background: #4e4f9f;\n    }\n\n    nav.site-nav.siteNavBarRel {\n      position: relative;\n      background: #4e4f9f;\n      padding-top: 20px;\n      padding-bottom: 20px;\n    }\n\n    .site-mobile-menu {\n      width: 300px;\n      position: fixed;\n      right: 0;\n      z-index: 2000;\n      padding-top: 20px;\n      background: #fff;\n      height: 100vh;\n      -webkit-transform: translateX(100%);\n      -ms-transform: translateX(100%);\n      transform: translateX(100%);\n      -webkit-transition: .8s all cubic-bezier(0.23, 1, 0.32, 1);\n      -o-transition: .8s all cubic-bezier(0.23, 1, 0.32, 1);\n      transition: .8s all cubic-bezier(0.23, 1, 0.32, 1);\n    }\n\n    .site-mobile-menu .site-mobile-menu-header {\n      width: 100%;\n      float: left;\n      padding-left: 20px;\n      padding-right: 20px;\n    }\n\n    .site-mobile-menu .site-mobile-menu-body {\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      position: relative;\n      padding: 0 20px 20px 20px;\n      height: calc(100vh - 52px);\n      padding-bottom: 150px;\n    }\n\n    .sec_our_offc .cards_sec .card .card-body h5 {\n      font-weight: 500;\n      font-size: 14px;\n      color: #4e4f9f;\n      margin-bottom: 0;\n      margin-top: 10px;\n    }\n\n    body {\n      height: auto !important;\n    }\n\n    .industries .accordion-item .img-cont img {\n      height: auto;\n    }\n\n    @media(max-width:767px) {\n      .m-xs-0 {\n        margin: 0;\n      }\n\n      .industries .accordion-item .text-cont h2 {\n        font-size: 32px;\n        line-height: 38px;\n        margin: 0;\n      }\n    }\n  "
                }}
            />

                <link rel="stylesheet" id="wp-block-library-css"
                    href="https://eplanetglobal.com/ep-86246/css/dist/block-library/style.min.css?ver=6.6.2" media="all" />
            <section className="timeline-section">
                <div className="timeline-container">
                    <div className="timeline-left">
                        <ul className="timeline-years">
                            {timelineData.map((item, index) => (
                                <li
                                    key={index}
                                    className={`timeline-year-item ${selectedYearIndex === index ? 'active' : ''}`}
                                    onClick={() => setSelectedYearIndex(index)}
                                >
                                    <span>{item.year}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="timeline-right">
                        <div className="timeline-content">
                            <h2>{timelineData[selectedYearIndex].title}</h2>
                            <p>{timelineData[selectedYearIndex].description}</p>
                            <img
                                src={timelineData[selectedYearIndex].imgSrc}
                                alt={timelineData[selectedYearIndex].title}
                                className="timeline-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Test;
