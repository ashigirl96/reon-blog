import type { GetStaticProps, NextPage } from 'next'
import { Card } from '@/components'
import { fetchCards, ICard } from '@/lib/notion/fetchGalleries'
import { freshGalleries } from '@/lib/notion/freshGalleries'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'

const Travels: NextPage<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <div className="max-w-7xl md:max-w-7xl mx-auto space-y-8 mt-10">
      <Title title="適当にパシャったやつ" icon="🗾️" />
      <Description>
        散歩中に見つけた景色をぼーっと観ながら、その時に感じていた情緒を言語化したもの(ポエム)と共に載せてギャラリーっぽくしてみました。
      </Description>
      <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap max-w-7xl mx-auto">
        {cards.map(({ imgURL, title, date, feeling, tags }) => (
          <Card
            imgURL={imgURL}
            title={title}
            date={date}
            feeling={feeling}
            tags={tags}
          />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await freshGalleries()
  const cards = await fetchCards()
  return {
    props: {
      cards,
    },
  }
}

export default Travels
