import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        // badge: {
        //   variant: 'info',
        //   text: 'NEW'
        // }
    },
    // {
    //   title: true,
    //   name: 'Theme'
    // },
    {
        name: 'Tracking',
        url: '/base',
        icon: 'icon-map',
        children: [
            {
                name: 'Driver Locations',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Order Locations',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'icon-cursor',
        children: [
            {
                name: 'All Orders',
                url: '/orders/allorders',
                icon: 'icon-map'
            },
            {
                name: 'Pick up Orders',
                url: '/orders/pickuporders',
                icon: 'icon-map'
            },
            {
                name: 'Delivery Orders',
                url: '/orders/deliveryorders',
                icon: 'icon-map'
            },
            {
                name: 'No Response Orders',
                url: '/orders/noresponseorders',
                icon: 'icon-map'
            },
            {
                name: 'Bulk Order Update',
                url: '/orders/bulkordersupdate',
                icon: 'icon-map'
            },
            {
                name: 'COD Reports',
                url: '/orders/codreports',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Shippers',
        url: '/charts',
        icon: 'icon-pie-chart',
        children: [
            {
                name: 'Shippers',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Shipment Issues',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Billing',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Warehouse',
        url: '/icons',
        icon: 'icon-star',
        children: [
            {
                name: 'Warehouses',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Inventory Management',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Bulk Inventory Update',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Operator',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Print Label',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Inventory Reconcilation',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Finance',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
            {
                name: 'All ledgers',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Receive Cash',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Dispense Cash',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Account Statements',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'COD Reconcilation',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Shipper Billing',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Driver Payouts',
                url: '/base/carousels',
                icon: 'icon-map'
            },
        ]
    },
    {
        name: 'Drivers',
        url: '/widgets',
        icon: 'icon-calculator',
        children: [
            {
                name: 'Drivers',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Drivers Issues',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Vehicles',
        url: '/pages',
        icon: 'icon-star',
        children: [
            {
                name: 'Vehicles',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Maintenance Records',
                url: '/base/carousels',
                icon: 'icon-map'
            },
            {
                name: 'Accident History',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'User',
        url: '/dashboard',
        icon: 'icon-ban',
        children: [
            {
                name: 'Users',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Rolls & Permission Management',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'Reports',
        url: '/dashboard',
        icon: 'icon-ban',
        children: [
            {
                name: 'Audit Trail',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Audit Trail',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Audit Trail',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Audit Trail',
                url: '/base/cards',
                icon: 'icon-map'
            }
        ]
    },
    // {
    //   name: 'Download CoreUI',
    //   url: 'http://coreui.io/angular/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    //   attributes: { target: '_blank', rel: 'noopener' }
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'http://coreui.io/pro/angular/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    //   attributes: { target: '_blank', rel: 'noopener' }
    // }
];
export const ShipperNavItems: INavData[] = [
    {
        name: 'Shipper Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        // badge: {
        //   variant: 'info',
        //   text: 'NEW'
        // }
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'icon-cursor',
        children: [
            {
                name: 'All Orders',
                url: '/orders/allorders',
                icon: 'icon-map'
            },
            {
                name: 'Pick up Orders',
                url: '/orders/pickuporders',
                icon: 'icon-map'
            },
            {
                name: 'Delivery Orders',
                url: '/orders/deliveryorders',
                icon: 'icon-map'
            },
            {
                name: 'No Response Orders',
                url: '/orders/noresponseorders',
                icon: 'icon-map'
            },
            {
                name: 'Bulk Order Update',
                url: '/orders/bulkordersupdate',
                icon: 'icon-map'
            },
            {
                name: 'COD Reports',
                url: '/orders/codreports',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'COD Reconciliation',
        url: '/charts',
        icon: 'icon-pie-chart'
    },
    {
        name: 'Ledgers',
        url: '/widgets',
        icon: 'icon-calculator',
        children: [
            {
                name: 'Drivers',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Drivers Issues',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },
    {
        name: 'User',
        url: '/dashboard',
        icon: 'icon-ban',
        children: [
            {
                name: 'Users',
                url: '/base/cards',
                icon: 'icon-map'
            },
            {
                name: 'Rolls & Permission Management',
                url: '/base/carousels',
                icon: 'icon-map'
            }
        ]
    },


];
