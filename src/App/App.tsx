import React, { useState } from 'react';
import { SliderCheckbox } from '../SliderCheckbox';
import './App.css';


export function App() {
  let [loading, setLoading] = useState(true);
  let [enabled, setEnabled] = useState(false);

  chrome.storage.local.get("enabled", function (value) {
    setEnabled((value && value.enabled) ? true : false);
    setLoading(false);
  });

  return (
    <div className="app flex-center">
      {
        loading
          ?
          <div className="flex-line-space logo">Gooicons</div>
          :
          <div className="flex-line-space">
            <div className="logo">Gooicons</div>
            <div className='flex-center'>
              <SliderCheckbox
                startValue={enabled}
                onChange={(value) => {
                  chrome.storage.local.set({ 'enabled': value });
                  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.update({ url: tabs[0].url });
                  });
                }}
              />
            </div>
          </div>
      }
    </div>
  );
}

