/* eslint-disable jsx-a11y/anchor-is-valid */
import { useBgLightBlue } from 'hooks/useBgLightBlue';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import styles from 'src/styles/Home.module.css';
import Link from 'next/link';
import React from 'react';

export default function Home(props) {
  const { count, handleClick } = props;
  useBgLightBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="px-6 text-1.5xl font-bold text-blue-400 underline">
          Hello world!!
        </h1>
      </main>
    </div>
  );
}
