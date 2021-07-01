'use strict';

const checkboxFeed = document.getElementById("lk-checkbox-feed");
const checkboxNews = document.getElementById("lk-checkbox-news");
const checkboxCourses = document.getElementById("lk-checkbox-courses");

chrome.storage.local.get(['hideFeed', 'hideNews', 'hideCourses'], (res) => {
    if (res) {
        checkboxFeed.checked = true;
        checkboxNews.checked = res.hideNews;
        checkboxCourses.checked = res.hideCourses;
    }
})

checkboxNews.addEventListener('change', () => {
    if (checkboxNews.checked) {
        chrome.storage.local.set({ 'hideNews': true });
    } else {
        chrome.storage.local.set({ 'hideNews': false });
    }
});

checkboxCourses.addEventListener('change', () => {
    if (checkboxCourses.checked) {
        chrome.storage.local.set({ 'hideCourses': true });
    } else {
        chrome.storage.local.set({ 'hideCourses': false });
    }
});