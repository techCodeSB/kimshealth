"use client"
import { getBaseUrl } from '@/helper/getBaseUrl';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useRef, useState } from 'react'

const SearchBox = ({query}) => {
    const [basePath, setBasePath] = useState();
    const [basePathOnlyLang, setBasePathOnlyLang] = useState();
    const searchData = useRef(null);
    const [staticTexts, setStaticTexts] = useState({});


    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();
    }, []);

    const searchWeb = () => {
        let searchText = searchData.current.value.trim();

        if (!searchText) {
            alert("Please enter a search term.");
            return;
        }

        // Encode query to prevent URL issues
        const encodedQuery = encodeURIComponent(searchText);
        location.href = `${basePath}/search/?query=${encodedQuery}`;
    };



    useEffect(() => {
        setBasePath(getBaseUrl(true, true));
        setBasePathOnlyLang(getBaseUrl(true, false));

    }, [])
    return (
        <>
            <input type="text" ref={searchData} className="form-control "
                placeholder={staticTexts['Search Text']+" ...."} defaultValue={query} />
            <button onClick={() => searchWeb()} className="input-group-text" id="from-icon">
                <i className="fa-solid icon-magnifier"></i>
            </button>
        </>
    )
}

export default SearchBox


