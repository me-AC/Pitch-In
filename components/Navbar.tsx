import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
	const session = await auth();
	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans text-black">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={144} height={30} />
				</Link>

				<div className="flex items-center gap-5">
					{session && session?.user ? (
						<>
							<Link href="/startups/create">
								<span>Create</span>
							</Link>

							<form
								action={async () => {
									'use server';
									await signOut();
								}}
							>
								<button type="submit">LogOut</button>
							</form>

							<Link href={`/user/${session?.user?.id}`}>
								<span>{session?.user?.name}</span>
								{/* <Image
									src={`${session.user.image}`}
									alt="User rpofile photo"
									width={30}
									height={30}
								/> */}
							</Link>
						</>
					) : (
						<>
							<form
								action={async () => {
									'use server';
									await signIn('github');
								}}
							>
								<button type="submit">SignIn</button>
							</form>
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
