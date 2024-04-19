/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // 서버 측에서만 실행되는 모듈을 무시합니다.
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        mysql: false, // MySQL 관련 모듈을 클라이언트 측에서 불러오지 못하도록 설정
      };
    }

    return config;
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
//   webpack: (config, { isServer }) => {
//     // 서버 측에서만 실행되는 모듈을 무시합니다.
//     if (!isServer) {
//       config.resolve.fallback = {
//         fs: false,
//         net: false,
//         tls: false,
//       };
//     }

//     return config;
//   },
// };

// export default nextConfig;
