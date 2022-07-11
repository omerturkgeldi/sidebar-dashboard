import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'
export const SidebarData = [
  {
    id: 1,
    title: 'Ana Sayfa',
    path: '/',
    icon: <TbIcons.TbLayoutGrid />,
  },
  {
    id: 2,
    title: 'Hakkımda',
    path: '/hakkimda',
    icon: <IoIcons.IoIosPaper />,

    subNav: [
      {
        id: 222,
        title: 'Detay',
        path: '/hakkimda/detay',
        icon: <IoIcons.IoMdPeople />,
      },
      {
        id: 233,
        title: 'Dosyalar',
        path: '/hakkimda/dosyalar',
        icon: <IoIcons.IoMdPeople />,
      },
    ],
  },
  {
    id: 3,
    title: 'Eğitim',
    path: '/egitim',
    icon: <AiIcons.AiFillHome />,

    subNav: [
      {
        id: 333,
        title: 'Okul',
        path: '/egitim/okullar',
        icon: <IoIcons.IoMdPeople />,
      },
      {
        id: 344,
        title: 'Kurs',
        path: '/egitim/kurslar',
        icon: <IoIcons.IoMdPeople />,
      },
    ],
  },
  {
    id: 4,
    title: 'Deneyim',
    path: '/deneyim',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 5,
    title: 'Beceri',
    path: '/beceri',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    id: 6,
    title: 'İletişim',
    path: '/iletisim',
    icon: <IoIcons.IoMdPeople />,

    subNav: [
      {
        id: 123,
        title: 'Harita',
        path: '/iletisim/harita',
        icon: <IoIcons.IoMdPeople />,
      },
      {
        id: 124,
        title: 'Detay',
        path: '/iletisim/detay',
        icon: <IoIcons.IoMdPeople />,
      },
    ],
  },
]

// export const SidebarData = [
//   {
//     title: 'Eğitim',
//     path: '/egitim',
//     icon: <AiIcons.AiFillHome />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Users',
//         path: '/overview/users',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Revenue',
//         path: '/overview/revenue',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Deneyim',
//     path: '/deneyim',
//     icon: <IoIcons.IoIosPaper />,
//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Reports',
//         path: '/reports/reports1',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 2',
//         path: '/reports/reports2',
//         icon: <IoIcons.IoIosPaper />,
//         cName: 'sub-nav'
//       },
//       {
//         title: 'Reports 3',
//         path: '/reports/reports3',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'deneyim',
//     path: '/deneyim',
//     icon: <FaIcons.FaCartPlus />
//   },
//   {
//     title: 'İletişim',
//     path: '/iletisim',
//     icon: <IoIcons.IoMdPeople />
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,

//     iconClosed: <RiIcons.RiArrowDownSFill />,
//     iconOpened: <RiIcons.RiArrowUpSFill />,

//     subNav: [
//       {
//         title: 'Message 1',
//         path: '/messages/message1',
//         icon: <IoIcons.IoIosPaper />
//       },
//       {
//         title: 'Message 2',
//         path: '/messages/message2',
//         icon: <IoIcons.IoIosPaper />
//       }
//     ]
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />
//   }
// ];
