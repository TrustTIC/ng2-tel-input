import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import 'intl-tel-input';
import 'intl-tel-input/build/js/utils';
var Ng2TelInput = /** @class */ (function () {
    function Ng2TelInput(el) {
        this.el = el;
        this.hasError = new EventEmitter();
        this.ng2TelOutput = new EventEmitter();
        this.countryChange = new EventEmitter();
        this.intlTelInputObject = new EventEmitter();
    }
    Ng2TelInput.prototype.ngOnInit = function () {
        var _this = this;
        this.ngTelInput = $(this.el.nativeElement);
        if (this.ng2TelInputOptions) {
            this.ngTelInput.intlTelInput(this.ng2TelInputOptions);
        }
        else {
            this.ngTelInput.intlTelInput();
        }
        this.ngTelInput.on("countrychange", function (e, countryData) {
            _this.countryChange.emit(countryData);
        });
        this.intlTelInputObject.emit(this.ngTelInput);
    };
    Ng2TelInput.prototype.onKeyup = function () {
        var isInputValid = this.isInputValid();
        if (isInputValid) {
            var telOutput = this.ngTelInput.intlTelInput("getNumber");
            this.hasError.emit(isInputValid);
            this.ng2TelOutput.emit(telOutput);
        }
        else {
            this.hasError.emit(isInputValid);
        }
    };
    Ng2TelInput.prototype.isInputValid = function () {
        return this.ngTelInput.intlTelInput('isValidNumber') ? true : false;
    };
    Ng2TelInput.prototype.setCountry = function (country) {
        this.ngTelInput.intlTelInput('setCountry', country);
    };
    Ng2TelInput.decorators = [
        { type: Directive, args: [{
                    selector: '[ng2TelInput]',
                },] },
    ];
    /** @nocollapse */
    Ng2TelInput.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    Ng2TelInput.propDecorators = {
        "ng2TelInputOptions": [{ type: Input, args: ['ng2TelInputOptions',] },],
        "hasError": [{ type: Output, args: ['hasError',] },],
        "ng2TelOutput": [{ type: Output, args: ['ng2TelOutput',] },],
        "countryChange": [{ type: Output, args: ['countryChange',] },],
        "intlTelInputObject": [{ type: Output, args: ['intlTelInputObject',] },],
        "onKeyup": [{ type: HostListener, args: ['keyup',] },],
    };
    return Ng2TelInput;
}());
export { Ng2TelInput };
//# sourceMappingURL=ng2-tel-input.js.map