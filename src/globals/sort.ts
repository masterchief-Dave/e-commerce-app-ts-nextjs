type CategoryProps = {
  title: string
  link: string,
  id?: number | string
}

export const productCategory: CategoryProps[] = [
  {title: 'All', link: '/category/all'},
  {title: 'Electronics', link: '/category/electronics'},
  {title: 'Headphones', link: '/category/headphones'},
  {title: 'Watch', link: '/category/watch'},
  {title: 'Accessories', link: '/category/accessories'},
  {title: 'Laptops', link: '/category/laptops'},
  {title: 'Smartphones', link: '/category/smartphones'},
  {title: 'Gaming Consoles', link: '/category/gaming'},
  {title: 'Television', link: '/category/television'},
]

export const priceCategory: CategoryProps[] = [
  { id: 1, link: ``, title: 'Under $20' },
  { id: 2, link: ``, title: '$20 - $50' },
  { id: 3, link: ``, title: '$50 - $100' },
  { id: 4, link: ``, title: '$100 - $200' },
  { id: 5, link: ``, title: '$200 - $400' },
  { id: 6, link: ``, title: 'Above $400' }
]

export const brandCategory: CategoryProps[] = [
  {id: 1, link: ``, title: 'Samsung'},
  {id: 2, link: ``, title: 'Apple'}
]