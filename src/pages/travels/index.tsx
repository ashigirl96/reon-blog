import type { GetStaticProps, NextPage } from 'next'
import { Card } from '@/components'
import { fetchCards, ICard } from '@/lib/notion/fetchGalleries'
import { freshGalleries } from '@/lib/notion/freshGalleries'

const Travels: NextPage<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <>
      <div className="flex gap-x-8 gap-y-4 justify-center flex-wrap">
        {cards.map(({ imgURL, title, date, feeling, tags }) => (
          <Card
            imgURL={imgURL}
            title={title}
            date={date}
            feeling={feeling}
            tags={tags}
          />
        ))}
        {/*</div>*/}
      </div>
    </>
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
