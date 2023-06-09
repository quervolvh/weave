import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { change, resizer } from 'utils';
import 'assets/styles/main.scss';
import { SetClientAvailability } from 'hooks/useIsClient';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [state, setState] = useState({
    isMobile: false,
    deviceWidth: 0,
    showMobileView: false,
    timeOutTrigger: 0,
    clientMode: false
  });

  const { isMobile, deviceWidth, showMobileView, clientMode } = state;

  const currentPath = router.pathname.trim();

  const unProtectedRoutes: string[] = ["/cart", "/checkout", "/favourites", "/product", "/store", "/about", "/"];

  const redirectCondition = !([...unProtectedRoutes].includes(currentPath));

  const resizeListener = (mode: "add" | "remove") => {

    window?.[mode === "add" ? "addEventListener" : "removeEventListener"]?.("resize",

      () => resizer(

        (e) => change(e, "isMobile", setState),
        (e) => change(e, "deviceWidth", setState)

      ),

      false

    );

  }

  useEffect(() => {

    // On first load, this function sets the values obtained for client width and height.

    if (clientMode && window) {

      resizeListener("add");

      change(document?.body?.clientWidth < 601, "isMobile", setState);

      change(document?.body?.clientWidth, "deviceWidth", setState);

    }

    return (() => {

      if (clientMode && window) { resizeListener("remove"); }

    })

    //eslint-disable-next-line
  }, [clientMode]);

  useEffect(() => {
    change(isMobile, "showMobileView", setState);
  }, [isMobile]);

  useEffect(() => {

    if (!([...unProtectedRoutes].includes(currentPath))) {
      router.replace("/");
    }

    //eslint-disable-next-line
  }, [redirectCondition]);


  SetClientAvailability((e) => change(e, "clientMode", setState));

  return (
    <>

      {
        (redirectCondition) ?

          <></>


          :
          <>

            <Component
              {...pageProps}
              isMobile={showMobileView}
              deviceWidth={deviceWidth}
              clientMode={clientMode}
            />

          </>
      }

    </>
  );

}

export default App;
