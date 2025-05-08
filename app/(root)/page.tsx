import SearchForm from '@/components/SearchForm';
import StartUpCard from '@/components/StartUpCard';

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams)?.query;
	const posts = [
		{
			_createdAt: new Date(),
			views: 55,
			author: { _id: 1, name: 'Adrian' },
			_id: 1,
			description: 'This is a description.',
			image:
				'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
			category: 'Robots',
			title: 'We Robots',
		},
	];
	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch Your Startup, <br />
					Connect with Entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competetions
				</p>

				<SearchForm query={query} />
			</section>

			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search Results for "${query}"` : 'All Startups'}
				</p>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType) => (
							<StartUpCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No Startups found.</p>
					)}
				</ul>
			</section>
		</>
	);
}
