import RegistrationForm from "../components/RegistrationForm";
import Header from "../components/Header";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

export function Registration() {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      if (localStorage.getItem("token")) {
        await store.checkAuth();
        if (store.isAuth) {
          navigate("/online-notes", { replace: true });
        }
      }
    };
    init();
  }, []);

  if (store.isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Header isSearchHidden={true} />
      <div className="mt-5">
        <RegistrationForm />
      </div>
    </>
  );
}

export default observer(Registration);
