"use client"

import { useState } from "react"
import arrow from "@/../public/icons/class-arrow.svg"
import Image from "next/image";
import styles from "@/components/manual/alllisttext/page.module.css"

export default function Alllistext(){
    const [hover, setHover] = useState(false);
    return(
        <div className={styles.container} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <span>전체 목록</span>
            <Image src={arrow} alt="arrow-bottom" width={20} height = {20} className={hover ? styles.arrow : styles.arrow_hide}/>
        </div>
    )
}