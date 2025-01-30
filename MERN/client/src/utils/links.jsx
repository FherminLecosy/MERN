import { IoBarChartSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { ImProfile} from "react-icons/im" 
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
    {
        text: 'add job',
        path: '/dashboard',
        icon: <FaWpforms />
    },
    {
        text: 'all-jobs',
        path: 'all-jobs',
        icon: <MdQueryStats />
    },
    {
        text: 'profile',
        path: 'profile',
        icon: <ImProfile />
    },
    {
        text: 'admin',
        path: 'admin',
        icon: <MdAdminPanelSettings />
    },
    {
        text: 'stats',
        path: 'stats',
        icon: <IoBarChartSharp />
    },
];

export default links