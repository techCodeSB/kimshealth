"use client"
import { getBaseUrl } from '@/helper/getBaseUrl';
import getStaticText from '@/helper/getStaticText';
import React, { useEffect, useState } from 'react';

const Breadcrumb = ({ activeTitle, middleTitle, middleURL }) => {
    const [staticText, setStaticTexts] = useState({});
    const baseUrl = getBaseUrl(true, true);

    useEffect(() => {
        const fetchTexts = async () => {
            setStaticTexts({ ...await getStaticText() })
        };

        fetchTexts();

    }, []);

    return (
        <ul className="breadcrumb mb-0">
            <li>
                <a href={baseUrl + "/"}>{staticText['Home']}</a>
            </li>
            {middleTitle && <li>
                <a href={middleURL}> {middleTitle}</a>
            </li>}
            <li className="active"> {activeTitle} </li>
        </ul>
    )
}

export default Breadcrumb