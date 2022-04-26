import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#FF1A59" />

                    <meta
                        name="application-name"
                        content="En Donde Me Vacuno"
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="En Donde Me Vacuno"
                    />
                    <meta
                        name="description"
                        content="Aplicación de consulta en tiempo real del nivel de afluencia de los CVs"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#FF1A59" />

                    <link rel="apple-touch-icon" href="/icon.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/icon.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
                    <link rel="apple-touch-icon" sizes="167x167" href="/icon.png" />

                    <link rel="icon" type="image/png" sizes="32x32" href="/icon.svg" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icon.svg" />
                    <link rel="mask-icon" href="/icon.svg" color="#FF1A59" />
                    <link rel="shortcut icon" href="/favicon.ico" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
