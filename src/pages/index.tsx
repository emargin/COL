import PageLayout from '@/layouts/PageLayout'
import Header from '@/shared/components/Header'
import SearchContainer from '@/widgets/SearchContainer'

export default function Home() {
    return (
        <PageLayout>
            <Header homePageView />
            <SearchContainer />
        </PageLayout>
    )
}
