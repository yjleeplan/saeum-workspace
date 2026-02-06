import { queryClient } from 'api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Routes } from 'routes/Routes';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  );
}

export default App;
