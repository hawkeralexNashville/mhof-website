import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InfoBar from '@/components/InfoBar'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import Exhibits from '@/components/Exhibits'
import Highlights from '@/components/Highlights'
import VideoSection from '@/components/VideoSection'
import PrivateEvents from '@/components/PrivateEvents'
import Inductees from '@/components/Inductees'
import GrammyGallery from '@/components/GrammyGallery'
import Merchandise from '@/components/Merchandise'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <AnnouncementBanner />
        <Exhibits />
        <Highlights />
        <VideoSection />
        <PrivateEvents />
        <GrammyGallery />
        <Inductees />
        <Merchandise />
      </main>
      <Footer />
    </>
  )
}
