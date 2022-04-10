import {
	MainPage,
	PointPage,
	LogIn,
	SingIn,
	Profile,
	Entry,
	NotFound
} from "../components";

const routes = [
	{
		path: '/',
		component: MainPage,
		exact: true,
		withAuth: false,
	},
	{
		path: '/point/:id',
		component: PointPage,
		exact: true,
		withAuth: false,
	},
	{
		path: '/entry',
		component: Entry,
		exact: true,
		withAuth: true,
	},
	{
		path: "/login",
		component: LogIn,
		exact: true,
		withAuth: false,
	},
	{
		path: "/singin",
		component: SingIn,
		exact: true,
		withAuth: false,
	},
	{
		path: "/profile/:id",
		component: Profile,
		exact: true,
		withAuth: true,
	},
	{
		path: "/*",
		component: NotFound,
		withAuth: false,
	},
]

export default routes;