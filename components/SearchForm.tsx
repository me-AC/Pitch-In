import React from 'react';
import Form from 'next/form';
import SearchFormResetButton from '@/components/SearchFormResetButton';
import { SearchIcon } from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {
	// TODO: Prevent Form Submission when input is blank
	return (
		<Form action="/" scroll={false} className="search-form">
			<input
				className="search-input"
				placeholder="Search Startups"
				name="query"
				defaultValue={query}
			/>
			<div className="flex gap-2">
				{query && <SearchFormResetButton />}

				<button type="submit" className="search-btn text-white">
					<SearchIcon className="size-5" />
				</button>
			</div>
		</Form>
	);
};

export default SearchForm;
