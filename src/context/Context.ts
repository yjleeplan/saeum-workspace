export const ATTENDANCE_START_HOUR = 4;
export const ATTENDANCE_END_HOUR = 8;

export const IS_COMPLETE = (index: number, attendanceYn: string) => {
  switch (index) {
    case 0:
      return attendanceYn === 'Y' ? 'COMPLETE1' : false;
    case 1:
      return attendanceYn === 'Y' ? 'COMPLETE2' : false;
    case 2:
      return attendanceYn === 'Y' ? 'COMPLETE3' : false;
    case 3:
      return attendanceYn === 'Y' ? 'COMPLETE4' : false;
    case 4:
      return attendanceYn === 'Y' ? 'COMPLETE5' : false;
    case 5:
      return attendanceYn === 'Y' ? 'COMPLETE6' : false;

    default:
      return false;
  }
};

export const IS_NOT_COMPLETE = (index: number, today: number) => {
  switch (index) {
    case 0:
      return today === 23 ? 'DAY1' : 'SOON1';
    case 1:
      return today === 24 ? 'DAY2' : 'SOON2';
    case 2:
      return today === 25 ? 'DAY3' : 'SOON3';
    case 3:
      return today === 26 ? 'DAY4' : 'SOON4';
    case 4:
      return today === 27 ? 'DAY5' : 'SOON5';
    case 5:
      return today === 28 ? 'DAY6' : 'SOON6';

    default:
      return false;
  }
};

// 네헴로드 관리자 토큰
export const NEHEMROAD_ADMIN_TOKEN = '86b2dbddf10defbdf9af847bb62c1da0b9faefb1';

// 장소 목록
export const LOCATION_LIST = [
  { label: '전체', value: 0 },
  { label: '벧엘의 집', value: 1 },
  { label: '로뎀의 집', value: 2 },
  { label: '미스바 성전(본관)', value: 3 },
  { label: '운동장', value: 4 },
  { label: '농구장', value: 5 },
];

// 사용자 목록
export const USER_LIST = [
  { name: '1조', id: '96c0a8b828a67742bea334d0992bd41e7b31f222' },
  { name: '2조', id: '3ed4187873e6f2b8b58d53366b981d57df76bef9' },
  { name: '3조', id: '8e0748dcde5f21ab53fb43702984b40a6138f532' },
  { name: '4조', id: '0dd5bf972b3ff9fff988fde3bbceed673ad0ae90' },
  { name: '5조', id: 'a5284036d38c91738e8b23602cc4d1388338ce40' },
  { name: '6조', id: 'e28f96304a1cda9ef80a0aa5f6cdc117508b2ff5' },
  { name: '7조', id: 'c2ea47c562900eba90661aa0681ba5e63d1a0699' },
  { name: '8조', id: '53723b48faadafda2df7557ec31b078f928792f1' },
  { name: '9조', id: 'c38c0564bf848815fc96ee03489c7e03d50066de' },
  { name: '10조', id: '885604c9f0121f2860da50a508b99da6e00e4480' },
  { name: '11조', id: 'badb364edd56580bb3b4d6bfef91a609e8ffe294' },
  { name: '12조', id: '288ba99abfba2ce0fc3b4da3c9e07558412d6961' },
  { name: '13조', id: '83147b3835c9704ba23d8f9a5c5ef821e34bec0a' },
  { name: '14조', id: 'f5e34d57e671ea04133a3749bc433139e7672d6e' },
  { name: '15조', id: '61dc8faa3750d22e49048f1134e5dddc5087d892' },
  { name: '16조', id: '1ae2178bc4e7e56b4491c526690858178713eeef' },
  { name: '17조', id: '873c575669b5149740e5856e7afb2e6351ff1444' },
  { name: '18조', id: '3dfd01db1e0de220fd8d172732a790481d8f30b5' },
  { name: '19조', id: '38a5814f490eeef782176de4fb10c14f61762480' },
  { name: '20조', id: 'b5aa3e5785d5fb1a14e41f64c7e5dff2c4aaae94' },
  { name: '21조', id: 'd796973c023ed8f2e30aec016fdea21b55e2e74f' },
  { name: '22조', id: '4760f3b9703694c1e48c7aac6cecfc6402f9e36a' },
  { name: '23조', id: '74f34b7a66db2e8b6d77c57a1cb41625793f3167' },
  { name: '24조', id: '267e7c89f2901abcb8e04f01cff7cfcbc2ae6342' },
  { name: '25조', id: '464744e8e8ffd4b951d06eb818d9d921fa774f66' },
  { name: '26조', id: '623f4c0e813af01c02d111568f99ffe9facf0248' },
  { name: '27조', id: '08ee88d21bd4a9285680414b609df5c1f6f4d39a' },
  { name: '28조', id: '405b49463f335d60e572e4567e8e71da60c1a16a' },
  { name: '29조', id: '8c5b8731c5e1194075fda2cd4d3059175e2a6e0d' },
  { name: '30조', id: 'a1afc199a8fbc492b429f5aa6ae0a0a8541f5fbd' },
  { name: '31조', id: '526ed95968b5c8f595dd045bad990e007d514311' },
  { name: '32조', id: 'd14ff651645148bd0f8c7bbe84c099aacacacdf8' },
  { name: '33조', id: 'a8f6bd939c78cb7b2ca7af41438330951f862317' },
  { name: '34조', id: 'fbabeab8540edb4f428713645a798ea6a3e6981f' },
  { name: '35조', id: 'c8c9501b5288916c8a2c8145ce965d14e7089791' },
  { name: '36조', id: 'fc2788b28ec5c509b295121c390959281b23bbeb' },
  { name: '37조', id: 'cc3860bb0347862d5023899ada5d3273e2f41ebc' },
  { name: '38조', id: '052ed7a84aa86f1b9f254acc7e623d51a44bee58' },
  { name: '39조', id: 'ca56a7ec971f2c4b87e6b6bb19678f55906dcae9' },
  { name: '40조', id: '825b056ce6fe6daf910d59fae040df6335812624' },
  { name: '41조', id: 'ebec26f6e44445c803e2f16c0e8c2f0282bc672a' },
  { name: '42조', id: '466e92d806bfffc40e28c759b094caa4a238b3df' },
  { name: '43조', id: 'bab7b7910fe484b86505913d8db7de60f4e5646f' },
  { name: '44조', id: '9510db3d587ffce24df71cfc062d6204f3b50226' },
  { name: '45조', id: '893744c46d8abc156e0edf5bf30f5e5a975b6e6c' },
  { name: '46조', id: '2ee57b01bc96af36b45efe98ee282b25b72a6a10' },
  { name: '47조', id: 'f56efd04742a85d3f3326d2432b9b7185013d7d2' },
  { name: '48조', id: '48af2075b5e6bd22e2d0a07f215351656d3291df' },
  // { name: '49조', id: '5d64b44e4c9c6b1b2f4167baa0c37b2ff9ef4ec6' },
  // { name: '50조', id: '404dc550e4183e08b6ff9597e5b0606411c927cf' },
  // { name: '51조', id: '5e549e3eb4cac70409c105e636748370f61f3ea3' },
  // { name: '52조', id: 'c75f82ac2cc222c65296b844395f7ec36399cfb6' },
  // { name: '53조', id: '3a35a3906e8530a2aea3c964413c4d71b2c50daf' },
  // { name: '54조', id: '0c1ba8b2857212e862167bf55de46ba611fe027b' },
  // { name: '55조', id: '9b44899df17be755ab5f42fd81b4fa134ba6e736' },
  // { name: '56조', id: '5bb0ba39ba22f469d442c7acc76e39a47b48a148' },
  // { name: '57조', id: '2581bedca61012c981dab850d7fa88042d8687fd' },
  // { name: '58조', id: '4921b0504350f1453e9f31a804309f51f89e1aee' },
  // { name: '59조', id: 'd8a06f66c9430c2e2899a03d06d65426b79f8051' },
  // { name: '60조', id: 'efb19d3acc4c5c48851646e54a6daf72fc7fcca4' },
  // { name: '61조', id: '93b223d09708e13b8379d089c455f5b0052d341a' },
  // { name: '62조', id: '77278a7563c5898cc1c5ede99286b1df5eb0e06e' },
  // { name: '63조', id: 'c9e01f5c1af6f107d27df937d44afc67f30c5d48' },
  // { name: '64조', id: 'a4bd701daa757326f2c6420a61cfe5146b92808c' },
  // { name: '65조', id: '640874d6dc081a61bc77d838f7aa7756f817e59a' },
  // { name: '66조', id: 'c14f38516b4d3f38addad189463e244dc40cfeef' },
  // { name: '67조', id: '53053e75cf8719ca08b2675eec6126bd3b17653d' },
  // { name: '68조', id: '234af567d702b1725f7a1a121bedb1e8bda95d63' },
  // { name: '69조', id: '22c40f7c9c649f81556d626c58c38a148bcfc27e' },
  // { name: '70조', id: 'bbc48e8b7699f2973ea7961eba4f1854e6e3c2c5' },
];

// 사용자 목록 (개발)
export const USER_LIST_DEV = [
  { name: '1조', id: 'b4ccde9c7836af723ec7602dabdae0d324526317' },
  { name: '2조', id: 'd375c70db21e09048e498726de71b97e39667445' },
  { name: '3조', id: '75522d3107ee53ba262646c2be5d10d6a94cdb6c' },
  { name: '4조', id: '23274600b31d29fe8f3f09044f77303f3c8d2bfe' },
  { name: '5조', id: '02bc467df36bec2a7b8a0ffcbd84d2932ebe2254' },
  { name: '6조', id: '128e54deedb02543b6bf11f0e821abcfd0a3a9ca' },
  { name: '7조', id: '630ac75b6a50c1b6528c272ad6cea18c83a9a6a6' },
  { name: '8조', id: '31dfdcaf34323c84d7f2e9a67e3420a062621afe' },
  { name: '9조', id: 'b026900d7fc6c576e89054807be2744759b1c95f' },
  { name: '10조', id: 'a49e4da6684762ce009183eaa0d84c66cad8b8bf' },
];
