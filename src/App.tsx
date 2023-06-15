import { Provider } from 'react-redux'
import { store } from './stores/store'
import { theme } from './theme'
import { ThemeProvider, css } from '@emotion/react'
import { PrefectureSelector } from './features/prefectures/components/PrefectureSelector'
import { PopulationLineChart } from './features/populations/components/PopulationLineChart'
import { Container } from './components/layouts/Container'
import { Card } from './components/card'
import { PrefectureGeoChart } from './features/prefectures/components/PrefectureGeoChart'
import { CardTabs } from './components/card/CardTabs'
import { CardTab } from './components/card/CardTab'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main css={main}>
          <Container>
            <div css={content}>
              <div css={prefectureLayout}>
                <Card css={prefectureSelector}>
                  <Card.Head>都道府県を選択してください</Card.Head>
                  <Card.Content>
                    <PrefectureSelector />
                  </Card.Content>
                </Card>
                <div css={prefectureGeoChart}>
                  <PrefectureGeoChart />
                </div>
              </div>
              <Card>
                <CardTabs value="総人口" onChange={() => {}}>
                  <CardTab value="総人口">総人口</CardTab>
                  <CardTab value="年少人口">年少人口</CardTab>
                  <CardTab value="生産年齢人口">生産年齢人口</CardTab>
                  <CardTab value="老年人口">老年人口</CardTab>
                </CardTabs>
                <PopulationLineChart />
              </Card>
            </div>
          </Container>
        </main>
      </ThemeProvider>
    </Provider>
  )
}

const main = css`
  background-color: ${theme.colors.background};
  min-height: 100vh;
  padding: 2rem 0;
`

const content = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const prefectureLayout = css`
  display: grid;
  gap: 2rem;
  grid-template-columns: 5fr 4fr;
  @media screen and (max-width: 1160px) {
    grid-template-columns: 1fr;
  }
`

const prefectureSelector = css`
  z-index: 1;
`

const prefectureGeoChart = css`
  @media screen and (max-width: 1160px) {
    display: none;
  }
`

export default App
