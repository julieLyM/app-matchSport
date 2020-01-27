// import axios from 'axios';

export const getClubs = () => {
  const data = Promise.resolve([
    {
      id: 1,
      name: 'club julix',
      imgUrl:
        'https://images.unsplash.com/photo-1580100124280-a40415d0ab21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80',
    },
    {
      id: 2,
      name: 'club rebibix',
      imgUrl:
        'https://images.unsplash.com/photo-1569852816111-74d155a7c599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    {
      id: 3,
      name: 'club melanix',
      imgUrl:
        'https://images.unsplash.com/photo-1580086405674-cae45ac73720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 4,
      name: 'club jonix',
      imgUrl:
        'https://images.unsplash.com/flagged/photo-1580051579393-2e94dd6f4789?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ]);
  return data;
};
