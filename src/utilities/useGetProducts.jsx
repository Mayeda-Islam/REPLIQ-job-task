import { useEffect } from "react";

function useGetProducts(setProdcuts) {
  useEffect(() => {
    fetch(`/fakedata.json`)
      .then((res) => res.json())
      .then((data) => setProdcuts(data));
  }, [setProdcuts]);
}
export default useGetProducts;
