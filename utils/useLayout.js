import { useRouter } from "next/router";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";

const useLayout = () => {
  const router = useRouter();
  const pathData = router.asPath;
  let Layout = MainLayout;
  if (pathData === "/") {
    Layout = HomeLayout;
  } else {
    Layout = MainLayout;
  }
  return Layout;
};

export default useLayout;
