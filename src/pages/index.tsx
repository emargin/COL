import { Inter } from '@next/font/google'
import Search from '@/components/Search'
import PageLayout from '@/layouts/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <PageLayout>
            <Search />
        </PageLayout>
    )
}
