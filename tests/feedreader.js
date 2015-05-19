/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("has URL's", function() {
            var len = allFeeds.length;
            for (var i = 0; i < len; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("has a name", function() {
            var len = allFeeds.length;
            for (var i = 0; i < len; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    describe( 'The menu', function () {
        /* This test ensures the menu element is
         * hidden by default.
         */
        it("should be hidden by default", function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it("should open or close (show or hide) when clicked", function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toEqual(true);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe( 'Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            $(".feed").empty();
            loadFeed(1, function() {
                done();
            });
        });

        it("should load > 0 .entry element in feed container after loadFeed()", function() {
            var entries = $('.feed').find('.entry');
            var entryLen = entries.length;
            expect(entryLen).toBeGreaterThan(0);
        });
    });

    describe( 'New Feed Selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var first;
        beforeEach(function(done) {
            $(".feed").empty();
            first = $('.feed').html();
            loadFeed(2, function() {
                done();
            });
        });

        it("Should load new content when loadFeed() is called", function() {
            var second = $('.feed').html();
            expect(first).not.toEqual(second);
        });
    });
}());