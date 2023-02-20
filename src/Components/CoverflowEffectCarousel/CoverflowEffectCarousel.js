import React from "react";
import styled from "styled-components";
var Coverflow = require("react-coverflow");

export default function CoverflowEffectCarousel() {
  var fn = function () {
    /* do you want */
  };
  return (
    <CoverFlowEffectStyle
      className="container mt-2 px-0 mx-0"
      style={{ borderRadius: "10px" }}
    >
      <Coverflow
        width={1000}
        height={window.innerWidth < 400 ? 250 : 480}
        // height={250}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src="https://i.ibb.co/XXr2WXk/482fb0ea-dbdf-4072-93b9-2d22f9bc19b7.png"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </div>

        <img
          src="https://i.ibb.co/Qn7xfDW/12330c4d-5a94-4362-b9f5-d8bafccb72a1.png"
          alt="title or description"
        />

        <img
          src="https://i.ibb.co/J2HyHZq/b7227d68-11ef-4d67-aa3b-2aca2af77a3d.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
        />
        <img
          src="https://i.ibb.co/FhpxfZb/a2888636-6565-4f6a-a511-22c761f961d4.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
        />
        <img
          src="https://i.ibb.co/XXszWR1/ff73c6d5-4c3d-4a97-ae21-2f72107f7bbd.png"
          alt="title or description"
          data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
          alt="title or description"
          data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
          alt="title or description"
          data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
          alt="title or description"
          data-action="	https://f.nooncdn.com/mpcms/EN0002/assets/39fb7c07-3e4a-463d-b553-04ae5822c421.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/55c5ef90-ca4f-44e3-b64a-92719028b5c9.png"
        />
        <img
          src="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
          alt="title or description"
          data-action="https://f.nooncdn.com/mpcms/EN0002/assets/d975361c-ebaf-4ff5-ab3a-16f11964c3f7.png"
        />
      </Coverflow>
    </CoverFlowEffectStyle>
  );
}

const CoverFlowEffectStyle = styled.div``;
