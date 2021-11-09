import '../styles/global.css';

//TOP LEVEL COMPONENT COMMON ACROSS ALL DIFFERENT PAGES
//IT CAN HELP TO KEEP STATE OR SHARE A COMMON CSS STYLE PAGE
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}