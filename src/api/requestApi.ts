import { Modal } from 'antd';
import axios, { AxiosInstance } from 'axios';
// import { useAuthStore } from 'store';

interface RequestApiOptions {
  readonly request: AxiosInstance; // axios instance
}

export const BaseAxiosInstance = (): RequestApiOptions => {
  const apiUrl = `${import.meta.env.VITE_API_URL}`;

  const client = axios.create({
    baseURL: apiUrl,
  });

  client.interceptors.request.use(
    (config) => {
      config.headers.project_id = `${import.meta.env.VITE_PROJECT_ID}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  client.interceptors.response.use(
    (response) => {
      if (!response?.headers) {
        return response;
      }

      // 200인 경우에만 토큰 정보 갱신
      if (response.status === 200) {
        /* 해당 프로젝트에서는 JWT 토큰을 사용하지 않고 있기 때문에 아래 코드 주석 처리함. */
        // const token = response?.headers['jwt-token'];
        // if (token) {
        //   const base64Payload = token.split('.')[1]; // 0: header, 1: payload, 2: VERIFY SIGNATURE
        //   const base64 = base64Payload.replace(/-/g, '+').replace(/_/g, '/');
        //   const decodePayload = decodeURIComponent(
        //     atob(base64)
        //       .split('')
        //       .map((c) => {
        //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        //       })
        //       .join(''),
        //   );
        //   const jsonPayload = JSON.parse(decodePayload);
        //   const { userId = 0, sub = '', iat = 0, exp = 0 } = jsonPayload;
        //   useAuthStore.setState({
        //     isLogged: true,
        //     userInfo: {
        //       userId,
        //       email: sub,
        //       startTime: iat,
        //       endTime: exp,
        //       token: token,
        //     },
        //   });
        // }
      }

      return response;
    },
    (error) => {
      if (error?.response?.data?.message) {
        Modal.error({
          title: 'ERROR',
          content: error?.response?.data?.message,
          okText: '확인',
        });
      } else {
        if (error.response.status === 400) {
          Modal.error({
            title: '400, BAD_REQUEST_DATA',
            content: '데이터 송신 형식이 잘못되었습니다.',
            okText: '확인',
          });
        }
        if (error.response.status === 401) {
          Modal.error({
            title: '401, UNAUTHENTICATED_STATUS',
            content: '세션이 만료되었습니다 다시 로그인해주세요.',
            okText: '확인',
          });
          // useAuthStore.getState().onLogout();
        }
        if (error.response.status === 403) {
          Modal.error({
            title: '403, FORBIDDEN',
            content: '권한이 없습니다.',
            okText: '확인',
          });
        }
        if (error.response.status === 404) {
          Modal.error({
            title: '404, DATA_NOT_FOUND',
            content: '데이터가 존재하지 않습니다.',
            okText: '확인',
          });
        }
        if (error.response.status === 409) {
          Modal.error({
            title: '409, 이미 사용중인 계정입니다.',
            content: '',
            okText: '확인',
          });
        }
        if (error.response.status === 500) {
          Modal.error({
            title: '500, SERVER_ERROR',
            content: '서버에서 데이터를 불러오는데 실패했습니다.',
            okText: '확인',
          });
        }
      }

      return Promise.reject(error);
    },
  );

  return {
    request: client,
  };
};
