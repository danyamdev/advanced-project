import {
	MainPage,
	PointPage,
	LogIn,
	SingIn,
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
		path: "/*",
		component: NotFound,
		withAuth: false,
	},
]

export default routes;