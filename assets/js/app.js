import '../css/app.scss';

import { Dropdown } from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    enableDropdowns();
});

const enableDropdowns = () => {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(function (dropdownToggleEl) {
        return new Dropdown(dropdownToggleEl);
    });
} 

// import './bootstrap.js';
// /*
//  * Welcome to your app's main JavaScript file!
//  *
//  * This file will be included onto the page via the importmap() Twig function,
//  * which should already be in your base.html.twig.
//  */
// console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
