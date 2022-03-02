import { FactoryTarget } from '@angular/compiler/src/compiler';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { DataSharing } from './aa/DataSharing.service';

@Component({
  selector: 'hello',
  template: `<h1><ng-content></ng-content></h1> <button (click)="sentSomeData2('hi this first click')">Click1</button>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() arrayData = [];
  constructor(private inst: DataSharing) {
    this.inst.data = 'ss';
    let calc1: Calc = new ArithmeticOperations();
    let calc2: Calc = new ArithmeticOperations2();

    let abstract: A = new B();
    let abstract2: B = new B();

    console.log(calc1.addition(10, 20));
    console.log(calc2.addition(10, 20));

    let connectWifi: Connection = new CreateWifiConncetion();
    let connectBluetooth: Connection = new CreateBluetoothConncetion();

    let connectWifi2: CreateWifiConncetion = new CreateWifiConncetion();
    let connectBluetooth2: CreateBluetoothConncetion =
      new CreateBluetoothConncetion();
    ConnectionProvider.getInstance();
    // check the differences
  }

  sentSomeData2(data) {
    this.inst.sentData('somedata');
    this.inst.getService().subscribe((data) => {
      console.log(data);
      //logic
    });
  }
}

interface Calc {
  addition(a, b);
  subtraction(a, b);
}

abstract class A {
  abstract multiplication(a, b);
  Addition(a, b) {
    return a + b;
  }
}

class B extends A {
  substraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
}

//Abstract

class ArithmeticOperations implements Calc {
  addition(a: any, b: any) {
    // this.abstract2.substraction()
    //this.abstract.substraction();
    return 1 + a + b;
  }

  subtraction(a: any, b: any) {
    return 1 + (a - b);
  }
}

class ArithmeticOperations2 implements Calc {
  addition(a: any, b: any) {
    return 1 - a + b;
  }

  subtraction(a: any, b: any) {
    return 1 - a - b;
  }
}

interface Connection {
  connect();
  disconnect();
}

class CreateWifiConncetion implements Connection {
  connect() {
    //connectfor wifi protocol
  }
  disconnect() {
    //disconnect
  }
  Abc() {}
}

class CreateBluetoothConncetion implements Connection {
  connect() {
    //connectfor wifi protocol
  }

  disconnect() {
    //disconnect
  }

  someotherMethods() {}
}

class AppConstants {
  static readonly variabl1 = 'var1';
  static readonly variabl2 = 'var2';
  static readonly variabl3 = 'var3';
}

class ConnectionProvider {
  x = AppConstants.variabl1;

  private static instConnectionProvider = new ConnectionProvider();

  private ConnectionProvider() {}

  static getInstance() {
    this.getInstances(); // aceesing static class inside same class
    return this.instConnectionProvider;
  }

  static getInstances() {
    return this.instConnectionProvider;
  }
  private connectWifi: Connection = new CreateWifiConncetion();
  private connectBluetooth: Connection = new CreateBluetoothConncetion();

  connectWifi2: CreateWifiConncetion = new CreateWifiConncetion();
  connectBluetooth2: CreateBluetoothConncetion =
    new CreateBluetoothConncetion();

  public getWifi() {
    return this.connectWifi;
  }

  public getWifi2() {
    return this.connectWifi;
  }

  // rest are private class / variables
}

// encapsulation:
// with interace abstract class or private declaraitions for functions and variables

// What is encapsulation and abstraction
// what is the difference between interface and abstract class

// Design patterns
// Singleton
// Factory

//Abstraction
//Abstract class extending abstract class - encapuslaton/data hiding
//interface -
