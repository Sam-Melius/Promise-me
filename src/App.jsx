import { asyncFinally, asyncGetQuotes, asyncThenQuotes, asyncTryQuotes, thenAsyncQuotes, thenFinally, thenGetQuotes, thenTryQuotes } from "./services/promise-me";

export default function App() {
  
  return <>
  <button onCLick={async () => console.log(await asyncGetQuotes)}>Async</button>

  <button onCLick={async () => console.log(await thenGetQuotes)}>Async</button>

  <button onCLick={async () => console.log(await asyncTryQuotes)}>Async</button>

  <button onCLick={async () => console.log(await thenTryQuotes)}>Async</button>

  <button onCLick={async () => console.log(await asyncFinally)}>Async</button>

  <button onCLick={async () => console.log(await thenFinally)}>Async</button>

  <button onCLick={async () => console.log(await thenAsyncQuotes)}>Async</button>

  <button onCLick={async () => console.log(await asyncThenQuotes)}>Async</button>
  </>;
}
