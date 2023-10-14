import { Notification } from '@/components/notification';
import { db } from '@lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import Head from 'next/head';

export default function Home() {
  const add = async () => {
    alert('add');
    const ret = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log(ret);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Notification />
        <button onClick={add}>add to firebase</button>
      </main>
    </>
  );
}
