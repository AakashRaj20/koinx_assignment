"use client";

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    // Check if the script already exists in the document
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");

      script.id = scriptId;
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "850",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "withdateranges": true,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full relative">
      <div className="tradingview-widget-container" ref={container}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
