// _app.tsx
import "@/styles/fonts.module.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/user.InterfaceLayer/Components/Header";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="PageContainer">
        <Header />
        <div className="MainContainer">
          <Component {...pageProps} />
        </div>
        {/* <Footer /> */}
      </div>
    </QueryClientProvider>
  );
}
