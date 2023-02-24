import { Inter } from '@next/font/google'
import Search from '@/components/Search'
import PageLayout from '@/layouts/PageLayout'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <PageLayout>
            <Header homePageView />
            <Search />
        </PageLayout>
    )
}
