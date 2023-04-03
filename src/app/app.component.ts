import { Component } from '@angular/core';
import { GooglePayButtonComponent } from '@google-pay/button-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCustomSize = false;
  public paymentRequest: GooglePayButtonComponent["paymentRequest"] = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "BCR2DN4TUSW37TCB",
      merchantName: "CVbanade"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "INR",
      countryCode: "IN"
    },
    callbackIntents: ['PAYMENT_AUTHORIZATION']
  };

  public onLoadPaymentData(e: any): void {
    console.log(e.detail);
  }

  public paymentError(e: any): void {
    console.log(e);
  }

  public onPaymentDataAuthorized: GooglePayButtonComponent["paymentAuthorizedCallback"] = (paymentData) => {
    console.log(paymentData);
    return { transactionState: "SUCCESS" }
  }
}
