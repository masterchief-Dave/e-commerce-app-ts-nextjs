import useLogout from "@/hooks/useLogout"
import { Menu } from '@headlessui/react'
// import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import AvatarComp from "@/components/molecules/avatar"

export function UserAccountDropdown({ photo, alt, fallback }: { photo?: string, alt: string, fallback: string }) {
  const logout = useLogout()

  if (!photo) {
    return
  }


  const styles = {
    list: `block`
  }

  const links = [
    { id: 1, name: 'Account', link: '/account/profile' },
    { id: 2, name: 'Wishlist', link: '/wishlist' },
    { id: 3, name: 'Orders', link: '/account/orders' },
    // { id: 4, name: 'Sign Out', link: '' },
  ]

  return (
    <Menu as='div' className='text-[1.6rem] z-[99]'>
      <Menu.Button className='relative block'>
        <AvatarComp src={photo} alt={alt} fallback={fallback} />
      </Menu.Button>
      <Menu.Items className='absolute p-2 top-[5.7rem] rounded-xl border bg-white'>
        {links.map((link) => {
          return (
            <Menu.Item as='li' className={styles.list} key={link.id}>
              {({ active }) => (
                <Link
                  className={`${active && 'bg-blue-500'} py-2 block px-12 hover:rounded-md hover:text-white`}
                  href={link.link}
                >
                  {link.name}
                </Link>
              )}
            </Menu.Item>
          )
        })}

        <Menu.Item as='li' className={styles.list}>
          {({ active }) => {
            return (
              <button
                className={`${active && 'bg-blue-500'} text-left py-2 block px-12 hover:rounded-md hover:text-white w-full`}
                onClick={() =>
                  logout()
                }>
                Sign Out
              </button>
            )
          }}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}