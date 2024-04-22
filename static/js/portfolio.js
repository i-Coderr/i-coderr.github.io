$(document).ready(function () {
    "use strict"

    /*-----------------------------------------------------------------
        Tabs
      -------------------------------------------------------------------*/

    $(".js-tabs").each(function () {
        $(".content .tabcontent").hide()
        $(".content .tabcontent:first").show()
        $(".nav__item a").on("click", function () {
            $(".nav__item a").removeClass("active")
            $(this).addClass("active")
            var currentTab = $(this).attr("href")
            $(".content .tabcontent").hide()
            $(currentTab).show()
            $portfolioMasonry.isotope({
                columnWidth: ".gallery-grid__item",
                gutter: ".gutter-sizer",
                isAnimated: true,
            })
            $(".js-scroll").getNiceScroll().resize()
            return false
        })

        // Mobile close menu
        var screenMobile = 580

        let windowWidth = $(window).width()
        if (windowWidth < screenMobile) {
            // autoscroll to content
            $(".nav__item a").click(function (e) {
                e.preventDefault()
                var offset = -35

                $("html, body").animate(
                    {
                        scrollTop: $("#content").offset().top + offset,
                    },
                    0
                )
            })
        }
    })

    /*-----------------------------------------------------------------
        Switch categories & Filter mobile
      -------------------------------------------------------------------*/

    $(".select")
        .on("click", ".placeholder", function () {
            var parent = $(this).closest(".select")
            if (!parent.hasClass("is-open")) {
                parent.addClass("is-open")
                $(".select.is-open").not(parent).removeClass("is-open")
            } else {
                parent.removeClass("is-open")
            }
        })
        .on("click", "ul>li", function () {
            var parent = $(this).closest(".select")
            parent.removeClass("is-open").find(".placeholder").text($(this).text())
            parent
                .find("input[type=hidden]")
                .attr("value", $(this).attr("data-value"))

            $(".filter__item").removeClass("active")
            $(this).addClass("active")
            var selector = $(this).attr("data-filter")

            $(".js-filter-container").isotope({
                filter: selector,
            })
            return false
        })

    /*-----------------------------------------------------------------
        Masonry
      -------------------------------------------------------------------*/

    // Portfolio grid row
    var $portfolioMasonry = $(".js-grid-row").isotope({
        itemSelector: ".gallery-grid__item",
        layoutMode: "fitRows",
        percentPosition: true,
        transitionDuration: "0.5s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)",
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)",
        },
        fitRows: {
            gutter: ".gutter-sizer",
        },
        masonry: {
            columnWidth: ".gallery-grid__item",
            gutter: ".gutter-sizer",
            isAnimated: true,
        },
    })

    $portfolioMasonry.imagesLoaded().progress(function () {
        $portfolioMasonry.isotope({
            columnWidth: ".gallery-grid__item",
            gutter: ".gutter-sizer",
            isAnimated: true,
            layoutMode: "fitRows",
            fitRows: {
                gutter: ".gutter-sizer",
            },
        })
    })

    // Portfolio grid irregular
    var $portfolioIrregularMasonry = $(".js-grid").isotope({
        itemSelector: ".gallery-grid__item",
        percentPosition: true,
        transitionDuration: "0.5s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)",
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)",
        },
        masonry: {
            columnWidth: ".gallery-grid__item",
            gutter: ".gutter-sizer",
            isAnimated: true,
        },
    })

    $portfolioIrregularMasonry.imagesLoaded().progress(function () {
        $portfolioIrregularMasonry.isotope({
            columnWidth: ".gallery-grid__item",
            gutter: ".gutter-sizer",
            isAnimated: true,
        })
    })

    /*-----------------------------------------------------------------
        mediumZoom
      -------------------------------------------------------------------*/

    mediumZoom("[data-zoom]", {
        margin: 30,
    })

    /*-----------------------------------------------------------------
        Lazyload
      -------------------------------------------------------------------*/

    lazySizes.init()

    /*-----------------------------------------------------------------
        Polyfill object-fit
      -------------------------------------------------------------------*/

    var $someImages = $("img.cover")
    objectFitImages($someImages)
})

