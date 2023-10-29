type CategoryList = {
  name: string
  categoryItems: ICategory[]
  link: string
}

export const electronicsData: CategoryList = {
  name: 'Electronics',
  link: '/category/electronics',
  categoryItems: [
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-4_f8504c2c-6f34-4d33-ba75-a133e88ae394_1920x.jpg?v=1614755384',
      name: 'Blender',
      link: '/search/blender'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-1_78e3a695-570b-407c-93d8-24a18b560921_1920x.jpg?v=1614755384',
      name: 'Air Conditioner',
      link: '/search/conditioner'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-2_60c66f45-d04e-4a59-b0e1-535614501fac_1920x.jpg?v=1614755384',
      name: 'Microwave',
      link: '/search/microwave'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-3_13f34ae3-32b2-4a7e-9016-db5dfdba3253_1920x.jpg?v=1614755384',
      name: 'Washing Machine',
      link: '/search/washing'
    },
  ],
}

export const computerData: CategoryList = {
  name: 'Computer',
  link: '/category/laptops',
  categoryItems: [
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-5_ded4e4fb-d441-442e-8401-2e8909b51d90_1920x.jpg?v=1614755384',
      name: 'Laptops',
      link: '/search/laptop'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-8_ebadef87-550c-43f8-b44f-46ce88b7a9a3_1920x.jpg?v=1614755384',
      name: 'Headphone',
      link: '/search/headphone'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-6_ae2497c7-b696-4398-99b1-0e6914585ddd_1920x.jpg?v=1614755384',
      name: 'Mouse',
      link: '/search/mouse'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/files/Colection-7_42649201-5669-47a1-a202-e7c58d6306bf_1920x.jpg?v=1614755384',
      name: 'Monitor',
      link: '/search/monitor'
    },
  ],
}

export const gamingData: CategoryList = {
  name: 'Gaming',
  link: '/category/gaming',
  categoryItems: [
    {
      img: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=909&q=80',
      name: 'PS4',
      link: '/search/ps4'
    },
    {
      img: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80',
      name: 'Xbox',
      link: '/search/xbox'
    },
    {
      img: 'https://images.unsplash.com/photo-1612036781124-847f8939b154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Nintendo Switch',
      link: '/search/nintendo'
    },
    {
      img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'PS5',
      link: '/search/ps5'
    },
  ],
}
