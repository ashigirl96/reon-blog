import type { GetStaticProps, NextPage } from 'next'
import { SiteLinks } from '@/components'
import { Card } from '@/components'
import { fetchCards, ICard } from '@/lib/notion/fetchGalleries'
import { freshGalleries } from '@/lib/notion/freshGalleries'

const Travels: NextPage<{ cards: ICard[] }> = ({ cards }) => {
  return (
    <div className="flex space-x-8 flex-col md:flex-row">
      <SiteLinks />
      <div className="flex grow flex-wrap text-white max-w-full justify-center md:justify-start">
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
