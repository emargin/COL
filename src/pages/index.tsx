import { Inter } from '@next/font/google'
import Search from '@/components/Search'
import PageLayout from '@/layouts/PageLayout'

const inter = Inter({ subsets: ['latin'] })

const styles = {
    root: {
        height: '100vh',
        // backgroundColor: '#32323e',
        display: 'flex',
        flexDirection: 'column',
    },
}

export default function Home() {
    return (
        <PageLayout>
            <Search />
        </PageLayout>
    )
}
