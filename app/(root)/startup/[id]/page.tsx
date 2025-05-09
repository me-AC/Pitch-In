import React from 'react';

const page = async ({ params }: { params: Promise<{ id: String }> }) => {
	const id = (await params).id;

	return <div>page</div>;
};

export default page;
