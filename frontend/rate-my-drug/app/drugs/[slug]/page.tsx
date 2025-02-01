import HeaderLayout from '@/components/header-layout'

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const drug = (await params).slug
    return (
    <HeaderLayout>
        <div>{drug}</div>
    </HeaderLayout>
    );
}