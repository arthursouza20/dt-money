import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Transactions } from "./pages/Transactions"
import { TrasnsactionsProvider } from "./contexts/TransactionsContext"

function App() {


  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TrasnsactionsProvider>
        <Transactions />
      </TrasnsactionsProvider>
    </ThemeProvider>
  )
}

export default App
