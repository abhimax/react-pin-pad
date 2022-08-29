import Key from "./Key";
import React, { useState } from "react";
import PropTypes from "prop-types";

const PinPad = ({
  onTouchAction,
  onClickAction,
  errorMessage,
  isPinVisible,
}) => {
  let [keyPosition, setkeyPosition] = useState(1);
  let [initKeys, setInitKeys] = useState({
    k1: "◦",
    k2: "◦",
    k3: "◦",
    k4: "◦",
  });

  const getNextKeyPosition = (key) => {
    let nextKey;
    if (key < 5) {
      nextKey = key + 1;
    } else {
      nextKey = 1;
      setInitKeys({ k1: "◦", k2: "◦", k3: "◦", k4: "◦" });
      setkeyPosition(1);
    }
    return nextKey;
  };

  let handleOnPress = (key, e, displayVal) => {
    if (keyPosition === 1) {
      initKeys.k1 = key;
      setInitKeys(initKeys);
    }
    if (typeof key === "object") {
      setInitKeys({ k1: "◦", k2: "◦", k3: "◦", k4: "◦" });
      setkeyPosition(1);
    } else {
      initKeys[`k${keyPosition}`] = isPinVisible ? key : "●";
      setInitKeys(initKeys);
      setkeyPosition(getNextKeyPosition(keyPosition));
    }
    if (e._reactName === "onClick") {
      onClickAction(key, e);
    } else {
      onTouchAction(key, e);
    }
  };

  return (
    <div id="numpad" className="pin-pad-wrapper">
      <div className="pin-input-main-wrapper">
        <div className="pin-input-wrapper">
          <input type="text" placeholder="◦" value={initKeys.k1} />
          <input type="text" placeholder="◦" value={initKeys.k2} />
          <input type="text" placeholder="◦" value={initKeys.k3} />
          <input type="text" placeholder="◦" value={initKeys.k4} />
        </div>
        <div className="pin-error-text-wrapper">
          {errorMessage && (
            <span className="pin-error-text">{errorMessage}</span>
          )}
        </div>
      </div>

      <div id="numpad" className="pin-pad">
        <Key
          id="number_0_0"
          value="1"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_0_1"
          value="2"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_0_2"
          value="3"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />

        <Key
          id="number_1_0"
          value="4"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_1_1"
          value="5"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_1_2"
          value="6"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />

        <Key
          id="number_2_0"
          value="7"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_2_1"
          value="8"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_2_2"
          value="9"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />

        <Key
          id="number_3_0"
          customClass="custom-zero-btn"
          value="0"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
        />
        <Key
          id="number_3_1"
          value="✖"
          onTouchAction={handleOnPress}
          onClickAction={handleOnPress}
          customClass="clear-pin"
        />
      </div>
    </div>
  );
};

PinPad.propTypes = {
  onTouchAction: PropTypes.func,
  onClickAction: PropTypes.func,
  pin: PropTypes.string,
  errorMessage: PropTypes.string,
  isPinVisible: PropTypes.bool,
};
export default PinPad;
