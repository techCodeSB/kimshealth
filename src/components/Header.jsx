"use client"
import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import HederCorporate from './HeaderCorporate';
import HeaderUnit from './HederUnit';


const Header = () => {
  const loc = Cookies.get("systemLocation") ? JSON.parse(Cookies.get("systemLocation")) : "";
  const lang = Cookies.get("systemLang") ? JSON.parse(Cookies.get("systemLang")) : "";


  useEffect(() => {
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  const hamburger = document.querySelector('#hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const handlers = [];

  const hamburgerClickHandler = () => {
    hamburger?.classList.toggle('active');
    sidebar?.classList.toggle('active');
    overlay?.classList.toggle('active');
    document.body.style.overflow = sidebar?.classList.contains('active') ? 'hidden' : '';
  };

  hamburger?.addEventListener('click', hamburgerClickHandler);

  dropdownItems.forEach((dropdown) => {
    const menuItem = dropdown.querySelector('.menu-item');

    if (menuItem) {
      const handler = (e) => {
        e.stopPropagation();

        dropdownItems.forEach((other) => {
          if (other !== dropdown) {
            other.classList.remove('open');
            const otherSubmenu = other.querySelector('.submenu');
            otherSubmenu?.classList.remove('open');
          }
        });

        dropdown.classList.toggle('open');
        const submenu = dropdown.querySelector('.submenu');
        submenu?.classList.toggle('open');
      };

      menuItem.addEventListener('click', handler);
      handlers.push({ element: menuItem, handler });
    }
  });

  return () => {
    // Clean up all attached listeners safely
    hamburger?.removeEventListener('click', hamburgerClickHandler);

    handlers.forEach(({ element, handler }) => {
      element?.removeEventListener('click', handler);
    });
  };
}, []);




  // const hamburger = document.getElementById('hamburger');
  // const sidebar = document.getElementById('sidebar');
  // const overlay = document.getElementById('overlay');

  // const menuItems = document.querySelectorAll('.menu-item');
  // const dropdownItems = document.querySelectorAll('.has-dropdown');


  // // Toggle bar for 
  // useEffect(() => {

  //   // Menu item click effect
  //   menuItems.forEach(item => {
  //     item.addEventListener('click', function (e) {
  //       // Check if this item is part of a dropdown
  //       const parentLi = this.closest('.has-dropdown');


  //       if (parentLi) {
  //         e.stopPropagation();
  //         // Close all other dropdowns first
  //         dropdownItems.forEach(dropdown => {
  //           if (dropdown !== parentLi) {
  //             dropdown.classList.remove('open');
  //             const otherSubmenu = dropdown.querySelector('.submenu');
  //             if (otherSubmenu) {
  //               otherSubmenu?.classList.remove('open');
  //             }
  //           }
  //         });


  //         // Toggle current dropdown
  //         parentLi?.classList.toggle('open');


  //         // Find the submenu element
  //         const submenu = parentLi.querySelector('.submenu');
  //         if (submenu) {
  //           submenu?.classList.toggle('open');
  //         }


  //         // Prevent other actions for dropdown items
  //         return;
  //       }


  //       // Remove active class from all items
  //       menuItems.forEach(i => i?.classList.remove('active'));


  //       // Add active class to clicked item
  //       this?.classList.add('active');


  //       // Close sidebar on mobile after selection
  //       if (window.innerWidth <= 768) {
  //         setTimeout(() => {
  //           hamburger?.classList.remove('active');
  //           sidebar?.classList.remove('active');
  //           overlay?.classList.remove('active');
  //           document.body.style.overflow = '';
  //         }, 300);
  //       }
  //     });
  //   });


  //   // Close sidebar when window is resized to desktop
  //   window?.addEventListener('resize', function () {
  //     if (window.innerWidth > 768 && sidebar?.classList.contains('active')) {
  //       hamburger?.classList.remove('active');
  //       sidebar?.classList.remove('active');
  //       overlay?.classList.remove('active');
  //       document.body.style.overflow = '';
  //     }
  //   });


  //   // Submenu item click handling
  //   document.querySelectorAll('.submenu-item').forEach(item => {
  //     item.addEventListener('click', function (e) {
  //       e.stopPropagation();


  //       // Remove active class from all items
  //       menuItems.forEach(i => i?.classList.remove('active'));


  //       // Add active class to parent menu item
  //       const parentMenuItem = this.closest('.has-dropdown').querySelector('.menu-item');
  //       if (parentMenuItem) {
  //         parentMenuItem?.classList.add('active');
  //       }


  //       // Highlight this submenu item
  //       document.querySelectorAll('.submenu-item').forEach(i => {
  //         i?.classList.remove('active');
  //       });
  //       this?.classList.add('active');


  //       // Close sidebar on mobile after selection
  //       if (window.innerWidth <= 768) {
  //         setTimeout(() => {
  //           hamburger?.classList.remove('active');
  //           sidebar?.classList.remove('active');
  //           overlay?.classList.remove('active');
  //           document.body.style.overflow = '';
  //         }, 300);
  //       }
  //     });
  //   });


  // }, [menuItems, dropdownItems])




  if (loc.default === true) {
    return <HederCorporate />
  }
  else {
    return <HeaderUnit />
  }

}

export default Header;

