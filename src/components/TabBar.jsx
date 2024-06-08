import React from 'react'
import TabNavBar from './TabNavBar';

function TabBar() {
    const tabs = [
        {
          label: 'Tab 1',
          content: <div>Content of Tab 1</div>,
        },
        {
          label: 'Tab 2',
          content: <div>Content of Tab 2</div>,
        },
        {
          label: 'Tab 3',
          content: <div>Content of Tab 3</div>,
        },
      ];
  return (
    <>
        <TabNavBar tabs={tabs} />
    </>
  )
}

export default TabBar