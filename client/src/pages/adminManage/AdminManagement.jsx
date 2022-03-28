import React, { useState } from "react";
import "./adminManage.css";
import { AdminSongs } from "./AdminSongs";
import { AdminUsers } from "./AdminUsers";

function AdminManagement() {
	const [user, setUser] = useState(true);
	function adminNavHandler() {
		setUser((val) => !val);
	}
	function songData() {}
	return (
		<div>
			<div className="container flex flex-col items-center justify-center">
				<h3 className="text-2xl font-bold">Hi, Admin</h3>
				<div className="admin-nav flex items-center justify-center my-4">
					<button
						onClick={adminNavHandler}
						className={user ? "active-nav btn-admin" : "btn-admin"}
					>
						User
					</button>
					<button
						onClick={adminNavHandler}
						className={!user ? "active-nav btn-admin" : "btn-admin"}
					>
						Songs
					</button>
				</div>
				<div>
					{user ? (
						<p>
							<AdminUsers />
						</p>
					) : (
						<p>
							<AdminSongs />
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export { AdminManagement };
