import { queryClient } from 'api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Router } from 'routes/Router';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </>
  );
}

export default App;
