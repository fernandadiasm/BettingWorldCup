export default function Home() {
  fetch('http://localhost:333//pools/count')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
    

    return(
      <h1>Hello World</h1>
    )
}