import React from "react";
import {SliderModule} from 'primeng/slider';

interface GreeterProps {
    name: string;
    val1: number;
    val2: number;
    val3: number;
    val4: number;
    rangeValues: number[];
}

const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
    const name = props.name
    const dataSlider = {
      val1: 10,
      val2: 50,
      val3: 10,
      val4: 10,
      rangeValues: [20,80]
    }

    return (
        <section className="phx-hero">
          <h1>Welcome to {name} with TypeScript and React!</h1>
          <p>Peace-of-mind from prototype to production</p>
          <h5>Basic: {dataSlider.val1}</h5>
          <p-slider formControlName="val1"></p-slider>

          <h5>Input: {dataSlider.val2}</h5>
          <input type="text" pInputText formControlName="val2" readonly/>
          <p-slider formControlName="val2"></p-slider>

          <h5>Step: {dataSlider.val3}</h5>
          <p-slider formControlName="val3" step="20"></p-slider>

          <h5>Range: {'10 50'}</h5>
          <p-slider formControlName="rangeValues" range="true"></p-slider>

          <h5>Vertical: {dataSlider.val4}</h5>
          <p-slider formControlName="dataSlider.val4" orientation="vertical"></p-slider>
        </section>
    );
};

// export class SliderDemo {
//    val1: number;
//    val2: number = 50;
//    val3: number;
//    val4: number;
//    rangeValues: number[] = [20,80];
//}

export default Greeter;
