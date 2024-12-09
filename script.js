document.addEventListener('DOMContentLoaded', function() {
    const songbookButtons = document.getElementById('songbookButtons');
    const rangeList = document.getElementById('rangeList');
    const songList = document.getElementById('songList');

    const songbooks = {
        songbook1: {
            mainSongs: 600,
            appendices: 100,
            songsPerPage: 100,
            songNames: [
                "让我进来", "2 undefined", "3 undefined", "4 undefined", "5 undefined",
                "6 undefined", "7 undefined", "8 undefined", "9 undefined", "10 undefined",
                "11 undefined", "12 undefined", "13 undefined", "14 undefined", "15 undefined",
                "16 undefined", "17 undefined", "18 undefined", "19 undefined", "20 undefined",
                "21 undefined", "22 undefined", "23 undefined", "24 undefined", "25 undefined",
                "26 undefined", "27 undefined", "28 undefined", "29 undefined", "30 undefined",
                "31 undefined", "32 undefined", "33 undefined", "34 undefined", "35 undefined",
                "36 undefined", "37 undefined", "38 undefined", "39 undefined", "40 undefined",
                "41 undefined", "42 undefined", "43 undefined", "44 undefined", "45 undefined",
                "46 undefined", "47 undefined", "48 undefined", "49 undefined", "50 undefined",
                "51 undefined", "52 undefined", "53 undefined", "54 undefined", "55 undefined",
                "56 undefined", "57 undefined", "58 undefined", "59 undefined", "60 undefined",
                "61 undefined", "62 undefined", "63 undefined", "64 undefined", "65 undefined",
                "66 undefined", "67 undefined", "68 undefined", "69 undefined", "70 undefined",
                "71 undefined", "72 undefined", "73 undefined", "74 undefined", "75 undefined",
                "76 undefined", "77 undefined", "78 undefined", "79 undefined", "80 undefined",
                "81 undefined", "82 undefined", "83 undefined", "84 undefined", "85 undefined",
                "86 undefined", "87 undefined", "88 undefined", "89 undefined", "90 undefined",
                "91 undefined", "92 undefined", "93 undefined", "94 undefined", "95 undefined",
                "96 undefined", "97 undefined", "98 undefined", "99 undefined", "100 undefined",
                // ... 继续为每一首歌曲初始化
                "101 undefined", "102 undefined", "103 undefined", "104 undefined", "105 undefined",
                "106 undefined", "107 undefined", "108 undefined", "109 undefined", "110 undefined",
                "111 undefined", "112 undefined", "113 undefined", "114 undefined", "115 undefined",
                "116 undefined", "117 undefined", "118 undefined", "119 undefined", "120 undefined",
                "121 undefined", "122 undefined", "123 undefined", "124 undefined", "125 undefined",
                "126 undefined", "127 undefined", "128 undefined", "129 undefined", "130 undefined",
                "131 undefined", "132 undefined", "133 undefined", "134 undefined", "135 undefined",
                "136 undefined", "137 undefined", "138 undefined", "139 undefined", "140 undefined",
                "141 undefined", "142 undefined", "143 undefined", "144 undefined", "145 undefined",
                "146 undefined", "147 undefined", "148 undefined", "149 undefined", "150 undefined",
                "151 undefined", "152 undefined", "153 undefined", "154 undefined", "155 undefined",
                "156 undefined", "157 undefined", "158 undefined", "159 undefined", "160 undefined",
                "161 undefined", "162 undefined", "163 undefined", "164 undefined", "165 undefined",
                "166 undefined", "167 undefined", "168 undefined", "169 undefined", "170 undefined",
                "171 undefined", "172 undefined", "173 undefined", "174 undefined", "175 undefined",
                "176 undefined", "177 undefined", "178 undefined", "179 undefined", "180 undefined",
                "181 undefined", "182 undefined", "183 undefined", "184 undefined", "185 undefined",
                "186 undefined", "187 undefined", "188 undefined", "189 undefined", "190 undefined",
                "191 undefined", "192 undefined", "193 undefined", "194 undefined", "195 undefined",
                "196 undefined", "197 undefined", "198 undefined", "199 undefined", "200 undefined",
                "201 undefined", "202 undefined", "203 undefined", "204 undefined", "205 undefined",
                "206 undefined", "207 undefined", "208 undefined", "209 undefined", "210 undefined",
                "211 undefined", "212 undefined", "213 undefined", "214 undefined", "215 undefined",
                "216 undefined", "217 undefined", "218 undefined", "219 undefined", "220 undefined",
                "221 undefined", "222 undefined", "223 undefined", "224 undefined", "225 undefined",
                "226 undefined", "227 undefined", "228 undefined", "229 undefined", "230 undefined",
                "231 undefined", "232 undefined", "233 undefined", "234 undefined", "235 undefined",
                "236 undefined", "237 undefined", "238 undefined", "239 undefined", "240 undefined",
                "241 undefined", "242 undefined", "243 undefined", "244 undefined", "245 undefined",
                "246 undefined", "247 undefined", "248 undefined", "249 undefined", "250 undefined",
                "251 undefined", "252 undefined", "253 undefined", "254 undefined", "255 undefined",
                "256 undefined", "257 undefined", "258 undefined", "259 undefined", "260 undefined",
                "261 undefined", "262 undefined", "263 undefined", "264 undefined", "265 undefined",
                "266 undefined", "267 undefined", "268 undefined", "269 undefined", "270 undefined",
                "271 undefined", "272 undefined", "273 undefined", "274 undefined", "275 undefined",
                "276 undefined", "277 undefined", "278 undefined", "279 undefined", "280 undefined",
                "281 undefined", "282 undefined", "283 undefined", "284 undefined", "285 undefined",
                "286 undefined", "287 undefined", "288 undefined", "289 undefined", "290 undefined",
                "291 undefined", "292 undefined", "293 undefined", "294 undefined", "295 undefined",
                "296 undefined", "297 undefined", "298 undefined", "299 undefined", "300 undefined",
                "301 undefined", "302 undefined", "303 undefined", "304 undefined", "305 undefined",
                "306 undefined", "307 undefined", "308 undefined", "309 undefined", "310 undefined",
                "311 undefined", "312 undefined", "313 undefined", "314 undefined", "315 undefined",
                "316 undefined", "317 undefined", "318 undefined", "319 undefined", "320 undefined",
                "321 undefined", "322 undefined", "323 undefined", "324 undefined", "325 undefined",
                "326 undefined", "327 undefined", "328 undefined", "329 undefined", "330 undefined",
                "331 undefined", "332 undefined", "333 undefined", "334 undefined", "335 undefined",
                "336 undefined", "337 undefined", "338 undefined", "339 undefined", "340 undefined",
                "341 undefined", "342 undefined", "343 undefined", "344 undefined", "345 undefined",
                "346 undefined", "347 undefined", "348 undefined", "349 undefined", "350 undefined",
                "351 undefined", "352 undefined", "353 undefined", "354 undefined", "355 undefined",
                "356 undefined", "357 undefined", "358 undefined", "359 undefined", "360 undefined",
                "361 undefined", "362 undefined", "363 undefined", "364 undefined", "365 undefined",
                "366 undefined", "367 undefined", "368 undefined", "369 undefined", "370 undefined",
                "371 undefined", "372 undefined", "373 undefined", "374 undefined", "375 undefined",
                "376 undefined", "377 undefined", "378 undefined", "379 undefined", "380 undefined",
                "381 undefined", "382 undefined", "383 undefined", "384 undefined", "385 undefined",
                "386 undefined", "387 undefined", "388 undefined", "389 undefined", "390 undefined",
                "391 undefined", "392 undefined", "393 undefined", "394 undefined", "395 undefined",
                "396 undefined", "397 undefined", "398 undefined", "399 undefined", "400 undefined",
                "401 undefined", "402 undefined", "403 undefined", "404 undefined", "405 undefined",
                "406 undefined", "407 undefined", "408 undefined", "409 undefined", "410 undefined",
                "411 undefined", "412 undefined", "413 undefined", "414 undefined", "415 undefined",
                "416 undefined", "417 undefined", "418 undefined", "419 undefined", "420 undefined",
                "421 undefined", "422 undefined", "423 undefined", "424 undefined", "425 undefined",
                "426 undefined", "427 undefined", "428 undefined", "429 undefined", "430 undefined",
                "431 undefined", "432 undefined", "433 undefined", "434 undefined", "435 undefined",
                "436 undefined", "437 undefined", "438 undefined", "439 undefined", "440 undefined",
                "441 undefined", "442 undefined", "443 undefined", "444 undefined", "445 undefined",
                "446 undefined", "447 undefined", "448 undefined", "449 undefined", "450 undefined",
                "451 undefined", "452 undefined", "453 undefined", "454 undefined", "455 undefined",
                "456 undefined", "457 undefined", "458 undefined", "459 undefined", "460 undefined",
                "461 undefined", "462 undefined", "463 undefined", "464 undefined", "465 undefined",
                "466 undefined", "467 undefined", "468 undefined", "469 undefined", "470 undefined",
                "471 undefined", "472 undefined", "473 undefined", "474 undefined", "475 undefined",
                "476 undefined", "477 undefined", "478 undefined", "479 undefined", "480 undefined",
                "481 undefined", "482 undefined", "483 undefined", "484 undefined", "485 undefined",
                "486 undefined", "487 undefined", "488 undefined", "489 undefined", "490 undefined",
                "491 undefined", "492 undefined", "493 undefined", "494 undefined", "495 undefined",
                "496 undefined", "497 undefined", "498 undefined", "499 undefined", "500 undefined",
                "501 undefined", "502 undefined", "503 undefined", "504 undefined", "505 undefined",
                "506 undefined", "507 undefined", "508 undefined", "509 undefined", "510 undefined",
                "511 undefined", "512 undefined", "513 undefined", "514 undefined", "515 undefined",
                "516 undefined", "517 undefined", "518 undefined", "519 undefined", "520 undefined",
                "521 undefined", "522 undefined", "523 undefined", "524 undefined", "525 undefined",
                "526 undefined", "527 undefined", "528 undefined", "529 undefined", "530 undefined",
                "531 undefined", "532 undefined", "533 undefined", "534 undefined", "535 undefined",
                "536 undefined", "537 undefined", "538 undefined", "539 undefined", "540 undefined",
                "541 undefined", "542 undefined", "543 undefined", "544 undefined", "545 undefined",
                "546 undefined", "547 undefined", "548 undefined", "549 undefined", "550 undefined",
                "551 undefined", "552 undefined", "553 undefined", "554 undefined", "555 undefined",
                "556 undefined", "557 undefined", "558 undefined", "559 undefined", "560 undefined",
                "561 undefined", "562 undefined", "563 undefined", "564 undefined", "565 undefined",
                "566 undefined", "567 undefined", "568 undefined", "569 undefined", "570 undefined",
                "571 undefined", "572 undefined", "573 undefined", "574 undefined", "575 undefined",
                "576 undefined", "577 undefined", "578 undefined", "579 undefined", "580 undefined",
                "581 undefined", "582 undefined", "583 undefined", "584 undefined", "585 undefined",
                "586 undefined", "587 undefined", "588 undefined", "589 undefined", "590 undefined",
                "591 undefined", "592 undefined", "593 undefined", "594 undefined", "595 undefined",
                "596 undefined", "597 undefined", "598 undefined", "599 undefined", "600 undefined",
                "601 undefined", "602 undefined", "603 undefined", "604 undefined", "605 undefined",
                "606 undefined", "607 undefined", "608 undefined", "609 undefined", "610 undefined",
                "611 undefined", "612 undefined", "613 undefined", "614 undefined", "615 undefined",
                "616 undefined", "617 undefined", "618 undefined", "619 undefined", "620 undefined",
                "621 undefined", "622 undefined", "623 undefined", "624 undefined", "625 undefined",
                "626 undefined", "627 undefined", "628 undefined", "629 undefined", "630 undefined",
                "631 undefined", "632 undefined", "633 undefined", "634 undefined", "635 undefined",
                "636 undefined", "637 undefined", "638 undefined", "639 undefined", "640 undefined",
                "641 undefined", "642 undefined", "643 undefined", "644 undefined", "645 undefined",
                "646 undefined", "647 undefined", "648 undefined", "649 undefined", "650 undefined",
                "651 undefined", "652 undefined", "653 undefined", "654 undefined", "655 undefined",
                "656 undefined", "657 undefined", "658 undefined", "659 undefined", "660 undefined",
                "661 undefined", "662 undefined", "663 undefined", "664 undefined", "665 undefined",
                "666 undefined", "667 undefined", "668 undefined", "669 undefined", "670 undefined",
                "671 undefined", "672 undefined", "673 undefined", "674 undefined", "675 undefined",
                "676 undefined", "677 undefined", "678 undefined", "679 undefined", "680 undefined",
                "681 undefined", "682 undefined", "683 undefined", "684 undefined", "685 undefined",
                "686 undefined", "687 undefined", "688 undefined", "689 undefined", "690 undefined",
                "691 undefined", "692 undefined", "693 undefined", "694 undefined", "695 undefined",
                "696 undefined", "697 undefined", "698 undefined", "699 undefined", "700 undefined"
            ]
        },
        songbook2: {
            totalSongs: 360,
            songsPerPage: 100,
            songNames: [
                "阿爸父", "2 undefined", "3 undefined", "4 undefined", "5 undefined",
                "6 undefined", "7 undefined", "8 undefined", "9 undefined", "10 undefined",
                "11 undefined", "12 undefined", "13 undefined", "14 undefined", "15 undefined",
                "16 undefined", "17 undefined", "18 undefined", "19 undefined", "20 undefined",
                "21 undefined", "22 undefined", "23 undefined", "24 undefined", "25 undefined",
                "26 undefined", "27 undefined", "28 undefined", "29 undefined", "30 undefined",
                "31 undefined", "32 undefined", "33 undefined", "34 undefined", "35 undefined",
                "36 undefined", "37 undefined", "38 undefined", "39 undefined", "40 undefined",
                "41 undefined", "42 undefined", "43 undefined", "44 undefined", "45 undefined",
                "46 undefined", "47 undefined", "48 undefined", "49 undefined", "50 undefined",
                "51 undefined", "52 undefined", "53 undefined", "54 undefined", "55 undefined",
                "56 undefined", "57 undefined", "58 undefined", "59 undefined", "60 undefined",
                "61 undefined", "62 undefined", "63 undefined", "64 undefined", "65 undefined",
                "66 undefined", "67 undefined", "68 undefined", "69 undefined", "70 undefined",
                "71 undefined", "72 undefined", "73 undefined", "74 undefined", "75 undefined",
                "76 undefined", "77 undefined", "78 undefined", "79 undefined", "80 undefined",
                "81 undefined", "82 undefined", "83 undefined", "84 undefined", "85 undefined",
                "86 undefined", "87 undefined", "88 undefined", "89 undefined", "90 undefined",
                "91 undefined", "92 undefined", "93 undefined", "94 undefined", "95 undefined",
                "96 undefined", "97 undefined", "98 undefined", "99 undefined", "100 undefined",
                "101 undefined", "102 undefined", "103 undefined", "104 undefined", "105 undefined",
                "106 undefined", "107 undefined", "108 undefined", "109 undefined", "110 undefined",
                "111 undefined", "112 undefined", "113 undefined", "114 undefined", "115 undefined",
                "116 undefined", "117 undefined", "118 undefined", "119 undefined", "120 undefined",
                "121 undefined", "122 undefined", "123 undefined", "124 undefined", "125 undefined",
                "126 undefined", "127 undefined", "128 undefined", "129 undefined", "130 undefined",
                "131 undefined", "132 undefined", "133 undefined", "134 undefined", "135 undefined",
                "136 undefined", "137 undefined", "138 undefined", "139 undefined", "140 undefined",
                "141 undefined", "142 undefined", "143 undefined", "144 undefined", "145 undefined",
                "146 undefined", "147 undefined", "148 undefined", "149 undefined", "150 undefined",
                "151 undefined", "152 undefined", "153 undefined", "154 undefined", "155 undefined",
                "156 undefined", "157 undefined", "158 undefined", "159 undefined", "160 undefined",
                "161 undefined", "162 undefined", "163 undefined", "164 undefined", "165 undefined",
                "166 undefined", "167 undefined", "168 undefined", "169 undefined", "170 undefined",
                "171 undefined", "172 undefined", "173 undefined", "174 undefined", "175 undefined",
                "176 undefined", "177 undefined", "178 undefined", "179 undefined", "180 undefined",
                "181 undefined", "182 undefined", "183 undefined", "184 undefined", "185 undefined",
                "186 undefined", "187 undefined", "188 undefined", "189 undefined", "190 undefined",
                "191 undefined", "192 undefined", "193 undefined", "194 undefined", "195 undefined",
                "196 undefined", "197 undefined", "198 undefined", "199 undefined", "200 undefined",
                "201 undefined", "202 undefined", "203 undefined", "204 undefined", "205 undefined",
                "206 undefined", "207 undefined", "208 undefined", "209 undefined", "210 undefined",
                "211 undefined", "212 undefined", "213 undefined", "214 undefined", "215 undefined",
                "216 undefined", "217 undefined", "218 undefined", "219 undefined", "220 undefined",
                "221 undefined", "222 undefined", "223 undefined", "224 undefined", "225 undefined",
                "226 undefined", "227 undefined", "228 undefined", "229 undefined", "230 undefined",
                "231 undefined", "232 undefined", "233 undefined", "234 undefined", "235 undefined",
                "236 undefined", "237 undefined", "238 undefined", "239 undefined", "240 undefined",
                "241 undefined", "242 undefined", "243 undefined", "244 undefined", "245 undefined",
                "246 undefined", "247 undefined", "248 undefined", "249 undefined", "250 undefined",
                "251 undefined", "252 undefined", "253 undefined", "254 undefined", "255 undefined",
                "256 undefined", "257 undefined", "258 undefined", "259 undefined", "260 undefined",
                "261 undefined", "262 undefined", "263 undefined", "264 undefined", "265 undefined",
                "266 undefined", "267 undefined", "268 undefined", "269 undefined", "270 undefined",
                "271 undefined", "272 undefined", "273 undefined", "274 undefined", "275 undefined",
                "276 undefined", "277 undefined", "278 undefined", "279 undefined", "280 undefined",
                "281 undefined", "282 undefined", "283 undefined", "284 undefined", "285 undefined",
                "286 undefined", "287 undefined", "288 undefined", "289 undefined", "290 undefined",
                "291 undefined", "292 undefined", "293 undefined", "294 undefined", "295 undefined",
                "296 undefined", "297 undefined", "298 undefined", "299 undefined", "300 undefined",
                "301 undefined", "302 undefined", "303 undefined", "304 undefined", "305 undefined",
                "306 undefined", "307 undefined", "308 undefined", "309 undefined", "310 undefined",
                "311 undefined", "312 undefined", "313 undefined", "314 undefined", "315 undefined",
                "316 undefined", "317 undefined", "318 undefined", "319 undefined", "320 undefined",
                "321 undefined", "322 undefined", "323 undefined", "324 undefined", "325 undefined",
                "326 undefined", "327 undefined", "328 undefined", "329 undefined", "330 undefined",
                "331 undefined", "332 undefined", "333 undefined", "334 undefined", "335 undefined",
                "336 undefined", "337 undefined", "338 undefined", "339 undefined", "340 undefined",
                "341 undefined", "342 undefined", "343 undefined", "344 undefined", "345 undefined",
                "346 undefined", "347 undefined", "348 undefined", "349 undefined", "350 undefined",
                "351 undefined", "352 undefined", "353 undefined", "354 undefined", "355 undefined",
                "356 undefined", "357 undefined", "358 undefined", "359 undefined", "360 undefined"
            ]
        }
   };

    // 恢复状态
    const savedSongbook = sessionStorage.getItem('selectedSongbook');
    const savedRange = sessionStorage.getItem('selectedRange');
    if (savedSongbook) {
        displayRanges(songbooks[savedSongbook], savedSongbook);
        if (savedRange) {
            const [start, end] = savedRange.split('-').map(Number);
            displaySongs(start, end, savedSongbook, songbooks[savedSongbook].songNames);
        }
    }

    songbookButtons.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const selectedSongbook = event.target.getAttribute('data-songbook');
            sessionStorage.setItem('selectedSongbook', selectedSongbook);
            displayRanges(songbooks[selectedSongbook], selectedSongbook);
        }
    });

    function displayRanges(songbook, songbookName) {
        rangeList.innerHTML = ''; // 清空当前范围列表
        const { mainSongs, appendices, totalSongs, songsPerPage } = songbook;

        const total = mainSongs || totalSongs; // 处理不同歌本的总数
        let rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';
        rowDiv.style.marginBottom = '10px';

        for (let i = 0; i < total; i += songsPerPage) {
            const start = i + 1;
            const end = Math.min(i + songsPerPage, total);
            const rangeLink = document.createElement('a');
            rangeLink.href = '#';
            rangeLink.textContent = `${start}-${end}首`;
            rangeLink.className = `range-link ${songbookName}`; // 添加歌本特定的类名
            rangeLink.style.margin = '0 5px'; // 添加按钮间距
            rangeLink.addEventListener('click', function(event) {
                event.preventDefault();
                sessionStorage.setItem('selectedRange', `${start}-${end}`);
                displaySongs(start, end, songbookName, songbook.songNames);
            });
            rowDiv.appendChild(rangeLink);

            // 根据歌本和行数调整布局
            if (songbookName === 'songbook1' && (i === 200 || i === 500)) {
                rangeList.appendChild(rowDiv);
                rowDiv = document.createElement('div');
                rowDiv.style.display = 'flex';
                rowDiv.style.justifyContent = 'center';
                rowDiv.style.marginBottom = '10px';
            } else if (songbookName === 'songbook2' && i === 200) {
                rangeList.appendChild(rowDiv);
                rowDiv = document.createElement('div');
                rowDiv.style.display = 'flex';
                rowDiv.style.justifyContent = 'center';
                rowDiv.style.marginBottom = '10px';
            }
        }

        rangeList.appendChild(rowDiv); // 添加最后一行

        if (appendices) {
            const appendixLink = document.createElement('a');
            appendixLink.href = '#';
            appendixLink.textContent = `附录 1-${appendices}首`;
            appendixLink.className = `range-link ${songbookName}`; // 使用与歌本相同的类名
            appendixLink.style.margin = '0 5px'; // 添加按钮间距
            appendixLink.addEventListener('click', function(event) {
                event.preventDefault();
                sessionStorage.setItem('selectedRange', `1-${appendices}`);
                displaySongs(1, appendices, `${songbookName}_appendix`, songbook.songNames.slice(mainSongs));
            });
            const appendixRow = document.createElement('div');
            appendixRow.style.display = 'flex';
            appendixRow.style.justifyContent = 'center';
            appendixRow.style.marginBottom = '10px';
            appendixRow.appendChild(appendixLink);
            rangeList.appendChild(appendixRow);
        }
    }

    function displaySongs(start, end, songbookName, songNames) {
        songList.innerHTML = ''; // 清空当前歌曲列表
        for (let i = start; i <= end; i++) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `${songbookName}/song${i}.html`; // 假设每个歌谱页面命名为 song1.html, song2.html 等
            link.textContent = `${i}、${songNames[i - 1]}`; // 使用歌曲名称
            listItem.appendChild(link);
            songList.appendChild(listItem);
        }
    }
});