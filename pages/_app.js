import TempApp from '.'
import '../styles/globals.css'
// import './comp/css/style.css'



function MyApp({ Component, pageProps }) {
  return (
    
    <>
    <head>
      <title>Next React App</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"   integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap" rel="stylesheet"></link>
      
    </head>
    <body></body>
    <TempApp/>
    <Component {...pageProps} />
    </> 
  )  
  
}

export default MyApp
