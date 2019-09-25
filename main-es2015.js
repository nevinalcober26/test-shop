(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Wrap -->\n<div class=\"wrap\" [class.on]=\"mainclass\">\n    <app-side (toggle)=\"mainclass = !mainclass\"></app-side>\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n        <!-- Start Footer -->\n        <footer>\n            <div class=\"container\">\n                <p class=\"margin-bottom0\">2019 © Copyright <a href=\"#\" target=\"_BLANK\">Test Shop Angular</a>. All rights Reserved.</p>\n            </div>\n        </footer>\n        <!-- End Footer -->\n    </div>\n</div>\n<!-- End Wrap -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <!-- Breadcumbs -->\n    <breadcumb></breadcumb>\n</div>\n<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Contact <span class=\"font-light\">Us</span></h4>\n        <p>Delectus aliquando incorrupte ne sea qui cu iudicabit.</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page wrap-contact\">\n    <div class=\"box-page\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h5>If you have any question just message us!</h5>\n                 Start Form\n                <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef)\">\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput\n                                    type=\"text\"\n                                    placeholder=\"Full Name\"\n                                    value=\"\"\n                                    name=\"fullname\"\n                                    [(ngModel)]=\"fullname\"\n                                    #fullnameRef=\"ngModel\"\n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"fullnameRef.errors?.required && fullnameRef.touched\">required error</small>\n                            <small class=\"error\" *ngIf=\"fullnameRef.errors?.required && fullnameRef.dirty\">required error</small>\n                        </div>\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput\n                                    type=\"email\"\n                                    placeholder=\"Email\"\n                                    value=\"\"\n                                    name=\"email\"\n                                    [(ngModel)]=\"email\"\n                                    #emailRef=\"ngModel\"\n                                    required\n                                    email>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"emailRef.errors?.required && emailRef.touched\">required error</small>\n                            <small class=\"error\" *ngIf=\"emailRef.errors?.required && emailRef.dirty\">required error</small>\n                            <small class=\"error\" *ngIf=\"emailRef.errors?.email && emailRef.dirty\">email not valid</small>\n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row\">\n                        <div class=\"col m12 s12\">\n                            <mat-form-field>\n                                <input matInput\n                                    type=\"text\"\n                                    placeholder=\"Subject\"\n                                    value=\"\"\n                                    name=\"subject\"\n                                    [(ngModel)]=\"subject\"\n                                    #subjectRef=\"ngModel\"\n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"subjectRef.errors?.required && subjectRef.touched\">required error</small>\n                            <small class=\"error\" *ngIf=\"subjectRef.errors?.required && subjectRef.dirty\">required error</small>\n                        </div>\n                        <div class=\"col s6 s12\">\n                            <mat-form-field>\n                                <textarea matInput\n                                    type=\"text\"\n                                    placeholder=\"message\"\n                                    value=\"\"\n                                    name=\"message\"\n                                    [(ngModel)]=\"message\"\n                                    #messageRef=\"ngModel\"\n                                    rows=\"5\"\n                                    required></textarea>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"messageRef.errors?.required && messageRef.touched\">required error</small>\n                            <small class=\"error\" *ngIf=\"messageRef.errors?.required && messageRef.dirty\">required error</small>\n                        </div>\n                    </div>\n                    <div class=\"row margin-top20\">\n                        <div class=\"col l6 push-l6 s12 right-align\">\n                            <button [disabled]=\"formRef.invalid\" type=\"submit\" mat-button class=\"btn btn-primary\">Send</button>\n                        </div>\n                    </div>\n                </form>\n                <!-- End Form -->\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/button/button.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/button/button.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Button <span class=\"font-light\">Element</span></h4>\n        <p>Material Button, Indicator & Icons</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Button</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Button -->\n                <h6>Normal Buttons</h6>\n                <button mat-button>Flat button</button>\n                <button mat-fab><mat-icon>check</mat-icon></button>\n                <button mat-mini-fab><mat-icon>check</mat-icon></button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button&#x3E;Flat button&#x3C;/button&#x3E;\n&#x3C;button mat-fab&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/button&#x3E;\n&#x3C;button mat-mini-fab&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n\n                <h6 class=\"margin-top20\">Link Buttons</h6>\n                <a mat-button routerLink=\".\">Flat button</a>\n                <a mat-fab routerLink=\".\"><mat-icon>check</mat-icon></a>\n                <a mat-mini-fab routerLink=\".\"><mat-icon>check</mat-icon></a>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;a mat-button routerLink=&#x22;.&#x22;&#x3E;Flat button&#x3C;/a&#x3E;\n&#x3C;a mat-fab routerLink=&#x22;.&#x22;&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/a&#x3E;\n&#x3C;a mat-mini-fab routerLink=&#x22;.&#x22;&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/a&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Default</h6>\n                <button mat-button class=\"btn btn-default\">Button Default</button>\n                <button mat-button class=\"btn btn-primary\">Button Primary</button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button class=&#x22;btn btn-default&#x22;&#x3E;Button Default&#x3C;/button&#x3E;\n&#x3C;button mat-button class=&#x22;btn btn-primary&#x22;&#x3E;Button Primary&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Small</h6>\n                <button mat-button class=\"btn btn-default btn-sm\">Button Default</button>\n                <button mat-button class=\"btn btn-primary btn-sm\">Button Primary</button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button class=&#x22;btn btn-default btn-sm&#x22;&#x3E;Button Default&#x3C;/button&#x3E;\n&#x3C;button mat-button class=&#x22;btn btn-primary btn-sm&#x22;&#x3E;Button Primary&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Large</h6>\n                <button mat-button class=\"btn btn-default btn-lg\">Button Default</button>\n                <button mat-button class=\"btn btn-primary btn-lg\">Button Primary</button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button class=&#x22;btn btn-default btn-lg&#x22;&#x3E;Button Default&#x3C;/button&#x3E;\n&#x3C;button mat-button class=&#x22;btn btn-primary btn-lg&#x22;&#x3E;Button Primary&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Toggle</h6>\n                <mat-button-toggle>Toggle me!</mat-button-toggle>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-button-toggle&#x3E;Toggle me!&#x3C;/mat-button-toggle&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Chips</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Chip -->\n                <mat-chip-list>\n                    <mat-chip>One fish</mat-chip>\n                    <mat-chip>Two fish</mat-chip>\n                    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n                </mat-chip-list>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-chip-list&#x3E;\n    &#x3C;mat-chip&#x3E;One fish&#x3C;/mat-chip&#x3E;\n    &#x3C;mat-chip&#x3E;Two fish&#x3C;/mat-chip&#x3E;\n    &#x3C;mat-chip color=&#x22;primary&#x22; selected=&#x22;true&#x22;&#x3E;Primary fish&#x3C;/mat-chip&#x3E;\n&#x3C;/mat-chip-list&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <div class=\"right\">\n                    <a href=\"https://material.io/icons/\" mat-button class=\"btn btn-sm btn-default\" target=\"_BLANK\">More Icons</a>\n                </div>\n                <h6>Icons</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Icons -->\n                <ul class=\"list-icon\">\n                    <li><mat-icon>&#xE84D;</mat-icon></li>\n                    <li><mat-icon>&#xE84E;</mat-icon></li>\n                    <li><mat-icon>&#xE914;</mat-icon></li>\n                    <li><mat-icon>&#xE84F;</mat-icon></li>\n                    <li><mat-icon>&#xE850;</mat-icon></li>\n                    <li><mat-icon>&#xE851;</mat-icon></li>\n                    <li><mat-icon>&#xE854;</mat-icon></li>\n                    <li><mat-icon>&#xE853;</mat-icon></li>\n                    <li><mat-icon>&#xE854;</mat-icon></li>\n                    <li><mat-icon>&#xE855;</mat-icon></li>\n                    <li><mat-icon>&#xE856;</mat-icon></li>\n                    <li><mat-icon>&#xE857;</mat-icon></li>\n                    <li><mat-icon>&#xE858;</mat-icon></li>\n                    <li><mat-icon>&#xE90B;</mat-icon></li>\n                </ul>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-icon&#x3E;&#x26;#xE856;&#x3C;/mat-icon&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Progress spinner</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Progress spinner -->\n                <mat-spinner></mat-spinner>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-spinner&#x3E;&#x3C;/mat-spinner&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Progress Bar</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Progress Bar -->\n                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-progress-bar mode=&#x22;indeterminate&#x22;&#x3E;&#x3C;/mat-progress-bar&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <div class=\"right\">\n                    <a href=\"https://material.angular.io/components/snack-bar/overview\" mat-button class=\"btn btn-sm btn-default\" target=\"_BLANK\">Read Doc</a>\n                </div>\n                <h6>Snackbar</h6>\n            </div>\n            <div class=\"body-panel\">\n              \n                <!-- Snackar -->\n                <mat-form-field>\n                    <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n                </mat-form-field>\n\n                <button mat-button class=\"btn btn-primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/dashboard-element/dashboard-element.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/dashboard-element/dashboard-element.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <!-- Breadcumbs -->\n    <breadcumb></breadcumb>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/form-control/form-control.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/form-control/form-control.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Input <span class=\"font-light\">Element</span></h4>\n        <p>Material form controls</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Basic Input</h6>\n            </div>\n            <div class=\"body-panel\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n                </mat-form-field>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-form-field&#x3E;\n  &#x3C;input matInput placeholder=&#x22;Favorite food&#x22; value=&#x22;Sushi&#x22;&#x3E;\n&#x3C;/mat-form-field&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Checkbox</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Checkbox -->\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-checkbox&#x3E;Check me!&#x3C;/mat-checkbox\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Slider</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Slider -->\n                <mat-slider></mat-slider>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-slider&#x3E;&#x3C;/mat-slider&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Radio button</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Input Radio -->\n                <mat-radio-group>\n                    <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n                    <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n                </mat-radio-group>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-radio-group&#x3E;\n  &#x3C;mat-radio-button value=&#x22;1&#x22;&#x3E;Option 1&#x3C;/mat-radio-button&#x3E;\n  &#x3C;mat-radio-button value=&#x22;2&#x22;&#x3E;Option 2&#x3C;/mat-radio-button&#x3E;\n&#x3C;/mat-radio-group&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Select -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <div class=\"right\">\n                    <a href=\"https://material.angular.io/components/select/overview\" mat-button class=\"btn btn-default btn-sm\" target=\"_BLANK\">Read Doc</a>\n                </div>\n                <h6>Select</h6>\n            </div>\n            <div class=\"body-panel\">\n                <mat-select placeholder=\"Favorite food\">\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                        {{ food.viewValue }}\n                    </mat-option>\n                </mat-select>\n            </div>\n        </div>\n\n        <!-- Start Slide Toggle -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Slide Toggle</h6>\n            </div>\n            <div class=\"body-panel\">\n                <mat-slide-toggle>Slide me!</mat-slide-toggle>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-slide-toggle&#x3E;Slide me!&#x3C;/mat-slide-toggle&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/grid/grid.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/grid/grid.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Grid <span class=\"font-light\">Columns</span></h4>\n        <p>Material css</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Pane -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Grid CSS</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p class=\"margin-bottom0\">\n                    To add a container just put your content inside a &lt;div&gt; tag with a <strong>container-page</strong> class. Here's an example of how your page might be set up.\n                </p>\n            </div>\n            <div class=\"code\">\n<pre>\n&lt;div class=&quot;container-page&quot;&gt;\n    &lt;!-- Page Content goes here --&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>12 Columns</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p>\n                    Our standard grid has 12 columns. No matter the size of the browser, each of these columns will always have an equal width.\n                </p>\n                <div class=\"row\">\n                    <div class=\"col s1\">1</div>\n                    <div class=\"col s1\">2</div>\n                    <div class=\"col s1\">3</div>\n                    <div class=\"col s1\">4</div>\n                    <div class=\"col s1\">5</div>\n                    <div class=\"col s1\">6</div>\n                    <div class=\"col s1\">7</div>\n                    <div class=\"col s1\">8</div>\n                    <div class=\"col s1\">9</div>\n                    <div class=\"col s1\">10</div>\n                    <div class=\"col s1\">11</div>\n                    <div class=\"col s1\">12</div>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s1&quot;&gt;1&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;2&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;3&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;4&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;5&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;6&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;7&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;8&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;9&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;10&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;11&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;12&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Columns live inside Rows</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"row\">\n                    <div class=\"col s12\">This div is 12-columns wide on all screen sizes</div>\n                    <div class=\"col s6\">6-columns (one-half)</div>\n                    <div class=\"col s6\">6-columns (one-half)</div>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s12&quot;&gt;This div is 12-columns wide on all screen sizes&lt;/div&gt;\n    &lt;div class=&quot;col s6&quot;&gt;6-columns (one-half)&lt;/div&gt;\n    &lt;div class=&quot;col s6&quot;&gt;6-columns (one-half)&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Offsets</h6>\n            </div>\n            <div class=\"body-panel\">\n                 <div class=\"row\">\n                    <div class=\"col s12\"><span class=\"flow-text\">This div is 12-columns wide on all screen sizes</span></div>\n                    <div class=\"col s6 offset-s6\"><span class=\"flow-text\">6-columns (offset-by-6)</span></div>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n &lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s12&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;This div is 12-columns wide on all screen sizes&lt;/span&gt;&lt;/div&gt;\n    &lt;div class=&quot;col s6 offset-s6&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;6-columns (offset-by-6)&lt;/span&gt;&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Push and Pull</h6>\n            </div>\n            <div class=\"body-panel\">\n                  <div class=\"row\">\n                    <div class=\"col s7 push-s5\"><span class=\"flow-text\">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>\n                    <div class=\"col s5 pull-s7\"><span class=\"flow-text\">5-columns wide pulled to the left by 7-columns.</span></div>\n                  </div>\n            </div>\n            <div class=\"code\">\n<pre>\n &lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s7 push-s5&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;This div is 7-columns wide on pushed to the right by 5-columns.&lt;/span&gt;&lt;/div&gt;\n    &lt;div class=&quot;col s5 pull-s7&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;5-columns wide pulled to the left by 7-columns.&lt;/span&gt;&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Screen Sizes</h6>\n            </div>\n            <div class=\"body-panel\">\n                  <table class=\"striped\">\n                      <tr>\n                          <th></th>\n                          <th>Mobile Devices <= 600px</th>\n                          <th>Tablet Devices > 600px</th>\n                          <th>Desktop Devices > 992px</th>\n                          <th>Large Desktop Devices > 1200px</th>\n                      </tr>\n                      <tr>\n                          <td>Class Prefix</td>\n                          <td>.s</td>\n                          <td>.m</td>\n                          <td>.l</td>\n                          <td>.xl</td>\n                      </tr>\n                      <tr>\n                          <td>Container Width</td>\n                          <td>90%</td>\n                          <td>85%</td>\n                          <td>70%</td>\n                          <td>70%</td>\n                      </tr>\n                      <tr>\n                          <td>Number of Columns</td>\n                          <td>12</td>\n                          <td>12</td>\n                          <td>12</td>\n                          <td>12</td>\n                      </tr>\n                  </table>\n            </div>\n        </div>\n        <!-- Start Panel -->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/helper/helper.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/helper/helper.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>CSS <span class=\"font-light\">Helper</span></h4>\n        <p>Angushop style helper</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Vertical Align</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"valign-wrapper height200\">\n                    <p class=\"margin-bottom0\">This should be vertically aligned</p>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;valign-wrapper&#x22;&#x3E;\n  &#x3C;h5&#x3E;This should be vertically aligned&#x3C;/h5&#x3E;\n&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Text Align</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p class=\"line-demo left-align\">This should be vertically aligned</p>\n                <p class=\"line-demo center-align\">This should be vertically aligned</p>\n                <p class=\"line-demo right-align\">This should be vertically aligned</p>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;left-align&#x22;&#x3E;This should be vertically aligned&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;center-align&#x22;&#x3E;This should be vertically aligned&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;right-align&#x22;&#x3E;This should be vertically aligned&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Quick Float</h6>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;left&#x22;&#x3E;...&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;right&#x22;&#x3E;...&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Quick Floar</h6>\n            </div>\n            <div class=\"body-panel\">\n                <table class=\"striped\">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th>Screen Range</th>\n                    </tr>\n                  </thead>\n                    <tbody>\n                    <tr>\n                      <td><strong>.hide</strong></td>\n                      <td>Hidden for all Devices</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-small-only</strong></td>\n                      <td>Hidden for Mobile Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-med-only</strong></td>\n                      <td>Hidden for Tablet Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-med-and-down</strong></td>\n                      <td>Hidden for Tablet and Below</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-med-and-up</strong></td>\n                      <td>Hidden for Tablet and Above</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-large-only</strong></td>\n                      <td>Hidden for Desktop Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-small</strong></td>\n                      <td>Show for Mobile Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-medium</strong></td>\n                      <td>Show for Tablet Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-large</strong></td>\n                      <td>Show for Desktop Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-medium-and-up</strong></td>\n                      <td>Show for Tablet and Above</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-medium-and-down</strong></td>\n                      <td>Show for Tablet and Below</td>\n                    </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;hide-on-small-only&#x22;&#x3E;&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Truncation</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"truncate\">\n                    Lorem ipsum dolor sit amet, eam vitae tantas sadipscing id, eam harum semper partiendo ea. Omnes tation ex mei. Nam deserunt inimicus ex. Purto reprimique est ex. Eirmod similique nam et, dictas recusabo duo cu, ea malorum voluptatum vel.\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;truncate&#x22;&#x3E;This is an extremely long title that will be truncated&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Margin Helper</h6>\n            </div>\n            <div class=\"body-panel\">\n                <table class=\"striped\">\n                    <tr>\n                        <td width=\"150\"><strong>Margin Top</strong></td>\n                        <td>\n                            .margin-top0<br />\n                            .margin-top10<br />\n                            .margin-top20<br />\n                            .margin-top30<br />\n                            .margin-top40<br />\n                            .margin-top50<br />\n                            .margin-top60<br />\n                            .margin-top70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Margin Bottom</strong></td>\n                        <td>\n                            .margin-bottom0<br />\n                            .margin-bottom10<br />\n                            .margin-bottom20<br />\n                            .margin-bottom30<br />\n                            .margin-bottom40<br />\n                            .margin-bottom50<br />\n                            .margin-bottom60<br />\n                            .margin-bottom70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Margin Left</strong></td>\n                        <td>\n                            .margin-left5<br />\n                            .margin-left10<br />\n                            .margin-left15<br />\n                            .margin-left20\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Margin Right</strong></td>\n                        <td>\n                            .margin-right5<br />\n                            .margin-right10<br />\n                            .margin-right15<br />\n                            .margin-right20\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;margin-top70&#x22;&#x3E;&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Padding Helper</h6>\n            </div>\n            <div class=\"body-panel\">\n                <table class=\"striped\">\n                    <tr>\n                        <td width=\"150\"><strong>Padding Top</strong></td>\n                        <td>\n                            .padding-top0<br />\n                            .padding-top10<br />\n                            .padding-top20<br />\n                            .padding-top30<br />\n                            .padding-top40<br />\n                            .padding-top50<br />\n                            .padding-top60<br />\n                            .padding-top70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Padding Bottom</strong></td>\n                        <td>\n                            .padding-bottom0<br />\n                            .padding-bottom10<br />\n                            .padding-bottom20<br />\n                            .padding-bottom30<br />\n                            .padding-bottom40<br />\n                            .padding-bottom50<br />\n                            .padding-bottom60<br />\n                            .padding-bottom70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Padding Left</strong></td>\n                        <td>\n                            .padding-left30<br />\n                            .padding-left40<br />\n                            .padding-left50\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Padding Right</strong></td>\n                        <td>\n                            .padding-right30<br />\n                            .padding-right40<br />\n                            .padding-right50\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;padding-top70&#x22;&#x3E;&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/layout/layout.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/layout/layout.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Layout</h4>\n        <p>Material layout</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Tab</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Start Tab -->\n                <mat-tab-group>\n                    <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n                    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n                </mat-tab-group>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-tab-group&#x3E;\n  &#x3C;mat-tab label=&#x22;Tab 1&#x22;&#x3E;Content 1&#x3C;/mat-tab&#x3E;\n  &#x3C;mat-tab label=&#x22;Tab 2&#x22;&#x3E;Content 2&#x3C;/mat-tab&#x3E;\n&#x3C;/mat-tab-group&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>List</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Start Tab -->\n                <mat-list>\n                    <mat-list-item>Item 1</mat-list-item>\n                    <mat-list-item>Item 2</mat-list-item>\n                    <mat-list-item>Item 3</mat-list-item>\n                </mat-list>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-list&#x3E;\n    &#x3C;mat-list-item&#x3E;Item 1&#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;Item 2&#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;Item 3&#x3C;/mat-list-item&#x3E;\n&#x3C;mat-list&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Start Tab -->\n                <mat-list>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon>&#xE55F;</mat-icon>\n                        <h6 mat-line>Office</h6>\n                        <p mat-line>Jl.Kampung Nagrogjaya RT 12/003</p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon>&#xE551;</mat-icon>\n                        <h6 mat-line>Phone</h6>\n                        <p mat-line>+6289664755286</p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon>&#xE0BE;</mat-icon>\n                        <h6 mat-line>Phone</h6>\n                        <p mat-line>adamnurdin01@gmail.com</p>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-list&#x3E;\n    &#x3C;mat-list-item&#x3E;\n        &#x3C;mat-icon mat-list-icon&#x3E;&#x26;#xE55F;&#x3C;/mat-icon&#x3E;\n        &#x3C;h6 mat-line&#x3E;Office&#x3C;/h6&#x3E;\n        &#x3C;p mat-line&#x3E;Jl.Kampung Nagrogjaya RT 12/003&#x3C;/p&#x3E;\n    &#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;\n        &#x3C;mat-icon mat-list-icon&#x3E;&#x26;#xE551;&#x3C;/mat-icon&#x3E;\n        &#x3C;h6 mat-line&#x3E;Phone&#x3C;/h6&#x3E;\n        &#x3C;p mat-line&#x3E;+6289664755286&#x3C;/p&#x3E;\n    &#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;\n        &#x3C;mat-icon mat-list-icon&#x3E;&#x26;#xE0BE;&#x3C;/mat-icon&#x3E;\n        &#x3C;h6 mat-line&#x3E;Phone&#x3C;/h6&#x3E;\n        &#x3C;p mat-line&#x3E;adamnurdin01@gmail.com&#x3C;/p&#x3E;\n    &#x3C;/mat-list-item&#x3E;\n&#x3C;/mat-list&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Breadcumb</h6>\n            </div>\n            <div class=\"body-panel\">\n                <breadcumb></breadcumb>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;breadcumb&#x3E;&#x3C;/breadcumb&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Rating</h6>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;rating [value]=&#x22;3&#x22;&#x3E;&#x3C;/rating&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Alert Box</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"alert alert-success margin-bottom15\">\n                    <strong>Success!</strong> Indicates a successful or positive action.\n                </div>\n\n                <div class=\"alert alert-info margin-bottom15\">\n                    <strong>Info!</strong> Indicates a neutral informative change or action.\n                </div>\n\n                <div class=\"alert alert-warning margin-bottom15\">\n                    <strong>Warning!</strong> Indicates a warning that might need attention.\n                </div>\n\n                <div class=\"alert alert-danger\">\n                    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;alert alert-success&#x22;&#x3E;\n    &#x3C;strong&#x3E;Success!&#x3C;/strong&#x3E; Indicates a successful or positive action.\n&#x3C;/div&#x3E;\n\n&#x3C;div class=&#x22;alert alert-info&#x22;&#x3E;\n    &#x3C;strong&#x3E;Info!&#x3C;/strong&#x3E; Indicates a neutral informative change or action.\n&#x3C;/div&#x3E;\n\n&#x3C;div class=&#x22;alert alert-warning&#x22;&#x3E;\n    &#x3C;strong&#x3E;Warning!&#x3C;/strong&#x3E; Indicates a warning that might need attention.\n&#x3C;/div&#x3E;\n\n&#x3C;div class=&#x22;alert alert-danger&#x22;&#x3E;\n    &#x3C;strong&#x3E;Danger!&#x3C;/strong&#x3E; Indicates a dangerous or potentially negative action.\n&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/product/product.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/product/product.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\"></span></h4>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page padding-bottom40\">\n        <div class=\"wrap-product\">\n            <!-- App Product -->\n            <app-product\n                [setlimit]=\"4\"\n                [paginate]=\"false\"\n                (detail)=\"detailProduct($event)\"\n            ></app-product>\n        </div>\n        <blockquote class=\"margin-top50\">\n        </blockquote>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/element/typhography/typhography.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/element/typhography/typhography.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Typography</h4>\n        <p>Material Font</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Slide Toggle -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Typography</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"row\">\n                    <div class=\"col m4\">\n                        <p>\n                            We bundle our framework with the latest iteration of Roboto Google has released. It comes with 5 different font weights you can use: 100, 300, 400, 500, 600.\n                        </p>\n                        <p>\n                            Here is an image from Google's Roboto Specimen document displaying the different font weights.\n                        </p>\n                    </div>\n                    <div class=\"col m8\">\n                        <img src=\"https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7SW9CUzR4MnRpOTg/style-typography-roboto1.png\" class=\"responsive-img\" alt=\"\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Heading</h6>\n            </div>\n            <div class=\"body-panel\">\n                <h1>Heading h1</h1>\n                <h2>Heading h2</h2>\n                <h3>Heading h3</h3>\n                <h4>Heading h4</h4>\n                <h5>Heading h5</h5>\n                <h6 class=\"margin-bottom0\">Heading h6</h6>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;h1&#x3E;Heading h1&#x3C;/h1&#x3E;\n&#x3C;h2&#x3E;Heading h2&#x3C;/h2&#x3E;\n&#x3C;h3&#x3E;Heading h3&#x3C;/h3&#x3E;\n&#x3C;h4&#x3E;Heading h4&#x3C;/h4&#x3E;\n&#x3C;h5&#x3E;Heading h5&#x3C;/h5&#x3E;\n&#x3C;h6&#x3E;Heading h6&#x3C;/h6&#x3E;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Blockquote</h6>\n            </div>\n            <div class=\"body-panel\">\n                <blockquote>\n                  This is an example quotation that uses the blockquote tag.\n                </blockquote>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;blockquote&#x3E;\n    This is an example quotation that uses the blockquote tag.\n&#x3C;/blockquote&#x3E;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Flow Text</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p class=\"flow-text\">\n                    One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.\n                </p>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;p class=&#x22;flow-text&#x22;&#x3E;\n    One common flaw we&#x27;ve seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we&#x27;ve created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.\n&#x3C;/p&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home1/home1.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home1/home1.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Banner -->\n<div class=\"banner\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col l7 m12 content\">\n                <h5 class=\"sub-title\">We offer you the best</h5>\n                <h3 class=\"title\">\n                  HEALTH & FITNESS MEMBERSHIP CLUB\n                </h3>\n                <a mat-button routerLink=\"/shop\" class=\"btn btn-default\">Shop Now</a>\n                <a mat-button class=\"btn btn-primary\">Most Popular</a>\n            </div>\n            <div class=\"col l5 m12\">\n                <div class=\"wrap-demo\">\n                    <img src=\"assets/images/herbal-supplements.png\" class=\"responsive-img\" alt=\"\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Banner -->\n<!-- Start feature -->\n<div class=\"wrap-feature\">\n    <div class=\"container\">\n        <div class=\"row\" myMatchHeight=\"col\">\n            <div class=\"col l4 s12\">\n                <div class=\"item-feature\">\n                    <mat-icon class=\"font-light\">&#xE8CC;</mat-icon>\n                    <mat-icon class=\"bg\">&#xE8CC;</mat-icon>\n                    <h5 class=\"title\">Great Market</h5>\n                    <p>\n                        Ea vis vide choro, augue nonumy pericula cu vim, ei mea amet eros reque.\n                    </p>\n                </div>\n            </div>\n            <div class=\"col l4 s12\">\n                <div class=\"item-feature\">\n                    <mat-icon class=\"font-light\">&#xE163;</mat-icon>\n                    <mat-icon class=\"bg\">&#xE163;</mat-icon>\n                    <h5 class=\"title\">Free Delivery</h5>\n                    <p>\n                        Ea vis vide choro, augue nonumy pericula cu vim, ei mea amet eros reque.\n                    </p>\n                </div>\n            </div>\n            <div class=\"col l4 s12\">\n                <div class=\"item-feature\">\n                    <mat-icon class=\"font-light\">&#xE8D1;</mat-icon>\n                    <mat-icon class=\"bg\">&#xE8D1;</mat-icon>\n                    <h5 class=\"title\">Big Store</h5>\n                    <p>\n                        Ea vis vide choro, augue nonumy pericula cu vim, ei mea amet eros reque.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End feature -->\n<!-- Head Section -->\n<div class=\"head-section\">\n    <div class=\"container\">\n        <h4>LATEST PRODUCTS</h4>\n        <p>Delectus aliquando incorrupte ne sea qui cu iudicabit.</p>\n        <button mat-button routerLink=\"/shop\" class=\"btn btn-default margin-bottom5\">Shop Now</button>\n    </div>\n</div>\n<!-- End Section -->\n<!-- Start Product -->\n<div class=\"product-home\">\n    <app-product\n        [setlimit]=\"4\"\n        [paginate]=\"false\"\n        (detail)=\"detailProduct($event)\"\n    ></app-product>\n</div>\n<!-- End Product -->\n<!-- Head Section -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lib/component/breadcumb/breadcumb.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lib/component/breadcumb/breadcumb.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"location\" #location>\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngFor=\"let segment of segments; let i=index; let l=last;\">\n        <a *ngIf=\"i != segementLength && i == 0\" routerLink=\".\">{{segment.path}}</a>\n        <a *ngIf=\"i != segementLength && i != 0 && i != l\" [routerLink]=\"segment.path\">{{segment.path}}</a>\n        <span *ngIf=\"l\">{{segment.path}}</span>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lib/component/grid-logo/grid-logo.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lib/component/grid-logo/grid-logo.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-clear\" libHeight=\"item-vendor\">\n    <div *ngFor=\"let logo of logos | slice:0:limit\" [@fade] class=\"col l3 m6 s12\">\n        <div class=\"item-vendor\">\n            <img [src]=\"logo.image\" [alt]=\"logo.title\"/>\n            <a mat-button class=\"link-full\" [href]=\"logo.link\" target=\"_blank\"></a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lib/component/lightbox/lightbox.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lib/component/lightbox/lightbox.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@focusPanel]=\"state\" class=\"wrap-lightbox\">\n    <button mat-mini-fab class=\"close\" (click)=\"closeZoom()\"><mat-icon>&#xE5CD;</mat-icon></button>\n    <div class=\"content valign-wrapper\" #contentwrap>\n        <button mat-mini-fab class=\"nav left\" (click)=\"prev()\" [disabled]=\"index == 0\"><mat-icon>&#xE314;</mat-icon></button>\n        <button mat-mini-fab class=\"nav right\" (click)=\"next()\" [disabled]=\"index == (arrayProduct.length - 1)\"><mat-icon>&#xE315;</mat-icon></button>\n        <div *ngIf=\"loadingState\" class=\"spinner\"><mat-spinner diameter=\"50\" strokeWidth=\"5\"></mat-spinner></div>\n        <div *ngIf=\"product\" class=\"wrap-img\">\n            <img [src]=\"product.image\" [alt]=\"product.productName\" />\n        </div>\n    </div>    \n    <div *ngIf=\"product\" class=\"description\">\n        <div class=\"content\">\n            <h6 class=\"title\">{{product.productName}}</h6>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lib/component/product/product.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lib/component/product/product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Product -->\n<div class=\"valign-wrapper\" *ngIf=\"loadingState\">\n    <mat-spinner diameter=\"50\" strokeWidth=\"5\"></mat-spinner>\n</div>\n\n<!-- Start Row Product -->\n<div class=\"row row-clear row-product\"\n    *ngIf=\"productState\"\n    libHeight=\"item-product\"\n    (mouseleave)=\"selectProduct = null\"\n    [class.blur]=\"blurproduct\" #row>\n\n    <div *ngFor=\"let product of products |\n        productfilter: filter |\n        paginate: {\n            itemsPerPage: limit,\n            currentPage: currentPage\n        };\n        let i=index;\"\n        [@fade]\n        class=\"col {{column}}\"\n        [id]=\"product.id\"\n        (mouseenter)=\"onHover(product)\">\n\n        <div class=\"item-product\">\n            <a *ngIf=\"showBtnClose\" mat-mini-fab class=\"close\" (click)=\"selectClose(product)\">\n                <mat-icon>&#xE5CD;</mat-icon>\n            </a>\n            <img [src]=\"product.image\" [alt]=\"product.productName\"/>\n            <div class=\"content\">\n                <h6 class=\"title truncate\">{{product.productName}}</h6>\n                <p>{{product.category}}</p>\n                <p class=\"reg-price\">Regular: {{product.currency}} {{product.price}}</p>\n                <strong class=\"price\">Member Price {{product.currency}} {{product.membershipPrice}}</strong>\n                <div [@visibility]=\"selectProduct == product ? 'shown' : 'hidden'\" class=\"overlay valign-wrapper\">\n                    <ul>\n                        <li><a mat-mini-fab (click)=\"viewProduct(product.id)\"><mat-icon>&#xE8FF;</mat-icon></a></li>\n                        <li><a mat-mini-fab [routerLink]=\"'/shop/p/' + product.slug\"><mat-icon>&#xE157;</mat-icon></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- Empty Product -->\n    <div [@fade] *ngIf=\"(products | productfilter:filter).length === 0\" class=\"empty-product\">\n        <img src=\"http://via.placeholder.com/246x339\" width=\"100\" alt=\"\"/>\n        <h5 class=\"margin-bottom0 margin-top20\">Sorry... no product founded</h5>\n    </div>\n</div>\n<!-- End Row Product -->\n\n<!-- Start Wrap Pagintaion -->\n<div *ngIf=\"paginate\">\n    <div *ngIf=\"(products | productfilter:filter).length !== 0\" class=\"wrap-pagination\">\n        <pagination-controls\n            (pageChange)=\"currentPage = $event; onPageChange(currentPage)\"\n            class=\"pagination-product\">\n        </pagination-controls>\n    </div>\n</div>\n<!-- Start Lightbox -->\n<lightbox\n    [isShow]=\"togglezoom\"\n    [selectProduct]=\"getId\"\n    [arrayProduct]=\"productUpdated\"\n    (close)=\"closeZoom()\">\n</lightbox>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fullheight class=\"wrap-notfound valign-wrapper\">\n    <div class=\"content\">\n        <h1>\n            404\n            <small>Page not found</small>\n        </h1>\n        <p>\n            Lorem ipsum dolor sit amet sumo eleifend torquatos.\n        </p>\n        <a mat-button class=\"btn btn-default\" routerLink=\"/shop/product1\">Back to shop</a>  \n        <a mat-button class=\"btn btn-primary\" routerLink=\"/home\">Go to Home</a>  \n    </div>  \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/cart/cart.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/cart/cart.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Shopping <span class=\"font-light\">Cart</span></h4>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n\n     <ul class=\"row list-justify\">\n            <li class=\"col s4 active\">\n                Cart\n            </li>\n            <li class=\"col s4 disabled\">\n                Checkout\n            </li>\n            <li class=\"col s4 disabled\">\n                Done\n            </li>\n        </ul>\n\n        <div class=\"row margin-top30\">\n            <div class=\"col l8 s12\">\n\n                <!-- Start Table Cart -->\n                <table class=\"table-cart\">\n                    <thead>\n                        <tr>\n                            <th>Added Items</th>\n                            <th>Quantity</th>\n                            <th>Price</th>\n                            <th>Remove</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngIf=\"productsOrder.length == 0\">\n                            <td class=\"empty\" colspan=\"4\">\n                                <h6 class=\"content\">No Product</h6>\n                            </td>\n                        </tr>\n                        <tr *ngFor=\"let product of productsOrder\">\n                            <td class=\"item\">\n                                <div class=\"wrap-img\">\n                                    <img [src]=\"product.image\" alt=\"\"/>\n                                </div>\n                                <h6 class=\"title\"><a [routerLink]=\"['/shop/p/' + product.slug]\" >{{product.productName}}</a></h6>\n                                <p>\n                                  SKU: {{product.sku}}\n                                </p>\n                            </td>\n                            <td>\n                                <input\n                                    type=\"number\"\n                                    class=\"input-counter\"\n                                    [(ngModel)]=\"product.quantity\"\n                                    [value]=\"product.quantity\"\n                                    (change)=\"onChage(product)\"/>\n                            </td>\n                            <td>{{product.quantity * product.price | currency:'USD'}}</td>\n                            <td>\n                                <button mat-mini-fab (click)=\"deleteProduct(product.id)\"><mat-icon>&#xE5CD;</mat-icon></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- End Table Cart -->\n            </div>\n            <div class=\"col l4 s12\">\n                <div class=\"margin-top20 margin-bot20\">\n                    <table class=\"count\">\n                        <tr>\n                            <td>Sub Total</td>\n                            <td class=\"right-align\">{{subTotal | currency:'USD'}}</td>\n                        </tr>\n                        <tr>\n                            <td>Total Price</td>\n                            <td class=\"right-align\"><strong>{{total  | currency:'USD'}}</strong></td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"margin-top20\">\n                     <button [disabled]=\"productsOrder.length == 0\" mat-button routerLink=\"/shop/shipping\" class=\"btn btn-primary btn-block\">Proceed Checkout</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/compare/compare.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/compare/compare.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Compare <span class=\"font-light\">Product</span></h4>\n        <p>Angushop Compare Product</p>\n    </div>\n</div>\n\n<!-- Loading -->\n<div class=\"valign-wrapper\" *ngIf=\"loadingState\" #loading>\n    <mat-spinner></mat-spinner>\n</div>\n\n<div class=\"container-page compare-product\" *ngIf=\"productState\">\n    <div class=\"box-page\">\n\n        <!-- Start Table -->\n        <div class=\"wrap-table\" #wraptable>\n            <table class=\"table-compare\" #table>\n                <tr>\n                    <td class=\"info\" rowspan=\"2\">\n                        <h3 class=\"counter\">{{productView}} <small>of</small> {{products.length}}</h3>\n                        <p>Products to compare</p>\n                        <button mat-mini-fab [disabled]=\"disablePrev\" (click)=\"prevView()\">\n                            <mat-icon>&#xE314;</mat-icon>\n                        </button>\n                        <button mat-mini-fab [disabled]=\"disableNext\" (click)=\"nextView()\">\n                            <mat-icon>&#xE315;</mat-icon>\n                        </button>\n                    </td>\n                    <td *ngIf=\"products.length == 0\" rowspan=\"7\" class=\"empty\">\n                        <img src=\"http://via.placeholder.com/246x339\" width=\"100\" alt=\"\"/>\n                        <h5 class=\"title\">Sorry... no product founded</h5>\n                    </td>\n                    <td class=\"wrap-img\" *ngFor=\"let product of products | slice:startSlice:endSlice\">\n                        <a mat-mini-fab class=\"close\" (click)=\"onSelectRemove(product)\">\n                            <mat-icon>&#xE5CD;</mat-icon>\n                        </a>\n                        <img [src]=\"product.image\" [alt]=\"product.productName\" />\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"padding-left:0;padding-right:0;\" *ngFor=\"let product of products | slice:startSlice:endSlice\">\n                        <h6 class=\"title truncate\"><a [routerLink]=\"'/shop/p/' + product.slug\">{{product.productName}}</a></h6>\n                        <strong class=\"light\">{{product.price  | currency:'USD':'$'}}</strong>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Width</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.width}} cm</td>\n                </tr>\n                <tr>\n                    <td>Height</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.height}} cm</td>\n                </tr>\n                <tr>\n                    <td>Weight</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.weight}} kg</td>\n                </tr>\n                <tr>\n                    <td>Sold</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.sold}}</td>\n                </tr>\n                <tr>\n                    <td>Stock</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.stock}}</td>\n                </tr>\n            </table>\n            <!-- End Table -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <!-- Breadcumbs -->\n    <breadcumb></breadcumb>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/detail-product/detail-product.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/detail-product/detail-product.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n  <div class=\"container\">\n    <h4>Product <span class=\"font-light\">Detail</span></h4>\n    <p>{{product?.productName}} Product Detail</p>\n  </div>\n</div>\n\n<!-- Loading -->\n<div class=\"valign-wrapper\" *ngIf=\"loadingState\">\n  <mat-spinner diameter=\"50\" strokeWidth=\"5\"></mat-spinner>\n</div>\n\n<div class=\"container-page\" *ngIf=\"productState\">\n  <div class=\"box-page\">\n    <h3 class=\"title\">{{product.productName}}</h3>\n\n    <div class=\"row\">\n      <div class=\"col l7 s12\">\n        <div class=\"wrap-image\">\n          <img [src]=\"productImage\" class=\"img-detail\" [alt]=\"product.productName\" />\n          <ul>\n            <li *ngFor=\"let image of product.gallery\" (click)=\"selectImage(image)\" [class.active]=\"selectedImage === image\">\n              <img [src]=\"image.thumbnail\" class=\"responsive-img\" alt=\"\" />\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col l5 s12\">\n        <div class=\"price\">\n          <div class=\"row\">\n            <div class=\"col m6 s12\">\n              <h4 class=\"value text-trans-orig\">Original Price: <span class=\"text-overline\">{{product.currency}} {{product.price}}</span></h4>\n              <h4 class=\"text-trans-mem\">Member Price : <span class=\"text-adj\">{{product.currency}} {{product.membershipPrice}}</span></h4>\n              <p>Availability: {{product.availability}}</p>\n              <p>\n                SKU: {{product.sku}}\n              </p>\n            </div>\n            <div class=\"col m6 s12\">\n            </div>\n          </div>\n        </div>\n        <button [disabled]=\"procustCount >= product.stock\" mat-button class=\"btn btn-primary\" (click)=\"addCart('products',productsOrder)\">\n          <mat-icon>&#xE8CC;</mat-icon>Add to cart({{procustCount}})\n        </button>\n\n\n        <h5 class=\"desc\">Description</h5>\n        <p class=\"margin-bottom10\">{{product.description}}</p>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container m-b\">\n  <hr class=\"margin-hr\" />\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2>{{product?.additionalTitle}}</h2>\n      <h6 class=\"add-subti\">{{product?.additionalSubtitle}}</h6>\n      <p>\n        {{product?.additionalDescription}}\n      </p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product3/product3.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product3/product3.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Listing</span></h4>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n\n        <!-- Start Product -->\n        <div class=\"wrap-product\">\n            <app-product\n                [filter]=\"{\n                    productName: search,\n                    category: category,\n                    color: color,\n                    price: price,\n                    size: sizes\n                }\"\n                [column]=\"'l3 s6'\"\n                [setlimit]=\"99\"\n                [paginate]=\"false\"\n                [currentPage]=\"currentPage\"\n                (pageChange)=\"onPageChange($event)\">\n            </app-product>\n        </div>\n        <!-- End Product -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/receipt/receipt.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/receipt/receipt.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Receipt <span class=\"font-light\">Order</span></h4>\n        <p>Angushop Receipt order info</p>\n    </div>\n</div>\n\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start List -->\n        <ul class=\"row list-justify\">\n            <li class=\"col s4\">\n                Cart\n            </li>\n            <li class=\"col s4\">\n                Delivery\n            </li>\n            <li class=\"col s4 active\">\n                Receipt\n            </li>\n        </ul>\n        <!-- End List -->\n\n        <div class=\"wrap-receipt\">\n            <div class=\"row\">\n                <div class=\"col l8 offset-l2 center-align\">\n                    <h4>Thank You For Your Order</h4>\n                    <p>\n                        Eripuit equidem recusabo nec et. Eum ex noluisse torquatos. Quod albucius rationibus eos te, mazim doming placerat cu duo, mea utinam suscipiantur ad. Et semper convenire qui.\n                    </p>\n                    <a mat-button class=\"btn btn-default\" routerLink=\"/shop/product1\">Back to shop</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/shipping/shipping.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/shipping/shipping.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/wishlist/wishlist.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/wishlist/wishlist.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Wish<span class=\"font-light\">List</span> Product</h4>\n        <p>Delectus aliquando incorrupte ne sea qui cu iudicabit.</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page padding-bottom20\">\n        <div class=\"wrap-product\">\n            <!-- App Product -->\n            <app-product \n                [filter]=\"{\n                    index: productWishlist\n                }\"\n                [showBtnClose]=\"true\"\n                [setlimit]=\"8\" \n                [paginate]=\"true\"\n                (onRemove)=\"onSelectRemove($event)\"\n            ></app-product>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/side/side.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/side/side.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Side -->\n<div class=\"side\">\n    <div class=\"wrap-brand\">\n        <a href=\"#\" class=\"brand\">\n            <img src=\"./assets/images/brand/logo.png\" alt=\"\">\n            <img class=\"mobile\" src=\"./assets/images/brand/logo-mobile.png\" alt=\"\">\n        </a>\n    </div>\n    <nav>\n        <div>\n            <ul>\n                <li>\n                    <a mat-button (click)=\"toggleBar()\" [class.active]=\"activebar\">\n                        <mat-icon>&#xE8FE;</mat-icon>\n                    </a>\n                </li>\n                <li>\n                    <a mat-button routerLink=\"/shop/cart\" routerLinkActive=\"active\">\n                        <span *ngIf=\"cartLength != 0\" class=\"badge\">{{cartLength}}</span>\n                        <mat-icon>&#xE8CC;</mat-icon>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n<!-- End Side -->\n<!-- Start Wrap Menu -->\n<div class=\"wrap-menu\">\n    <nav #navmenu>\n        <ul class=\"menu\">\n            <li *ngFor=\"let menu of menus\">\n                <a *ngIf=\"menu.children != null\" (click)=\"selectMenu(menu)\" [class.active]=\"menu == selectedMenu\">{{menu.label}}</a>\n                <a *ngIf=\"menu.children == null\" [routerLink]=\"menu.link\" routerLinkActive=\"active\">{{menu.label}}</a>\n                <ul class=\"drop-down\" [@slideUp] *ngIf=\"menu == selectedMenu\">\n                    <li *ngFor=\"let child of menu.children\">\n                        <a [routerLink]=\"child.link\" routerLinkActive=\"active\">{{child.label}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</div>\n<!-- End Wrap Menu -->\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let AppComponent = class AppComponent {
    constructor(router, meta, titleService) {
        this.router = router;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
    }
    ngOnInit() {
        document.getElementById("loader").style.display = 'none';
        this.router.events.subscribe(evt => {
            this.mainclass = false;
            window.scrollTo(0, 0);
        });
        this.meta.addTag({ name: 'keyword', content: '' });
        this.meta.addTag({ name: 'description', content: '' });
        this.meta.addTag({ name: 'robots', content: 'index, follow' });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _element_element_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./element/element.module */ "./src/app/element/element.module.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _lib_directive_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/directive/fullscreen.directive */ "./src/app/lib/directive/fullscreen.directive.ts");







// Dependencies


// Compoenent







// Routing MOdule

// Directive Height

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _side_side_component__WEBPACK_IMPORTED_MODULE_10__["SideComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
            _lib_directive_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__["FullscreenDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"],
            _product_product_module__WEBPACK_IMPORTED_MODULE_12__["ProductModule"],
            _element_element_module__WEBPACK_IMPORTED_MODULE_15__["ElementModule"],
            _contact_contact_module__WEBPACK_IMPORTED_MODULE_14__["contactModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.wrap-map {\n  position: relative;\n}\n.wrap-map:before {\n  content: \"\";\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\nagm-map {\n  position: relative;\n  z-index: 1;\n  height: 350px;\n}\nform {\n  padding: 5px 4px;\n}\n.panel {\n  border: solid 1px #efefef;\n  background: #fff;\n  padding: 25px 30px;\n  -ms-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  -o-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  border-radius: 4px;\n}\n.panel .title {\n  text-transform: none;\n}\n.panel ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: block;\n}\n.panel ul li {\n  display: block;\n  position: relative;\n  padding-left: 30px;\n  margin: 0 0 15px 0 !important;\n}\n.panel ul li h6 {\n  text-transform: none;\n  margin-bottom: 5px !important;\n}\n.panel ul li:last-child {\n  margin-bottom: 0;\n}\n.panel ul li mat-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  font-size: 18px;\n}\n.panel ul li p:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 586px) {\n  .side-contact {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy9jc3MzLW1peGlucy5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs2QkFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7K0RBQUE7QUNBQTs7NkJBQUE7QUFVQTs7NkJBQUE7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FETEE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBSHhCQTtFQUNJLGtCQUFBO0FHMkJKO0FIekJJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUcyQlI7QUh2QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FHMEJKO0FIckJBO0VBQ0ksZ0JBQUE7QUd3Qko7QUhyQkE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUNSRSx1REFBQTtFQUNDLHNEQUFBO0VBQ0csbURBQUE7RUFBQSxrQkFBQTtBRTBDVjtBSGhDSTtFQUNJLG9CQUFBO0FHa0NSO0FIL0JJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUdpQ1I7QUgvQlE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FHaUNaO0FIL0JZO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtBR2lDaEI7QUg5Qlk7RUFDSSxnQkFBQTtBR2dDaEI7QUg3Qlk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBRytCaEI7QUg1Qlk7RUFDSSxnQkFBQTtBRzhCaEI7QUh4QkE7RUFDSTtJQUNJLGdCQUFBO0VHMkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlJztcblxuLy8gR29vZ2xlIE1hcFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xuLndyYXAtbWFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxufVxuXG5hZ20tbWFwe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogMzUwcHg7XG59XG5cbi8vIEZvcm1cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cbmZvcm17XG4gICAgcGFkZGluZzogNXB4IDRweDtcbn1cblxuLnBhbmVse1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlZmVmZWY7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygwLCAxcHgsIDE1cHgsIDFweCwgcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjEwKSk7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg0cHgpO1xuXG4gICAgLnRpdGxle1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG5cbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICBsaXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGg2e1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0LWljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcDpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NTg2cHgpe1xuICAgIC5zaWRlLWNvbnRhY3R7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufSIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4vLy8vXG4vLy8gQGF1dGhvciBNYXR0aGlldSBBdXNzYWd1ZWxcbi8vLyBAZ3JvdXAgc2Fzcy1jc3MzLW1peGluc1xuLy8vL1xuXG5cbi8vLyBBZGRzIGEgYnJvd3NlciBwcmVmaXggdG8gdGhlIHByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkcHJvcGVydHkgUHJvcGVydHlcbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSBWYWx1ZVxuXG5AbWl4aW4gY3NzMy1wcmVmaXgoJHByb3BlcnR5LCAkdmFsdWUpIHtcbiAgLXdlYmtpdC0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgIC1raHRtbC0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgLW1vei0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgIC1tcy0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgICAtby0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgICAgICAjeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBHcmFkaWVudFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZDogJHN0YXJ0Q29sb3I7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgU2FmYXJpIDUuMSB0byA2LjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBPcGVyYSAxMS4xIHRvIDEyLjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIEZpcmVmb3ggMy42IHRvIDE1ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cbn1cblxuQG1peGluIGJsdXIoJGJsdXI6IDVweCl7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbXMtZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgZmlsdGVyOiBibHVyKCRibHVyKTtcbn1cblxuLy8vIEJhY2tncm91bmQgSG9yaXpvbnRhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuXG5AbWl4aW4gYmFja2dyb3VuZC1ob3Jpem9udGFsKCRzdGFydENvbG9yOiAjM0MzQzNDLCAkZW5kQ29sb3I6ICM5OTk5OTkpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhcnRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgkc3RhcnRDb2xvciksIHRvKCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgIC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGZpbHRlcjogICAgICAgICAgICBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvclN0cj0nI3skc3RhcnRDb2xvcn0nLCBlbmRDb2xvclN0cj0nI3skZW5kQ29sb3J9JywgZ3JhZGllbnRUeXBlPScxJyk7XG59XG5cblxuLy8vIEJhY2tncm91bmQgUmFkaWFsXG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge1BlcmNlbnRhZ2V9ICRzdGFydFBvcyBbMCVdIC0gU3RhcnQgcG9zaXRpb25cbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkZW5kUG9zIFsxMDAlXSAtIEVuZCBwb3NpdGlvblxuXG5AbWl4aW4gYmFja2dyb3VuZC1yYWRpYWwoJHN0YXJ0Q29sb3I6ICNGRkZGRkYsICRzdGFydFBvczogMCUsICRlbmRDb2xvcjogIzAwMDAwMCwgJGVuZFBvczoxMDAlKSB7XG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsICRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKCRzdGFydFBvcywkc3RhcnRDb2xvciksIGNvbG9yLXN0b3AoJGVuZFBvcywkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG59XG5cblxuLy8vIEJhY2tncm91bmQgU2l6ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFsxMDAlXSAtIFdpZHRoXG4vLy8gQHBhcmFtIHtTaXplfSAkd2lkdGggWyR3aWR0aF0gLSBIZWlnaHRcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXNpemUoJHdpZHRoOiAxMDAlLCAkaGVpZ2h0OiAkd2lkdGgpIHtcbiAgQGlmIHR5cGUtb2YoJHdpZHRoKSA9PSAnbnVtYmVyJyBhbmQgJGhlaWdodCAhPSBudWxsIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYmFja2dyb3VuZC1zaXplJywgJHdpZHRoICRoZWlnaHQpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYmFja2dyb3VuZC1zaXplJywgJHdpZHRoKTtcbiAgfVxufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIENvbG9yIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgWzEwMCVdIC0gQ29sb3Jcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuODVdIC0gT3BhY2l0eVxuXG5AbWl4aW4gYmFja2dyb3VuZC1vcGFjaXR5KCRjb2xvcjogIzAwMCwgJG9wYWNpdHk6IDAuODUpIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBCb3JkZXIgUmFkaXVzXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFs1cHhdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzOiA1cHgpIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm9yZGVyLXJhZGl1cycsICRyYWRpdXMpO1xufVxuXG5cbi8vLyBCb3JkZXIgUmFkaXVzIFNlcGFyYXRlXG4vLy8gQHBhcmFtIHtTaXplfSAkdG9wTGVmdFJhZGl1cyBbNXB4XSAtIFRvcCBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkdG9wUmlnaHRSYWRpdXMgWzVweF0gLSBUb3AgUmlnaHRcbi8vLyBAcGFyYW0ge1NpemV9ICRib3R0b21MZWZ0UmFkaXVzIFs1cHhdIC0gQm90dG9tIExlZnRcbi8vLyBAcGFyYW0ge1NpemV9ICRib3R0b21SaWdodFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBSaWdodFxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cy1zZXBhcmF0ZSgkdG9wTGVmdFJhZGl1czogNXB4LCAkdG9wUmlnaHRSYWRpdXM6IDVweCwgJGJvdHRvbUxlZnRSYWRpdXM6IDVweCwgJGJvdHRvbVJpZ2h0UmFkaXVzOiA1cHgpIHtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAkYm90dG9tTGVmdFJhZGl1cztcblxuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG59XG5cblxuLy8vIEJveFxuLy8vIEBwYXJhbSB7Kn0gJG9yaWVudCBbaG9yaXpvbnRhbF0gLSBPcmllbnRhdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHBhY2sgW2NlbnRlcl0gLSBQYWNrXG4vLy8gQHBhcmFtIHsqfSAkYWxpZ24gW2NlbnRlcl0gLSBBbGlnblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJveCgkb3JpZW50OiBob3Jpem9udGFsLCAkcGFjazogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IGJveDtcblxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LW9yaWVudCcsICRvcmllbnQpO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXBhY2snLCAkcGFjayk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtYWxpZ24nLCAkYWxpZ24pO1xufVxuXG5cbi8vLyBCb3ggUkdCQVxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJHIgWzYwXSAtIFJlZFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGcgWzNdIC0gR3JlZW5cbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRiIFsxMl0gLSBCbHVlXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjIzXSAtIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgWyMzQzNDM0NdIC0gQ29sb3JcblxuQG1peGluIGJveC1yZ2JhKCRyOiA2MCwgJGc6IDMsICRiOiAxMiwgJG9wYWNpdHk6IDAuMjMsICRjb2xvcjogIzNDM0MzQykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkciwgJGcsICRiLCAkb3BhY2l0eSk7XG4gICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjeyRjb2xvcn0nLGVuZENvbG9yc3RyPScjeyRjb2xvcn0nKTtcbiAgICAgICAgICAgIHpvb206ICAgMTtcbn1cblxuXG4vLy8gQm94IFNoYWRvd1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHggWzJweF0gLSBYXG4vLy8gQHBhcmFtIHtTaXplfSAkeSBbMnB4XSAtIFlcbi8vLyBAcGFyYW0ge1NpemV9ICRibHVyIFs1cHhdIC0gQmx1clxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbcmdiYSgwLDAsMCwuNCldIC0gQ29sb3Jcbi8vLyBAcGFyYW0ge0Jvb2xlYW59ICRpbnNldCAtIEluc2V0XG5cbkBtaXhpbiBib3gtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCksICRpbnNldDogXCJcIikge1xuICBAaWYgKCRpbnNldCAhPSBcIlwiKSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAkaW5zZXQgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAkeCAkeSAkYmx1ciAkY29sb3IpO1xuICB9XG59XG5cblxuLy8vIEJveCBTaXppbmdcbi8vLyBAcGFyYW0geyp9ICR0eXBlIFtib3JkZXItYm94XSAtIFR5cGVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3gtc2l6aW5nKCR0eXBlOiBib3JkZXItYm94KSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2l6aW5nJywgJHR5cGUpO1xufVxuXG5cbi8vLyBDb2x1bW5zXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkY291bnQgWzNdIC0gQ291bnRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnYXAgWzEwXSAtIEdhcFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGNvbHVtbnMoJGNvdW50OiAzLCAkZ2FwOiAxMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnY29sdW1uLWNvdW50JywgJGNvdW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1nYXAnLCAkZ2FwKTtcbn1cblxuXG4vLy8gRG91YmxlIEJvcmRlcnNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JPbmUgWyMzQzNDM0NdIC0gQ29sb3IgT25lXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVHdvIFsjOTk5OTk5XSAtIENvbG9yIFR3b1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbMF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG5cbkBtaXhpbiBkb3VibGUtYm9yZGVycygkY29sb3JPbmU6ICMzQzNDM0MsICRjb2xvclR3bzogIzk5OTk5OSwgJHJhZGl1czogMCkge1xuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JPbmU7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAwIDAgMCAxcHggJGNvbG9yVHdvKTtcblxuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCAkcmFkaXVzICk7XG59XG5cblxuLy8vIEZsZXhcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICR2YWx1ZSBbMV0gLSBWYWx1ZVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsZXgoJHZhbHVlOiAxKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtZmxleCcsICR2YWx1ZSk7XG59XG5cblxuLy8vIEZsaXBcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJHNjYWxlWCBbLTFdIC0gU2NhbGVYXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gZmxpcCgkc2NhbGVYOiAtMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgc2NhbGVYKCRzY2FsZVgpKTtcbiAgZmlsdGVyOiAgICAgICAgICAgIEZsaXBIO1xuICAtbXMtZmlsdGVyOiAgICAgICAgXCJGbGlwSFwiO1xufVxuXG5cbi8vLyBGb250IEZhY2Vcbi8vLyBAcGFyYW0ge0ZvbnR9ICRmb250RmFtaWx5IFtteUZvbnRdIC0gRm9udCBGYW1pbHlcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGVvdEZpbGVTcmMgWydteUZvbnQuZW90J10gLSBFb3QgRmlsZSBTb3VyY2Vcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHdvZmZGaWxlU3JjIFsnbXlGb250LndvZmYnXSAtIFdvZmYgRmlsZSBTb3VyY2Vcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHR0ZkZpbGVTcmMgWydteUZvbnQudHRmJ10gLSBUdGYgRmlsZSBTb3VyY2Vcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHN2Z0ZpbGVTcmMgWydteUZvbnQuc3ZnJ10gLSBTdmcgRmlsZSBTb3VyY2VcblxuQG1peGluIGZvbnQtZmFjZSgkZm9udEZhbWlseTogbXlGb250LCAkZW90RmlsZVNyYzogJ215Rm9udC5lb3QnLCAkd29mZkZpbGVTcmM6ICdteUZvbnQud29mZicsICR0dGZGaWxlU3JjOiAnbXlGb250LnR0ZicsICRzdmdGaWxlU3JjOiAnbXlGb250LnN2ZycsICRzdmdGb250SUQ6ICcjbXlGb250Jykge1xuICBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XG4gIHNyYzogdXJsKCRlb3RGaWxlU3JjKSAgZm9ybWF0KCdlb3QnKSxcbiAgICAgICB1cmwoJHdvZmZGaWxlU3JjKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoJHR0ZkZpbGVTcmMpICBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgdXJsKCRzdmdGaWxlU3JjICsgJHN2Z0ZvbnRJRCkgZm9ybWF0KCdzdmcnKTtcbn1cblxuXG4vLy8gT3BhY2l0eVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC41XSAtIE9wYWNpdHlcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5OiAwLjUpIHtcbiAgICAkb3BhY2l0eU11bHRpcGxpZWQ6ICgkb3BhY2l0eSAqIDEwMCk7XG5cbiAgICBmaWx0ZXI6ICAgICAgICAgYWxwaGEob3BhY2l0eT0kb3BhY2l0eU11bHRpcGxpZWQpO1xuICAgIC1tcy1maWx0ZXI6ICAgICBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PVwiICsgJG9wYWNpdHlNdWx0aXBsaWVkICsgXCIpXCI7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ29wYWNpdHknLCAkb3BhY2l0eSk7XG59XG5cblxuLy8vIE91dGxpbmUgUmFkaXVzXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFs1cHhdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3V0bGluZS1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvdXRsaW5lLXJhZGl1cycsICRyYWRpdXMpO1xufVxuXG5cbi8vLyBSZXNpemVcbi8vLyBAcGFyYW0geyp9ICRkaXJlY3RvaW4gW2JvdGhdIC0gRGlyZWN0aW9uXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gcmVzaXplKCRkaXJlY3Rpb246IGJvdGgpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3Jlc2l6ZScsICRkaXJlY3Rpb24pO1xufVxuXG5cbi8vLyBSb3RhdGVcbi8vL1xuLy8vIENTUyBNYXRyaXggUm90YXRpb24gQ2FsY3VsYXRvciBodHRwOi8vd3d3LmJvb2dkZXNpZ24uY29tL2V4YW1wbGVzL3RyYW5zZm9ybXMvbWF0cml4LWNhbGN1bGF0b3IuaHRtbFxuLy8vIEBwYXJhbSB7RG91YmxlfSAkZGVnIFswXSAtIERlZ3JlZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTExIFswXSAtIE0xMVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTEyIFswXSAtIE0xMlxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTIxIFswXSAtIE0yMVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTIyIFswXSAtIE0yMlxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJvdGF0ZSgkZGVnOiAwLCAkbTExOiAwLCAkbTEyOiAwLCAkbTIxOiAwLCAkbTIyOiAwKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCByb3RhdGUoJGRlZyArIGRlZykpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoXG4gICAgICAgTTExPSN7JG0xMX0sIE0xMj0jeyRtMTJ9LCBNMjE9I3skbTIxfSwgTTIyPSN7JG0yMn0sIHNpemluZ01ldGhvZD0nYXV0byBleHBhbmQnKTtcbiAgICB6b29tOiAxO1xufVxuXG5cbi8vLyBUZXh0IFNoYWRvd1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHggWzJweF0gLSBYXG4vLy8gQHBhcmFtIHtTaXplfSAkeSBbMnB4XSAtIFlcbi8vLyBAcGFyYW0ge1NpemV9ICRibHVyIFsycHhdIC0gQmx1clxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbcmdiYSgwLDAsMCwuNCldIC0gQ29sb3JcblxuQG1peGluIHRleHQtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCkpIHtcbiAgICB0ZXh0LXNoYWRvdzogJHggJHkgJGJsdXIgJGNvbG9yO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm1cbi8vLyBAcGFyYW0ge0xpc3R9ICRwYXJhbXMgLSBQYXJhbXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHBhcmFtcykge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgJHBhcmFtcyk7XG59XG5cblxuLy8vIFRyYW5zZm9ybS1PcmlnaW5cbi8vLyBAcGFyYW0ge0xpc3R9ICRwYXJhbXMgLSBQYXJhbXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1vcmlnaW4nLCAkcGFyYW1zKTtcbn1cblxuXG4vLyBUcmFuc2Zvcm0tU3R5bGVcbi8vLyBAcGFyYW0ge0xpc3R9ICRwYXJhbXMgLSBQYXJhbXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHN0eWxlOiBwcmVzZXJ2ZS0zZCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtLXN0eWxlJywgJHN0eWxlKTtcbn1cblxuLy8vIFRyYW5zaXRpb25cbi8vLyBAcGFyYW0ge0xpc3R9ICRwcm9wZXJ0aWVzIC0gUHJvcGVydGllc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnRpZXMuLi4pIHtcblxuICBAaWYgbGVuZ3RoKCRwcm9wZXJ0aWVzKSA+PSAxIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNpdGlvbicsICRwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNpdGlvbicsICBcImFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzXCIpO1xuICB9XG59XG5cblxuLy8vIFRyaXBsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUaHJlZSBbIzAwMDAwMF0gLSBDb2xvciBUaHJlZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbMF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGJvcmRlci1yYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmlwbGUtYm9yZGVycygkY29sb3JPbmU6ICMzQzNDM0MsICRjb2xvclR3bzogIzk5OTk5OSwgJGNvbG9yVGhyZWU6ICMwMDAwMDAsICRyYWRpdXM6IDApIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JPbmU7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyYWRpdXMpO1xuXG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCBcIjAgMCAwIDFweCAjeyRjb2xvclR3b30sIDAgMCAwIDJweCAjeyRjb2xvclRocmVlfVwiKTtcbn1cblxuXG4vLy8gS2V5ZnJhbWVzXG4vLy8gQHBhcmFtIHsqfSAkYW5pbWF0aW9uLW5hbWUgLSBBbmltYXRpb24gbmFtZVxuLy8vIEBjb250ZW50IFtBbmltYXRpb24gY3NzXVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLy8gQW5pbWF0aW9uXG4vLy8gQHBhcmFtIHsqfSAkc3RyIC0gbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGUgcGxheS1zdGF0ZSAoW2h0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl9hbmltYXRpb24uYXNwXShodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcCkpXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYW5pbWF0aW9uKCRzdHIpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2FuaW1hdGlvbicsICRzdHIpO1xufVxuIiwiLypcbkNvbG9yXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiRjb2xvci10aXRsZTogIzNmM2YzZjtcbiRjb2xvci1jb250ZW50OiAjOGY4ZjhmO1xuJGNvbG9yLWdyYXk6ICNlZmVmZWY7XG4kY29sb3ItYmctZ3JheTogI2ZhZmFmYTtcbiRjb2xvci1iZy1ncmF5MjogI2Y5ZjlmOTtcbiRjb2xvci1iZy1ncmF5MzogI2Y1ZjVmNTtcblxuLypcbkZvbnQgRmFtaWx5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufSIsIi8qXG5JbXBvcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTYXNzIENTUzMgTWl4aW5zISBUaGUgQ3Jvc3MtQnJvd3NlciBDU1MzIFNhc3MgTGlicmFyeVxuICBCeTogTWF0dGhpZXUgQXVzc2FndWVsLCBodHRwOi8vd3d3Lm15bmFtZWlzbWF0dGhpZXUuY29tLCBAbWF0dGhpZXVfdHdlZXRzXG5cbiAgTGlzdCBvZiBDU1MzIFNhc3MgTWl4aW5zIEZpbGUgdG8gYmUgQGltcG9ydGVkIGFuZCBAaW5jbHVkZWQgYXMgeW91IG5lZWRcblxuICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpYnJhcnkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgdXNlIG9mIENTUzMgb24gZGlmZmVyZW50IGJyb3dzZXJzIGF2b2lkaW5nIEhBUkQgVE8gUkVBRCBhbmQgTkVWRVJcbiAgRU5ESU5HIGNzcyBmaWxlc1xuXG4gIG5vdGU6IEFsbCBDU1MzIFByb3BlcnRpZXMgYXJlIGJlaW5nIHN1cHBvcnRlZCBieSBTYWZhcmkgNVxuICBtb3JlIGluZm86IGh0dHA6Ly93d3cuZmluZG1lYnlpcC5jb20vbGl0bXVzLyNjc3MzLXByb3BlcnRpZXNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLypcbkNvbG9yXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi53cmFwLW1hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53cmFwLW1hcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuYWdtLW1hcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IDVweCA0cHg7XG59XG5cbi5wYW5lbCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZmVmZWY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDE0NywgMTQ3LCAxNDcsIDAuMSkgMCAxcHggMTVweCAxcHg7XG4gIC1raHRtbC1ib3gtc2hhZG93OiByZ2JhKDE0NywgMTQ3LCAxNDcsIDAuMSkgMCAxcHggMTVweCAxcHg7XG4gIC1tb3otYm94LXNoYWRvdzogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjEpIDAgMXB4IDE1cHggMXB4O1xuICAtbXMtYm94LXNoYWRvdzogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjEpIDAgMXB4IDE1cHggMXB4O1xuICAtby1ib3gtc2hhZG93OiByZ2JhKDE0NywgMTQ3LCAxNDcsIDAuMSkgMCAxcHggMTVweCAxcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ3LCAxNDcsIDE0NywgMC4xKSAwIDFweCAxNXB4IDFweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1raHRtbC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wYW5lbCAudGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5wYW5lbCB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFuZWwgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbjogMCAwIDE1cHggMCAhaW1wb3J0YW50O1xufVxuLnBhbmVsIHVsIGxpIGg2IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuLnBhbmVsIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhbmVsIHVsIGxpIG1hdC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wYW5lbCB1bCBsaSBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTg2cHgpIHtcbiAgLnNpZGUtY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ContactComponent = class ContactComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.lat = -6.9222975;
        this.lng = 107.6088145;
    }
    ngOnInit() {
    }
    onSubmit(e) {
        this.openSnackBar('Message has been sent', 'Done');
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: contactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactModule", function() { return contactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");






// Material



// Validatord

// Google Map

// Angushop Library module


let contactModule = class contactModule {
};
contactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__["libModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_9__["CustomFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyALMkgKQpcKi_frj9VAYrHE1nRFLegJKtM'
            })
        ],
        declarations: [
            _contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
        ],
        exports: [
            _contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
        ]
    })
], contactModule);



/***/ }),

/***/ "./src/app/element/button/button.component.scss":
/*!******************************************************!*\
  !*** ./src/app/element/button/button.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-icon {\n  padding: 0;\n  margin: -2px;\n  list-style: none;\n  display: inline-block;\n}\n.list-icon li {\n  float: left;\n  display: block;\n  margin: 2px;\n}\n.list-icon li mat-icon {\n  display: table-cell;\n  width: 40px !important;\n  height: 40px !important;\n  vertical-align: middle;\n  text-align: center;\n  border: solid 1px #eee;\n  font-size: 20px;\n  padding-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9lbGVtZW50L2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VsZW1lbnQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDUjtBRENRO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50L2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pY29ue1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMnB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgbGl7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAycHg7XG5cbiAgICAgICAgbWF0LWljb257XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlZWU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubGlzdC1pY29uIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMnB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubGlzdC1pY29uIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDJweDtcbn1cbi5saXN0LWljb24gbGkgbWF0LWljb24ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/element/button/button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/element/button/button.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ButtonComponent = class ButtonComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
ButtonComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/button/button.component.html"),
        styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/element/button/button.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ButtonComponent);



/***/ }),

/***/ "./src/app/element/dashboard-element/dashboard-element.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/element/dashboard-element/dashboard-element.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnQvZGFzaGJvYXJkLWVsZW1lbnQvZGFzaGJvYXJkLWVsZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/element/dashboard-element/dashboard-element.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/element/dashboard-element/dashboard-element.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardELementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardELementComponent", function() { return DashboardELementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardELementComponent = class DashboardELementComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardELementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-element',
        template: __webpack_require__(/*! raw-loader!./dashboard-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/dashboard-element/dashboard-element.component.html"),
        styles: [__webpack_require__(/*! ./dashboard-element.component.scss */ "./src/app/element/dashboard-element/dashboard-element.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DashboardELementComponent);



/***/ }),

/***/ "./src/app/element/element.module.ts":
/*!*******************************************!*\
  !*** ./src/app/element/element.module.ts ***!
  \*******************************************/
/*! exports provided: ElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModule", function() { return ElementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/element/product/product.component.ts");
/* harmony import */ var _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-element/dashboard-element.component */ "./src/app/element/dashboard-element/dashboard-element.component.ts");
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-control/form-control.component */ "./src/app/element/form-control/form-control.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/element/layout/layout.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button/button.component */ "./src/app/element/button/button.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/element/grid/grid.component.ts");
/* harmony import */ var _typhography_typhography_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./typhography/typhography.component */ "./src/app/element/typhography/typhography.component.ts");
/* harmony import */ var _helper_helper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helper/helper.component */ "./src/app/element/helper/helper.component.ts");





// Material



// Angushop Library module









let ElementModule = class ElementModule {
};
ElementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_8__["libModule"]
        ],
        exports: [
            _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_10__["DashboardELementComponent"]
        ],
        declarations: [
            _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductElement"],
            _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_10__["DashboardELementComponent"],
            _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_11__["FormControlComponent"],
            _layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
            _button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"],
            _grid_grid_component__WEBPACK_IMPORTED_MODULE_14__["GridComponent"],
            _typhography_typhography_component__WEBPACK_IMPORTED_MODULE_15__["TyphographyComponent"],
            _helper_helper_component__WEBPACK_IMPORTED_MODULE_16__["HelperComponent"]
        ]
    })
], ElementModule);



/***/ }),

/***/ "./src/app/element/form-control/form-control.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/element/form-control/form-control.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnQvZm9ybS1jb250cm9sL2Zvcm0tY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/element/form-control/form-control.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/element/form-control/form-control.component.ts ***!
  \****************************************************************/
/*! exports provided: FormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlComponent", function() { return FormControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormControlComponent = class FormControlComponent {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
};
FormControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-control',
        template: __webpack_require__(/*! raw-loader!./form-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/form-control/form-control.component.html"),
        styles: [__webpack_require__(/*! ./form-control.component.scss */ "./src/app/element/form-control/form-control.component.scss")]
    })
], FormControlComponent);



/***/ }),

/***/ "./src/app/element/grid/grid.component.scss":
/*!**************************************************!*\
  !*** ./src/app/element/grid/grid.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0;\n}\n.row .col {\n  background: #efefef;\n  border: solid 1px #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9lbGVtZW50L2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWxlbWVudC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnQvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcbiAgICBtYXJnaW46IDA7XG5cbiAgICAuY29se1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xuICAgIH1cbn0iLCIucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuLnJvdyAuY29sIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/element/grid/grid.component.ts":
/*!************************************************!*\
  !*** ./src/app/element/grid/grid.component.ts ***!
  \************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GridComponent = class GridComponent {
    constructor() { }
    ngOnInit() {
    }
};
GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: __webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/grid/grid.component.html"),
        styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/element/grid/grid.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GridComponent);



/***/ }),

/***/ "./src/app/element/helper/helper.component.scss":
/*!******************************************************!*\
  !*** ./src/app/element/helper/helper.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height200 {\n  background: #efefef;\n  height: 200px;\n}\n\n.line-demo {\n  background: #efefef;\n  padding: 15px 20px;\n}\n\ntable tr td {\n  vertical-align: top;\n  border: solid 1px #eee;\n  padding: 15px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9lbGVtZW50L2hlbHBlci9oZWxwZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VsZW1lbnQvaGVscGVyL2hlbHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50L2hlbHBlci9oZWxwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0MjAwe1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmxpbmUtZGVtb3tcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cblxudGFibGUgdHIgdGR7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbn0iLCIuaGVpZ2h0MjAwIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmxpbmUtZGVtbyB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cblxudGFibGUgdHIgdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWVlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/element/helper/helper.component.ts":
/*!****************************************************!*\
  !*** ./src/app/element/helper/helper.component.ts ***!
  \****************************************************/
/*! exports provided: HelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperComponent", function() { return HelperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelperComponent = class HelperComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helper',
        template: __webpack_require__(/*! raw-loader!./helper.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/helper/helper.component.html"),
        styles: [__webpack_require__(/*! ./helper.component.scss */ "./src/app/element/helper/helper.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelperComponent);



/***/ }),

/***/ "./src/app/element/layout/layout.component.scss":
/*!******************************************************!*\
  !*** ./src/app/element/layout/layout.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0 -15px;\n}\n\nmat-card-title {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9lbGVtZW50L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VsZW1lbnQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3d7XG4gIG1hcmdpbjogMCAtMTVweDtcbn1cblxubWF0LWNhcmQtdGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iLCIucm93IHtcbiAgbWFyZ2luOiAwIC0xNXB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/element/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/element/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() {
        // List
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        // Grid
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/element/layout/layout.component.scss")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/element/product/product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/element/product/product.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-product {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9lbGVtZW50L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWxlbWVudC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLXByb2R1Y3R7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufSIsIi53cmFwLXByb2R1Y3Qge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/element/product/product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/element/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductElement", function() { return ProductElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let ProductElement = class ProductElement {
    constructor(router) {
        this.router = router;
        this.objectNavigation = {};
    }
    // Detail Product
    detailProduct(e) {
        let product = lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"](e.slug);
        this.router.navigate(['shop/p/' + product]);
    }
};
ProductElement.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductElement = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'product-element',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/element/product/product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductElement);



/***/ }),

/***/ "./src/app/element/typhography/typhography.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/element/typhography/typhography.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnQvdHlwaG9ncmFwaHkvdHlwaG9ncmFwaHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/element/typhography/typhography.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/element/typhography/typhography.component.ts ***!
  \**************************************************************/
/*! exports provided: TyphographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyphographyComponent", function() { return TyphographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TyphographyComponent = class TyphographyComponent {
    constructor() { }
    ngOnInit() {
    }
};
TyphographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-typhography',
        template: __webpack_require__(/*! raw-loader!./typhography.component.html */ "./node_modules/raw-loader/index.js!./src/app/element/typhography/typhography.component.html"),
        styles: [__webpack_require__(/*! ./typhography.component.scss */ "./src/app/element/typhography/typhography.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TyphographyComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home1/home1.component */ "./src/app/home/home1/home1.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");






// Component

// Material



// Anguushop Lib

let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__["libModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        declarations: [
            _home1_home1_component__WEBPACK_IMPORTED_MODULE_6__["Home1Component"],
        ],
        exports: [_home1_home1_component__WEBPACK_IMPORTED_MODULE_6__["Home1Component"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/home/home1/home1.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/home1/home1.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nBanner\n=========================== */\n.banner {\n  padding: 60px 0 0 0;\n  background-color: #f5f5f5;\n  background-image: url(\"/assets/images/bg/brick-wall.png\");\n  position: relative;\n}\n.banner:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  /* For browsers that do not support gradients */\n  /* For Safari 5.1 to 6.0 */\n  /* For Opera 11.1 to 12.0 */\n  /* For Firefox 3.6 to 15 */\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(#f5f5f5));\n  background: linear-gradient(rgba(0, 0, 0, 0.1), #f5f5f5);\n  /* Standard syntax */\n}\n.banner .row {\n  margin-top: 0;\n  margin-bottom: 0;\n  position: relative;\n  z-index: 2;\n}\n.banner .row .content {\n  padding-top: 115px;\n  margin-bottom: 25px;\n}\n.banner .row .content .sub-title {\n  text-transform: uppercase;\n}\n.banner .row .content .title {\n  margin: 15px 0 40px 0;\n  text-transform: none;\n}\n.banner .wrap-demo {\n  height: auto;\n  padding: 0 15px;\n}\n.banner img {\n  display: block;\n}\n/*\nCategory\n=========================== */\n.wrap-feature {\n  display: block;\n  position: relative;\n}\n.wrap-feature .container {\n  position: relative;\n  z-index: 2;\n}\n.wrap-feature .row {\n  margin: 0;\n}\n.wrap-feature .col {\n  padding: 0;\n  margin: -0.5px;\n}\n.wrap-feature .item-feature {\n  padding: 20px 35px 20px 65px;\n  border: solid 1px #efefef;\n  background: #fff;\n  position: relative;\n  -ms-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  -o-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  overflow: hidden;\n}\n.wrap-feature .item-feature mat-icon {\n  position: absolute;\n  font-size: 24px;\n  top: 25px;\n  left: 25px;\n  filter: alpha(opacity=70);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n  -webkit-opacity: 0.7;\n  -khtml-opacity: 0.7;\n  -moz-opacity: 0.7;\n  -ms-opacity: 0.7;\n  -o-opacity: 0.7;\n  opacity: 0.7;\n}\n.wrap-feature .item-feature mat-icon.bg {\n  color: #8f8f8f;\n  filter: alpha(opacity=10);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n  -webkit-opacity: 0.1;\n  -khtml-opacity: 0.1;\n  -moz-opacity: 0.1;\n  -ms-opacity: 0.1;\n  -o-opacity: 0.1;\n  opacity: 0.1;\n  font-size: 100px;\n  left: 100%;\n  top: 100%;\n  margin: -50px 0 0 -80px;\n  z-index: 1;\n}\n.wrap-feature .item-feature .title {\n  text-transform: capitalize;\n  position: relative;\n  z-index: 2;\n}\n.wrap-feature .item-feature p {\n  margin-bottom: 0;\n  position: relative;\n  z-index: 2;\n}\n.wrap-feature:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background-color: #f5f5f5;\n  border-bottom: solid 1px #efefef;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 1200px) {\n  .banner .row .content {\n    padding-top: 70px;\n  }\n  .banner .row img {\n    max-width: 300px;\n    margin: 0 auto !important;\n  }\n}\n@media (max-width: 767px) {\n  .banner .row .content {\n    text-align: center;\n    padding-top: 0;\n    margin-bottom: 55px;\n  }\n  .banner .row .col {\n    width: 100%;\n  }\n\n  .product-home {\n    padding: 0 25px;\n  }\n}\n@media (max-width: 360px) {\n  .banner .row img {\n    max-width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9ob21lL2hvbWUxL2hvbWUxLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZTEvaG9tZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FDQUE7Ozs7Ozs7Ozs7OzsrREFBQTtBQ0FBOzs2QkFBQTtBQVVBOzs2QkFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QURMQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FIMUJBOzs2QkFBQTtBQUdBO0VBQ0ksbUJBQUE7RUFDQSx5QkVIYTtFRkliLHlEQUFBO0VBQ0Esa0JBQUE7QUc2Qko7QUgzQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQ2tCSiw4QkRqQmlDO0VDaUJSLCtDQUFBO0VBQ29DLDBCQUFBO0VBQ0wsMkJBQUE7RUFDRSwwQkFBQTtFQUMxRCxrR0FBQTtFQUFBLHdEQUFBO0VBQXFELG9CQUFBO0FFaUJ6RDtBSG5DSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBR3FDUjtBSG5DUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUdxQ1o7QUhuQ1k7RUFDSSx5QkFBQTtBR3FDaEI7QUhsQ1k7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FHb0NoQjtBSC9CSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FHaUNSO0FIOUJJO0VBQ0ksY0FBQTtBR2dDUjtBSDVCQTs7NkJBQUE7QUFHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBRytCSjtBSDdCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBRytCUjtBSDVCSTtFQUNJLFNBQUE7QUc4QlI7QUgzQkk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRzZCUjtBSDFCSTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VDckRGLHVEQUFBO0VBQ0Msc0RBQUE7RUFDRyxtREFBQTtFRHFERixnQkFBQTtBR2lDUjtBSC9CUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VDb0xSLHlCQUFBO0VBQ0EsaUVBQUE7RUFyUEYsb0JBQUE7RUFDQyxtQkFBQTtFQUNFLGlCQUFBO0VBQ0MsZ0JBQUE7RUFDQyxlQUFBO0VBQ0csWUFBQTtBRW9HVjtBSHRDWTtFQUNJLGNFMUZBO0VEMFFaLHlCQUFBO0VBQ0EsaUVBQUE7RUFyUEYsb0JBQUE7RUFDQyxtQkFBQTtFQUNFLGlCQUFBO0VBQ0MsZ0JBQUE7RUFDQyxlQUFBO0VBQ0csWUFBQTtFRGlFTSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FHK0NoQjtBSDNDUTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FHNkNaO0FIMUNRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUc0Q1o7QUh4Q0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRXJIUztFRnNIVCxnQ0FBQTtBRzBDUjtBSHRDQTs7NkJBQUE7QUFHQTtFQUVRO0lBQ0ksaUJBQUE7RUd3Q1Y7RUhyQ007SUFDSSxnQkFBQTtJQUNBLHlCQUFBO0VHdUNWO0FBQ0Y7QUhuQ0E7RUFHWTtJQUNJLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VHbUNkO0VIaENVO0lBQ0ksV0FBQTtFR2tDZDs7RUg3QkU7SUFDSSxlQUFBO0VHZ0NOO0FBQ0Y7QUg3QkE7RUFFUTtJQUNJLGdCQUFBO0VHOEJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUxL2hvbWUxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuSW1wb3J0XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy9jc3MzLW1peGlucyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlJztcclxuXHJcbi8qXHJcbkJhbm5lclxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmJhbm5lcntcclxuICAgIHBhZGRpbmc6IDYwcHggMCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmctZ3JheTM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnL2JyaWNrLXdhbGwucG5nJyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBAaW5jbHVkZSBiYWNrZ3JvdW5kLWdyYWRpZW50KHJnYmEoMCwwLDAsMC4xKSwkY29sb3ItYmctZ3JheTMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb3d7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgICAgICAgLnN1Yi10aXRsZXtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDQwcHggMDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwLWRlbW97XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbkNhdGVnb3J5XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ud3JhcC1mZWF0dXJle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogLTAuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWZlYXR1cmV7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzNXB4IDIwcHggNjVweDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCwgMXB4LCAxNXB4LCAxcHgsIHJnYmEoMTQ3LCAxNDcsIDE0NywgMC4xMCkpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIG1hdC1pY29ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgdG9wOiAyNXB4OyBcclxuICAgICAgICAgICAgbGVmdDogMjVweDtcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjcpO1xyXG5cclxuICAgICAgICAgICAgJi5iZ3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItY29udGVudDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMC4xKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAtNTBweCAwIDAgLTgwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZy1ncmF5MztcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWZlZjtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuUmVzcG9uc2l2ZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuQG1lZGlhKG1heC13aWR0aDoxMjAwcHgpe1xyXG4gICAgLmJhbm5lciAucm93eyBcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5iYW5uZXJ7XHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb2x7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1ob21le1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDozNjBweCl7XHJcbiAgICAuYmFubmVyIC5yb3d7IFxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuQmFubmVyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5iYW5uZXIge1xuICBwYWRkaW5nOiA2MHB4IDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZy9icmljay13YWxsLnBuZ1wiKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCAjZjVmNWY1KTtcbiAgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksICNmNWY1ZjUpO1xuICAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgI2Y1ZjVmNSk7XG4gIC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCAjZjVmNWY1KTtcbiAgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG4uYmFubmVyIC5yb3cge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uYmFubmVyIC5yb3cgLmNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uYmFubmVyIC5yb3cgLmNvbnRlbnQgLnN1Yi10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYmFubmVyIC5yb3cgLmNvbnRlbnQgLnRpdGxlIHtcbiAgbWFyZ2luOiAxNXB4IDAgNDBweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5iYW5uZXIgLndyYXAtZGVtbyB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuLmJhbm5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbkNhdGVnb3J5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53cmFwLWZlYXR1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXAtZmVhdHVyZSAuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLndyYXAtZmVhdHVyZSAucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuLndyYXAtZmVhdHVyZSAuY29sIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMC41cHg7XG59XG4ud3JhcC1mZWF0dXJlIC5pdGVtLWZlYXR1cmUge1xuICBwYWRkaW5nOiAyMHB4IDM1cHggMjBweCA2NXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjEpIDAgMXB4IDE1cHggMXB4O1xuICAta2h0bWwtYm94LXNoYWRvdzogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjEpIDAgMXB4IDE1cHggMXB4O1xuICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMTQ3LCAxNDcsIDE0NywgMC4xKSAwIDFweCAxNXB4IDFweDtcbiAgLW1zLWJveC1zaGFkb3c6IHJnYmEoMTQ3LCAxNDcsIDE0NywgMC4xKSAwIDFweCAxNXB4IDFweDtcbiAgLW8tYm94LXNoYWRvdzogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjEpIDAgMXB4IDE1cHggMXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDE0NywgMTQ3LCAxNDcsIDAuMSkgMCAxcHggMTVweCAxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud3JhcC1mZWF0dXJlIC5pdGVtLWZlYXR1cmUgbWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiAyNXB4O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTcwKVwiO1xuICAtd2Via2l0LW9wYWNpdHk6IDAuNztcbiAgLWtodG1sLW9wYWNpdHk6IDAuNztcbiAgLW1vei1vcGFjaXR5OiAwLjc7XG4gIC1tcy1vcGFjaXR5OiAwLjc7XG4gIC1vLW9wYWNpdHk6IDAuNztcbiAgb3BhY2l0eTogMC43O1xufVxuLndyYXAtZmVhdHVyZSAuaXRlbS1mZWF0dXJlIG1hdC1pY29uLmJnIHtcbiAgY29sb3I6ICM4ZjhmOGY7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMCk7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTApXCI7XG4gIC13ZWJraXQtb3BhY2l0eTogMC4xO1xuICAta2h0bWwtb3BhY2l0eTogMC4xO1xuICAtbW96LW9wYWNpdHk6IDAuMTtcbiAgLW1zLW9wYWNpdHk6IDAuMTtcbiAgLW8tb3BhY2l0eTogMC4xO1xuICBvcGFjaXR5OiAwLjE7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMTAwJTtcbiAgbWFyZ2luOiAtNTBweCAwIDAgLTgwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ud3JhcC1mZWF0dXJlIC5pdGVtLWZlYXR1cmUgLnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi53cmFwLWZlYXR1cmUgLml0ZW0tZmVhdHVyZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLndyYXAtZmVhdHVyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWZlZjtcbn1cblxuLypcblJlc3BvbnNpdmVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYmFubmVyIC5yb3cgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICB9XG4gIC5iYW5uZXIgLnJvdyBpbWcge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iYW5uZXIgLnJvdyAuY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gIH1cbiAgLmJhbm5lciAucm93IC5jb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnByb2R1Y3QtaG9tZSB7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmJhbm5lciAucm93IGltZyB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home1/home1.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/home1/home1.component.ts ***!
  \***********************************************/
/*! exports provided: Home1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Component", function() { return Home1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let Home1Component = class Home1Component {
    constructor(router) {
        this.router = router;
    }
    // Detail Product
    detailProduct(e) {
        let product = lodash__WEBPACK_IMPORTED_MODULE_4__["kebabCase"](e.slug);
        this.router.navigate(['shop/p/' + product]);
    }
};
Home1Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Home1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home1',
        template: __webpack_require__(/*! raw-loader!./home1.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home1/home1.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('.5s'))
            ]),
        ],
        styles: [__webpack_require__(/*! ./home1.component.scss */ "./src/app/home/home1/home1.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Home1Component);



/***/ }),

/***/ "./src/app/lib/component/breadcumb/breadcumb.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/lib/component/breadcumb/breadcumb.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.location {\n  padding: 0;\n  margin: 0 0 -5px 0;\n  display: inline-block;\n}\nul.location li {\n  float: left;\n  display: block;\n  margin-right: 15px;\n  font-size: 14px;\n  text-transform: capitalize;\n}\nul.location li:after {\n  content: \"/\";\n  font-size: 12px;\n  position: relative;\n  left: 7px;\n  color: #cfcfcf;\n}\nul.location li:last-child:after {\n  display: none;\n}\nul.location li.active {\n  color: #999;\n}\nul.location li.active:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9saWIvY29tcG9uZW50L2JyZWFkY3VtYi9icmVhZGN1bWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpYi9jb21wb25lbnQvYnJlYWRjdW1iL2JyZWFkY3VtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDUjtBRENRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQ1o7QURFUTtFQUNJLGFBQUE7QUNBWjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FER1k7RUFDSSxhQUFBO0FDRGhCIiwiZmlsZSI6InNyYy9hcHAvbGliL2NvbXBvbmVudC9icmVhZGN1bWIvYnJlYWRjdW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubG9jYXRpb257XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgLTVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIGxpe1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2NmY2ZjZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZDphZnRlcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidWwubG9jYXRpb24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAtNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbnVsLmxvY2F0aW9uIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG51bC5sb2NhdGlvbiBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiL1wiO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogN3B4O1xuICBjb2xvcjogI2NmY2ZjZjtcbn1cbnVsLmxvY2F0aW9uIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxudWwubG9jYXRpb24gbGkuYWN0aXZlIHtcbiAgY29sb3I6ICM5OTk7XG59XG51bC5sb2NhdGlvbiBsaS5hY3RpdmU6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lib/component/breadcumb/breadcumb.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/breadcumb/breadcumb.component.ts ***!
  \****************************************************************/
/*! exports provided: BreadcumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcumbComponent", function() { return BreadcumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");





let BreadcumbComponent = class BreadcumbComponent {
    constructor(router, activeRoute, productService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.segments = [];
        this.router.events.subscribe(evt => {
            this.createMap();
        });
    }
    ngOnInit() {
        this.createMap();
    }
    createMap() {
        this.segments = this.activeRoute.snapshot['_urlSegment'].segments;
        this.segementLength = this.segments.length - 1;
        let activeValue = this.activeRoute.url['_value'][0].path;
        for (let i = 0; i < this.segments.length; i++) {
            this.segments[i].path = lodash__WEBPACK_IMPORTED_MODULE_3__["lowerCase"](this.segments[i].path);
            if (this.segments[i].path == 'p') {
                this.segments.splice(i, 1);
            }
        }
        if (activeValue == "shop") {
            setTimeout(() => {
                if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.segments[1])) {
                    let productName = this.segments[1].path;
                    this.productService.getSlugProduct(productName).then(product => {
                        if (product != undefined) {
                            this.segments[1].path = product['productName'];
                        }
                    });
                }
            });
        }
    }
};
BreadcumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"] }
];
BreadcumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'breadcumb',
        template: __webpack_require__(/*! raw-loader!./breadcumb.component.html */ "./node_modules/raw-loader/index.js!./src/app/lib/component/breadcumb/breadcumb.component.html"),
        styles: [__webpack_require__(/*! ./breadcumb.component.scss */ "./src/app/lib/component/breadcumb/breadcumb.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"]])
], BreadcumbComponent);



/***/ }),

/***/ "./src/app/lib/component/grid-logo/grid-logo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/lib/component/grid-logo/grid-logo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nVendor\n=========================== */\n.item-vendor {\n  padding: 30px;\n  position: relative;\n  border-left: solid 1px #efefef;\n  border-bottom: solid 1px #efefef;\n  text-align: center;\n}\n.item-vendor::first-child {\n  border-left: 0;\n}\n.item-vendor img {\n  width: 150px;\n  display: block;\n  margin: auto;\n  filter: alpha(opacity=50);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  -webkit-opacity: 0.5;\n  -khtml-opacity: 0.5;\n  -moz-opacity: 0.5;\n  -ms-opacity: 0.5;\n  -o-opacity: 0.5;\n  opacity: 0.5;\n}\n.item-vendor:hover img {\n  filter: alpha(opacity=100);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  -webkit-opacity: 1;\n  -khtml-opacity: 1;\n  -moz-opacity: 1;\n  -ms-opacity: 1;\n  -o-opacity: 1;\n  opacity: 1;\n}\n.item-vendor .link-full {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9saWIvY29tcG9uZW50L2dyaWQtbG9nby9ncmlkLWxvZ28uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy9jc3MzLW1peGlucy5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvbGliL2NvbXBvbmVudC9ncmlkLWxvZ28vZ3JpZC1sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs2QkFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7K0RBQUE7QUNBQTs7NkJBQUE7QUFVQTs7NkJBQUE7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FETEE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBSDFCQTs7NkJBQUE7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBRzZCSjtBSDNCSTtFQUNJLGNBQUE7QUc2QlI7QUgxQkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUN1UEoseUJBQUE7RUFDQSxpRUFBQTtFQXJQRixvQkFBQTtFQUNDLG1CQUFBO0VBQ0UsaUJBQUE7RUFDQyxnQkFBQTtFQUNDLGVBQUE7RUFDRyxZQUFBO0FFNEJWO0FIaENJO0VDbVBBLDBCQUFBO0VBQ0Esa0VBQUE7RUFyUEYsa0JBQUE7RUFDQyxpQkFBQTtFQUNFLGVBQUE7RUFDQyxjQUFBO0VBQ0MsYUFBQTtFQUNHLFVBQUE7QUVzQ1Y7QUh0Q0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUd3Q1IiLCJmaWxlIjoic3JjL2FwcC9saWIvY29tcG9uZW50L2dyaWQtbG9nby9ncmlkLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5JbXBvcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGUnO1xyXG5cclxuLypcclxuVmVuZG9yXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uaXRlbS12ZW5kb3J7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZWZlZmVmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZmVmZWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJjo6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIgaW1ne1xyXG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saW5rLWZ1bGx7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuVmVuZG9yXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5pdGVtLXZlbmRvciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZWZlZmVmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWZlZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW0tdmVuZG9yOjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLml0ZW0tdmVuZG9yIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTUwKTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT01MClcIjtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwLjU7XG4gIC1raHRtbC1vcGFjaXR5OiAwLjU7XG4gIC1tb3otb3BhY2l0eTogMC41O1xuICAtbXMtb3BhY2l0eTogMC41O1xuICAtby1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5pdGVtLXZlbmRvcjpob3ZlciBpbWcge1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0xMDApXCI7XG4gIC13ZWJraXQtb3BhY2l0eTogMTtcbiAgLWtodG1sLW9wYWNpdHk6IDE7XG4gIC1tb3otb3BhY2l0eTogMTtcbiAgLW1zLW9wYWNpdHk6IDE7XG4gIC1vLW9wYWNpdHk6IDE7XG4gIG9wYWNpdHk6IDE7XG59XG4uaXRlbS12ZW5kb3IgLmxpbmstZnVsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lib/component/grid-logo/grid-logo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/grid-logo/grid-logo.component.ts ***!
  \****************************************************************/
/*! exports provided: GridLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLogoComponent", function() { return GridLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");





let GridLogoComponent = class GridLogoComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.logos = [];
    }
    ngOnInit() {
        this.fetch();
    }
    // Limit
    limitLogo(logo) {
        if (this.setlimit === undefined) {
            this.limit = logo.length;
        }
        else {
            this.limit = this.setlimit;
        }
    }
    // Fetching
    fetch() {
        this.mainService.getLogo().subscribe(data => {
            this.logos = [];
            lodash__WEBPACK_IMPORTED_MODULE_3__["map"](data, (x) => {
                this.logos.push(x);
            });
            this.limitLogo(data);
        });
    }
};
GridLogoComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GridLogoComponent.prototype, "setlimit", void 0);
GridLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'grid-logo',
        template: __webpack_require__(/*! raw-loader!./grid-logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/lib/component/grid-logo/grid-logo.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s'))
            ]),
        ],
        styles: [__webpack_require__(/*! ./grid-logo.component.scss */ "./src/app/lib/component/grid-logo/grid-logo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"]])
], GridLogoComponent);



/***/ }),

/***/ "./src/app/lib/component/lightbox/lightbox.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/lightbox/lightbox.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nLight Box\n=========================== */\n.wrap-lightbox {\n  position: fixed;\n  z-index: 999999999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.wrap-lightbox:before {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n}\n.wrap-lightbox .close {\n  position: absolute;\n  top: 25px;\n  right: 30px;\n  z-index: 3;\n}\n.wrap-lightbox .close mat-icon {\n  position: relative;\n  top: 3px;\n}\n.wrap-lightbox .content.valign-wrapper {\n  width: 100%;\n  position: relative;\n  z-index: 2;\n}\n.wrap-lightbox .content.valign-wrapper .nav {\n  position: absolute;\n  top: 50%;\n  margin-top: -20px;\n  z-index: 2;\n  padding-top: 2px;\n}\n.wrap-lightbox .content.valign-wrapper .nav.left {\n  left: 30px;\n}\n.wrap-lightbox .content.valign-wrapper .nav.right {\n  right: 30px;\n}\n.wrap-lightbox .content.valign-wrapper .wrap-img {\n  display: block;\n  margin: auto;\n  position: relative;\n  max-width: calc(100vw - 200px);\n  z-index: 1;\n}\n.wrap-lightbox .content.valign-wrapper .wrap-img img {\n  width: 100%;\n}\n.wrap-lightbox .description {\n  position: absolute;\n  z-index: 3;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n.wrap-lightbox .description .content {\n  padding: 15px 20px;\n  text-align: center;\n  display: table;\n  margin: auto;\n  background: #333;\n  -ms-box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\n  -o-box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\n}\n.wrap-lightbox .description .content .title {\n  margin-bottom: 0;\n  color: #fff;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.wrap-lightbox .mat-button, .wrap-lightbox .mat-fab, .wrap-lightbox .mat-icon-button, .wrap-lightbox .mat-mini-fab, .wrap-lightbox .mat-raised-button {\n  font-size: 16px !important;\n}\n.wrap-lightbox .spinner {\n  display: table;\n  margin: auto;\n}\n.wrap-lightbox .spinner mat-spinner {\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 767px) {\n  .wrap-lightbox .close {\n    top: 10px;\n    right: 15px;\n  }\n  .wrap-lightbox .content.valign-wrapper .nav.left {\n    left: 15px;\n  }\n  .wrap-lightbox .content.valign-wrapper .nav.right {\n    right: 15px;\n  }\n  .wrap-lightbox .content.valign-wrapper .wrap-img {\n    max-width: 300px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9saWIvY29tcG9uZW50L2xpZ2h0Ym94L2xpZ2h0Ym94LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL2xpYi9jb21wb25lbnQvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FDQUE7Ozs7Ozs7Ozs7OzsrREFBQTtBQ0FBOzs2QkFBQTtBQVVBOzs2QkFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QURMQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FIMUJBOzs2QkFBQTtBQUdBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRzZCSjtBSDNCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUc2QlI7QUgxQkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRzRCUjtBSDFCUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBRzRCWjtBSHhCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUcwQlI7QUh4QlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRzBCWjtBSHhCWTtFQUNJLFVBQUE7QUcwQmhCO0FIdkJZO0VBQ0ksV0FBQTtBR3lCaEI7QUhyQlE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FHdUJaO0FIckJZO0VBQ0ksV0FBQTtBR3VCaEI7QUhsQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUdvQlI7QUhsQlE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQ3pETiw4Q0FBQTtFQUNDLDZDQUFBO0VBQ0csMENBQUE7QUVpRlY7QUh2Qlk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FHeUJoQjtBSHBCSTtFQUNJLDBCQUFBO0FHc0JSO0FIbkJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUdxQlI7QUhuQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUdxQlo7QUhoQkE7OzZCQUFBO0FBR0E7RUFFUTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VHa0JWO0VIYmM7SUFDSSxVQUFBO0VHZWxCO0VIWmM7SUFDSSxXQUFBO0VHY2xCO0VIVlU7SUFDSSwyQkFBQTtFR1lkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9saWIvY29tcG9uZW50L2xpZ2h0Ym94L2xpZ2h0Ym94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuSW1wb3J0XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9jc3MzLW1peGlucyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlJztcclxuXHJcbi8qXHJcbkxpZ2h0IEJveFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLndyYXAtbGlnaHRib3h7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsb3Nle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBcclxuICAgICAgICBtYXQtaWNvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQudmFsaWduLXdyYXBwZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcblxyXG4gICAgICAgIC5uYXZ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG5cclxuICAgICAgICAgICAgJi5sZWZ0e1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5yaWdodHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcC1pbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjAwcHgpOyAgIFxyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgaW1neyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMHB4LDJweCwzcHgscmdiYSgwLDAsMCwwLjIpKTtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtbWluaS1mYWIsIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Bpbm5lcntcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgIG1hdC1zcGlubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7IFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7IFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcblJlc3BvbnNpdmVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLndyYXAtbGlnaHRib3h7XHJcbiAgICAgICAgLmNsb3Nle1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQudmFsaWduLXdyYXBwZXJ7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5uYXZ7XHJcbiAgICAgICAgICAgICAgICAmLmxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud3JhcC1pbWd7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuTGlnaHQgQm94XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53cmFwLWxpZ2h0Ym94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwLWxpZ2h0Ym94OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLndyYXAtbGlnaHRib3ggLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiAzO1xufVxuLndyYXAtbGlnaHRib3ggLmNsb3NlIG1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn1cbi53cmFwLWxpZ2h0Ym94IC5jb250ZW50LnZhbGlnbi13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi53cmFwLWxpZ2h0Ym94IC5jb250ZW50LnZhbGlnbi13cmFwcGVyIC5uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi53cmFwLWxpZ2h0Ym94IC5jb250ZW50LnZhbGlnbi13cmFwcGVyIC5uYXYubGVmdCB7XG4gIGxlZnQ6IDMwcHg7XG59XG4ud3JhcC1saWdodGJveCAuY29udGVudC52YWxpZ24td3JhcHBlciAubmF2LnJpZ2h0IHtcbiAgcmlnaHQ6IDMwcHg7XG59XG4ud3JhcC1saWdodGJveCAuY29udGVudC52YWxpZ24td3JhcHBlciAud3JhcC1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDIwMHB4KTtcbiAgei1pbmRleDogMTtcbn1cbi53cmFwLWxpZ2h0Ym94IC5jb250ZW50LnZhbGlnbi13cmFwcGVyIC53cmFwLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwLWxpZ2h0Ym94IC5kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwLWxpZ2h0Ym94IC5kZXNjcmlwdGlvbiAuY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLWtodG1sLWJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tcy1ib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1vLWJveC1zaGFkb3c6IDBweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLndyYXAtbGlnaHRib3ggLmRlc2NyaXB0aW9uIC5jb250ZW50IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi53cmFwLWxpZ2h0Ym94IC5tYXQtYnV0dG9uLCAud3JhcC1saWdodGJveCAubWF0LWZhYiwgLndyYXAtbGlnaHRib3ggLm1hdC1pY29uLWJ1dHRvbiwgLndyYXAtbGlnaHRib3ggLm1hdC1taW5pLWZhYiwgLndyYXAtbGlnaHRib3ggLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ud3JhcC1saWdodGJveCAuc3Bpbm5lciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IGF1dG87XG59XG4ud3JhcC1saWdodGJveCAuc3Bpbm5lciBtYXQtc3Bpbm5lciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuUmVzcG9uc2l2ZVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLndyYXAtbGlnaHRib3ggLmNsb3NlIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLndyYXAtbGlnaHRib3ggLmNvbnRlbnQudmFsaWduLXdyYXBwZXIgLm5hdi5sZWZ0IHtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG4gIC53cmFwLWxpZ2h0Ym94IC5jb250ZW50LnZhbGlnbi13cmFwcGVyIC5uYXYucmlnaHQge1xuICAgIHJpZ2h0OiAxNXB4O1xuICB9XG4gIC53cmFwLWxpZ2h0Ym94IC5jb250ZW50LnZhbGlnbi13cmFwcGVyIC53cmFwLWltZyB7XG4gICAgbWF4LXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/lib/component/lightbox/lightbox.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/lib/component/lightbox/lightbox.component.ts ***!
  \**************************************************************/
/*! exports provided: LightboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxComponent", function() { return LightboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");




let LightboxComponent = class LightboxComponent {
    constructor(mainService) {
        this.mainService = mainService;
        this.loadingState = true;
        this.isShow = true;
        this.arrayProduct = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.state = 'active';
    }
    // Close zoom
    closeZoom() {
        this.close.emit();
        this.state = 'inactive';
        document.getElementsByTagName("html")[0].style.overflowY = 'auto';
    }
    // Toggle Lightbox
    ngOnChanges() {
        this.state = this.isShow ? 'active' : 'inactive';
        if (this.state == 'active') {
            this.fetch(this.selectProduct);
            let val = this.selectProduct.toString();
            this.index = this.arrayProduct.indexOf(val);
        }
    }
    ngAfterViewInit() {
        this.content.nativeElement.style.height = window.innerHeight + 'px';
    }
    // On Resize
    onResize(event) {
        this.content.nativeElement.style.height = window.innerHeight + 'px';
    }
    // Fetch Data
    fetch(id) {
        this.mainService.getIdProduct(id).then(data => {
            this.product = data;
            this.loadingState = false;
            document.getElementsByTagName("html")[0].style.overflowY = 'hidden';
        });
    }
    // Prev
    prev() {
        if (this.index != 0) {
            --this.index;
        }
        this.product = null;
        this.loadingState = true;
        let idNext = this.arrayProduct[this.index];
        this.fetch(Number(idNext));
    }
    // Next
    next() {
        if (this.index < (this.arrayProduct.length - 1)) {
            ++this.index;
        }
        this.product = null;
        this.loadingState = true;
        let idPrev = this.arrayProduct[this.index];
        this.fetch(Number(idPrev));
    }
};
LightboxComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], LightboxComponent.prototype, "isShow", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], LightboxComponent.prototype, "selectProduct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LightboxComponent.prototype, "arrayProduct", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LightboxComponent.prototype, "close", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LightboxComponent.prototype, "show", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentwrap', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LightboxComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], LightboxComponent.prototype, "onResize", null);
LightboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'lightbox',
        template: __webpack_require__(/*! raw-loader!./lightbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/lib/component/lightbox/lightbox.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('focusPanel', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(0)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(1)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out'))
            ]),
        ],
        styles: [__webpack_require__(/*! ./lightbox.component.scss */ "./src/app/lib/component/lightbox/lightbox.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
], LightboxComponent);



/***/ }),

/***/ "./src/app/lib/component/product/product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/lib/component/product/product.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nItem Product\n=========================== */\n.reg-price {\n  margin-top: 10px;\n  font-size: 12px;\n}\n.row-product {\n  border: 0;\n  position: relative;\n  z-index: 1;\n  border-top: solid 1px transparent;\n}\n.item-product {\n  position: relative;\n  z-index: 1;\n  border: solid 1px #efefef;\n  margin: -0.5px;\n  background: #fff;\n  text-align: center;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n.item-product a.close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 29px !important;\n  height: 29px !important;\n  filter: alpha(opacity=50);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  -webkit-opacity: 0.5;\n  -khtml-opacity: 0.5;\n  -moz-opacity: 0.5;\n  -ms-opacity: 0.5;\n  -o-opacity: 0.5;\n  opacity: 0.5;\n  background: #fff !important;\n  color: #8f8f8f;\n  border: solid 1px #efefef;\n}\n.item-product a.close .material-icons.mat-icon {\n  padding: 0;\n  position: relative;\n  top: -4px;\n}\n.item-product a.close:hover {\n  filter: alpha(opacity=100);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  -webkit-opacity: 1;\n  -khtml-opacity: 1;\n  -moz-opacity: 1;\n  -ms-opacity: 1;\n  -o-opacity: 1;\n  opacity: 1;\n}\n.item-product:hover {\n  background: #fff;\n}\n.item-product img {\n  width: 100%;\n  display: block;\n  margin: auto;\n}\n.item-product .link-full {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.item-product .title {\n  margin-bottom: 0;\n  margin-top: 0;\n  text-transform: capitalize;\n}\n.item-product p {\n  margin-bottom: 0;\n  color: #9f9f9f;\n}\n.item-product .price {\n  font-family: sans-serif;\n}\n.item-product .content {\n  position: relative;\n  padding: 15px 20px;\n}\n.item-product .content .overlay {\n  border-top: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n.item-product .content .overlay ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  margin: 0 auto -7px auto;\n}\n.item-product .content .overlay ul li {\n  float: left;\n  display: block;\n  margin: 0 2px;\n}\n.item-product .content .overlay ul li .mat-button-wrapper {\n  position: relative;\n  top: 5px;\n}\n.item-product .content .overlay ul li .mat-button-wrapper .material-icons.mat-icon {\n  padding: 0;\n}\n.item-product .content .overlay .material-icons.mat-icon {\n  margin-top: 2px;\n}\n.item-product .content .overlay .mat-button, .item-product .content .overlay .mat-fab, .item-product .content .overlay .mat-icon-button, .item-product .content .overlay .mat-mini-fab, .item-product .content .overlay .mat-raised-button {\n  font-size: 16px;\n}\n/*\nEmpty product\n=========================== */\n.empty-product {\n  padding: 100px 0;\n  text-align: center;\n  color: #999;\n}\n.empty-product h1, .empty-product h2, .empty-product h3, .empty-product h4, .empty-product h5, .empty-product h6 {\n  color: #999;\n  text-transform: none;\n}\n/*\nPagination\n=========================== */\n.wrap-pagination {\n  padding: 25px 0 30px 0;\n}\n.wrap-pagination pagination-controls {\n  display: table;\n  margin: auto;\n}\n/*\nLoading\n=========================== */\n.valign-wrapper {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff;\n}\n.valign-wrapper .mat-progress-spinner {\n  display: block;\n  margin: auto;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 480px) {\n  .row-product > .col {\n    margin-bottom: 25px;\n  }\n  .row-product > .col:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 415px) {\n  .row-product .col {\n    width: 100% !important;\n  }\n  .row-product .col .item-product {\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9saWIvY29tcG9uZW50L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zLnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9saWIvY29tcG9uZW50L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7NkJBQUE7QUNBQTs7Ozs7Ozs7Ozs7OytEQUFBO0FDQUE7OzZCQUFBO0FBVUE7OzZCQUFBO0FBS0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRExBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QUgxQkE7OzZCQUFBO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUc2QkY7QUgzQkE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUc4Qko7QUgzQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VDQUYsd0NBQUE7RUFLUSxnQ0FBQTtBRStCVjtBSGpDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VDNE9KLHlCQUFBO0VBQ0EsaUVBQUE7RUFyUEYsb0JBQUE7RUFDQyxtQkFBQTtFQUNFLGlCQUFBO0VBQ0MsZ0JBQUE7RUFDQyxlQUFBO0VBQ0csWUFBQTtFREtGLDJCQUFBO0VBQ0EsY0VqQ1E7RUZrQ1IseUJBQUE7QUcwQ1I7QUh4Q1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FHMENaO0FIdkNRO0VDZ09KLDBCQUFBO0VBQ0Esa0VBQUE7RUFyUEYsa0JBQUE7RUFDQyxpQkFBQTtFQUNFLGVBQUE7RUFDQyxjQUFBO0VBQ0MsYUFBQTtFQUNHLFVBQUE7QUVnRVY7QUg1Q0k7RUFDSSxnQkFBQTtBRzhDUjtBSDNDSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRzZDUjtBSDFDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRzRDUjtBSHpDSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FHMkNSO0FIeENJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FHMENSO0FIdkNJO0VBQ0ksdUJBQUE7QUd5Q1I7QUh0Q0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FHd0NSO0FIdENRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FHd0NaO0FIdENZO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUd3Q2hCO0FIdENnQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBR3dDcEI7QUh0Q29CO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FHd0N4QjtBSHRDd0I7RUFDSSxVQUFBO0FHd0M1QjtBSGpDWTtFQUNJLGVBQUE7QUdtQ2hCO0FIaENZO0VBQ0ksZUFBQTtBR2tDaEI7QUg1QkE7OzZCQUFBO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRytCSjtBSDdCSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBRytCUjtBSDNCQTs7NkJBQUE7QUFHQTtFQUNJLHNCQUFBO0FHOEJKO0FINUJJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUc4QlI7QUgxQkE7OzZCQUFBO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FHNkJKO0FIM0JJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUc2QlI7QUh6QkE7OzZCQUFBO0FBR0E7RUFDSTtJQUNJLG1CQUFBO0VHNEJOO0VIMUJNO0lBQ0ksZ0JBQUE7RUc0QlY7QUFDRjtBSHhCQTtFQUdRO0lBQ0ksc0JBQUE7RUd3QlY7RUh0QlU7SUFDSSx1QkFBQTtFR3dCZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGliL2NvbXBvbmVudC9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5JbXBvcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGUnO1xyXG5cclxuLypcclxuSXRlbSBQcm9kdWN0XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ucmVnLXByaWNlIHtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yb3ctcHJvZHVjdHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pdGVtLXByb2R1Y3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2VmZWZlZjtcclxuICAgIG1hcmdpbjogLTAuNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oXCJhbGwgMC41cyBlYXNlLWluLW91dFwiKTtcclxuXHJcbiAgICBhLmNsb3Nle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI5cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcclxuICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItY29udGVudDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xyXG5cclxuICAgICAgICAubWF0ZXJpYWwtaWNvbnMubWF0LWljb257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmstZnVsbHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjOWY5ZjlmO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZXtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG5cclxuICAgICAgICAub3ZlcmxheXtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gLTdweCBhdXRvO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zLm1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtbWluaS1mYWIsIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLypcclxuRW1wdHkgcHJvZHVjdFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmVtcHR5LXByb2R1Y3R7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNntcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuUGFnaW5hdGlvblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLndyYXAtcGFnaW5hdGlvbntcclxuICAgIHBhZGRpbmc6IDI1cHggMCAzMHB4IDA7XHJcblxyXG4gICAgcGFnaW5hdGlvbi1jb250cm9sc3tcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbkxvYWRpbmdcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi52YWxpZ24td3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcblJlc3BvbnNpdmVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBtZWRpYShtYXgtd2lkdGg6NDgwcHgpe1xyXG4gICAgLnJvdy1wcm9kdWN0ID4gLmNvbHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQxNXB4KXtcclxuICAgIC5yb3ctcHJvZHVjdHtcclxuXHJcbiAgICAgICAgLmNvbHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtLXByb2R1Y3R7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuSXRlbSBQcm9kdWN0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5yZWctcHJpY2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yb3ctcHJvZHVjdCB7XG4gIGJvcmRlcjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XG59XG5cbi5pdGVtLXByb2R1Y3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZmVmZWY7XG4gIG1hcmdpbjogLTAuNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4uaXRlbS1wcm9kdWN0IGEuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAyOXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTUwKVwiO1xuICAtd2Via2l0LW9wYWNpdHk6IDAuNTtcbiAgLWtodG1sLW9wYWNpdHk6IDAuNTtcbiAgLW1vei1vcGFjaXR5OiAwLjU7XG4gIC1tcy1vcGFjaXR5OiAwLjU7XG4gIC1vLW9wYWNpdHk6IDAuNTtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOGY4ZjhmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xufVxuLml0ZW0tcHJvZHVjdCBhLmNsb3NlIC5tYXRlcmlhbC1pY29ucy5tYXQtaWNvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xufVxuLml0ZW0tcHJvZHVjdCBhLmNsb3NlOmhvdmVyIHtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICAtd2Via2l0LW9wYWNpdHk6IDE7XG4gIC1raHRtbC1vcGFjaXR5OiAxO1xuICAtbW96LW9wYWNpdHk6IDE7XG4gIC1tcy1vcGFjaXR5OiAxO1xuICAtby1vcGFjaXR5OiAxO1xuICBvcGFjaXR5OiAxO1xufVxuLml0ZW0tcHJvZHVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uaXRlbS1wcm9kdWN0IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLml0ZW0tcHJvZHVjdCAubGluay1mdWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaXRlbS1wcm9kdWN0IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLml0ZW0tcHJvZHVjdCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICM5ZjlmOWY7XG59XG4uaXRlbS1wcm9kdWN0IC5wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuLml0ZW0tcHJvZHVjdCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuLml0ZW0tcHJvZHVjdCAuY29udGVudCAub3ZlcmxheSB7XG4gIGJvcmRlci10b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLml0ZW0tcHJvZHVjdCAuY29udGVudCAub3ZlcmxheSB1bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgYXV0byAtN3B4IGF1dG87XG59XG4uaXRlbS1wcm9kdWN0IC5jb250ZW50IC5vdmVybGF5IHVsIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMnB4O1xufVxuLml0ZW0tcHJvZHVjdCAuY29udGVudCAub3ZlcmxheSB1bCBsaSAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn1cbi5pdGVtLXByb2R1Y3QgLmNvbnRlbnQgLm92ZXJsYXkgdWwgbGkgLm1hdC1idXR0b24td3JhcHBlciAubWF0ZXJpYWwtaWNvbnMubWF0LWljb24ge1xuICBwYWRkaW5nOiAwO1xufVxuLml0ZW0tcHJvZHVjdCAuY29udGVudCAub3ZlcmxheSAubWF0ZXJpYWwtaWNvbnMubWF0LWljb24ge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG4uaXRlbS1wcm9kdWN0IC5jb250ZW50IC5vdmVybGF5IC5tYXQtYnV0dG9uLCAuaXRlbS1wcm9kdWN0IC5jb250ZW50IC5vdmVybGF5IC5tYXQtZmFiLCAuaXRlbS1wcm9kdWN0IC5jb250ZW50IC5vdmVybGF5IC5tYXQtaWNvbi1idXR0b24sIC5pdGVtLXByb2R1Y3QgLmNvbnRlbnQgLm92ZXJsYXkgLm1hdC1taW5pLWZhYiwgLml0ZW0tcHJvZHVjdCAuY29udGVudCAub3ZlcmxheSAubWF0LXJhaXNlZC1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qXG5FbXB0eSBwcm9kdWN0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5lbXB0eS1wcm9kdWN0IHtcbiAgcGFkZGluZzogMTAwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzk5OTtcbn1cbi5lbXB0eS1wcm9kdWN0IGgxLCAuZW1wdHktcHJvZHVjdCBoMiwgLmVtcHR5LXByb2R1Y3QgaDMsIC5lbXB0eS1wcm9kdWN0IGg0LCAuZW1wdHktcHJvZHVjdCBoNSwgLmVtcHR5LXByb2R1Y3QgaDYge1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG5QYWdpbmF0aW9uXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53cmFwLXBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAyNXB4IDAgMzBweCAwO1xufVxuLndyYXAtcGFnaW5hdGlvbiBwYWdpbmF0aW9uLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLypcbkxvYWRpbmdcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnZhbGlnbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi52YWxpZ24td3JhcHBlciAubWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKlxuUmVzcG9uc2l2ZVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnJvdy1wcm9kdWN0ID4gLmNvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuICAucm93LXByb2R1Y3QgPiAuY29sOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTVweCkge1xuICAucm93LXByb2R1Y3QgLmNvbCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAucm93LXByb2R1Y3QgLmNvbCAuaXRlbS1wcm9kdWN0IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/lib/component/product/product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lib/component/product/product.component.ts ***!
  \************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_data_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/data/product */ "./src/app/lib/service/data/product.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");






let ProductComponent = class ProductComponent {
    constructor(mainService) {
        this.mainService = mainService;
        // Property
        this.products = [];
        this.selectProduct = _service_data_product__WEBPACK_IMPORTED_MODULE_4__["Product"];
        this.togglezoom = false;
        this.loadingState = true;
        this.productState = false;
        this.blurproduct = false;
        this.showBtnClose = false;
        this.paginate = false;
        this.column = 'l3 s6';
        this.currentPage = 1;
        // Out Put
        this.detail = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    // Lifecycle
    ngOnInit() {
        this.fetch();
    }
    ngAfterViewInit() {
        this.updateProduct();
    }
    ngOnChanges() {
        this.updateProduct();
    }
    onLoad(event) {
        this.updateProduct();
    }
    // Update product filtered & on init
    updateProduct() {
        this.productUpdated = [];
        setTimeout(() => {
            if (this.row !== undefined) {
                let children = this.row.nativeElement.children;
                for (let i = 0; i < children.length; i++) {
                    if (this.productUpdated.indexOf(children[i].id) !== -1) {
                        return false;
                    }
                    this.productUpdated.push(children[i].id);
                }
            }
        }, 1000);
    }
    // Fetching
    fetch() {
        this.mainService.getProduct().subscribe(data => {
            this.products = [];
            lodash__WEBPACK_IMPORTED_MODULE_3__["map"](data, (x) => {
                this.products.push(x);
            });
            this.limitProduct(data);
            setTimeout(() => {
                this.loadingState = false;
                this.productState = true;
            }, 500);
        });
    }
    // Set Limit    
    limitProduct(product) {
        if (this.setlimit === undefined) {
            this.limit = product.length;
        }
        else {
            this.limit = this.setlimit;
        }
    }
    // Hover Product
    onHover(product) {
        this.selectProduct = product;
    }
    // Zoom Image
    viewProduct(id) {
        this.togglezoom = true;
        this.getId = id;
        this.blurproduct = true;
    }
    // Close Zoom
    closeZoom() {
        this.togglezoom = false;
        this.getId = null;
        this.blurproduct = false;
    }
    // Page Change
    onPageChange(e) {
        window.scrollTo(0, 0);
        this.updateProduct();
        this.pageChange.emit(e);
    }
    // buton close on click
    selectClose(e) {
        this.onRemove.emit(e);
        this.updateProduct();
    }
    // Detail Product
    detailProduct(product) {
        this.detail.emit(product);
    }
};
ProductComponent.ctorParameters = () => [
    { type: _service_product_service__WEBPACK_IMPORTED_MODULE_5__["productService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('row', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ProductComponent.prototype, "row", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProductComponent.prototype, "setlimit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ProductComponent.prototype, "showBtnClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ProductComponent.prototype, "paginate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _service_data_product__WEBPACK_IMPORTED_MODULE_4__["Product"])
], ProductComponent.prototype, "filter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ProductComponent.prototype, "column", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ProductComponent.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "detail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "pageChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProductComponent.prototype, "onRemove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:load', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ProductComponent.prototype, "onLoad", null);
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/lib/component/product/product.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('visibility', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(1)',
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'scale(0)',
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.2s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.1s'))
            ])
        ],
        styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/lib/component/product/product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_5__["productService"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/lib/directive/fullscreen.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/lib/directive/fullscreen.directive.ts ***!
  \*******************************************************/
/*! exports provided: FullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenDirective", function() { return FullscreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FullscreenDirective = class FullscreenDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.initHeightStyle();
    }
    // Window On Resize
    onResize(event) {
        this.initHeightStyle();
    }
    initHeightStyle() {
        var height = window.innerHeight;
        this.el.nativeElement.style.height = height + 'px';
    }
};
FullscreenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], FullscreenDirective.prototype, "onResize", null);
FullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[fullheight]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FullscreenDirective);



/***/ }),

/***/ "./src/app/lib/directive/lib-height.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/lib/directive/lib-height.directive.ts ***!
  \*******************************************************/
/*! exports provided: libHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libHeightDirective", function() { return libHeightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let libHeightDirective = class libHeightDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewChecked() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.libHeight);
    }
    onResize() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.libHeight);
    }
    matchHeight(parent, className) {
        // match height logic here
        if (!parent)
            return;
        const children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // reset all children height
        Array.from(children).forEach((x) => {
            x.style.height = 'initial';
        });
        // gather all height
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);
        // find max height
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);
        // apply max height
        Array.from(children)
            .forEach((x) => x.style.height = `${maxHeight}px`);
    }
};
libHeightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], libHeightDirective.prototype, "libHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], libHeightDirective.prototype, "onResize", null);
libHeightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[libHeight]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], libHeightDirective);



/***/ }),

/***/ "./src/app/lib/directive/match-height.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/lib/directive/match-height.directive.ts ***!
  \*********************************************************/
/*! exports provided: MatchHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatchHeightDirective = class MatchHeightDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewChecked() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }
    onResize() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }
    matchHeight(parent, className) {
        // match height logic here
        if (!parent)
            return;
        const children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // reset all children height
        Array.from(children).forEach((x) => {
            x.style.height = 'initial';
        });
        // gather all height
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);
        // find max height
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);
        // apply max height
        Array.from(children)
            .forEach((x) => x.style.height = `${maxHeight}px`);
    }
};
MatchHeightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MatchHeightDirective.prototype, "myMatchHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], MatchHeightDirective.prototype, "onResize", null);
MatchHeightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[myMatchHeight]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], MatchHeightDirective);



/***/ }),

/***/ "./src/app/lib/lib.module.ts":
/*!***********************************!*\
  !*** ./src/app/lib/lib.module.ts ***!
  \***********************************/
/*! exports provided: libModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libModule", function() { return libModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _directive_lib_height_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directive/lib-height.directive */ "./src/app/lib/directive/lib-height.directive.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _pipe_filter_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/filter-product */ "./src/app/lib/pipe/filter-product.ts");
/* harmony import */ var _component_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/product/product.component */ "./src/app/lib/component/product/product.component.ts");
/* harmony import */ var _component_grid_logo_grid_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/grid-logo/grid-logo.component */ "./src/app/lib/component/grid-logo/grid-logo.component.ts");
/* harmony import */ var _component_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/lightbox/lightbox.component */ "./src/app/lib/component/lightbox/lightbox.component.ts");
/* harmony import */ var _component_breadcumb_breadcumb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/breadcumb/breadcumb.component */ "./src/app/lib/component/breadcumb/breadcumb.component.ts");







// Vendor


// Directive

// Service

// Pipe

// Component




let libModule = class libModule {
};
libModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_10__["productService"]],
        declarations: [
            _component_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
            _directive_lib_height_directive__WEBPACK_IMPORTED_MODULE_9__["libHeightDirective"],
            _component_grid_logo_grid_logo_component__WEBPACK_IMPORTED_MODULE_13__["GridLogoComponent"],
            _component_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_14__["LightboxComponent"],
            _pipe_filter_product__WEBPACK_IMPORTED_MODULE_11__["productFilterPipe"],
            _component_breadcumb_breadcumb_component__WEBPACK_IMPORTED_MODULE_15__["BreadcumbComponent"],
        ],
        exports: [
            _component_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
            _component_grid_logo_grid_logo_component__WEBPACK_IMPORTED_MODULE_13__["GridLogoComponent"],
            _component_breadcumb_breadcumb_component__WEBPACK_IMPORTED_MODULE_15__["BreadcumbComponent"],
        ]
    })
], libModule);



/***/ }),

/***/ "./src/app/lib/pipe/filter-product.ts":
/*!********************************************!*\
  !*** ./src/app/lib/pipe/filter-product.ts ***!
  \********************************************/
/*! exports provided: productFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFilterPipe", function() { return productFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let productFilterPipe = class productFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter((item) => this.applyFilter(item, filter));
    }
    /**
     * Perform the filtering.
     *
     * @param {Product} product The product to compare to the filter.
     * @param {Product} filter The filter to apply.
     * @return {boolean} True if product satisfies filters, false if not.
     */
    applyFilter(product, filter) {
        for (let field in filter) {
            if (filter[field]) {
                // Filter by String
                if (typeof filter[field] === 'string') {
                    if (product[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'boolean') {
                    if (product[field] !== filter[field]) {
                        return false;
                    }
                    // Filter by Number  
                }
                else if (typeof filter[field] === 'number') {
                    // Filter Price
                    if (field == 'price') {
                        if (product[field] >= filter[field]) {
                            return false;
                        }
                        // Filter Number Only 
                    }
                    else {
                        if (product[field] !== filter[field]) {
                            return false;
                        }
                    }
                    // Filter by Size
                }
                else if (typeof filter[field] === 'object') {
                    if (filter[field].includes(product[field])) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
};
productFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'productfilter',
        pure: false
    })
], productFilterPipe);



/***/ }),

/***/ "./src/app/lib/service/cookie.service.ts":
/*!***********************************************!*\
  !*** ./src/app/lib/service/cookie.service.ts ***!
  \***********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let CookieService = class CookieService {
    constructor() {
        this.productsOrder = [];
        this.arrWishList = [];
        this.arrCompare = [];
        this.payed = '';
        this.updateCookie();
        this.initCookie();
    }
    // Update Cookie
    updateCookie() {
        this.cookies = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].getAll();
        this.keys = Object.keys(this.cookies);
    }
    // Add Cookie
    addCookie(cName, cValue) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set(cName, cValue);
        this.updateCookie();
        this.initCookie();
    }
    // Remove Cookie
    removeCookie(name) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete(name);
        this.updateCookie();
        this.initCookie();
    }
    // Initialize Cookie
    initCookie() {
        if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](this.cookies)) {
            this.productsOrder = [];
            this.arrWishList = [];
            this.arrCompare = [];
            // Products
            if (this.cookies['products'] != undefined) {
                let productsCart = JSON.parse(this.cookies['products']);
                lodash__WEBPACK_IMPORTED_MODULE_3__["map"](productsCart, (x) => {
                    return this.productsOrder.push(x);
                });
            }
            // Wish List
            if (this.cookies['wishlist'] != undefined) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.cookies['wishlist']);
                let wishList = JSON.parse(this.cookies['wishlist']);
                lodash__WEBPACK_IMPORTED_MODULE_3__["map"](wishList, (x) => {
                    this.arrWishList.push(x);
                });
            }
            // Compare
            if (this.cookies['compare'] != undefined) {
                lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"](this.cookies['compare']);
                let compareList = JSON.parse(this.cookies['compare']);
                lodash__WEBPACK_IMPORTED_MODULE_3__["map"](compareList, (x) => {
                    this.arrCompare.push(x);
                });
            }
            // Promo
            if (this.cookies['promo'] != undefined) {
                this.promo = this.cookies['promo'];
            }
            // Subtotal
            if (this.cookies['subtotal'] != undefined) {
                this.subtotal = Number(this.cookies['subtotal']);
            }
            // Promo Value
            if (this.cookies['promoValue'] != undefined) {
                this.promoValue = Number(this.cookies['promoValue']);
            }
            // Payed
            if (this.cookies['payed'] != undefined) {
                this.payed = this.cookies['payed'];
            }
        }
    }
};
CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CookieService);



/***/ }),

/***/ "./src/app/lib/service/data/product.ts":
/*!*********************************************!*\
  !*** ./src/app/lib/service/data/product.ts ***!
  \*********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
}


/***/ }),

/***/ "./src/app/lib/service/product.service.ts":
/*!************************************************!*\
  !*** ./src/app/lib/service/product.service.ts ***!
  \************************************************/
/*! exports provided: productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let productService = class productService {
    constructor(http) {
        this.http = http;
        this.base = './assets/json/';
    }
    // Get Products
    getProduct() {
        return this.http.get(this.base + 'product.json');
    }
    // Get Product By Id
    getIdProduct(id) {
        const promiseObj = new Promise((resolve, reject) => {
            this.getProduct().subscribe(products => {
                resolve(lodash__WEBPACK_IMPORTED_MODULE_3__["find"](products, { id: id }));
            });
        });
        return promiseObj;
    }
    // Get Product By Slug
    getSlugProduct(slug) {
        const promiseObj = new Promise((resolve, reject) => {
            this.getProduct().subscribe(products => {
                resolve(lodash__WEBPACK_IMPORTED_MODULE_3__["find"](products, { slug: slug }));
            });
        });
        return promiseObj;
    }
    // Get Logo
    getLogo() {
        return this.http.get(this.base + 'logo.json');
    }
    // Get Category
    getCategory() {
        return this.http.get(this.base + 'category.json');
    }
    // Get Color
    getColor() {
        return this.http.get(this.base + 'color.json');
    }
};
productService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
productService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], productService);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nWrap Not Found\n=========================== */\n.wrap-notfound {\n  padding: 0;\n  text-align: center;\n  background-image: url('brick-wall.png');\n  background-color: #fff;\n}\n.wrap-notfound .content {\n  padding: 100px 15px;\n  display: table;\n  margin: auto;\n}\n.wrap-notfound h1 {\n  font-size: 102px;\n}\n.wrap-notfound h1 small {\n  display: block;\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 400;\n  margin-top: 50px;\n}\n.wrap-notfound a {\n  margin: 5px;\n}\n/*\nResponisve\n=========================== */\n@media (max-height: 400px) {\n  .wrap-notfound {\n    height: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FDQUE7Ozs7Ozs7Ozs7OzsrREFBQTtBQ0FBOzs2QkFBQTtBQVVBOzs2QkFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QURMQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FIMUJBOzs2QkFBQTtBQUdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtBRzZCSjtBSDNCSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUc2QlI7QUgxQkk7RUFDSSxnQkFBQTtBRzRCUjtBSDFCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FHNEJaO0FIeEJJO0VBQ0ksV0FBQTtBRzBCUjtBSHRCQTs7NkJBQUE7QUFHQTtFQUNJO0lBQ0ksdUJBQUE7RUd5Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlJztcblxuLypcbldyYXAgTm90IEZvdW5kXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53cmFwLW5vdGZvdW5ke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy9icmljay13YWxsLnBuZycpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMTAwcHggMTVweDtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICBoMXtcbiAgICAgICAgZm9udC1zaXplOiAxMDJweDtcblxuICAgICAgICBzbWFsbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbn1cblxuLypcblJlc3BvbmlzdmVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQG1lZGlhKG1heC1oZWlnaHQ6NDAwcHgpIHtcbiAgICAud3JhcC1ub3Rmb3VuZHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4vLy8vXG4vLy8gQGF1dGhvciBNYXR0aGlldSBBdXNzYWd1ZWxcbi8vLyBAZ3JvdXAgc2Fzcy1jc3MzLW1peGluc1xuLy8vL1xuXG5cbi8vLyBBZGRzIGEgYnJvd3NlciBwcmVmaXggdG8gdGhlIHByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkcHJvcGVydHkgUHJvcGVydHlcbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSBWYWx1ZVxuXG5AbWl4aW4gY3NzMy1wcmVmaXgoJHByb3BlcnR5LCAkdmFsdWUpIHtcbiAgLXdlYmtpdC0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgIC1raHRtbC0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgLW1vei0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgIC1tcy0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgICAtby0jeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbiAgICAgICAgICAjeyRwcm9wZXJ0eX06ICN7JHZhbHVlfTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBHcmFkaWVudFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuXG5AbWl4aW4gYmFja2dyb3VuZC1ncmFkaWVudCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZDogJHN0YXJ0Q29sb3I7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgU2FmYXJpIDUuMSB0byA2LjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBPcGVyYSAxMS4xIHRvIDEyLjAgKi9cbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIEZpcmVmb3ggMy42IHRvIDE1ICovXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cbn1cblxuQG1peGluIGJsdXIoJGJsdXI6IDVweCl7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1vei1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbXMtZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgZmlsdGVyOiBibHVyKCRibHVyKTtcbn1cblxuLy8vIEJhY2tncm91bmQgSG9yaXpvbnRhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuXG5AbWl4aW4gYmFja2dyb3VuZC1ob3Jpem9udGFsKCRzdGFydENvbG9yOiAjM0MzQzNDLCAkZW5kQ29sb3I6ICM5OTk5OTkpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhcnRDb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgkc3RhcnRDb2xvciksIHRvKCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgIC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICAgICAgICAgbGluZWFyLWdyYWRpZW50KGxlZnQsICRzdGFydENvbG9yLCAkZW5kQ29sb3IpO1xuICAgIGZpbHRlcjogICAgICAgICAgICBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvclN0cj0nI3skc3RhcnRDb2xvcn0nLCBlbmRDb2xvclN0cj0nI3skZW5kQ29sb3J9JywgZ3JhZGllbnRUeXBlPScxJyk7XG59XG5cblxuLy8vIEJhY2tncm91bmQgUmFkaWFsXG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge1BlcmNlbnRhZ2V9ICRzdGFydFBvcyBbMCVdIC0gU3RhcnQgcG9zaXRpb25cbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkZW5kUG9zIFsxMDAlXSAtIEVuZCBwb3NpdGlvblxuXG5AbWl4aW4gYmFja2dyb3VuZC1yYWRpYWwoJHN0YXJ0Q29sb3I6ICNGRkZGRkYsICRzdGFydFBvczogMCUsICRlbmRDb2xvcjogIzAwMDAwMCwgJGVuZFBvczoxMDAlKSB7XG4gICAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsICRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKCRzdGFydFBvcywkc3RhcnRDb2xvciksIGNvbG9yLXN0b3AoJGVuZFBvcywkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG59XG5cblxuLy8vIEJhY2tncm91bmQgU2l6ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFsxMDAlXSAtIFdpZHRoXG4vLy8gQHBhcmFtIHtTaXplfSAkd2lkdGggWyR3aWR0aF0gLSBIZWlnaHRcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXNpemUoJHdpZHRoOiAxMDAlLCAkaGVpZ2h0OiAkd2lkdGgpIHtcbiAgQGlmIHR5cGUtb2YoJHdpZHRoKSA9PSAnbnVtYmVyJyBhbmQgJGhlaWdodCAhPSBudWxsIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYmFja2dyb3VuZC1zaXplJywgJHdpZHRoICRoZWlnaHQpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYmFja2dyb3VuZC1zaXplJywgJHdpZHRoKTtcbiAgfVxufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIENvbG9yIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgWzEwMCVdIC0gQ29sb3Jcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuODVdIC0gT3BhY2l0eVxuXG5AbWl4aW4gYmFja2dyb3VuZC1vcGFjaXR5KCRjb2xvcjogIzAwMCwgJG9wYWNpdHk6IDAuODUpIHtcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBCb3JkZXIgUmFkaXVzXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFs1cHhdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzOiA1cHgpIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm9yZGVyLXJhZGl1cycsICRyYWRpdXMpO1xufVxuXG5cbi8vLyBCb3JkZXIgUmFkaXVzIFNlcGFyYXRlXG4vLy8gQHBhcmFtIHtTaXplfSAkdG9wTGVmdFJhZGl1cyBbNXB4XSAtIFRvcCBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkdG9wUmlnaHRSYWRpdXMgWzVweF0gLSBUb3AgUmlnaHRcbi8vLyBAcGFyYW0ge1NpemV9ICRib3R0b21MZWZ0UmFkaXVzIFs1cHhdIC0gQm90dG9tIExlZnRcbi8vLyBAcGFyYW0ge1NpemV9ICRib3R0b21SaWdodFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBSaWdodFxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cy1zZXBhcmF0ZSgkdG9wTGVmdFJhZGl1czogNXB4LCAkdG9wUmlnaHRSYWRpdXM6IDVweCwgJGJvdHRvbUxlZnRSYWRpdXM6IDVweCwgJGJvdHRvbVJpZ2h0UmFkaXVzOiA1cHgpIHtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAkYm90dG9tTGVmdFJhZGl1cztcblxuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG59XG5cblxuLy8vIEJveFxuLy8vIEBwYXJhbSB7Kn0gJG9yaWVudCBbaG9yaXpvbnRhbF0gLSBPcmllbnRhdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHBhY2sgW2NlbnRlcl0gLSBQYWNrXG4vLy8gQHBhcmFtIHsqfSAkYWxpZ24gW2NlbnRlcl0gLSBBbGlnblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJveCgkb3JpZW50OiBob3Jpem9udGFsLCAkcGFjazogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IGJveDtcblxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LW9yaWVudCcsICRvcmllbnQpO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXBhY2snLCAkcGFjayk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtYWxpZ24nLCAkYWxpZ24pO1xufVxuXG5cbi8vLyBCb3ggUkdCQVxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJHIgWzYwXSAtIFJlZFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGcgWzNdIC0gR3JlZW5cbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRiIFsxMl0gLSBCbHVlXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjIzXSAtIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgWyMzQzNDM0NdIC0gQ29sb3JcblxuQG1peGluIGJveC1yZ2JhKCRyOiA2MCwgJGc6IDMsICRiOiAxMiwgJG9wYWNpdHk6IDAuMjMsICRjb2xvcjogIzNDM0MzQykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkciwgJGcsICRiLCAkb3BhY2l0eSk7XG4gICAgICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjeyRjb2xvcn0nLGVuZENvbG9yc3RyPScjeyRjb2xvcn0nKTtcbiAgICAgICAgICAgIHpvb206ICAgMTtcbn1cblxuXG4vLy8gQm94IFNoYWRvd1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHggWzJweF0gLSBYXG4vLy8gQHBhcmFtIHtTaXplfSAkeSBbMnB4XSAtIFlcbi8vLyBAcGFyYW0ge1NpemV9ICRibHVyIFs1cHhdIC0gQmx1clxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbcmdiYSgwLDAsMCwuNCldIC0gQ29sb3Jcbi8vLyBAcGFyYW0ge0Jvb2xlYW59ICRpbnNldCAtIEluc2V0XG5cbkBtaXhpbiBib3gtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCksICRpbnNldDogXCJcIikge1xuICBAaWYgKCRpbnNldCAhPSBcIlwiKSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAkaW5zZXQgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAkeCAkeSAkYmx1ciAkY29sb3IpO1xuICB9XG59XG5cblxuLy8vIEJveCBTaXppbmdcbi8vLyBAcGFyYW0geyp9ICR0eXBlIFtib3JkZXItYm94XSAtIFR5cGVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3gtc2l6aW5nKCR0eXBlOiBib3JkZXItYm94KSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2l6aW5nJywgJHR5cGUpO1xufVxuXG5cbi8vLyBDb2x1bW5zXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkY291bnQgWzNdIC0gQ291bnRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnYXAgWzEwXSAtIEdhcFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGNvbHVtbnMoJGNvdW50OiAzLCAkZ2FwOiAxMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnY29sdW1uLWNvdW50JywgJGNvdW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1nYXAnLCAkZ2FwKTtcbn1cblxuXG4vLy8gRG91YmxlIEJvcmRlcnNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JPbmUgWyMzQzNDM0NdIC0gQ29sb3IgT25lXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVHdvIFsjOTk5OTk5XSAtIENvbG9yIFR3b1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbMF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG5cbkBtaXhpbiBkb3VibGUtYm9yZGVycygkY29sb3JPbmU6ICMzQzNDM0MsICRjb2xvclR3bzogIzk5OTk5OSwgJHJhZGl1czogMCkge1xuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JPbmU7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCAwIDAgMCAxcHggJGNvbG9yVHdvKTtcblxuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCAkcmFkaXVzICk7XG59XG5cblxuLy8vIEZsZXhcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICR2YWx1ZSBbMV0gLSBWYWx1ZVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsZXgoJHZhbHVlOiAxKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtZmxleCcsICR2YWx1ZSk7XG59XG5cblxuLy8vIEZsaXBcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJHNjYWxlWCBbLTFdIC0gU2NhbGVYXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gZmxpcCgkc2NhbGVYOiAtMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgc2NhbGVYKCRzY2FsZVgpKTtcbiAgZmlsdGVyOiAgICAgICAgICAgIEZsaXBIO1xuICAtbXMtZmlsdGVyOiAgICAgICAgXCJGbGlwSFwiO1xufVxuXG5cbi8vLyBGb250IEZhY2Vcbi8vLyBAcGFyYW0ge0ZvbnR9ICRmb250RmFtaWx5IFtteUZvbnRdIC0gRm9udCBGYW1pbHlcbi8vLyBAcGFyYW0ge1N0cmluZ30gJGVvdEZpbGVTcmMgWydteUZvbnQuZW90J10gLSBFb3QgRmlsZSBTb3VyY2Vcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHdvZmZGaWxlU3JjIFsnbXlGb250LndvZmYnXSAtIFdvZmYgRmlsZSBTb3VyY2Vcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHR0ZkZpbGVTcmMgWydteUZvbnQudHRmJ10gLSBUdGYgRmlsZSBTb3VyY2Vcbi8vLyBAcGFyYW0ge1N0cmluZ30gJHN2Z0ZpbGVTcmMgWydteUZvbnQuc3ZnJ10gLSBTdmcgRmlsZSBTb3VyY2VcblxuQG1peGluIGZvbnQtZmFjZSgkZm9udEZhbWlseTogbXlGb250LCAkZW90RmlsZVNyYzogJ215Rm9udC5lb3QnLCAkd29mZkZpbGVTcmM6ICdteUZvbnQud29mZicsICR0dGZGaWxlU3JjOiAnbXlGb250LnR0ZicsICRzdmdGaWxlU3JjOiAnbXlGb250LnN2ZycsICRzdmdGb250SUQ6ICcjbXlGb250Jykge1xuICBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XG4gIHNyYzogdXJsKCRlb3RGaWxlU3JjKSAgZm9ybWF0KCdlb3QnKSxcbiAgICAgICB1cmwoJHdvZmZGaWxlU3JjKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICB1cmwoJHR0ZkZpbGVTcmMpICBmb3JtYXQoJ3RydWV0eXBlJyksXG4gICAgICAgdXJsKCRzdmdGaWxlU3JjICsgJHN2Z0ZvbnRJRCkgZm9ybWF0KCdzdmcnKTtcbn1cblxuXG4vLy8gT3BhY2l0eVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC41XSAtIE9wYWNpdHlcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBvcGFjaXR5KCRvcGFjaXR5OiAwLjUpIHtcbiAgICAkb3BhY2l0eU11bHRpcGxpZWQ6ICgkb3BhY2l0eSAqIDEwMCk7XG5cbiAgICBmaWx0ZXI6ICAgICAgICAgYWxwaGEob3BhY2l0eT0kb3BhY2l0eU11bHRpcGxpZWQpO1xuICAgIC1tcy1maWx0ZXI6ICAgICBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PVwiICsgJG9wYWNpdHlNdWx0aXBsaWVkICsgXCIpXCI7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ29wYWNpdHknLCAkb3BhY2l0eSk7XG59XG5cblxuLy8vIE91dGxpbmUgUmFkaXVzXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFs1cHhdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3V0bGluZS1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvdXRsaW5lLXJhZGl1cycsICRyYWRpdXMpO1xufVxuXG5cbi8vLyBSZXNpemVcbi8vLyBAcGFyYW0geyp9ICRkaXJlY3RvaW4gW2JvdGhdIC0gRGlyZWN0aW9uXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gcmVzaXplKCRkaXJlY3Rpb246IGJvdGgpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3Jlc2l6ZScsICRkaXJlY3Rpb24pO1xufVxuXG5cbi8vLyBSb3RhdGVcbi8vL1xuLy8vIENTUyBNYXRyaXggUm90YXRpb24gQ2FsY3VsYXRvciBodHRwOi8vd3d3LmJvb2dkZXNpZ24uY29tL2V4YW1wbGVzL3RyYW5zZm9ybXMvbWF0cml4LWNhbGN1bGF0b3IuaHRtbFxuLy8vIEBwYXJhbSB7RG91YmxlfSAkZGVnIFswXSAtIERlZ3JlZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTExIFswXSAtIE0xMVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTEyIFswXSAtIE0xMlxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTIxIFswXSAtIE0yMVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkbTIyIFswXSAtIE0yMlxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJvdGF0ZSgkZGVnOiAwLCAkbTExOiAwLCAkbTEyOiAwLCAkbTIxOiAwLCAkbTIyOiAwKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCByb3RhdGUoJGRlZyArIGRlZykpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoXG4gICAgICAgTTExPSN7JG0xMX0sIE0xMj0jeyRtMTJ9LCBNMjE9I3skbTIxfSwgTTIyPSN7JG0yMn0sIHNpemluZ01ldGhvZD0nYXV0byBleHBhbmQnKTtcbiAgICB6b29tOiAxO1xufVxuXG5cbi8vLyBUZXh0IFNoYWRvd1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHggWzJweF0gLSBYXG4vLy8gQHBhcmFtIHtTaXplfSAkeSBbMnB4XSAtIFlcbi8vLyBAcGFyYW0ge1NpemV9ICRibHVyIFsycHhdIC0gQmx1clxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbcmdiYSgwLDAsMCwuNCldIC0gQ29sb3JcblxuQG1peGluIHRleHQtc2hhZG93KCR4OiAycHgsICR5OiAycHgsICRibHVyOiA1cHgsICRjb2xvcjogcmdiYSgwLDAsMCwuNCkpIHtcbiAgICB0ZXh0LXNoYWRvdzogJHggJHkgJGJsdXIgJGNvbG9yO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm1cbi8vLyBAcGFyYW0ge0xpc3R9ICRwYXJhbXMgLSBQYXJhbXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHBhcmFtcykge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgJHBhcmFtcyk7XG59XG5cblxuLy8vIFRyYW5zZm9ybS1PcmlnaW5cbi8vLyBAcGFyYW0ge0xpc3R9ICRwYXJhbXMgLSBQYXJhbXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2Zvcm0tb3JpZ2luKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1vcmlnaW4nLCAkcGFyYW1zKTtcbn1cblxuXG4vLyBUcmFuc2Zvcm0tU3R5bGVcbi8vLyBAcGFyYW0ge0xpc3R9ICRwYXJhbXMgLSBQYXJhbXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2Zvcm0tc3R5bGUoJHN0eWxlOiBwcmVzZXJ2ZS0zZCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtLXN0eWxlJywgJHN0eWxlKTtcbn1cblxuLy8vIFRyYW5zaXRpb25cbi8vLyBAcGFyYW0ge0xpc3R9ICRwcm9wZXJ0aWVzIC0gUHJvcGVydGllc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnRpZXMuLi4pIHtcblxuICBAaWYgbGVuZ3RoKCRwcm9wZXJ0aWVzKSA+PSAxIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNpdGlvbicsICRwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNpdGlvbicsICBcImFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzXCIpO1xuICB9XG59XG5cblxuLy8vIFRyaXBsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUaHJlZSBbIzAwMDAwMF0gLSBDb2xvciBUaHJlZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbMF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGJvcmRlci1yYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmlwbGUtYm9yZGVycygkY29sb3JPbmU6ICMzQzNDM0MsICRjb2xvclR3bzogIzk5OTk5OSwgJGNvbG9yVGhyZWU6ICMwMDAwMDAsICRyYWRpdXM6IDApIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JPbmU7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyYWRpdXMpO1xuXG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaGFkb3cnLCBcIjAgMCAwIDFweCAjeyRjb2xvclR3b30sIDAgMCAwIDJweCAjeyRjb2xvclRocmVlfVwiKTtcbn1cblxuXG4vLy8gS2V5ZnJhbWVzXG4vLy8gQHBhcmFtIHsqfSAkYW5pbWF0aW9uLW5hbWUgLSBBbmltYXRpb24gbmFtZVxuLy8vIEBjb250ZW50IFtBbmltYXRpb24gY3NzXVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb24tbmFtZSkge1xuICBALXdlYmtpdC1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1zLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLy8gQW5pbWF0aW9uXG4vLy8gQHBhcmFtIHsqfSAkc3RyIC0gbmFtZSBkdXJhdGlvbiB0aW1pbmctZnVuY3Rpb24gZGVsYXkgaXRlcmF0aW9uLWNvdW50IGRpcmVjdGlvbiBmaWxsLW1vZGUgcGxheS1zdGF0ZSAoW2h0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl9hbmltYXRpb24uYXNwXShodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcCkpXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYW5pbWF0aW9uKCRzdHIpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2FuaW1hdGlvbicsICRzdHIpO1xufVxuIiwiLypcbkNvbG9yXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiRjb2xvci10aXRsZTogIzNmM2YzZjtcbiRjb2xvci1jb250ZW50OiAjOGY4ZjhmO1xuJGNvbG9yLWdyYXk6ICNlZmVmZWY7XG4kY29sb3ItYmctZ3JheTogI2ZhZmFmYTtcbiRjb2xvci1iZy1ncmF5MjogI2Y5ZjlmOTtcbiRjb2xvci1iZy1ncmF5MzogI2Y1ZjVmNTtcblxuLypcbkZvbnQgRmFtaWx5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufSIsIi8qXG5JbXBvcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTYXNzIENTUzMgTWl4aW5zISBUaGUgQ3Jvc3MtQnJvd3NlciBDU1MzIFNhc3MgTGlicmFyeVxuICBCeTogTWF0dGhpZXUgQXVzc2FndWVsLCBodHRwOi8vd3d3Lm15bmFtZWlzbWF0dGhpZXUuY29tLCBAbWF0dGhpZXVfdHdlZXRzXG5cbiAgTGlzdCBvZiBDU1MzIFNhc3MgTWl4aW5zIEZpbGUgdG8gYmUgQGltcG9ydGVkIGFuZCBAaW5jbHVkZWQgYXMgeW91IG5lZWRcblxuICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpYnJhcnkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgdXNlIG9mIENTUzMgb24gZGlmZmVyZW50IGJyb3dzZXJzIGF2b2lkaW5nIEhBUkQgVE8gUkVBRCBhbmQgTkVWRVJcbiAgRU5ESU5HIGNzcyBmaWxlc1xuXG4gIG5vdGU6IEFsbCBDU1MzIFByb3BlcnRpZXMgYXJlIGJlaW5nIHN1cHBvcnRlZCBieSBTYWZhcmkgNVxuICBtb3JlIGluZm86IGh0dHA6Ly93d3cuZmluZG1lYnlpcC5jb20vbGl0bXVzLyNjc3MzLXByb3BlcnRpZXNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLypcbkNvbG9yXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi8qXG5XcmFwIE5vdCBGb3VuZFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ud3JhcC1ub3Rmb3VuZCB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy9icmljay13YWxsLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi53cmFwLW5vdGZvdW5kIC5jb250ZW50IHtcbiAgcGFkZGluZzogMTAwcHggMTVweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi53cmFwLW5vdGZvdW5kIGgxIHtcbiAgZm9udC1zaXplOiAxMDJweDtcbn1cbi53cmFwLW5vdGZvdW5kIGgxIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ud3JhcC1ub3Rmb3VuZCBhIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi8qXG5SZXNwb25pc3ZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LWhlaWdodDogNDAwcHgpIHtcbiAgLndyYXAtbm90Zm91bmQge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let NotFoundComponent = class NotFoundComponent {
    constructor(meta) {
        this.meta = meta;
    }
    ngOnInit() {
        this.meta.addTag({ name: 'keyword', content: 'Angushop - Angular Shop Templatet' });
        this.meta.addTag({ name: 'description', content: 'Angushop - Not Found Shop Template' });
        this.meta.addTag({ name: 'robots', content: 'index, follow' });
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/product/cart/cart.component.scss":
/*!**************************************************!*\
  !*** ./src/app/product/cart/cart.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nTable Cart\n=========================== */\ntable.table-cart th {\n  border-top: solid 1px #efefef;\n  border-bottom: solid 1px #efefef;\n  text-align: center;\n  font-weight: 500;\n  color: #3f3f3f;\n}\ntable.table-cart th:first-child {\n  text-align: left;\n}\ntable.table-cart th:last-child {\n  text-align: right;\n}\ntable.table-cart tbody tr {\n  border-bottom: solid 1px #efefef;\n}\ntable.table-cart tbody tr td {\n  position: relative;\n  padding: 20px;\n  vertical-align: top;\n  text-align: center;\n}\ntable.table-cart tbody tr td.empty {\n  text-align: center !important;\n  padding-top: 55px;\n  padding-bottom: 55px;\n}\ntable.table-cart tbody tr td.empty .content {\n  text-transform: none;\n  color: #999;\n  margin-bottom: 0;\n  margin-top: 25px;\n}\ntable.table-cart tbody tr td:first-child {\n  text-align: left;\n}\ntable.table-cart tbody tr td:last-child {\n  text-align: right;\n  padding-right: 0;\n}\ntable.table-cart tbody tr td.item {\n  padding-left: 75px;\n  width: 350px;\n  height: 90px;\n  text-align: left;\n}\ntable.table-cart tbody tr td.item .title {\n  margin-bottom: 5px;\n  text-transform: capitalize;\n}\ntable.table-cart tbody tr td.item p:last-child {\n  margin-bottom: 0;\n}\ntable.table-cart tbody tr td.item .wrap-img {\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  position: absolute;\n  top: 15px;\n  left: 0;\n  background: #fff;\n}\ntable.table-cart tbody tr td.item .wrap-img img {\n  width: 100%;\n}\ntable.table-cart tbody tr td button {\n  width: 25px;\n  height: 25px;\n  line-height: 0;\n  font-size: 14px;\n  padding-top: 0;\n}\ntable.table-cart tbody tr td button mat-icon {\n  position: relative;\n  top: -6px;\n}\n/*\nInput Group\n=========================== */\n.input-group {\n  padding: 10px 0;\n  position: relative;\n  border: solid 1px #e0e0e0;\n}\n.input-group input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  padding: 0 30px 0 15px;\n  font-weight: 400;\n  font-size: 14px;\n  background: transparent;\n}\n.input-group .icon {\n  position: absolute;\n  right: 5px;\n  top: 11px;\n  font-size: 20px;\n  cursor: pointer !important;\n}\nmat-chip {\n  cursor: pointer;\n  outline: 0;\n}\nmat-chip:focus {\n  outline: 0;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 920px) {\n  table.table-cart {\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 568px) {\n  table.table-cart {\n    margin-bottom: 40px;\n  }\n  table.table-cart thead {\n    display: none;\n  }\n  table.table-cart tr td {\n    height: auto !important;\n    padding: 5px 0 !important;\n    display: block;\n    width: 100%;\n    text-align: center !important;\n  }\n  table.table-cart tr td .wrap-img {\n    display: block;\n    width: 150px !important;\n    height: 150px !important;\n    margin: 0 auto 10px;\n    position: relative !important;\n    top: 0 !important;\n  }\n  table.table-cart tr td:first-child {\n    padding-top: 20px !important;\n  }\n  table.table-cart tr td:last-child {\n    padding-bottom: 20px !important;\n  }\n  table.table-cart tr td.item {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zLnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7NkJBQUE7QUNBQTs7Ozs7Ozs7Ozs7OytEQUFBO0FDQUE7OzZCQUFBO0FBVUE7OzZCQUFBO0FBS0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRExBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QUgxQkE7OzZCQUFBO0FBS0k7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNFYk07QUN3Q2Q7QUh6QlE7RUFDSSxnQkFBQTtBRzJCWjtBSHhCUTtFQUNJLGlCQUFBO0FHMEJaO0FIdEJJO0VBQ0ksZ0NBQUE7QUd3QlI7QUh0QlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FHd0JaO0FIdEJZO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FHd0JoQjtBSHRCZ0I7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FHd0JwQjtBSHBCWTtFQUNJLGdCQUFBO0FHc0JoQjtBSG5CWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUdxQmhCO0FIbEJZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FHb0JoQjtBSGxCZ0I7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FHb0JwQjtBSGpCZ0I7RUFDSSxnQkFBQTtBR21CcEI7QUhoQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBR2tCcEI7QUhoQm9CO0VBQ0ksV0FBQTtBR2tCeEI7QUhiWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FHZWhCO0FIYmdCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FHZXBCO0FIUkE7OzZCQUFBO0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBR1dKO0FIVEk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FHV1I7QUhSSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUdVUjtBSE5BO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUdTSjtBSFBJO0VBQ0ksVUFBQTtBR1NSO0FITEE7OzZCQUFBO0FBR0E7RUFDSTtJQUNJLG1CQUFBO0VHUU47QUFDRjtBSExBO0VBQ0k7SUFDSSxtQkFBQTtFR09OO0VITE07SUFDSSxhQUFBO0VHT1Y7RUhKTTtJQUNJLHVCQUFBO0lBQ0EseUJBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLDZCQUFBO0VHTVY7RUhKVTtJQUNJLGNBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtJQUNBLGlCQUFBO0VHTWQ7RUhIVTtJQUNJLDRCQUFBO0VHS2Q7RUhGVTtJQUNJLCtCQUFBO0VHSWQ7RUhEVTtJQUNJLHNCQUFBO0VHR2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkltcG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy9jc3MzLW1peGlucyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZSc7XG5cbi8qXG5UYWJsZSBDYXJ0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbnRhYmxlLnRhYmxlLWNhcnR7XG5cbiAgICB0aHtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlZmVmZWY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWZlZmVmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItdGl0bGU7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5IHRye1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWZlZjtcblxuICAgICAgICB0ZHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAmLmVtcHR5e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1NXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1NXB4O1xuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJi5pdGVte1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNzVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAud3JhcC1pbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICAgICAgICAgICAgICBtYXQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuSW5wdXQgR3JvdXBcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmlucHV0LWdyb3Vwe1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcblxuICAgIGlucHV0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHggMCAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5pY29ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogMTFweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbm1hdC1jaGlwe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgJjpmb2N1c3tcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICB9XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCl7XG4gICAgdGFibGUudGFibGUtY2FydHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NjhweCl7XG4gICAgdGFibGUudGFibGUtY2FydHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgICAgICB0aGVhZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB0ciB0ZHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgLndyYXAtaW1ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLml0ZW17XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0gICAgIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTYXNzIENTUzMgTWl4aW5zISBUaGUgQ3Jvc3MtQnJvd3NlciBDU1MzIFNhc3MgTGlicmFyeVxuICBCeTogTWF0dGhpZXUgQXVzc2FndWVsLCBodHRwOi8vd3d3Lm15bmFtZWlzbWF0dGhpZXUuY29tLCBAbWF0dGhpZXVfdHdlZXRzXG5cbiAgTGlzdCBvZiBDU1MzIFNhc3MgTWl4aW5zIEZpbGUgdG8gYmUgQGltcG9ydGVkIGFuZCBAaW5jbHVkZWQgYXMgeW91IG5lZWRcblxuICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpYnJhcnkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgdXNlIG9mIENTUzMgb24gZGlmZmVyZW50IGJyb3dzZXJzIGF2b2lkaW5nIEhBUkQgVE8gUkVBRCBhbmQgTkVWRVJcbiAgRU5ESU5HIGNzcyBmaWxlc1xuXG4gIG5vdGU6IEFsbCBDU1MzIFByb3BlcnRpZXMgYXJlIGJlaW5nIHN1cHBvcnRlZCBieSBTYWZhcmkgNVxuICBtb3JlIGluZm86IGh0dHA6Ly93d3cuZmluZG1lYnlpcC5jb20vbGl0bXVzLyNjc3MzLXByb3BlcnRpZXNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbi8vLy9cbi8vLyBAYXV0aG9yIE1hdHRoaWV1IEF1c3NhZ3VlbFxuLy8vIEBncm91cCBzYXNzLWNzczMtbWl4aW5zXG4vLy8vXG5cblxuLy8vIEFkZHMgYSBicm93c2VyIHByZWZpeCB0byB0aGUgcHJvcGVydHlcbi8vLyBAcGFyYW0geyp9ICRwcm9wZXJ0eSBQcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIFZhbHVlXG5cbkBtaXhpbiBjc3MzLXByZWZpeCgkcHJvcGVydHksICR2YWx1ZSkge1xuICAtd2Via2l0LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgLWtodG1sLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAtbW96LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgLW1zLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgIC1vLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIEdyYWRpZW50XG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRzdGFydENvbG9yOiAjM0MzQzNDLCAkZW5kQ29sb3I6ICM5OTk5OTkpIHtcbiAgICBiYWNrZ3JvdW5kOiAkc3RhcnRDb2xvcjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBTYWZhcmkgNS4xIHRvIDYuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIE9wZXJhIDExLjEgdG8gMTIuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgRmlyZWZveCAzLjYgdG8gMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuXG5AbWl4aW4gYmx1cigkYmx1cjogNXB4KXtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG4vLy8gQmFja2dyb3VuZCBIb3Jpem9udGFsXG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWhvcml6b250YWwoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdGFydENvbG9yO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCRzdGFydENvbG9yKSwgdG8oJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgIC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgZmlsdGVyOiAgICAgICAgICAgIHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjeyRzdGFydENvbG9yfScsIGVuZENvbG9yU3RyPScjeyRlbmRDb2xvcn0nLCBncmFkaWVudFR5cGU9JzEnKTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBSYWRpYWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJHN0YXJ0UG9zIFswJV0gLSBTdGFydCBwb3NpdGlvblxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3Jcbi8vLyBAcGFyYW0ge1BlcmNlbnRhZ2V9ICRlbmRQb3MgWzEwMCVdIC0gRW5kIHBvc2l0aW9uXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXJhZGlhbCgkc3RhcnRDb2xvcjogI0ZGRkZGRiwgJHN0YXJ0UG9zOiAwJSwgJGVuZENvbG9yOiAjMDAwMDAwLCAkZW5kUG9zOjEwMCUpIHtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywgJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoJHN0YXJ0UG9zLCRzdGFydENvbG9yKSwgY29sb3Itc3RvcCgkZW5kUG9zLCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBTaXplXG4vLy8gQHBhcmFtIHtTaXplfSAkd2lkdGggWzEwMCVdIC0gV2lkdGhcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbJHdpZHRoXSAtIEhlaWdodFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkd2lkdGg6IDEwMCUsICRoZWlnaHQ6ICR3aWR0aCkge1xuICBAaWYgdHlwZS1vZigkd2lkdGgpID09ICdudW1iZXInIGFuZCAkaGVpZ2h0ICE9IG51bGwge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGggJGhlaWdodCk7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGgpO1xuICB9XG59XG5cblxuLy8vIEJhY2tncm91bmQgQ29sb3IgT3BhY2l0eVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbMTAwJV0gLSBDb2xvclxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC44NV0gLSBPcGFjaXR5XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLW9wYWNpdHkoJGNvbG9yOiAjMDAwLCAkb3BhY2l0eTogMC44NSkge1xuICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG59XG5cblxuLy8vIEJvcmRlciBSYWRpdXNcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzVweF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3JkZXItcmFkaXVzJywgJHJhZGl1cyk7XG59XG5cblxuLy8vIEJvcmRlciBSYWRpdXMgU2VwYXJhdGVcbi8vLyBAcGFyYW0ge1NpemV9ICR0b3BMZWZ0UmFkaXVzIFs1cHhdIC0gVG9wIExlZnRcbi8vLyBAcGFyYW0ge1NpemV9ICR0b3BSaWdodFJhZGl1cyBbNXB4XSAtIFRvcCBSaWdodFxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbUxlZnRSYWRpdXMgWzVweF0gLSBCb3R0b20gTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbVJpZ2h0UmFkaXVzIFs1cHhdIC0gQm90dG9tIFJpZ2h0XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzLXNlcGFyYXRlKCR0b3BMZWZ0UmFkaXVzOiA1cHgsICR0b3BSaWdodFJhZGl1czogNXB4LCAkYm90dG9tTGVmdFJhZGl1czogNXB4LCAkYm90dG9tUmlnaHRSYWRpdXM6IDVweCkge1xuICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6ICAkYm90dG9tTGVmdFJhZGl1cztcblxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAkYm90dG9tTGVmdFJhZGl1cztcbn1cblxuXG4vLy8gQm94XG4vLy8gQHBhcmFtIHsqfSAkb3JpZW50IFtob3Jpem9udGFsXSAtIE9yaWVudGF0aW9uXG4vLy8gQHBhcmFtIHsqfSAkcGFjayBbY2VudGVyXSAtIFBhY2tcbi8vLyBAcGFyYW0geyp9ICRhbGlnbiBbY2VudGVyXSAtIEFsaWduXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94KCRvcmllbnQ6IGhvcml6b250YWwsICRwYWNrOiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogYm94O1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtb3JpZW50JywgJG9yaWVudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtcGFjaycsICRwYWNrKTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1hbGlnbicsICRhbGlnbik7XG59XG5cblxuLy8vIEJveCBSR0JBXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkciBbNjBdIC0gUmVkXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZyBbM10gLSBHcmVlblxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGIgWzEyXSAtIEJsdWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuMjNdIC0gT3BhY2l0eVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbIzNDM0MzQ10gLSBDb2xvclxuXG5AbWl4aW4gYm94LXJnYmEoJHI6IDYwLCAkZzogMywgJGI6IDEyLCAkb3BhY2l0eTogMC4yMywgJGNvbG9yOiAjM0MzQzNDKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRyLCAkZywgJGIsICRvcGFjaXR5KTtcbiAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JGNvbG9yfScsZW5kQ29sb3JzdHI9JyN7JGNvbG9yfScpO1xuICAgICAgICAgICAgem9vbTogICAxO1xufVxuXG5cbi8vLyBCb3ggU2hhZG93XG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJsdXIgWzVweF0gLSBCbHVyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxuLy8vIEBwYXJhbSB7Qm9vbGVhbn0gJGluc2V0IC0gSW5zZXRcblxuQG1peGluIGJveC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSwgJGluc2V0OiBcIlwiKSB7XG4gIEBpZiAoJGluc2V0ICE9IFwiXCIpIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsICRpbnNldCAkeCAkeSAkYmx1ciAkY29sb3IpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH1cbn1cblxuXG4vLy8gQm94IFNpemluZ1xuLy8vIEBwYXJhbSB7Kn0gJHR5cGUgW2JvcmRlci1ib3hdIC0gVHlwZVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJveC1zaXppbmcoJHR5cGU6IGJvcmRlci1ib3gpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaXppbmcnLCAkdHlwZSk7XG59XG5cblxuLy8vIENvbHVtbnNcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRjb3VudCBbM10gLSBDb3VudFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGdhcCBbMTBdIC0gR2FwXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gY29sdW1ucygkY291bnQ6IDMsICRnYXA6IDEwKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tY291bnQnLCAkY291bnQpO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnY29sdW1uLWdhcCcsICRnYXApO1xufVxuXG5cbi8vLyBEb3VibGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFswXSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGJvcmRlci1yYWRpdXNcblxuQG1peGluIGRvdWJsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkcmFkaXVzOiAwKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcblxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIDAgMCAwIDFweCAkY29sb3JUd28pO1xuXG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoICRyYWRpdXMgKTtcbn1cblxuXG4vLy8gRmxleFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJHZhbHVlIFsxXSAtIFZhbHVlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gZmxleCgkdmFsdWU6IDEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1mbGV4JywgJHZhbHVlKTtcbn1cblxuXG4vLy8gRmxpcFxuLy8vIEBwYXJhbSB7RG91YmxlfSAkc2NhbGVYIFstMV0gLSBTY2FsZVhcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGlwKCRzY2FsZVg6IC0xKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCBzY2FsZVgoJHNjYWxlWCkpO1xuICBmaWx0ZXI6ICAgICAgICAgICAgRmxpcEg7XG4gIC1tcy1maWx0ZXI6ICAgICAgICBcIkZsaXBIXCI7XG59XG5cblxuLy8vIEZvbnQgRmFjZVxuLy8vIEBwYXJhbSB7Rm9udH0gJGZvbnRGYW1pbHkgW215Rm9udF0gLSBGb250IEZhbWlseVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZW90RmlsZVNyYyBbJ215Rm9udC5lb3QnXSAtIEVvdCBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkd29mZkZpbGVTcmMgWydteUZvbnQud29mZiddIC0gV29mZiBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdHRmRmlsZVNyYyBbJ215Rm9udC50dGYnXSAtIFR0ZiBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkc3ZnRmlsZVNyYyBbJ215Rm9udC5zdmcnXSAtIFN2ZyBGaWxlIFNvdXJjZVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250RmFtaWx5OiBteUZvbnQsICRlb3RGaWxlU3JjOiAnbXlGb250LmVvdCcsICR3b2ZmRmlsZVNyYzogJ215Rm9udC53b2ZmJywgJHR0ZkZpbGVTcmM6ICdteUZvbnQudHRmJywgJHN2Z0ZpbGVTcmM6ICdteUZvbnQuc3ZnJywgJHN2Z0ZvbnRJRDogJyNteUZvbnQnKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcbiAgc3JjOiB1cmwoJGVvdEZpbGVTcmMpICBmb3JtYXQoJ2VvdCcpLFxuICAgICAgIHVybCgkd29mZkZpbGVTcmMpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgkdHRmRmlsZVNyYykgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJHN2Z0ZpbGVTcmMgKyAkc3ZnRm9udElEKSBmb3JtYXQoJ3N2ZycpO1xufVxuXG5cbi8vLyBPcGFjaXR5XG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjVdIC0gT3BhY2l0eVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHk6IDAuNSkge1xuICAgICRvcGFjaXR5TXVsdGlwbGllZDogKCRvcGFjaXR5ICogMTAwKTtcblxuICAgIGZpbHRlcjogICAgICAgICBhbHBoYShvcGFjaXR5PSRvcGFjaXR5TXVsdGlwbGllZCk7XG4gICAgLW1zLWZpbHRlcjogICAgIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9XCIgKyAkb3BhY2l0eU11bHRpcGxpZWQgKyBcIilcIjtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3BhY2l0eScsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gT3V0bGluZSBSYWRpdXNcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzVweF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBvdXRsaW5lLXJhZGl1cygkcmFkaXVzOiA1cHgpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ291dGxpbmUtcmFkaXVzJywgJHJhZGl1cyk7XG59XG5cblxuLy8vIFJlc2l6ZVxuLy8vIEBwYXJhbSB7Kn0gJGRpcmVjdG9pbiBbYm90aF0gLSBEaXJlY3Rpb25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByZXNpemUoJGRpcmVjdGlvbjogYm90aCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgncmVzaXplJywgJGRpcmVjdGlvbik7XG59XG5cblxuLy8vIFJvdGF0ZVxuLy8vXG4vLy8gQ1NTIE1hdHJpeCBSb3RhdGlvbiBDYWxjdWxhdG9yIGh0dHA6Ly93d3cuYm9vZ2Rlc2lnbi5jb20vZXhhbXBsZXMvdHJhbnNmb3Jtcy9tYXRyaXgtY2FsY3VsYXRvci5odG1sXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRkZWcgWzBdIC0gRGVncmVlXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTEgWzBdIC0gTTExXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTIgWzBdIC0gTTEyXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMjEgWzBdIC0gTTIxXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMjIgWzBdIC0gTTIyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gcm90YXRlKCRkZWc6IDAsICRtMTE6IDAsICRtMTI6IDAsICRtMjE6IDAsICRtMjI6IDApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHJvdGF0ZSgkZGVnICsgZGVnKSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChcbiAgICAgICBNMTE9I3skbTExfSwgTTEyPSN7JG0xMn0sIE0yMT0jeyRtMjF9LCBNMjI9I3skbTIyfSwgc2l6aW5nTWV0aG9kPSdhdXRvIGV4cGFuZCcpO1xuICAgIHpvb206IDE7XG59XG5cblxuLy8vIFRleHQgU2hhZG93XG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJsdXIgWzJweF0gLSBCbHVyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSkge1xuICAgIHRleHQtc2hhZG93OiAkeCAkeSAkYmx1ciAkY29sb3I7XG59XG5cblxuLy8vIFRyYW5zZm9ybVxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybSgkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCAkcGFyYW1zKTtcbn1cblxuXG4vLy8gVHJhbnNmb3JtLU9yaWdpblxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHBhcmFtcykge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtLW9yaWdpbicsICRwYXJhbXMpO1xufVxuXG5cbi8vIFRyYW5zZm9ybS1TdHlsZVxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkc3R5bGU6IHByZXNlcnZlLTNkKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tc3R5bGUnLCAkc3R5bGUpO1xufVxuXG4vLy8gVHJhbnNpdGlvblxuLy8vIEBwYXJhbSB7TGlzdH0gJHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydGllcy4uLikge1xuXG4gIEBpZiBsZW5ndGgoJHByb3BlcnRpZXMpID49IDEge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgJHByb3BlcnRpZXMpO1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgIFwiYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHNcIik7XG4gIH1cbn1cblxuXG4vLy8gVHJpcGxlIEJvcmRlcnNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JPbmUgWyMzQzNDM0NdIC0gQ29sb3IgT25lXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVHdvIFsjOTk5OTk5XSAtIENvbG9yIFR3b1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclRocmVlIFsjMDAwMDAwXSAtIENvbG9yIFRocmVlXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFswXSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyaXBsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkY29sb3JUaHJlZTogIzAwMDAwMCwgJHJhZGl1czogMCkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHJhZGl1cyk7XG5cbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIFwiMCAwIDAgMXB4ICN7JGNvbG9yVHdvfSwgMCAwIDAgMnB4ICN7JGNvbG9yVGhyZWV9XCIpO1xufVxuXG5cbi8vLyBLZXlmcmFtZXNcbi8vLyBAcGFyYW0geyp9ICRhbmltYXRpb24tbmFtZSAtIEFuaW1hdGlvbiBuYW1lXG4vLy8gQGNvbnRlbnQgW0FuaW1hdGlvbiBjc3NdXG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbi1uYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vLyBBbmltYXRpb25cbi8vLyBAcGFyYW0geyp9ICRzdHIgLSBuYW1lIGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheSBpdGVyYXRpb24tY291bnQgZGlyZWN0aW9uIGZpbGwtbW9kZSBwbGF5LXN0YXRlIChbaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3BdKGh0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl9hbmltYXRpb24uYXNwKSlcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYW5pbWF0aW9uJywgJHN0cik7XG59XG4iLCIvKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGNvbG9yLXRpdGxlOiAjM2YzZjNmO1xuJGNvbG9yLWNvbnRlbnQ6ICM4ZjhmOGY7XG4kY29sb3ItZ3JheTogI2VmZWZlZjtcbiRjb2xvci1iZy1ncmF5OiAjZmFmYWZhO1xuJGNvbG9yLWJnLWdyYXkyOiAjZjlmOWY5O1xuJGNvbG9yLWJnLWdyYXkzOiAjZjVmNWY1O1xuXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59IiwiLypcbkltcG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbkZvbnQgRmFtaWx5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLypcblRhYmxlIENhcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xudGFibGUudGFibGUtY2FydCB0aCB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjZWZlZmVmO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWZlZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzNmM2YzZjtcbn1cbnRhYmxlLnRhYmxlLWNhcnQgdGg6Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudGFibGUudGFibGUtY2FydCB0aDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG50YWJsZS50YWJsZS1jYXJ0IHRib2R5IHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZmVmZWY7XG59XG50YWJsZS50YWJsZS1jYXJ0IHRib2R5IHRyIHRkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50YWJsZS50YWJsZS1jYXJ0IHRib2R5IHRyIHRkLmVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1NXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cbnRhYmxlLnRhYmxlLWNhcnQgdGJvZHkgdHIgdGQuZW1wdHkgLmNvbnRlbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG50YWJsZS50YWJsZS1jYXJ0IHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRhYmxlLnRhYmxlLWNhcnQgdGJvZHkgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxudGFibGUudGFibGUtY2FydCB0Ym9keSB0ciB0ZC5pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnRhYmxlLnRhYmxlLWNhcnQgdGJvZHkgdHIgdGQuaXRlbSAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxudGFibGUudGFibGUtY2FydCB0Ym9keSB0ciB0ZC5pdGVtIHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG50YWJsZS50YWJsZS1jYXJ0IHRib2R5IHRyIHRkLml0ZW0gLndyYXAtaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG50YWJsZS50YWJsZS1jYXJ0IHRib2R5IHRyIHRkLml0ZW0gLndyYXAtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGFibGUudGFibGUtY2FydCB0Ym9keSB0ciB0ZCBidXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbnRhYmxlLnRhYmxlLWNhcnQgdGJvZHkgdHIgdGQgYnV0dG9uIG1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02cHg7XG59XG5cbi8qXG5JbnB1dCBHcm91cFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uaW5wdXQtZ3JvdXAge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcbn1cbi5pbnB1dC1ncm91cCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDAgMzBweCAwIDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaW5wdXQtZ3JvdXAgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMTFweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxubWF0LWNoaXAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG59XG5tYXQtY2hpcDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICB0YWJsZS50YWJsZS1jYXJ0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgdGFibGUudGFibGUtY2FydCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuICB0YWJsZS50YWJsZS1jYXJ0IHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHRhYmxlLnRhYmxlLWNhcnQgdHIgdGQge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUudGFibGUtY2FydCB0ciB0ZCAud3JhcC1pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICB9XG4gIHRhYmxlLnRhYmxlLWNhcnQgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGFibGUudGFibGUtY2FydCB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICB9XG4gIHRhYmxlLnRhYmxlLWNhcnQgdHIgdGQuaXRlbSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/cart/cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/product/cart/cart.component.ts ***!
  \************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let CartComponent = class CartComponent {
    constructor(cookie, snackBar) {
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.productsOrder = [];
        this.promoValue = 0;
        this.promoInit = "";
    }
    ngOnInit() {
        var products = this.cookie['productsOrder'];
        lodash__WEBPACK_IMPORTED_MODULE_4__["map"](products, (x) => {
            if (x.quantity >= x.stock) {
                return x.quantity = x.stock;
            }
            return x.slug = lodash__WEBPACK_IMPORTED_MODULE_4__["kebabCase"](x.slug);
        });
        this.productsOrder = products;
        this.cookie.addCookie('subtotal', JSON.stringify(this.total));
        this.initTotal(this.productsOrder);
    }
    // InitSubtotal
    initTotal(products) {
        var prices = [];
        lodash__WEBPACK_IMPORTED_MODULE_4__["map"](products, (x) => {
            return prices.push(x['price'] * x['quantity']);
        });
        // Subtotal
        this.subTotal = lodash__WEBPACK_IMPORTED_MODULE_4__["reduce"](prices, function (sum, n) {
            return sum + n;
        }, 0);
        // Total
        this.total = this.subTotal - this.promoValue;
        this.cookie.addCookie('subtotal', JSON.stringify(this.subTotal));
    }
    // On Chage Quantity
    onChage(product) {
        if (product.quantity == null || product.quantity == 0) {
            product.quantity = 1;
        }
        if (product.quantity >= product.stock) {
            product.quantity = product.stock;
        }
        this.initTotal(this.productsOrder);
        this.cookie.addCookie('products', JSON.stringify(this.productsOrder));
    }
    // Delete Product on cart
    deleteProduct(index) {
        lodash__WEBPACK_IMPORTED_MODULE_4__["remove"](this.productsOrder, (n) => {
            return n.id == index;
        });
        this.initTotal(this.productsOrder);
        this.cookie.addCookie('products', JSON.stringify(this.productsOrder));
        if (this.productsOrder.length == 0) {
            this.promoValue = 0;
            this.promoInit = "";
            this.total = 0;
        }
    }
    // Snack Bar
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
CartComponent.ctorParameters = () => [
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/product/cart/cart.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CartComponent);



/***/ }),

/***/ "./src/app/product/compare/compare.component.scss":
/*!********************************************************!*\
  !*** ./src/app/product/compare/compare.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nCompare Product\n=========================== */\n.compare-product > .box-page > .row {\n  display: block;\n  margin: 0;\n}\n.compare-product > .box-page > .row > .col {\n  padding: 0;\n}\n.compare-product > .box-page > .row > .col > .row {\n  margin: 0;\n  padding: 0;\n}\n.compare-product > .box-page > .row > .col > .row .col {\n  padding: 0 1px;\n}\n.compare-product .wrap-table {\n  width: 100%;\n}\n.compare-product table.table-compare {\n  margin: 0;\n  border: solid 1px #efefef;\n  width: auto;\n}\n.compare-product table.table-compare tr td {\n  border-left: solid 1px #efefef;\n  border-right: solid 1px #efefef;\n  border-bottom: dashed 1px #efefef;\n  padding: 15px 20px;\n  vertical-align: top;\n  text-align: center;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\n.compare-product table.table-compare tr td:first-child {\n  font-weight: bold;\n}\n.compare-product table.table-compare tr td.empty {\n  text-align: center;\n  vertical-align: middle;\n  width: 100%;\n}\n.compare-product table.table-compare tr td.empty .title {\n  margin-bottom: 0;\n  margin-top: 20px;\n  text-transform: none;\n  color: #999;\n}\n.compare-product table.table-compare tr td.info {\n  width: 200px;\n  max-width: 200px;\n  min-width: 200px;\n  text-align: center;\n  background: #fff;\n  vertical-align: middle;\n  padding: 25px 30px;\n}\n.compare-product table.table-compare tr td.info p {\n  font-weight: normal;\n}\n.compare-product table.table-compare tr td.info .counter {\n  margin-bottom: 5px;\n  letter-spacing: 0;\n  text-transform: none;\n}\n.compare-product table.table-compare tr td.info button {\n  width: 30px;\n  height: 30px;\n}\n.compare-product table.table-compare tr td.info button mat-icon {\n  position: relative;\n  top: -2px;\n}\n.compare-product table.table-compare tr td.wrap-img {\n  position: relative;\n  padding: 0;\n  overflow: hidden;\n}\n.compare-product table.table-compare tr td.wrap-img img {\n  width: 100%;\n  margin-bottom: -10px;\n}\n.compare-product table.table-compare tr td.wrap-img a.close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 29px !important;\n  height: 29px !important;\n  filter: alpha(opacity=50);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  -webkit-opacity: 0.5;\n  -khtml-opacity: 0.5;\n  -moz-opacity: 0.5;\n  -ms-opacity: 0.5;\n  -o-opacity: 0.5;\n  opacity: 0.5;\n  background: #fff !important;\n  color: #8f8f8f;\n  border: solid 1px #efefef;\n}\n.compare-product table.table-compare tr td.wrap-img a.close .material-icons.mat-icon {\n  padding: 0;\n  position: relative;\n  top: -4px;\n}\n.compare-product table.table-compare tr td.wrap-img a.close:hover {\n  filter: alpha(opacity=100);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  -webkit-opacity: 1;\n  -khtml-opacity: 1;\n  -moz-opacity: 1;\n  -ms-opacity: 1;\n  -o-opacity: 1;\n  opacity: 1;\n}\n.compare-product table.table-compare tr td .title {\n  margin-bottom: 5px;\n  text-transform: capitalize;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-transform: capitalize;\n  text-align: center;\n}\n.compare-product table.table-compare tr td .title a {\n  text-decoration: none !important;\n  color: #3f3f3f;\n}\n.compare-product table.table-compare tr td p:last-child {\n  margin-bottom: 0;\n}\n/*\nLoading\n=========================== */\n.valign-wrapper {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff;\n}\n.valign-wrapper mat-spinner {\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin: auto;\n}\n/*\nInput Slider \n=========================== */\n.wrap-slider {\n  padding-left: 180px;\n  margin-bottom: 0;\n  margin-top: 15px;\n}\n.wrap-slider mat-slider {\n  width: 200px;\n  display: block;\n  margin: auto;\n}\n.wrap-slider small {\n  display: table;\n  margin: auto;\n  margin-top: -10px;\n  margin-bottom: 0;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 480px) {\n  table.table-compare tr td.info {\n    width: 130px !important;\n    max-width: 130px !important;\n    padding-right: 5px !important;\n    padding-left: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zLnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy92YXJpYWJsZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L2NvbXBhcmUvY29tcGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7NkJBQUE7QUNBQTs7Ozs7Ozs7Ozs7OytEQUFBO0FDQUE7OzZCQUFBO0FBVUE7OzZCQUFBO0FBS0E7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBRExBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QUh6QkE7OzZCQUFBO0FBSUk7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBRzJCUjtBSHpCUTtFQUNJLFVBQUE7QUcyQlo7QUh6Qlk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBRzJCaEI7QUh6QmdCO0VBQ0ksY0FBQTtBRzJCcEI7QUhyQkk7RUFDSSxXQUFBO0FHdUJSO0FIcEJJO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBR3NCTjtBSG5CWTtFQUNJLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQ25CZCx3Q0FBQTtFQUtRLGdDQUFBO0FFeUNWO0FIeEJnQjtFQUNJLGlCQUFBO0FHMEJwQjtBSHZCZ0I7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBR3lCcEI7QUh2Qm9CO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBR3lCeEI7QUhyQmdCO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBR3VCcEI7QUhyQm9CO0VBQ0ksbUJBQUE7QUd1QnhCO0FIcEJvQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBR3NCeEI7QUhuQm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUdxQnhCO0FIbkJ3QjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBR3FCNUI7QUhoQmdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUdrQnBCO0FIaEJvQjtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBR2tCeEI7QUhmb0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQ2dLcEIseUJBQUE7RUFDQSxpRUFBQTtFQXJQRixvQkFBQTtFQUNDLG1CQUFBO0VBQ0UsaUJBQUE7RUFDQyxnQkFBQTtFQUNDLGVBQUE7RUFDRyxZQUFBO0VEaUZjLDJCQUFBO0VBQ0EsY0U3R1I7RUY4R1EseUJBQUE7QUd3QnhCO0FIdEJ3QjtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUd3QjVCO0FIckJ3QjtFQ29KcEIsMEJBQUE7RUFDQSxrRUFBQTtFQXJQRixrQkFBQTtFQUNDLGlCQUFBO0VBQ0UsZUFBQTtFQUNDLGNBQUE7RUFDQyxhQUFBO0VBQ0csVUFBQTtBRTBIVjtBSHpCZ0I7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUcyQnBCO0FIekJvQjtFQUNJLGdDQUFBO0VBQ0EsY0V2SVY7QUNrS2Q7QUh2QmdCO0VBQ0ksZ0JBQUE7QUd5QnBCO0FIbEJBOzs2QkFBQTtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBR3FCSjtBSG5CSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUdxQk47QUhqQkE7OzZCQUFBO0FBR0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUdvQko7QUhsQkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUdvQlI7QUhqQkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUdtQlI7QUhmQTs7NkJBQUE7QUFHQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSwyQkFBQTtJQUNBLDZCQUFBO0lBQ0EsNEJBQUE7RUdrQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkltcG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy9jc3MzLW1peGlucyc7XG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZSc7XG5cblxuLypcbkNvbXBhcmUgUHJvZHVjdFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uY29tcGFyZS1wcm9kdWN0e1xuICAgID4gLmJveC1wYWdlID4gLnJvd3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICA+IC5jb2x7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICA+IC5yb3d7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgICAgICAuY29se1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud3JhcC10YWJsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgdGFibGUudGFibGUtY29tcGFyZXtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlZmVmZWY7ICAgICBcbiAgICAgIHdpZHRoOiBhdXRvOyAgXG5cbiAgICAgICAgdHJ7XG4gICAgICAgICAgICB0ZHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICNlZmVmZWY7IFxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNlZmVmZWY7IFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggI2VmZWZlZjsgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oXCJhbGwgMC41cyBlYXNlLWluLW91dFwiKTsgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmLmVtcHR5e1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuaW5mb3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMzBweDtcblxuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jb3VudGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi53cmFwLWltZ3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhLmNsb3Nle1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjlweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvcGFjaXR5KDAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zLm1hdC1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgb3BhY2l0eSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItdGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHA6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qXG5Mb2FkaW5nXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi52YWxpZ24td3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgbWF0LXNwaW5uZXIge1xuICAgICAgd2lkdGg6IDUwcHg7IFxuICAgICAgaGVpZ2h0OiA1MHB4OyBcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuLypcbklucHV0IFNsaWRlciBcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXAtc2xpZGVye1xuICAgIHBhZGRpbmctbGVmdDogMTgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgbWF0LXNsaWRlcntcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIHNtYWxse1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOjQ4MHB4KXtcbiAgICB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkLmluZm97XG4gICAgICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuQ29tcGFyZSBQcm9kdWN0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5jb21wYXJlLXByb2R1Y3QgPiAuYm94LXBhZ2UgPiAucm93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbn1cbi5jb21wYXJlLXByb2R1Y3QgPiAuYm94LXBhZ2UgPiAucm93ID4gLmNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29tcGFyZS1wcm9kdWN0ID4gLmJveC1wYWdlID4gLnJvdyA+IC5jb2wgPiAucm93IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmNvbXBhcmUtcHJvZHVjdCA+IC5ib3gtcGFnZSA+IC5yb3cgPiAuY29sID4gLnJvdyAuY29sIHtcbiAgcGFkZGluZzogMCAxcHg7XG59XG4uY29tcGFyZS1wcm9kdWN0IC53cmFwLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tcGFyZS1wcm9kdWN0IHRhYmxlLnRhYmxlLWNvbXBhcmUge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZmVmZWY7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmNvbXBhcmUtcHJvZHVjdCB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZWZlZmVmO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjZWZlZmVmO1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4ICNlZmVmZWY7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLmNvbXBhcmUtcHJvZHVjdCB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29tcGFyZS1wcm9kdWN0IHRhYmxlLnRhYmxlLWNvbXBhcmUgdHIgdGQuZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbXBhcmUtcHJvZHVjdCB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkLmVtcHR5IC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBjb2xvcjogIzk5OTtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZC5pbmZvIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZC5pbmZvIHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNvbXBhcmUtcHJvZHVjdCB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkLmluZm8gLmNvdW50ZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZC5pbmZvIGJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29tcGFyZS1wcm9kdWN0IHRhYmxlLnRhYmxlLWNvbXBhcmUgdHIgdGQuaW5mbyBidXR0b24gbWF0LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZC53cmFwLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZC53cmFwLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG4uY29tcGFyZS1wcm9kdWN0IHRhYmxlLnRhYmxlLWNvbXBhcmUgdHIgdGQud3JhcC1pbWcgYS5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDI5cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NTApXCI7XG4gIC13ZWJraXQtb3BhY2l0eTogMC41O1xuICAta2h0bWwtb3BhY2l0eTogMC41O1xuICAtbW96LW9wYWNpdHk6IDAuNTtcbiAgLW1zLW9wYWNpdHk6IDAuNTtcbiAgLW8tb3BhY2l0eTogMC41O1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4ZjhmOGY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlZmVmZWY7XG59XG4uY29tcGFyZS1wcm9kdWN0IHRhYmxlLnRhYmxlLWNvbXBhcmUgdHIgdGQud3JhcC1pbWcgYS5jbG9zZSAubWF0ZXJpYWwtaWNvbnMubWF0LWljb24ge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZC53cmFwLWltZyBhLmNsb3NlOmhvdmVyIHtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MTAwKVwiO1xuICAtd2Via2l0LW9wYWNpdHk6IDE7XG4gIC1raHRtbC1vcGFjaXR5OiAxO1xuICAtbW96LW9wYWNpdHk6IDE7XG4gIC1tcy1vcGFjaXR5OiAxO1xuICAtby1vcGFjaXR5OiAxO1xuICBvcGFjaXR5OiAxO1xufVxuLmNvbXBhcmUtcHJvZHVjdCB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkIC50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZCAudGl0bGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzNmM2YzZjtcbn1cbi5jb21wYXJlLXByb2R1Y3QgdGFibGUudGFibGUtY29tcGFyZSB0ciB0ZCBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vKlxuTG9hZGluZ1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udmFsaWduLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnZhbGlnbi13cmFwcGVyIG1hdC1zcGlubmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLypcbklucHV0IFNsaWRlciBcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXAtc2xpZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi53cmFwLXNsaWRlciBtYXQtc2xpZGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLndyYXAtc2xpZGVyIHNtYWxsIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICB0YWJsZS50YWJsZS1jb21wYXJlIHRyIHRkLmluZm8ge1xuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/product/compare/compare.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product/compare/compare.component.ts ***!
  \******************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let CompareComponent = class CompareComponent {
    constructor(productService, cookie, snackBar) {
        this.productService = productService;
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.productState = true;
        this.loadingState = false;
        this.disablePrev = true;
        this.productView = 0;
        this.products = [];
        this.productCompare = [];
    }
    ngOnInit() {
        this.productCompare = this.cookie['arrCompare'];
        this.setSlice();
        this.fetchProduct();
    }
    ngAfterViewInit() {
        // this.loading.nativeElement.style.height = (window.innerHeight * 0.5) + 'px';  
        this.setWidthColumn();
    }
    // Fetch
    fetchProduct() {
        this.productService.getProduct().subscribe(product => {
            lodash__WEBPACK_IMPORTED_MODULE_4__["map"](this.cookie['arrCompare'], (x, i) => {
                let findProduct = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](product, (c) => {
                    return c['index'] == x;
                });
                this.products.push(findProduct);
            });
            this.totalProduct = this.products.length;
            if (this.totalProduct <= this.endSlice) {
                this.disableNext = true;
            }
        });
    }
    // On Select Remove
    onSelectRemove(e) {
        let getIndex = this.productCompare.indexOf(e['index']);
        this.productCompare.splice(getIndex, 1);
        this.products.splice(getIndex, 1);
        this.cookie.addCookie('compare', JSON.stringify(this.productCompare));
        this.openSnackBar(e.productName, 'Deleted from compare');
        this.totalProduct = this.products.length;
        setTimeout(() => {
            this.setSlice();
            this.setWidthColumn();
            if (this.totalProduct <= this.endSlice) {
                this.disableNext = true;
                this.disablePrev = true;
            }
        }, 500);
    }
    // Snack Bar
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    // Event Listener
    onResize(event) {
        this.setSlice();
        this.setWidthColumn();
        if (this.totalProduct <= this.endSlice) {
            this.disableNext = true;
            this.disablePrev = true;
        }
    }
    // Setting Slice
    setSlice() {
        let width = window.innerWidth;
        if (width > 1023) {
            this.startSlice = 0;
            this.endSlice = 3;
        }
        else if (width < 1023 && width > 483) {
            this.startSlice = 0;
            this.endSlice = 2;
        }
        else if (width < 483) {
            this.startSlice = 0;
            this.endSlice = 1;
        }
        this.disablePrev = true;
        this.disableNext = false;
    }
    // Set Width
    setWidthColumn() {
        let width = window.innerWidth;
        let showproduct;
        let infoWidth;
        if (width > 1023) {
            showproduct = 3;
            infoWidth = 200;
        }
        else if (width < 1023 && width > 483) {
            showproduct = 2;
            infoWidth = 200;
        }
        else if (width < 483) {
            showproduct = 1;
            infoWidth = 130;
        }
        let firstElement = this.table.nativeElement.firstElementChild;
        let columns = firstElement.children[1].children;
        let wrapWidth = (this.wraptable.nativeElement.clientWidth - infoWidth) / showproduct;
        setTimeout(() => {
            for (let i = 0; i < columns.length; i++) {
                firstElement.children[1].children[i].children[0].style.width = wrapWidth + 'px';
            }
            for (let i = 0; i < firstElement.children[0].children.length; i++) {
                firstElement.children[0].children[i].style.maxWidth = wrapWidth + 'px';
            }
            this.productView = showproduct;
            if (this.products.length <= this.productView) {
                this.productView = this.products.length;
            }
        }, 100);
    }
    // Previous View
    prevView() {
        if (this.startSlice != 0) {
            this.startSlice = this.startSlice - 1;
            this.endSlice = this.endSlice - 1;
            this.disablePrev = false;
            if (this.startSlice == 0) {
                this.disablePrev = true;
            }
        }
        this.disableNext = false;
        this.setWidthColumn();
    }
    // Next View
    nextView() {
        if (this.endSlice != this.totalProduct) {
            this.startSlice = this.startSlice + 1;
            this.endSlice = this.endSlice + 1;
            this.disableNext = false;
            if (this.endSlice == this.totalProduct) {
                this.disableNext = true;
            }
        }
        this.disablePrev = false;
        this.setWidthColumn();
    }
};
CompareComponent.ctorParameters = () => [
    { type: _lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"] },
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CompareComponent.prototype, "table", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wraptable', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CompareComponent.prototype, "wraptable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loading', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CompareComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CompareComponent.prototype, "onResize", null);
CompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compare',
        template: __webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/compare/compare.component.html"),
        providers: [_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"]],
        styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/product/compare/compare.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"],
        _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], CompareComponent);



/***/ }),

/***/ "./src/app/product/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/product/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy9jc3MzLW1peGlucy5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs2QkFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7K0RBQUE7QUNBQTs7NkJBQUE7QUFVQTs7NkJBQUE7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FETEE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkltcG9ydFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZSc7IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTYXNzIENTUzMgTWl4aW5zISBUaGUgQ3Jvc3MtQnJvd3NlciBDU1MzIFNhc3MgTGlicmFyeVxuICBCeTogTWF0dGhpZXUgQXVzc2FndWVsLCBodHRwOi8vd3d3Lm15bmFtZWlzbWF0dGhpZXUuY29tLCBAbWF0dGhpZXVfdHdlZXRzXG5cbiAgTGlzdCBvZiBDU1MzIFNhc3MgTWl4aW5zIEZpbGUgdG8gYmUgQGltcG9ydGVkIGFuZCBAaW5jbHVkZWQgYXMgeW91IG5lZWRcblxuICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpYnJhcnkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgdXNlIG9mIENTUzMgb24gZGlmZmVyZW50IGJyb3dzZXJzIGF2b2lkaW5nIEhBUkQgVE8gUkVBRCBhbmQgTkVWRVJcbiAgRU5ESU5HIGNzcyBmaWxlc1xuXG4gIG5vdGU6IEFsbCBDU1MzIFByb3BlcnRpZXMgYXJlIGJlaW5nIHN1cHBvcnRlZCBieSBTYWZhcmkgNVxuICBtb3JlIGluZm86IGh0dHA6Ly93d3cuZmluZG1lYnlpcC5jb20vbGl0bXVzLyNjc3MzLXByb3BlcnRpZXNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbi8vLy9cbi8vLyBAYXV0aG9yIE1hdHRoaWV1IEF1c3NhZ3VlbFxuLy8vIEBncm91cCBzYXNzLWNzczMtbWl4aW5zXG4vLy8vXG5cblxuLy8vIEFkZHMgYSBicm93c2VyIHByZWZpeCB0byB0aGUgcHJvcGVydHlcbi8vLyBAcGFyYW0geyp9ICRwcm9wZXJ0eSBQcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIFZhbHVlXG5cbkBtaXhpbiBjc3MzLXByZWZpeCgkcHJvcGVydHksICR2YWx1ZSkge1xuICAtd2Via2l0LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgLWtodG1sLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAtbW96LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgLW1zLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgIC1vLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIEdyYWRpZW50XG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRzdGFydENvbG9yOiAjM0MzQzNDLCAkZW5kQ29sb3I6ICM5OTk5OTkpIHtcbiAgICBiYWNrZ3JvdW5kOiAkc3RhcnRDb2xvcjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBTYWZhcmkgNS4xIHRvIDYuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIE9wZXJhIDExLjEgdG8gMTIuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgRmlyZWZveCAzLjYgdG8gMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuXG5AbWl4aW4gYmx1cigkYmx1cjogNXB4KXtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG4vLy8gQmFja2dyb3VuZCBIb3Jpem9udGFsXG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWhvcml6b250YWwoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdGFydENvbG9yO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCRzdGFydENvbG9yKSwgdG8oJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgIC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgZmlsdGVyOiAgICAgICAgICAgIHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjeyRzdGFydENvbG9yfScsIGVuZENvbG9yU3RyPScjeyRlbmRDb2xvcn0nLCBncmFkaWVudFR5cGU9JzEnKTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBSYWRpYWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJHN0YXJ0UG9zIFswJV0gLSBTdGFydCBwb3NpdGlvblxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3Jcbi8vLyBAcGFyYW0ge1BlcmNlbnRhZ2V9ICRlbmRQb3MgWzEwMCVdIC0gRW5kIHBvc2l0aW9uXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXJhZGlhbCgkc3RhcnRDb2xvcjogI0ZGRkZGRiwgJHN0YXJ0UG9zOiAwJSwgJGVuZENvbG9yOiAjMDAwMDAwLCAkZW5kUG9zOjEwMCUpIHtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywgJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoJHN0YXJ0UG9zLCRzdGFydENvbG9yKSwgY29sb3Itc3RvcCgkZW5kUG9zLCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBTaXplXG4vLy8gQHBhcmFtIHtTaXplfSAkd2lkdGggWzEwMCVdIC0gV2lkdGhcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbJHdpZHRoXSAtIEhlaWdodFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkd2lkdGg6IDEwMCUsICRoZWlnaHQ6ICR3aWR0aCkge1xuICBAaWYgdHlwZS1vZigkd2lkdGgpID09ICdudW1iZXInIGFuZCAkaGVpZ2h0ICE9IG51bGwge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGggJGhlaWdodCk7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGgpO1xuICB9XG59XG5cblxuLy8vIEJhY2tncm91bmQgQ29sb3IgT3BhY2l0eVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbMTAwJV0gLSBDb2xvclxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC44NV0gLSBPcGFjaXR5XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLW9wYWNpdHkoJGNvbG9yOiAjMDAwLCAkb3BhY2l0eTogMC44NSkge1xuICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG59XG5cblxuLy8vIEJvcmRlciBSYWRpdXNcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzVweF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3JkZXItcmFkaXVzJywgJHJhZGl1cyk7XG59XG5cblxuLy8vIEJvcmRlciBSYWRpdXMgU2VwYXJhdGVcbi8vLyBAcGFyYW0ge1NpemV9ICR0b3BMZWZ0UmFkaXVzIFs1cHhdIC0gVG9wIExlZnRcbi8vLyBAcGFyYW0ge1NpemV9ICR0b3BSaWdodFJhZGl1cyBbNXB4XSAtIFRvcCBSaWdodFxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbUxlZnRSYWRpdXMgWzVweF0gLSBCb3R0b20gTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbVJpZ2h0UmFkaXVzIFs1cHhdIC0gQm90dG9tIFJpZ2h0XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzLXNlcGFyYXRlKCR0b3BMZWZ0UmFkaXVzOiA1cHgsICR0b3BSaWdodFJhZGl1czogNXB4LCAkYm90dG9tTGVmdFJhZGl1czogNXB4LCAkYm90dG9tUmlnaHRSYWRpdXM6IDVweCkge1xuICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6ICAkYm90dG9tTGVmdFJhZGl1cztcblxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAkYm90dG9tTGVmdFJhZGl1cztcbn1cblxuXG4vLy8gQm94XG4vLy8gQHBhcmFtIHsqfSAkb3JpZW50IFtob3Jpem9udGFsXSAtIE9yaWVudGF0aW9uXG4vLy8gQHBhcmFtIHsqfSAkcGFjayBbY2VudGVyXSAtIFBhY2tcbi8vLyBAcGFyYW0geyp9ICRhbGlnbiBbY2VudGVyXSAtIEFsaWduXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94KCRvcmllbnQ6IGhvcml6b250YWwsICRwYWNrOiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogYm94O1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtb3JpZW50JywgJG9yaWVudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtcGFjaycsICRwYWNrKTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1hbGlnbicsICRhbGlnbik7XG59XG5cblxuLy8vIEJveCBSR0JBXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkciBbNjBdIC0gUmVkXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZyBbM10gLSBHcmVlblxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGIgWzEyXSAtIEJsdWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuMjNdIC0gT3BhY2l0eVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbIzNDM0MzQ10gLSBDb2xvclxuXG5AbWl4aW4gYm94LXJnYmEoJHI6IDYwLCAkZzogMywgJGI6IDEyLCAkb3BhY2l0eTogMC4yMywgJGNvbG9yOiAjM0MzQzNDKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRyLCAkZywgJGIsICRvcGFjaXR5KTtcbiAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JGNvbG9yfScsZW5kQ29sb3JzdHI9JyN7JGNvbG9yfScpO1xuICAgICAgICAgICAgem9vbTogICAxO1xufVxuXG5cbi8vLyBCb3ggU2hhZG93XG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJsdXIgWzVweF0gLSBCbHVyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxuLy8vIEBwYXJhbSB7Qm9vbGVhbn0gJGluc2V0IC0gSW5zZXRcblxuQG1peGluIGJveC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSwgJGluc2V0OiBcIlwiKSB7XG4gIEBpZiAoJGluc2V0ICE9IFwiXCIpIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsICRpbnNldCAkeCAkeSAkYmx1ciAkY29sb3IpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH1cbn1cblxuXG4vLy8gQm94IFNpemluZ1xuLy8vIEBwYXJhbSB7Kn0gJHR5cGUgW2JvcmRlci1ib3hdIC0gVHlwZVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJveC1zaXppbmcoJHR5cGU6IGJvcmRlci1ib3gpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaXppbmcnLCAkdHlwZSk7XG59XG5cblxuLy8vIENvbHVtbnNcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRjb3VudCBbM10gLSBDb3VudFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGdhcCBbMTBdIC0gR2FwXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gY29sdW1ucygkY291bnQ6IDMsICRnYXA6IDEwKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tY291bnQnLCAkY291bnQpO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnY29sdW1uLWdhcCcsICRnYXApO1xufVxuXG5cbi8vLyBEb3VibGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFswXSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGJvcmRlci1yYWRpdXNcblxuQG1peGluIGRvdWJsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkcmFkaXVzOiAwKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcblxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIDAgMCAwIDFweCAkY29sb3JUd28pO1xuXG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoICRyYWRpdXMgKTtcbn1cblxuXG4vLy8gRmxleFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJHZhbHVlIFsxXSAtIFZhbHVlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gZmxleCgkdmFsdWU6IDEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1mbGV4JywgJHZhbHVlKTtcbn1cblxuXG4vLy8gRmxpcFxuLy8vIEBwYXJhbSB7RG91YmxlfSAkc2NhbGVYIFstMV0gLSBTY2FsZVhcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGlwKCRzY2FsZVg6IC0xKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCBzY2FsZVgoJHNjYWxlWCkpO1xuICBmaWx0ZXI6ICAgICAgICAgICAgRmxpcEg7XG4gIC1tcy1maWx0ZXI6ICAgICAgICBcIkZsaXBIXCI7XG59XG5cblxuLy8vIEZvbnQgRmFjZVxuLy8vIEBwYXJhbSB7Rm9udH0gJGZvbnRGYW1pbHkgW215Rm9udF0gLSBGb250IEZhbWlseVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZW90RmlsZVNyYyBbJ215Rm9udC5lb3QnXSAtIEVvdCBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkd29mZkZpbGVTcmMgWydteUZvbnQud29mZiddIC0gV29mZiBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdHRmRmlsZVNyYyBbJ215Rm9udC50dGYnXSAtIFR0ZiBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkc3ZnRmlsZVNyYyBbJ215Rm9udC5zdmcnXSAtIFN2ZyBGaWxlIFNvdXJjZVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250RmFtaWx5OiBteUZvbnQsICRlb3RGaWxlU3JjOiAnbXlGb250LmVvdCcsICR3b2ZmRmlsZVNyYzogJ215Rm9udC53b2ZmJywgJHR0ZkZpbGVTcmM6ICdteUZvbnQudHRmJywgJHN2Z0ZpbGVTcmM6ICdteUZvbnQuc3ZnJywgJHN2Z0ZvbnRJRDogJyNteUZvbnQnKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcbiAgc3JjOiB1cmwoJGVvdEZpbGVTcmMpICBmb3JtYXQoJ2VvdCcpLFxuICAgICAgIHVybCgkd29mZkZpbGVTcmMpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgkdHRmRmlsZVNyYykgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJHN2Z0ZpbGVTcmMgKyAkc3ZnRm9udElEKSBmb3JtYXQoJ3N2ZycpO1xufVxuXG5cbi8vLyBPcGFjaXR5XG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjVdIC0gT3BhY2l0eVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHk6IDAuNSkge1xuICAgICRvcGFjaXR5TXVsdGlwbGllZDogKCRvcGFjaXR5ICogMTAwKTtcblxuICAgIGZpbHRlcjogICAgICAgICBhbHBoYShvcGFjaXR5PSRvcGFjaXR5TXVsdGlwbGllZCk7XG4gICAgLW1zLWZpbHRlcjogICAgIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9XCIgKyAkb3BhY2l0eU11bHRpcGxpZWQgKyBcIilcIjtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3BhY2l0eScsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gT3V0bGluZSBSYWRpdXNcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzVweF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBvdXRsaW5lLXJhZGl1cygkcmFkaXVzOiA1cHgpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ291dGxpbmUtcmFkaXVzJywgJHJhZGl1cyk7XG59XG5cblxuLy8vIFJlc2l6ZVxuLy8vIEBwYXJhbSB7Kn0gJGRpcmVjdG9pbiBbYm90aF0gLSBEaXJlY3Rpb25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByZXNpemUoJGRpcmVjdGlvbjogYm90aCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgncmVzaXplJywgJGRpcmVjdGlvbik7XG59XG5cblxuLy8vIFJvdGF0ZVxuLy8vXG4vLy8gQ1NTIE1hdHJpeCBSb3RhdGlvbiBDYWxjdWxhdG9yIGh0dHA6Ly93d3cuYm9vZ2Rlc2lnbi5jb20vZXhhbXBsZXMvdHJhbnNmb3Jtcy9tYXRyaXgtY2FsY3VsYXRvci5odG1sXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRkZWcgWzBdIC0gRGVncmVlXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTEgWzBdIC0gTTExXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTIgWzBdIC0gTTEyXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMjEgWzBdIC0gTTIxXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMjIgWzBdIC0gTTIyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gcm90YXRlKCRkZWc6IDAsICRtMTE6IDAsICRtMTI6IDAsICRtMjE6IDAsICRtMjI6IDApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHJvdGF0ZSgkZGVnICsgZGVnKSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChcbiAgICAgICBNMTE9I3skbTExfSwgTTEyPSN7JG0xMn0sIE0yMT0jeyRtMjF9LCBNMjI9I3skbTIyfSwgc2l6aW5nTWV0aG9kPSdhdXRvIGV4cGFuZCcpO1xuICAgIHpvb206IDE7XG59XG5cblxuLy8vIFRleHQgU2hhZG93XG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJsdXIgWzJweF0gLSBCbHVyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSkge1xuICAgIHRleHQtc2hhZG93OiAkeCAkeSAkYmx1ciAkY29sb3I7XG59XG5cblxuLy8vIFRyYW5zZm9ybVxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybSgkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCAkcGFyYW1zKTtcbn1cblxuXG4vLy8gVHJhbnNmb3JtLU9yaWdpblxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHBhcmFtcykge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtLW9yaWdpbicsICRwYXJhbXMpO1xufVxuXG5cbi8vIFRyYW5zZm9ybS1TdHlsZVxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkc3R5bGU6IHByZXNlcnZlLTNkKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tc3R5bGUnLCAkc3R5bGUpO1xufVxuXG4vLy8gVHJhbnNpdGlvblxuLy8vIEBwYXJhbSB7TGlzdH0gJHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydGllcy4uLikge1xuXG4gIEBpZiBsZW5ndGgoJHByb3BlcnRpZXMpID49IDEge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgJHByb3BlcnRpZXMpO1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgIFwiYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHNcIik7XG4gIH1cbn1cblxuXG4vLy8gVHJpcGxlIEJvcmRlcnNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JPbmUgWyMzQzNDM0NdIC0gQ29sb3IgT25lXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVHdvIFsjOTk5OTk5XSAtIENvbG9yIFR3b1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclRocmVlIFsjMDAwMDAwXSAtIENvbG9yIFRocmVlXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFswXSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyaXBsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkY29sb3JUaHJlZTogIzAwMDAwMCwgJHJhZGl1czogMCkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHJhZGl1cyk7XG5cbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIFwiMCAwIDAgMXB4ICN7JGNvbG9yVHdvfSwgMCAwIDAgMnB4ICN7JGNvbG9yVGhyZWV9XCIpO1xufVxuXG5cbi8vLyBLZXlmcmFtZXNcbi8vLyBAcGFyYW0geyp9ICRhbmltYXRpb24tbmFtZSAtIEFuaW1hdGlvbiBuYW1lXG4vLy8gQGNvbnRlbnQgW0FuaW1hdGlvbiBjc3NdXG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbi1uYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vLyBBbmltYXRpb25cbi8vLyBAcGFyYW0geyp9ICRzdHIgLSBuYW1lIGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheSBpdGVyYXRpb24tY291bnQgZGlyZWN0aW9uIGZpbGwtbW9kZSBwbGF5LXN0YXRlIChbaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3BdKGh0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl9hbmltYXRpb24uYXNwKSlcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYW5pbWF0aW9uJywgJHN0cik7XG59XG4iLCIvKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGNvbG9yLXRpdGxlOiAjM2YzZjNmO1xuJGNvbG9yLWNvbnRlbnQ6ICM4ZjhmOGY7XG4kY29sb3ItZ3JheTogI2VmZWZlZjtcbiRjb2xvci1iZy1ncmF5OiAjZmFmYWZhO1xuJGNvbG9yLWJnLWdyYXkyOiAjZjlmOWY5O1xuJGNvbG9yLWJnLWdyYXkzOiAjZjVmNWY1O1xuXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59IiwiLypcbkltcG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbkZvbnQgRmFtaWx5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardProdut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProdut", function() { return DashboardProdut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardProdut = class DashboardProdut {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.orderbyprice = false;
        this.orderbyname = false;
    }
    ngOnInit() { }
};
DashboardProdut.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DashboardProdut = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/product/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DashboardProdut);



/***/ }),

/***/ "./src/app/product/detail-product/detail-product.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/product/detail-product/detail-product.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nDetail Product\n=========================== */\n.m-b {\n  margin-bottom: 80px;\n}\n.add-subti {\n  font-size: 23px;\n  color: #636363;\n  margin-bottom: 36px;\n  font-weight: 100;\n}\n.margin-hr {\n  margin-bottom: 50px;\n}\n.desc {\n  font-size: 28px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n.text-adj {\n  font-size: 34px;\n  color: #de1438;\n}\n.text-overline {\n  text-decoration: line-through;\n}\n.text-trans-orig {\n  text-transform: capitalize;\n  font-size: 16px;\n}\n.title {\n  text-transform: capitalize;\n  margin-bottom: 30px;\n  margin-top: -5px;\n}\n.price {\n  margin-bottom: 25px;\n}\n.price .value {\n  margin-bottom: 0;\n  font-weight: 400;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.wrap-image {\n  display: block;\n  position: relative;\n}\n.wrap-image ul {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.wrap-image ul li {\n  display: block;\n  width: 85px;\n  overflow: hidden;\n  border: solid 1px #efefef;\n  background: #fff;\n  cursor: pointer;\n  position: relative;\n  float: left;\n  margin-right: 5px;\n}\n.wrap-image ul li:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: solid 5px #fff;\n  z-index: 2;\n}\n.wrap-image ul li img {\n  width: 100%;\n  z-index: 1;\n}\nimg.img-detail {\n  width: 100%;\n  border: solid 1px #efefef;\n  background: #fff;\n  padding: 10px;\n}\nbutton {\n  width: 100%;\n}\ntable {\n  margin: 15px 0 25px;\n  text-transform: capitalize;\n}\ntable tr:last-child {\n  border: 0;\n}\ntable tr:nth-child(even) {\n  background: #f9f9f9;\n}\ntable td {\n  padding: 10px 15px;\n  border: solid 1px #efefef;\n}\ntable td:first-child {\n  width: 120px;\n  font-weight: bold;\n}\ntable .label {\n  width: 120px;\n}\np:last-child {\n  margin-bottom: 0;\n}\n/*\nLoading\n=========================== */\n.valign-wrapper {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff;\n}\n.valign-wrapper mat-spinner {\n  width: 50px;\n  height: 50px;\n  display: block;\n  margin: auto;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 920px) {\n  .wrap-image {\n    padding-left: 0;\n  }\n  .wrap-image ul {\n    display: inline-block;\n    position: relative;\n  }\n  .wrap-image ul li {\n    float: left;\n    display: block;\n    width: 75px;\n    margin-bottom: 5px;\n    margin-right: 5px;\n  }\n  .wrap-image ul li img {\n    width: 100%;\n  }\n\n  img.img-detail {\n    width: auto;\n    max-width: 100%;\n  }\n\n  .price {\n    margin-top: 25px;\n  }\n}\n@media (max-width: 767px) {\n  .value {\n    padding-bottom: 15px;\n    padding-left: 5px;\n  }\n\n  .link {\n    padding-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L2RldGFpbC1wcm9kdWN0L2RldGFpbC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvZGV0YWlsLXByb2R1Y3QvZGV0YWlsLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FDQUE7Ozs7Ozs7Ozs7OzsrREFBQTtBQ0FBOzs2QkFBQTtBQVVBOzs2QkFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QURMQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FIMUJBOzs2QkFBQTtBQUdBO0VBQ0UsbUJBQUE7QUc2QkY7QUgzQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUc4QkY7QUg1QkE7RUFDRSxtQkFBQTtBRytCRjtBSDdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FHZ0NGO0FIOUJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUdpQ0Y7QUgvQkE7RUFDRSw2QkFBQTtBR2tDRjtBSGhDQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBR21DRjtBSGpDQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBR29DSjtBSGpDQTtFQUNJLG1CQUFBO0FHb0NKO0FIbENJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FHb0NSO0FIaENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FHbUNKO0FIakNJO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FHbUNSO0FIakNRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUdtQ1o7QUhqQ1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FHbUNoQjtBSGhDWTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FHa0NoQjtBSDVCQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRytCSjtBSDVCQTtFQUNJLFdBQUE7QUcrQko7QUg1QkE7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0FHK0JKO0FIN0JJO0VBQ0ksU0FBQTtBRytCUjtBSDVCSTtFQUNJLG1CQUFBO0FHOEJSO0FIM0JJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBRzZCUjtBSDNCUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBRzZCWjtBSHpCSTtFQUNJLFlBQUE7QUcyQlI7QUh2QkE7RUFDSSxnQkFBQTtBRzBCSjtBSHZCQTs7NkJBQUE7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUcwQko7QUh4Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FHMEJOO0FIdEJBOzs2QkFBQTtBQUlBO0VBQ0k7SUFDSSxlQUFBO0VHd0JOO0VIdEJNO0lBQ0kscUJBQUE7SUFDQSxrQkFBQTtFR3dCVjtFSHRCVTtJQUNJLFdBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUd3QmQ7RUh0QmM7SUFDSSxXQUFBO0VHd0JsQjs7RUhsQkU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFR3FCTjs7RUhsQkU7SUFDSSxnQkFBQTtFR3FCTjtBQUNGO0FIbEJBO0VBRUk7SUFDSSxvQkFBQTtJQUNBLGlCQUFBO0VHbUJOOztFSGZFO0lBQ0ksaUJBQUE7RUdrQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvZGV0YWlsLXByb2R1Y3QvZGV0YWlsLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5JbXBvcnRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zJztcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGUnO1xyXG5cclxuLypcclxuRGV0YWlsIFByb2R1Y3RcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5tLWIge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuLmFkZC1zdWJ0aSB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGNvbG9yOiAjNjM2MzYzO1xyXG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG4ubWFyZ2luLWhyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5kZXNjIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi50ZXh0LWFkaiB7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGNvbG9yOiAjZGUxNDM4O1xyXG59XHJcbi50ZXh0LW92ZXJsaW5lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4udGV4dC10cmFucy1vcmlnIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLnByaWNle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgICAudmFsdWV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud3JhcC1pbWFnZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHVse1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZy5pbWctZGV0YWlse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIG1hcmdpbjogMTVweCAwIDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgICB0cjpsYXN0LWNoaWxke1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxuXHJcbiAgICB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGNvbG9yLWdyYXk7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbnA6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8qXHJcbkxvYWRpbmdcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi52YWxpZ24td3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIG1hdC1zcGlubmVyIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuUmVzcG9uc2l2ZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjkyMHB4KXtcclxuICAgIC53cmFwLWltYWdle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuXHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1nLmltZy1kZXRhaWx7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblxyXG4gICAgLnZhbHVle1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubGlua3tcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuRGV0YWlsIFByb2R1Y3Rcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm0tYiB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5hZGQtc3VidGkge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubWFyZ2luLWhyIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmRlc2Mge1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi50ZXh0LWFkaiB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgY29sb3I6ICNkZTE0Mzg7XG59XG5cbi50ZXh0LW92ZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50ZXh0LXRyYW5zLW9yaWcge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5wcmljZSAudmFsdWUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLndyYXAtaW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXAtaW1hZ2UgdWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi53cmFwLWltYWdlIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4NXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLndyYXAtaW1hZ2UgdWwgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgNXB4ICNmZmY7XG4gIHotaW5kZXg6IDI7XG59XG4ud3JhcC1pbWFnZSB1bCBsaSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cblxuaW1nLmltZy1kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VmZWZlZjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHtcbiAgbWFyZ2luOiAxNXB4IDAgMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG50YWJsZSB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAwO1xufVxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xufVxudGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxudGFibGUgLmxhYmVsIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG5wOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vKlxuTG9hZGluZ1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udmFsaWduLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnZhbGlnbi13cmFwcGVyIG1hdC1zcGlubmVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLypcblJlc3BvbnNpdmVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC53cmFwLWltYWdlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgLndyYXAtaW1hZ2UgdWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLndyYXAtaW1hZ2UgdWwgbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAud3JhcC1pbWFnZSB1bCBsaSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW1nLmltZy1kZXRhaWwge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcmljZSB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC52YWx1ZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cblxuICAubGluayB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/detail-product/detail-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/detail-product/detail-product.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProductComponent", function() { return DetailProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");







let DetailProductComponent = class DetailProductComponent {
    constructor(activeRoute, productService, snackBar, cookie) {
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.snackBar = snackBar;
        this.cookie = cookie;
        this.cloneProduct = [];
        this.productsOrder = [];
        this.productWishlist = [];
        this.productCompare = [];
        this.procustCount = 0;
        this.productState = false;
        this.loadingState = true;
        this.productsOrder = this.cookie['productsOrder'];
        this.productWishlist = this.cookie['arrWishList'];
        this.productCompare = this.cookie['arrCompare'];
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.productName = params["detail"];
            this.productService.getSlugProduct(this.productName).then(product => {
                this.product = product;
                this.productState = true;
                this.loadingState = false;
                this.productImage = product['image'];
                // Set Object Order Product
                this.objectOrder = {
                    id: product['id'],
                    slug: product['slug'],
                    quantity: 1,
                    stock: product['stock'],
                    price: product['price'],
                    image: product['image'],
                    productName: product['productName']
                };
                // Init Demo Image
                this.selectedImage = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](product['gallery'], (o) => {
                    return o.images == product['image'];
                });
                // Init Counter product button
                this.buttonCounter(product['id']);
            });
        });
    }
    // Button Counter
    buttonCounter(idProduct) {
        var findObj = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.cookie['productsOrder'], ['id', idProduct]);
        if (findObj != undefined) {
            this.procustCount = findObj.quantity;
        }
    }
    // Add Cart to Cookie
    addCart(cName, cValue) {
        let obj = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.productsOrder, ['id', this.product.id]);
        if (obj == undefined) {
            this.productsOrder.push(this.objectOrder);
        }
        else {
            obj.quantity = obj.quantity + 1;
        }
        this.buttonCounter(this.product.id);
        this.cookie.addCookie(cName, JSON.stringify(cValue));
        this.openSnackBar(this.product.productName, 'Added to Cart');
    }
    // Add wishlist to cookie
    addWishlist(cName, cValue) {
        let obj = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.productWishlist, (x) => {
            return x == this.product['index'];
        });
        if (obj == undefined) {
            this.productWishlist.push(this.product['index']);
        }
        this.cookie.addCookie(cName, JSON.stringify(cValue));
        this.openSnackBar(this.product.productName, 'Added to Wishlist');
    }
    // Add Compare
    addCompare(cName, cValue) {
        let obj = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.productCompare, (x) => {
            return x == this.product['index'];
        });
        if (obj == undefined) {
            this.productCompare.push(this.product['index']);
        }
        this.cookie.addCookie(cName, JSON.stringify(cValue));
        this.openSnackBar(this.product.productName, 'Added to Compare');
    }
    // Snack Bar
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    // Image Gallery
    selectImage(gallery) {
        this.selectedImage = gallery;
        this.productImage = gallery.images;
    }
};
DetailProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _lib_service_product_service__WEBPACK_IMPORTED_MODULE_6__["productService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
DetailProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-product',
        template: __webpack_require__(/*! raw-loader!./detail-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/detail-product/detail-product.component.html"),
        styles: [__webpack_require__(/*! ./detail-product.component.scss */ "./src/app/product/detail-product/detail-product.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _lib_service_product_service__WEBPACK_IMPORTED_MODULE_6__["productService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], DetailProductComponent);



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm2015/ngx-paypal.js");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _lib_directive_match_height_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/directive/match-height.directive */ "./src/app/lib/directive/match-height.directive.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/product/dashboard/dashboard.component.ts");
/* harmony import */ var _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail-product/detail-product.component */ "./src/app/product/detail-product/detail-product.component.ts");
/* harmony import */ var _product3_product3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product3/product3.component */ "./src/app/product/product3/product3.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/product/cart/cart.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/product/shipping/shipping.component.ts");
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./receipt/receipt.component */ "./src/app/product/receipt/receipt.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./wishlist//wishlist.component */ "./src/app/product/wishlist/wishlist.component.ts");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/product/compare/compare.component.ts");







// Dependencies




// Angushop Library module


// Product Component









let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__["libModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_9__["CustomFormsModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_10__["NgxPayPalModule"]
        ],
        declarations: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardProdut"],
            _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_14__["DetailProductComponent"],
            _product3_product3_component__WEBPACK_IMPORTED_MODULE_15__["Product3Component"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"],
            _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_17__["ShippingComponent"],
            _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_18__["ReceiptComponent"],
            _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_19__["WishlistComponent"],
            _compare_compare_component__WEBPACK_IMPORTED_MODULE_21__["CompareComponent"],
            _lib_directive_match_height_directive__WEBPACK_IMPORTED_MODULE_12__["MatchHeightDirective"]
        ],
        providers: [_lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"]],
        exports: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardProdut"]
        ]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/product/product3/product3.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/product3/product3.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nProduct\n=========================== */\n.box-page {\n  padding-bottom: 25px;\n}\n.wrap-product {\n  padding: 0 15px;\n}\n.search {\n  position: relative;\n  padding: 0;\n}\n.search input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  padding-right: 35px;\n  background: #fff;\n  border: solid 1px #cfcfcf;\n  border-radius: 20px;\n  padding: 10px 50px 10px 20px;\n}\n.search .icon {\n  position: absolute;\n  right: 10px;\n  top: 9px;\n  font-size: 20px;\n}\nul.categories {\n  padding: 0;\n  margin: 0 -15px;\n  list-style: none;\n  display: inline-block;\n}\nul.categories li {\n  display: block;\n  float: left;\n  padding: 0 15px;\n}\nul.categories li a {\n  color: #8f8f8f;\n  text-transform: capitalize;\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QzL3Byb2R1Y3QzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdDMvcHJvZHVjdDMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FDQUE7Ozs7Ozs7Ozs7OzsrREFBQTtBQ0FBOzs2QkFBQTtBQVVBOzs2QkFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QURMQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FIMUJBOzs2QkFBQTtBQUdBO0VBQ0ksb0JBQUE7QUc2Qko7QUgxQkE7RUFDSSxlQUFBO0FHNkJKO0FIekJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FHNEJKO0FIMUJJO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VDR0UsbUJBQUE7RURERiw0QkFBQTtBR2lDUjtBSDlCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FHZ0NSO0FIM0JBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FHOEJKO0FINUJJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FHOEJSO0FINUJRO0VBQ0ksY0VsREk7RUZtREosMEJBQUE7RUFDQSxnQ0FBQTtBRzhCWiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdDMvcHJvZHVjdDMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2NzczMtbWl4aW5zJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlJztcblxuLypcblByb2R1Y3Rcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmJveC1wYWdle1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4ud3JhcC1wcm9kdWN0e1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLy8gU2VhcmNoXG4uc2VhcmNoe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgaW5wdXR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjZmNmY2Y7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMjBweCk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNTBweCAxMHB4IDIwcHg7XG4gICAgfVxuXG4gICAgLmljb257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuXG4vLyBDYXRlZ29yaWVzXG51bC5jYXRlZ29yaWVze1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIC0xNXB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgbGl7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuXG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWNvbnRlbnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuUHJvZHVjdFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uYm94LXBhZ2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuLndyYXAtcHJvZHVjdCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbn1cbi5zZWFyY2ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2ZjZmNmO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC1raHRtbC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDUwcHggMTBweCAyMHB4O1xufVxuLnNlYXJjaCAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogOXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnVsLmNhdGVnb3JpZXMge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgLTE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbnVsLmNhdGVnb3JpZXMgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbnVsLmNhdGVnb3JpZXMgbGkgYSB7XG4gIGNvbG9yOiAjOGY4ZjhmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/product/product3/product3.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/product3/product3.component.ts ***!
  \********************************************************/
/*! exports provided: Product3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product3Component", function() { return Product3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");





let Product3Component = class Product3Component {
    constructor(router, activeRoute, productService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.search = null;
        this.valueSearch = '';
        this.objectNavigation = {};
        this.currentPage = 1;
        this.navigateRoute = 'shop/product3';
        // Category
        this.categories = [];
        this.chekCategory = lodash__WEBPACK_IMPORTED_MODULE_3__["lowerCase"](this.activeRoute.queryParams['_value'].category);
        this.activeRoute.queryParams.subscribe(params => {
            this.search = lodash__WEBPACK_IMPORTED_MODULE_3__["lowerCase"](params["search"]);
            this.category = lodash__WEBPACK_IMPORTED_MODULE_3__["lowerCase"](params["category"]);
            // Pagination
            if (!isNaN(params["page"])) {
                this.currentPage = Number(params["page"]);
            }
            else {
                this.currentPage = 1;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"](params)) {
                // Merge Object on init
                lodash__WEBPACK_IMPORTED_MODULE_3__["merge"](this.objectNavigation, params);
                // Value Search
                if (this.search != undefined) {
                    this.valueSearch = this.search;
                }
            }
        });
    }
    ngOnInit() {
        // Fetch init
        this.fetchCategory();
        // Check Category
        if (this.chekCategory == '') {
            this.allCategory = true;
        }
    }
    fetchCategory() {
        this.productService.getCategory().subscribe(data => {
            this.categories = [];
            lodash__WEBPACK_IMPORTED_MODULE_3__["map"](data, (x) => {
                this.categories.push(x);
            });
            this.initCategory(data);
        });
    }
    initCategory(obj) {
        if (this.chekCategory !== undefined) {
            this.selectedCategory = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](obj, (o) => {
                return o.categoryName == this.chekCategory;
            });
        }
    }
    selectCategory(e) {
        this.selectedCategory = e;
        this.allCategory = false;
        let navCategory = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['category'] = lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"](e.categoryName);
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navCategory);
    }
    resetCategory() {
        this.selectedCategory = null;
        this.allCategory = true;
        let clearCategory = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['category'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearCategory);
    }
    onSearch(e) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            let navSearch = {
                queryParams: this.objectNavigation
            };
            if (e.target.value.length !== 0) {
                this.objectNavigation['search'] = lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"](e.target.value);
                delete this.objectNavigation['page'];
                this.router.navigate([this.navigateRoute], navSearch);
            }
            else {
                delete this.objectNavigation['search'];
                delete this.objectNavigation['page'];
                this.router.navigate([this.navigateRoute], navSearch);
            }
        }, 500);
    }
    // On Page Change
    onPageChange(e) {
        let navSize = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['page'] = e;
        this.router.navigate([this.navigateRoute], navSize);
    }
};
Product3Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _lib_service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"] }
];
Product3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product3',
        template: __webpack_require__(/*! raw-loader!./product3.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product3/product3.component.html"),
        styles: [__webpack_require__(/*! ./product3.component.scss */ "./src/app/product/product3/product3.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _lib_service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"]])
], Product3Component);



/***/ }),

/***/ "./src/app/product/receipt/receipt.component.scss":
/*!********************************************************!*\
  !*** ./src/app/product/receipt/receipt.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nLayout\n=========================== */\n.wrap-receipt {\n  margin-top: 100px;\n  margin-bottom: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L3JlY2VpcHQvcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9yZWNlaXB0L3JlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FBR0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3JlY2VpcHQvcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYXlvdXRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXAtcmVjZWlwdHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufSIsIi8qXG5MYXlvdXRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXAtcmVjZWlwdCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/receipt/receipt.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product/receipt/receipt.component.ts ***!
  \******************************************************/
/*! exports provided: ReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptComponent", function() { return ReceiptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");




let ReceiptComponent = class ReceiptComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    ngOnInit() {
        if (this.cookie['payed'] == '') {
            this.router.navigate(['/shop/shipping']);
        }
        else {
            this.cookie.addCookie('payed', '');
        }
    }
};
ReceiptComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
ReceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipt',
        template: __webpack_require__(/*! raw-loader!./receipt.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/receipt/receipt.component.html"),
        styles: [__webpack_require__(/*! ./receipt.component.scss */ "./src/app/product/receipt/receipt.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], ReceiptComponent);



/***/ }),

/***/ "./src/app/product/shipping/shipping.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/shipping/shipping.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nLayout\n=========================== */\nul.list-product li {\n  padding-left: 75px;\n  padding-right: 0;\n}\nul.list-product li .wrap-img {\n  left: 0;\n}\n.col {\n  padding-left: 15px;\n  padding-right: 15px;\n}\ntable.count {\n  margin-top: -1px;\n}\n.link {\n  display: inline-block;\n}\n.btn-paypal {\n  position: relative;\n}\n.btn-paypal span {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  filter: alpha(opacity=50);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n  -webkit-opacity: 0.5;\n  -khtml-opacity: 0.5;\n  -moz-opacity: 0.5;\n  -ms-opacity: 0.5;\n  -o-opacity: 0.5;\n  opacity: 0.5;\n}\n.btn-paypal .content {\n  position: relative;\n  z-index: 1;\n}\n/*\nLoading\n=========================== */\n.wrap-loading {\n  margin-top: 30px;\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff;\n}\n.wrap-loading .mat-progress-spinner {\n  display: block;\n  margin: auto;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 920px) {\n  .btn {\n    width: 100%;\n    display: block;\n  }\n}\n@media (max-width: 568px) {\n  form {\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L3NoaXBwaW5nL3NoaXBwaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMuc2NzcyIsIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2Fzc2V0cy9zYXNzL3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3Qvc2hpcHBpbmcvc2hpcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUFBO0FDQUE7Ozs7Ozs7Ozs7OzsrREFBQTtBQ0FBOzs2QkFBQTtBQVVBOzs2QkFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUUY7QURMQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FIMUJBOzs2QkFBQTtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBRzZCSjtBSDNCSTtFQUNJLE9BQUE7QUc2QlI7QUh6QkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FHNEJKO0FIekJBO0VBQ0ksZ0JBQUE7QUc0Qko7QUh6QkE7RUFDSSxxQkFBQTtBRzRCSjtBSHpCQTtFQUNJLGtCQUFBO0FHNEJKO0FIMUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VDcU9KLHlCQUFBO0VBQ0EsaUVBQUE7RUFyUEYsb0JBQUE7RUFDQyxtQkFBQTtFQUNFLGlCQUFBO0VBQ0MsZ0JBQUE7RUFDQyxlQUFBO0VBQ0csWUFBQTtBRThDVjtBSGhDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBR2tDUjtBSDlCQTs7NkJBQUE7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBR2lDSjtBSC9CSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FHaUNSO0FIN0JBOzs2QkFBQTtBQUdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsY0FBQTtFR2dDTjtBQUNGO0FIN0JBO0VBQ0k7SUFDSSxtQkFBQTtFRytCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9zaGlwcGluZy9zaGlwcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbXBvcnRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Nhc3MvdmFyaWFibGUnO1xuXG4vKlxuTGF5b3V0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbnVsLmxpc3QtcHJvZHVjdCBsaXtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgIC53cmFwLWltZ3tcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbi5jb2x7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbnRhYmxlLmNvdW50e1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5saW5re1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ0bi1wYXlwYWx7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgc3BhbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIEBpbmNsdWRlIG9wYWNpdHkoMC41KTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59XG5cbi8qXG5Mb2FkaW5nXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi53cmFwLWxvYWRpbmd7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgLm1hdC1wcm9ncmVzcy1zcGlubmVyeyBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCl7XG4gICAgLmJ0bntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KXtcbiAgICBmb3Jte1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbn0gICAgIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBTYXNzIENTUzMgTWl4aW5zISBUaGUgQ3Jvc3MtQnJvd3NlciBDU1MzIFNhc3MgTGlicmFyeVxuICBCeTogTWF0dGhpZXUgQXVzc2FndWVsLCBodHRwOi8vd3d3Lm15bmFtZWlzbWF0dGhpZXUuY29tLCBAbWF0dGhpZXVfdHdlZXRzXG5cbiAgTGlzdCBvZiBDU1MzIFNhc3MgTWl4aW5zIEZpbGUgdG8gYmUgQGltcG9ydGVkIGFuZCBAaW5jbHVkZWQgYXMgeW91IG5lZWRcblxuICBUaGUgcHVycG9zZSBvZiB0aGlzIGxpYnJhcnkgaXMgdG8gZmFjaWxpdGF0ZSB0aGUgdXNlIG9mIENTUzMgb24gZGlmZmVyZW50IGJyb3dzZXJzIGF2b2lkaW5nIEhBUkQgVE8gUkVBRCBhbmQgTkVWRVJcbiAgRU5ESU5HIGNzcyBmaWxlc1xuXG4gIG5vdGU6IEFsbCBDU1MzIFByb3BlcnRpZXMgYXJlIGJlaW5nIHN1cHBvcnRlZCBieSBTYWZhcmkgNVxuICBtb3JlIGluZm86IGh0dHA6Ly93d3cuZmluZG1lYnlpcC5jb20vbGl0bXVzLyNjc3MzLXByb3BlcnRpZXNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbi8vLy9cbi8vLyBAYXV0aG9yIE1hdHRoaWV1IEF1c3NhZ3VlbFxuLy8vIEBncm91cCBzYXNzLWNzczMtbWl4aW5zXG4vLy8vXG5cblxuLy8vIEFkZHMgYSBicm93c2VyIHByZWZpeCB0byB0aGUgcHJvcGVydHlcbi8vLyBAcGFyYW0geyp9ICRwcm9wZXJ0eSBQcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIFZhbHVlXG5cbkBtaXhpbiBjc3MzLXByZWZpeCgkcHJvcGVydHksICR2YWx1ZSkge1xuICAtd2Via2l0LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgLWtodG1sLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAtbW96LSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgLW1zLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgIC1vLSN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xuICAgICAgICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9O1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIEdyYWRpZW50XG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWdyYWRpZW50KCRzdGFydENvbG9yOiAjM0MzQzNDLCAkZW5kQ29sb3I6ICM5OTk5OTkpIHtcbiAgICBiYWNrZ3JvdW5kOiAkc3RhcnRDb2xvcjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBTYWZhcmkgNS4xIHRvIDYuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIE9wZXJhIDExLjEgdG8gMTIuMCAqL1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgRmlyZWZveCAzLjYgdG8gMTUgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuXG5AbWl4aW4gYmx1cigkYmx1cjogNXB4KXtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICAtbW96LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tcy1maWx0ZXI6IGJsdXIoJGJsdXIpO1xuICBmaWx0ZXI6IGJsdXIoJGJsdXIpO1xufVxuXG4vLy8gQmFja2dyb3VuZCBIb3Jpem9udGFsXG4vLy8gQHBhcmFtIHtDb2xvcn0gJHN0YXJ0Q29sb3IgWyMzQzNDM0NdIC0gU3RhcnQgQ29sb3Jcbi8vLyBAcGFyYW0ge0NvbG9yfSAkZW5kQ29sb3IgWyM5OTk5OTldIC0gRW5kIENvbG9yXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLWhvcml6b250YWwoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdGFydENvbG9yO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCRzdGFydENvbG9yKSwgdG8oJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgIC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogICAgICAgICBsaW5lYXItZ3JhZGllbnQobGVmdCwgJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7XG4gICAgZmlsdGVyOiAgICAgICAgICAgIHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yU3RyPScjeyRzdGFydENvbG9yfScsIGVuZENvbG9yU3RyPScjeyRlbmRDb2xvcn0nLCBncmFkaWVudFR5cGU9JzEnKTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBSYWRpYWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJHN0YXJ0UG9zIFswJV0gLSBTdGFydCBwb3NpdGlvblxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3Jcbi8vLyBAcGFyYW0ge1BlcmNlbnRhZ2V9ICRlbmRQb3MgWzEwMCVdIC0gRW5kIHBvc2l0aW9uXG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXJhZGlhbCgkc3RhcnRDb2xvcjogI0ZGRkZGRiwgJHN0YXJ0UG9zOiAwJSwgJGVuZENvbG9yOiAjMDAwMDAwLCAkZW5kUG9zOjEwMCUpIHtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywgJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoJHN0YXJ0UG9zLCRzdGFydENvbG9yKSwgY29sb3Itc3RvcCgkZW5kUG9zLCRlbmRDb2xvcikpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCRlbmRDb2xvciAkZW5kUG9zKTtcbn1cblxuXG4vLy8gQmFja2dyb3VuZCBTaXplXG4vLy8gQHBhcmFtIHtTaXplfSAkd2lkdGggWzEwMCVdIC0gV2lkdGhcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbJHdpZHRoXSAtIEhlaWdodFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJhY2tncm91bmQtc2l6ZSgkd2lkdGg6IDEwMCUsICRoZWlnaHQ6ICR3aWR0aCkge1xuICBAaWYgdHlwZS1vZigkd2lkdGgpID09ICdudW1iZXInIGFuZCAkaGVpZ2h0ICE9IG51bGwge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGggJGhlaWdodCk7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdiYWNrZ3JvdW5kLXNpemUnLCAkd2lkdGgpO1xuICB9XG59XG5cblxuLy8vIEJhY2tncm91bmQgQ29sb3IgT3BhY2l0eVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbMTAwJV0gLSBDb2xvclxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC44NV0gLSBPcGFjaXR5XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLW9wYWNpdHkoJGNvbG9yOiAjMDAwLCAkb3BhY2l0eTogMC44NSkge1xuICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XG59XG5cblxuLy8vIEJvcmRlciBSYWRpdXNcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzVweF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3JkZXItcmFkaXVzJywgJHJhZGl1cyk7XG59XG5cblxuLy8vIEJvcmRlciBSYWRpdXMgU2VwYXJhdGVcbi8vLyBAcGFyYW0ge1NpemV9ICR0b3BMZWZ0UmFkaXVzIFs1cHhdIC0gVG9wIExlZnRcbi8vLyBAcGFyYW0ge1NpemV9ICR0b3BSaWdodFJhZGl1cyBbNXB4XSAtIFRvcCBSaWdodFxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbUxlZnRSYWRpdXMgWzVweF0gLSBCb3R0b20gTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJvdHRvbVJpZ2h0UmFkaXVzIFs1cHhdIC0gQm90dG9tIFJpZ2h0XG5cbkBtaXhpbiBib3JkZXItcmFkaXVzLXNlcGFyYXRlKCR0b3BMZWZ0UmFkaXVzOiA1cHgsICR0b3BSaWdodFJhZGl1czogNXB4LCAkYm90dG9tTGVmdFJhZGl1czogNXB4LCAkYm90dG9tUmlnaHRSYWRpdXM6IDVweCkge1xuICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDogICAgJHRvcFJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6ICAkYm90dG9tTGVmdFJhZGl1cztcblxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAgICAgJHRvcExlZnRSYWRpdXM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tUmlnaHRSYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICAkYm90dG9tTGVmdFJhZGl1cztcbn1cblxuXG4vLy8gQm94XG4vLy8gQHBhcmFtIHsqfSAkb3JpZW50IFtob3Jpem9udGFsXSAtIE9yaWVudGF0aW9uXG4vLy8gQHBhcmFtIHsqfSAkcGFjayBbY2VudGVyXSAtIFBhY2tcbi8vLyBAcGFyYW0geyp9ICRhbGlnbiBbY2VudGVyXSAtIEFsaWduXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94KCRvcmllbnQ6IGhvcml6b250YWwsICRwYWNrOiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogYm94O1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtb3JpZW50JywgJG9yaWVudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtcGFjaycsICRwYWNrKTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1hbGlnbicsICRhbGlnbik7XG59XG5cblxuLy8vIEJveCBSR0JBXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkciBbNjBdIC0gUmVkXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZyBbM10gLSBHcmVlblxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGIgWzEyXSAtIEJsdWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuMjNdIC0gT3BhY2l0eVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciBbIzNDM0MzQ10gLSBDb2xvclxuXG5AbWl4aW4gYm94LXJnYmEoJHI6IDYwLCAkZzogMywgJGI6IDEyLCAkb3BhY2l0eTogMC4yMywgJGNvbG9yOiAjM0MzQzNDKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRyLCAkZywgJGIsICRvcGFjaXR5KTtcbiAgICAgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7JGNvbG9yfScsZW5kQ29sb3JzdHI9JyN7JGNvbG9yfScpO1xuICAgICAgICAgICAgem9vbTogICAxO1xufVxuXG5cbi8vLyBCb3ggU2hhZG93XG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJsdXIgWzVweF0gLSBCbHVyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxuLy8vIEBwYXJhbSB7Qm9vbGVhbn0gJGluc2V0IC0gSW5zZXRcblxuQG1peGluIGJveC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSwgJGluc2V0OiBcIlwiKSB7XG4gIEBpZiAoJGluc2V0ICE9IFwiXCIpIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsICRpbnNldCAkeCAkeSAkYmx1ciAkY29sb3IpO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH1cbn1cblxuXG4vLy8gQm94IFNpemluZ1xuLy8vIEBwYXJhbSB7Kn0gJHR5cGUgW2JvcmRlci1ib3hdIC0gVHlwZVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJveC1zaXppbmcoJHR5cGU6IGJvcmRlci1ib3gpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1zaXppbmcnLCAkdHlwZSk7XG59XG5cblxuLy8vIENvbHVtbnNcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRjb3VudCBbM10gLSBDb3VudFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGdhcCBbMTBdIC0gR2FwXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gY29sdW1ucygkY291bnQ6IDMsICRnYXA6IDEwKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tY291bnQnLCAkY291bnQpO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnY29sdW1uLWdhcCcsICRnYXApO1xufVxuXG5cbi8vLyBEb3VibGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFswXSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGJvcmRlci1yYWRpdXNcblxuQG1peGluIGRvdWJsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkcmFkaXVzOiAwKSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcblxuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIDAgMCAwIDFweCAkY29sb3JUd28pO1xuXG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoICRyYWRpdXMgKTtcbn1cblxuXG4vLy8gRmxleFxuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJHZhbHVlIFsxXSAtIFZhbHVlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gZmxleCgkdmFsdWU6IDEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1mbGV4JywgJHZhbHVlKTtcbn1cblxuXG4vLy8gRmxpcFxuLy8vIEBwYXJhbSB7RG91YmxlfSAkc2NhbGVYIFstMV0gLSBTY2FsZVhcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGlwKCRzY2FsZVg6IC0xKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCBzY2FsZVgoJHNjYWxlWCkpO1xuICBmaWx0ZXI6ICAgICAgICAgICAgRmxpcEg7XG4gIC1tcy1maWx0ZXI6ICAgICAgICBcIkZsaXBIXCI7XG59XG5cblxuLy8vIEZvbnQgRmFjZVxuLy8vIEBwYXJhbSB7Rm9udH0gJGZvbnRGYW1pbHkgW215Rm9udF0gLSBGb250IEZhbWlseVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZW90RmlsZVNyYyBbJ215Rm9udC5lb3QnXSAtIEVvdCBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkd29mZkZpbGVTcmMgWydteUZvbnQud29mZiddIC0gV29mZiBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdHRmRmlsZVNyYyBbJ215Rm9udC50dGYnXSAtIFR0ZiBGaWxlIFNvdXJjZVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkc3ZnRmlsZVNyYyBbJ215Rm9udC5zdmcnXSAtIFN2ZyBGaWxlIFNvdXJjZVxuXG5AbWl4aW4gZm9udC1mYWNlKCRmb250RmFtaWx5OiBteUZvbnQsICRlb3RGaWxlU3JjOiAnbXlGb250LmVvdCcsICR3b2ZmRmlsZVNyYzogJ215Rm9udC53b2ZmJywgJHR0ZkZpbGVTcmM6ICdteUZvbnQudHRmJywgJHN2Z0ZpbGVTcmM6ICdteUZvbnQuc3ZnJywgJHN2Z0ZvbnRJRDogJyNteUZvbnQnKSB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcbiAgc3JjOiB1cmwoJGVvdEZpbGVTcmMpICBmb3JtYXQoJ2VvdCcpLFxuICAgICAgIHVybCgkd29mZkZpbGVTcmMpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybCgkdHRmRmlsZVNyYykgIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgICAgICB1cmwoJHN2Z0ZpbGVTcmMgKyAkc3ZnRm9udElEKSBmb3JtYXQoJ3N2ZycpO1xufVxuXG5cbi8vLyBPcGFjaXR5XG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjVdIC0gT3BhY2l0eVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG9wYWNpdHkoJG9wYWNpdHk6IDAuNSkge1xuICAgICRvcGFjaXR5TXVsdGlwbGllZDogKCRvcGFjaXR5ICogMTAwKTtcblxuICAgIGZpbHRlcjogICAgICAgICBhbHBoYShvcGFjaXR5PSRvcGFjaXR5TXVsdGlwbGllZCk7XG4gICAgLW1zLWZpbHRlcjogICAgIFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9XCIgKyAkb3BhY2l0eU11bHRpcGxpZWQgKyBcIilcIjtcbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3BhY2l0eScsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gT3V0bGluZSBSYWRpdXNcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzVweF0gLSBSYWRpdXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBvdXRsaW5lLXJhZGl1cygkcmFkaXVzOiA1cHgpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ291dGxpbmUtcmFkaXVzJywgJHJhZGl1cyk7XG59XG5cblxuLy8vIFJlc2l6ZVxuLy8vIEBwYXJhbSB7Kn0gJGRpcmVjdG9pbiBbYm90aF0gLSBEaXJlY3Rpb25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByZXNpemUoJGRpcmVjdGlvbjogYm90aCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgncmVzaXplJywgJGRpcmVjdGlvbik7XG59XG5cblxuLy8vIFJvdGF0ZVxuLy8vXG4vLy8gQ1NTIE1hdHJpeCBSb3RhdGlvbiBDYWxjdWxhdG9yIGh0dHA6Ly93d3cuYm9vZ2Rlc2lnbi5jb20vZXhhbXBsZXMvdHJhbnNmb3Jtcy9tYXRyaXgtY2FsY3VsYXRvci5odG1sXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRkZWcgWzBdIC0gRGVncmVlXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTEgWzBdIC0gTTExXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMTIgWzBdIC0gTTEyXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMjEgWzBdIC0gTTIxXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRtMjIgWzBdIC0gTTIyXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gcm90YXRlKCRkZWc6IDAsICRtMTE6IDAsICRtMTI6IDAsICRtMjE6IDAsICRtMjI6IDApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHJvdGF0ZSgkZGVnICsgZGVnKSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChcbiAgICAgICBNMTE9I3skbTExfSwgTTEyPSN7JG0xMn0sIE0yMT0jeyRtMjF9LCBNMjI9I3skbTIyfSwgc2l6aW5nTWV0aG9kPSdhdXRvIGV4cGFuZCcpO1xuICAgIHpvb206IDE7XG59XG5cblxuLy8vIFRleHQgU2hhZG93XG4vLy8gQHBhcmFtIHtTaXplfSAkeCBbMnB4XSAtIFhcbi8vLyBAcGFyYW0ge1NpemV9ICR5IFsycHhdIC0gWVxuLy8vIEBwYXJhbSB7U2l6ZX0gJGJsdXIgWzJweF0gLSBCbHVyXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFtyZ2JhKDAsMCwwLC40KV0gLSBDb2xvclxuXG5AbWl4aW4gdGV4dC1zaGFkb3coJHg6IDJweCwgJHk6IDJweCwgJGJsdXI6IDVweCwgJGNvbG9yOiByZ2JhKDAsMCwwLC40KSkge1xuICAgIHRleHQtc2hhZG93OiAkeCAkeSAkYmx1ciAkY29sb3I7XG59XG5cblxuLy8vIFRyYW5zZm9ybVxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybSgkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0nLCAkcGFyYW1zKTtcbn1cblxuXG4vLy8gVHJhbnNmb3JtLU9yaWdpblxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHBhcmFtcykge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtLW9yaWdpbicsICRwYXJhbXMpO1xufVxuXG5cbi8vIFRyYW5zZm9ybS1TdHlsZVxuLy8vIEBwYXJhbSB7TGlzdH0gJHBhcmFtcyAtIFBhcmFtc1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyYW5zZm9ybS1zdHlsZSgkc3R5bGU6IHByZXNlcnZlLTNkKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tc3R5bGUnLCAkc3R5bGUpO1xufVxuXG4vLy8gVHJhbnNpdGlvblxuLy8vIEBwYXJhbSB7TGlzdH0gJHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNpdGlvbigkcHJvcGVydGllcy4uLikge1xuXG4gIEBpZiBsZW5ndGgoJHByb3BlcnRpZXMpID49IDEge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgJHByb3BlcnRpZXMpO1xuICB9XG5cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2l0aW9uJywgIFwiYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHNcIik7XG4gIH1cbn1cblxuXG4vLy8gVHJpcGxlIEJvcmRlcnNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JPbmUgWyMzQzNDM0NdIC0gQ29sb3IgT25lXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVHdvIFsjOTk5OTk5XSAtIENvbG9yIFR3b1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclRocmVlIFsjMDAwMDAwXSAtIENvbG9yIFRocmVlXG4vLy8gQHBhcmFtIHtTaXplfSAkcmFkaXVzIFswXSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHRyaXBsZS1ib3JkZXJzKCRjb2xvck9uZTogIzNDM0MzQywgJGNvbG9yVHdvOiAjOTk5OTk5LCAkY29sb3JUaHJlZTogIzAwMDAwMCwgJHJhZGl1czogMCkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvck9uZTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHJhZGl1cyk7XG5cbiAgICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNoYWRvdycsIFwiMCAwIDAgMXB4ICN7JGNvbG9yVHdvfSwgMCAwIDAgMnB4ICN7JGNvbG9yVGhyZWV9XCIpO1xufVxuXG5cbi8vLyBLZXlmcmFtZXNcbi8vLyBAcGFyYW0geyp9ICRhbmltYXRpb24tbmFtZSAtIEFuaW1hdGlvbiBuYW1lXG4vLy8gQGNvbnRlbnQgW0FuaW1hdGlvbiBjc3NdXG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbi1uYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbW96LWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtbXMta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1vLWtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vLyBBbmltYXRpb25cbi8vLyBAcGFyYW0geyp9ICRzdHIgLSBuYW1lIGR1cmF0aW9uIHRpbWluZy1mdW5jdGlvbiBkZWxheSBpdGVyYXRpb24tY291bnQgZGlyZWN0aW9uIGZpbGwtbW9kZSBwbGF5LXN0YXRlIChbaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3BdKGh0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl9hbmltYXRpb24uYXNwKSlcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYW5pbWF0aW9uJywgJHN0cik7XG59XG4iLCIvKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGNvbG9yLXRpdGxlOiAjM2YzZjNmO1xuJGNvbG9yLWNvbnRlbnQ6ICM4ZjhmOGY7XG4kY29sb3ItZ3JheTogI2VmZWZlZjtcbiRjb2xvci1iZy1ncmF5OiAjZmFmYWZhO1xuJGNvbG9yLWJnLWdyYXkyOiAjZjlmOWY5O1xuJGNvbG9yLWJnLWdyYXkzOiAjZjVmNWY1O1xuXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59IiwiLypcbkltcG9ydFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKlxuQ29sb3Jcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbkZvbnQgRmFtaWx5XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLypcbkxheW91dFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG51bC5saXN0LXByb2R1Y3QgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG51bC5saXN0LXByb2R1Y3QgbGkgLndyYXAtaW1nIHtcbiAgbGVmdDogMDtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxudGFibGUuY291bnQge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuXG4ubGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ0bi1wYXlwYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYnRuLXBheXBhbCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NTApXCI7XG4gIC13ZWJraXQtb3BhY2l0eTogMC41O1xuICAta2h0bWwtb3BhY2l0eTogMC41O1xuICAtbW96LW9wYWNpdHk6IDAuNTtcbiAgLW1zLW9wYWNpdHk6IDAuNTtcbiAgLW8tb3BhY2l0eTogMC41O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uYnRuLXBheXBhbCAuY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLypcbkxvYWRpbmdcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLndyYXAtbG9hZGluZyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ud3JhcC1sb2FkaW5nIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/shipping/shipping.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/shipping/shipping.component.ts ***!
  \********************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






let ShippingComponent = class ShippingComponent {
    constructor(router, cookie, snackBar) {
        this.router = router;
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.productsOrder = [];
        this.promoValue = 0;
        this.nottouched = true;
        this.touched = false;
    }
    ngOnInit() {
        var products = this.cookie['productsOrder'];
        lodash__WEBPACK_IMPORTED_MODULE_5__["map"](products, (x) => {
            return x.slug = lodash__WEBPACK_IMPORTED_MODULE_5__["kebabCase"](x.slug);
        });
        this.productsOrder = products;
        this.promo = JSON.stringify(this.cookie['promo']);
        this.promoValue = this.cookie['promoValue'];
        this.subTotal = this.cookie['subtotal'];
        this.total = this.cookie['subtotal'] - this.promoValue;
        if (this.total < 0) {
            this.total = 0;
        }
        if (this.productsOrder.length == 0) {
            this.router.navigate(['/shop/cart']);
        }
        this.initConfig();
    }
    // ================================== //
    // Open Popup Checkout Strip JS
    // ================================== //
    submitStripJS(form) {
        console.log(form.value); // Object Shipping Object
        console.log(this.cookie['productsOrder']); // Array Obect Products order
        console.log(this.cookie['promo']); // Object Promo
        console.log(this.cookie['promoValue']); // Object Promo Value From calculation
        console.log(this.cookie['subtotal']); // Object Sub Total     
        this.nottouched = false;
        this.touched = true;
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_RdW4DTIQXiTLULbUy1vnQUsV',
            locale: 'auto',
            token: (token) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                // Documentation charge https://stripe.com/docs/charges
                console.log(token.id);
                this.cookie.addCookie('payed', 'payed');
                this.cookie.removeCookie('products');
                this.cookie.removeCookie('promo');
                this.cookie.removeCookie('promoValue');
                this.cookie.removeCookie('subtotal');
                setTimeout(() => {
                    this.router.navigate(['/shop/receipt']);
                }, 1000);
            },
            closed: () => {
                this.nottouched = true;
                this.touched = false;
            }
        });
        console.log(this.total);
        // handler Open
        handler.open({
            image: '/assets/images/brand/logo-stripe.jpg',
            name: 'Angushop',
            description: 'Complete payment',
            amount: this.total
        });
    }
    // ================================== //
    // Init Config Paypal
    // ================================== //
    initConfig() {
        let items = [];
        this.productsOrder.map((x) => {
            let obj = {
                name: x.productName,
                quantity: x.quantity,
                unit_amount: {
                    currency_code: 'USD',
                    value: x.price,
                },
            };
            items.push(obj);
        });
        this.payPalConfig = {
            currency: 'USD',
            clientId: 'sb',
            createOrderOnClient: (data) => ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: this.total.toString(),
                            breakdown: {
                                item_total: {
                                    currency_code: 'USD',
                                    value: this.total.toString()
                                }
                            }
                        },
                        items: items
                    }
                ]
            }),
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                    console.log(data, actions);
                    this.cookie.addCookie('payed', 'payed');
                    this.cookie.removeCookie('products');
                    this.cookie.removeCookie('promo');
                    this.cookie.removeCookie('promoValue');
                    this.cookie.removeCookie('subtotal');
                    this.snackBar.open('Success paypal payment', '', {
                        duration: 2000,
                    });
                    setTimeout(() => {
                        this.router.navigate(['/shop/receipt']);
                    }, 1000);
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            },
        };
    }
};
ShippingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shipping',
        template: __webpack_require__(/*! raw-loader!./shipping.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/shipping/shipping.component.html"),
        styles: [__webpack_require__(/*! ./shipping.component.scss */ "./src/app/product/shipping/shipping.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], ShippingComponent);



/***/ }),

/***/ "./src/app/product/wishlist/wishlist.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/wishlist/wishlist.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-product {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9wcm9kdWN0L3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0L3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwLXByb2R1Y3R7XG4gICAgcGFkZGluZzogMCAxNXB4O1xufSIsIi53cmFwLXByb2R1Y3Qge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/product/wishlist/wishlist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/wishlist/wishlist.component.ts ***!
  \********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");




let WishlistComponent = class WishlistComponent {
    constructor(snackBar, cookie) {
        this.snackBar = snackBar;
        this.cookie = cookie;
        this.productWishlist = [];
    }
    ngOnInit() {
        this.productWishlist = this.cookie['arrWishList'];
    }
    // On Select Remove
    onSelectRemove(e) {
        let getIndex = this.productWishlist.indexOf(Number(e.wishlist));
        this.productWishlist.splice(getIndex, 1);
        this.cookie.addCookie('wishlist', JSON.stringify(this.productWishlist));
        this.openSnackBar(e.productName, 'Deleted from wishlist');
    }
    // Snack Bar
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
};
WishlistComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/wishlist/wishlist.component.html"),
        styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/product/wishlist/wishlist.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], WishlistComponent);



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home1_home1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home1/home1.component */ "./src/app/home/home1/home1.component.ts");
/* harmony import */ var _product_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/dashboard/dashboard.component */ "./src/app/product/dashboard/dashboard.component.ts");
/* harmony import */ var _product_detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/detail-product/detail-product.component */ "./src/app/product/detail-product/detail-product.component.ts");
/* harmony import */ var _product_product3_product3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product3/product3.component */ "./src/app/product/product3/product3.component.ts");
/* harmony import */ var _product_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/cart/cart.component */ "./src/app/product/cart/cart.component.ts");
/* harmony import */ var _product_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/shipping/shipping.component */ "./src/app/product/shipping/shipping.component.ts");
/* harmony import */ var _product_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/receipt/receipt.component */ "./src/app/product/receipt/receipt.component.ts");
/* harmony import */ var _product_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/wishlist/wishlist.component */ "./src/app/product/wishlist/wishlist.component.ts");
/* harmony import */ var _product_compare_compare_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/compare/compare.component */ "./src/app/product/compare/compare.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _element_dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./element/dashboard-element/dashboard-element.component */ "./src/app/element/dashboard-element/dashboard-element.component.ts");
/* harmony import */ var _element_product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./element/product/product.component */ "./src/app/element/product/product.component.ts");
/* harmony import */ var _element_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./element/form-control/form-control.component */ "./src/app/element/form-control/form-control.component.ts");
/* harmony import */ var _element_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./element/layout/layout.component */ "./src/app/element/layout/layout.component.ts");
/* harmony import */ var _element_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./element/button/button.component */ "./src/app/element/button/button.component.ts");
/* harmony import */ var _element_grid_grid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./element/grid/grid.component */ "./src/app/element/grid/grid.component.ts");
/* harmony import */ var _element_typhography_typhography_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./element/typhography/typhography.component */ "./src/app/element/typhography/typhography.component.ts");
/* harmony import */ var _element_helper_helper_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./element/helper/helper.component */ "./src/app/element/helper/helper.component.ts");



// Home

// Products










// ELements








const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home1_home1_component__WEBPACK_IMPORTED_MODULE_3__["Home1Component"] },
    { path: 'shop', component: _product_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardProdut"],
        children: [
            { path: '', redirectTo: '/shop/product3', pathMatch: 'full' },
            { path: 'product3', component: _product_product3_product3_component__WEBPACK_IMPORTED_MODULE_6__["Product3Component"] },
            { path: 'cart', component: _product_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
            { path: 'shipping', component: _product_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_8__["ShippingComponent"] },
            { path: 'receipt', component: _product_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_9__["ReceiptComponent"] },
            { path: 'wishlist', component: _product_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"] },
            { path: 'compare', component: _product_compare_compare_component__WEBPACK_IMPORTED_MODULE_11__["CompareComponent"] },
            { path: 'p/:detail', component: _product_detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_5__["DetailProductComponent"] }
        ]
    },
    { path: 'element', component: _element_dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_14__["DashboardELementComponent"],
        children: [
            { path: '', redirectTo: '/element/product', pathMatch: 'full' },
            { path: 'product', component: _element_product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductElement"] },
            { path: 'form', component: _element_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_16__["FormControlComponent"] },
            { path: 'layout', component: _element_layout_layout_component__WEBPACK_IMPORTED_MODULE_17__["LayoutComponent"] },
            { path: 'button', component: _element_button_button_component__WEBPACK_IMPORTED_MODULE_18__["ButtonComponent"] },
            { path: 'grid', component: _element_grid_grid_component__WEBPACK_IMPORTED_MODULE_19__["GridComponent"] },
            { path: 'typography', component: _element_typhography_typhography_component__WEBPACK_IMPORTED_MODULE_20__["TyphographyComponent"] },
            { path: 'helper', component: _element_helper_helper_component__WEBPACK_IMPORTED_MODULE_21__["HelperComponent"] },
        ]
    },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/side/side.component.scss":
/*!******************************************!*\
  !*** ./src/app/side/side.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  line-height: 20px;\n}\n/*\nVariable\n=========================== */\n/*\nSide\n=========================== */\n.side {\n  width: 125px;\n  height: 100%;\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: #1e2327;\n  z-index: 2;\n}\n.side .wrap-brand {\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 20px 0 15px 0;\n  text-align: center;\n  background: #1e2327;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  z-index: 9;\n}\n.side .wrap-brand img {\n  width: 78px;\n  margin-bottom: 0;\n}\n.side .wrap-brand img.mobile {\n  display: none;\n}\n.side nav {\n  display: table-cell;\n  vertical-align: middle;\n}\n.side nav li {\n  width: 100%;\n  float: none;\n  text-align: center;\n  position: relative;\n}\n.side nav li a {\n  font-size: 24px;\n  display: block;\n  width: 100%;\n  padding: 15px;\n  border-radius: 0;\n  box-shadow: none !important;\n  position: relative;\n}\n.side nav li a.active {\n  background: rgba(0, 0, 0, 0.2);\n}\n.side nav li a .badge {\n  position: absolute;\n  display: table;\n  padding: 2px 5px 0;\n  color: #fff;\n  border: solid 1px #1e2327;\n  left: 50%;\n  top: 7px;\n  height: 10px;\n  border-radius: 4px;\n  min-width: 0;\n  -webkit-transform: scale(0.8, 0.8);\n          transform: scale(0.8, 0.8);\n}\n/*\nMenu\n=========================== */\n.wrap-menu {\n  width: 270px;\n  background: #262a2e;\n  position: fixed;\n  height: 100%;\n  left: -270px;\n  top: 0;\n  overflow: auto;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  color: #ddd;\n  z-index: 1;\n}\n.wrap-menu nav {\n  width: 100%;\n  padding: 25px 30px;\n  display: table;\n}\n.wrap-menu nav ul.menu {\n  display: table-cell;\n  vertical-align: middle;\n}\n.wrap-menu nav ul.menu > li {\n  width: 100%;\n  float: none;\n  height: auto;\n  padding: 0;\n}\n.wrap-menu nav ul.menu > li > a {\n  text-transform: uppercase;\n  display: block;\n  width: 100%;\n  padding: 5px 0;\n  font-size: 16px;\n}\n.wrap-menu nav ul.menu > li > a:hover {\n  background: transparent;\n  text-decoration: none;\n}\n.wrap-menu nav ul.menu ul.drop-down {\n  padding: 5px 0;\n  margin: 0;\n}\n.wrap-menu nav ul.menu ul.drop-down li {\n  width: 100%;\n  float: none;\n}\n.wrap-menu nav ul.menu ul.drop-down li a {\n  color: #999;\n  background: transparent;\n  text-decoration: none;\n}\n/*\nResponsive\n=========================== */\n@media (max-width: 767px) {\n  .side {\n    position: relative;\n    width: 100%;\n    height: auto;\n    display: block;\n    overflow: hidden;\n    z-index: 5;\n  }\n  .side nav {\n    display: block;\n    text-align: center;\n    position: relative;\n    z-index: 1;\n    padding: 0;\n    height: 53px;\n  }\n  .side nav ul {\n    display: inline-block;\n  }\n  .side nav ul li {\n    width: auto;\n    float: left;\n    display: block;\n  }\n  .side .mat-button, .side .mat-fab, .side .mat-icon-button, .side .mat-mini-fab, .side .mat-raised-button {\n    min-width: 35px;\n    line-height: 24px;\n  }\n  .side .wrap-brand {\n    background: #f9f9f9;\n    overflow: hidden;\n    position: relative;\n    top: 0;\n    padding-top: 14px;\n    margin-top: 0px;\n    text-align: center;\n    z-index: 2;\n  }\n  .side .wrap-brand img {\n    width: 50px;\n    display: none;\n  }\n  .side .wrap-brand img.mobile {\n    display: block;\n    margin: auto;\n  }\n\n  .wrap-menu {\n    width: 100%;\n    display: block;\n    left: 0;\n    top: -100%;\n    height: 225px;\n    z-index: 4;\n    position: absolute;\n    -webkit-transition: all 0s ease-in-out;\n    transition: all 0s ease-in-out;\n  }\n  .wrap-menu nav {\n    height: auto !important;\n    display: block;\n    text-align: center;\n  }\n  .wrap-menu nav ul.menu {\n    display: block;\n    width: 100%;\n  }\n  .wrap-menu nav ul.menu > li > a {\n    font-size: 14px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXZpbi9EZXNrdG9wL2FuZ3VsYXItdGVzdC9hbmd1c2hvcF9maWxlLTIvc3JjL2FwcC9zaWRlL3NpZGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmV2aW4vRGVza3RvcC9hbmd1bGFyLXRlc3QvYW5ndXNob3BfZmlsZS0yL3NyYy9hc3NldHMvc2Fzcy9jc3MzLW1peGlucy5zY3NzIiwiL1VzZXJzL25ldmluL0Rlc2t0b3AvYW5ndWxhci10ZXN0L2FuZ3VzaG9wX2ZpbGUtMi9zcmMvYXNzZXRzL3Nhc3MvdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvc2lkZS9zaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs2QkFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7K0RBQUE7QUNBQTs7NkJBQUE7QUFVQTs7NkJBQUE7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FGO0FETEE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNRRjtBSDFCQTs7NkJBQUE7QUFLQTs7NkJBQUE7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQVpNO0VBYU4sVUFBQTtBRzJCSjtBSHpCSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkF2QkU7RUNpQlIsd0NBQUE7RUFLUSxnQ0FBQTtFREdGLFVBQUE7QUdnQ1I7QUg5QlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUdnQ1o7QUg5Qlk7RUFDSSxhQUFBO0FHZ0NoQjtBSDNCSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUc2QlI7QUgzQlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUc2Qlo7QUgzQlk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VDN0JOLGdCQUFBO0VEaUNNLDJCQUFBO0VBQ0Esa0JBQUE7QUdrQ2hCO0FIaENnQjtFQUNJLDhCQUFBO0FHa0NwQjtBSC9CZ0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQ2hEVixrQkFBQTtFRGtEVSxZQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBR3NDcEI7QUgvQkE7OzZCQUFBO0FBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQ3pFRix3Q0FBQTtFQUtRLGdDQUFBO0VEc0VOLFdBQUE7RUFDQSxVQUFBO0FHdUNKO0FIckNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBR3VDUjtBSHJDUTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUd1Q1o7QUhyQ1k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FHdUNoQjtBSHJDZ0I7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUd1Q3BCO0FIckNvQjtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUd1Q3hCO0FIbENZO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUdvQ2hCO0FIbENnQjtFQUNJLFdBQUE7RUFDQSxXQUFBO0FHb0NwQjtBSGxDb0I7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBR29DeEI7QUg1QkE7OzZCQUFBO0FBR0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VHK0JOO0VIN0JNO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUcrQlY7RUg3QlU7SUFDSSxxQkFBQTtFRytCZDtFSDdCYztJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFRytCbEI7RUgxQk07SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUc0QlY7RUh6Qk07SUFDSSxtQkV0TEs7SUZ1TEwsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUcyQlY7RUh6QlU7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFRzJCZDtFSHpCYztJQUNJLGNBQUE7SUFDQSxZQUFBO0VHMkJsQjs7RUhyQkU7SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQy9MTixzQ0FBQTtJQUtRLDhCQUFBO0VFd05SO0VIM0JNO0lBQ0ksdUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUc2QlY7RUgzQlU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtFRzZCZDtFSDFCa0I7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFRzRCdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGUvc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbkltcG9ydFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL3Nhc3MvY3NzMy1taXhpbnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Fzcy92YXJpYWJsZSc7XHJcblxyXG4vKlxyXG5WYXJpYWJsZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuJGJnLXNpZGU6ICMxZTIzMjc7XHJcblxyXG4vKlxyXG5TaWRlXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uc2lkZXtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICRiZy1zaWRlO1xyXG4gICAgei1pbmRleDogMjtcclxuXHJcbiAgICAud3JhcC1icmFuZHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwIDE1cHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJnLXNpZGU7XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihcImFsbCAwLjVzIGVhc2UtaW4tb3V0XCIpO1xyXG4gICAgICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDc4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICAgICAgICAmLm1vYmlsZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmF2e1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkYmctc2lkZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgsMC44KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLypcclxuTWVudVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLndyYXAtbWVudXtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjJhMmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAtMjcwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oXCJhbGwgMC41cyBlYXNlLWluLW91dFwiKTtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBuYXZ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG5cclxuICAgICAgICB1bC5tZW51e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPiBsaXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgID4gYXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVsLmRyb3AtZG93bntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcblJlc3BvbnNpdmVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLnNpZGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgICAgIG5hdntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUzcHg7XHJcblxyXG4gICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LWljb24tYnV0dG9uLCAubWF0LW1pbmktZmFiLCAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcC1icmFuZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLWJnLWdyYXkyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICYubW9iaWxle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud3JhcC1tZW51e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAtMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oXCJhbGwgMHMgZWFzZS1pbi1vdXRcIik7XHJcblxyXG4gICAgICAgIG5hdntcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB1bC5tZW51e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGxpe1xyXG4gICAgICAgICAgICAgICAgICAgID4gYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFNhc3MgQ1NTMyBNaXhpbnMhIFRoZSBDcm9zcy1Ccm93c2VyIENTUzMgU2FzcyBMaWJyYXJ5XG4gIEJ5OiBNYXR0aGlldSBBdXNzYWd1ZWwsIGh0dHA6Ly93d3cubXluYW1laXNtYXR0aGlldS5jb20sIEBtYXR0aGlldV90d2VldHNcblxuICBMaXN0IG9mIENTUzMgU2FzcyBNaXhpbnMgRmlsZSB0byBiZSBAaW1wb3J0ZWQgYW5kIEBpbmNsdWRlZCBhcyB5b3UgbmVlZFxuXG4gIFRoZSBwdXJwb3NlIG9mIHRoaXMgbGlicmFyeSBpcyB0byBmYWNpbGl0YXRlIHRoZSB1c2Ugb2YgQ1NTMyBvbiBkaWZmZXJlbnQgYnJvd3NlcnMgYXZvaWRpbmcgSEFSRCBUTyBSRUFEIGFuZCBORVZFUlxuICBFTkRJTkcgY3NzIGZpbGVzXG5cbiAgbm90ZTogQWxsIENTUzMgUHJvcGVydGllcyBhcmUgYmVpbmcgc3VwcG9ydGVkIGJ5IFNhZmFyaSA1XG4gIG1vcmUgaW5mbzogaHR0cDovL3d3dy5maW5kbWVieWlwLmNvbS9saXRtdXMvI2NzczMtcHJvcGVydGllc1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLy8vL1xuLy8vIEBhdXRob3IgTWF0dGhpZXUgQXVzc2FndWVsXG4vLy8gQGdyb3VwIHNhc3MtY3NzMy1taXhpbnNcbi8vLy9cblxuXG4vLy8gQWRkcyBhIGJyb3dzZXIgcHJlZml4IHRvIHRoZSBwcm9wZXJ0eVxuLy8vIEBwYXJhbSB7Kn0gJHByb3BlcnR5IFByb3BlcnR5XG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgVmFsdWVcblxuQG1peGluIGNzczMtcHJlZml4KCRwcm9wZXJ0eSwgJHZhbHVlKSB7XG4gIC13ZWJraXQtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAta2h0bWwtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgIC1tb3otI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAtbXMtI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgLW8tI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG4gICAgICAgICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX07XG59XG5cblxuLy8vIEJhY2tncm91bmQgR3JhZGllbnRcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtZ3JhZGllbnQoJHN0YXJ0Q29sb3I6ICMzQzNDM0MsICRlbmRDb2xvcjogIzk5OTk5OSkge1xuICAgIGJhY2tncm91bmQ6ICRzdGFydENvbG9yOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogRm9yIFNhZmFyaSA1LjEgdG8gNi4wICovXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCRzdGFydENvbG9yLCAkZW5kQ29sb3IpOyAvKiBGb3IgT3BlcmEgMTEuMSB0byAxMi4wICovXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoJHN0YXJ0Q29sb3IsICRlbmRDb2xvcik7IC8qIEZvciBGaXJlZm94IDMuNiB0byAxNSAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkc3RhcnRDb2xvciwgJGVuZENvbG9yKTsgLyogU3RhbmRhcmQgc3ludGF4ICovXG59XG5cbkBtaXhpbiBibHVyKCRibHVyOiA1cHgpe1xuICAtd2Via2l0LWZpbHRlcjogYmx1cigkYmx1cik7XG4gIC1tb3otZmlsdGVyOiBibHVyKCRibHVyKTtcbiAgLW1zLWZpbHRlcjogYmx1cigkYmx1cik7XG4gIGZpbHRlcjogYmx1cigkYmx1cik7XG59XG5cbi8vLyBCYWNrZ3JvdW5kIEhvcml6b250YWxcbi8vLyBAcGFyYW0ge0NvbG9yfSAkc3RhcnRDb2xvciBbIzNDM0MzQ10gLSBTdGFydCBDb2xvclxuLy8vIEBwYXJhbSB7Q29sb3J9ICRlbmRDb2xvciBbIzk5OTk5OV0gLSBFbmQgQ29sb3JcblxuQG1peGluIGJhY2tncm91bmQtaG9yaXpvbnRhbCgkc3RhcnRDb2xvcjogIzNDM0MzQywgJGVuZENvbG9yOiAjOTk5OTk5KSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN0YXJ0Q29sb3I7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oJHN0YXJ0Q29sb3IpLCB0bygkZW5kQ29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgIC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgICAgICAgIGxpbmVhci1ncmFkaWVudChsZWZ0LCAkc3RhcnRDb2xvciwgJGVuZENvbG9yKTtcbiAgICBmaWx0ZXI6ICAgICAgICAgICAgcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JTdHI9JyN7JHN0YXJ0Q29sb3J9JywgZW5kQ29sb3JTdHI9JyN7JGVuZENvbG9yfScsIGdyYWRpZW50VHlwZT0nMScpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFJhZGlhbFxuLy8vIEBwYXJhbSB7Q29sb3J9ICRzdGFydENvbG9yIFsjM0MzQzNDXSAtIFN0YXJ0IENvbG9yXG4vLy8gQHBhcmFtIHtQZXJjZW50YWdlfSAkc3RhcnRQb3MgWzAlXSAtIFN0YXJ0IHBvc2l0aW9uXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGVuZENvbG9yIFsjOTk5OTk5XSAtIEVuZCBDb2xvclxuLy8vIEBwYXJhbSB7UGVyY2VudGFnZX0gJGVuZFBvcyBbMTAwJV0gLSBFbmQgcG9zaXRpb25cblxuQG1peGluIGJhY2tncm91bmQtcmFkaWFsKCRzdGFydENvbG9yOiAjRkZGRkZGLCAkc3RhcnRQb3M6IDAlLCAkZW5kQ29sb3I6ICMwMDAwMDAsICRlbmRQb3M6MTAwJSkge1xuICAgIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgJHN0YXJ0Q29sb3IgJHN0YXJ0UG9zLCAkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgkc3RhcnRQb3MsJHN0YXJ0Q29sb3IpLCBjb2xvci1zdG9wKCRlbmRQb3MsJGVuZENvbG9yKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsICRzdGFydENvbG9yICRzdGFydFBvcywkZW5kQ29sb3IgJGVuZFBvcyk7XG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCAkc3RhcnRDb2xvciAkc3RhcnRQb3MsJGVuZENvbG9yICRlbmRQb3MpO1xufVxuXG5cbi8vLyBCYWNrZ3JvdW5kIFNpemVcbi8vLyBAcGFyYW0ge1NpemV9ICR3aWR0aCBbMTAwJV0gLSBXaWR0aFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHdpZHRoIFskd2lkdGhdIC0gSGVpZ2h0XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYmFja2dyb3VuZC1zaXplKCR3aWR0aDogMTAwJSwgJGhlaWdodDogJHdpZHRoKSB7XG4gIEBpZiB0eXBlLW9mKCR3aWR0aCkgPT0gJ251bWJlcicgYW5kICRoZWlnaHQgIT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCAkaGVpZ2h0KTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JhY2tncm91bmQtc2l6ZScsICR3aWR0aCk7XG4gIH1cbn1cblxuXG4vLy8gQmFja2dyb3VuZCBDb2xvciBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsxMDAlXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRvcGFjaXR5IFswLjg1XSAtIE9wYWNpdHlcblxuQG1peGluIGJhY2tncm91bmQtb3BhY2l0eSgkY29sb3I6ICMwMDAsICRvcGFjaXR5OiAwLjg1KSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1czogNXB4KSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JvcmRlci1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gQm9yZGVyIFJhZGl1cyBTZXBhcmF0ZVxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcExlZnRSYWRpdXMgWzVweF0gLSBUb3AgTGVmdFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHRvcFJpZ2h0UmFkaXVzIFs1cHhdIC0gVG9wIFJpZ2h0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tTGVmdFJhZGl1cyBbNXB4XSAtIEJvdHRvbSBMZWZ0XG4vLy8gQHBhcmFtIHtTaXplfSAkYm90dG9tUmlnaHRSYWRpdXMgWzVweF0gLSBCb3R0b20gUmlnaHRcblxuQG1peGluIGJvcmRlci1yYWRpdXMtc2VwYXJhdGUoJHRvcExlZnRSYWRpdXM6IDVweCwgJHRvcFJpZ2h0UmFkaXVzOiA1cHgsICRib3R0b21MZWZ0UmFkaXVzOiA1cHgsICRib3R0b21SaWdodFJhZGl1czogNXB4KSB7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogICAgICR0b3BMZWZ0UmFkaXVzO1xuICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgJGJvdHRvbUxlZnRSYWRpdXM7XG5cbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiAgICAkdG9wUmlnaHRSYWRpdXM7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDogJGJvdHRvbVJpZ2h0UmFkaXVzO1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogICRib3R0b21MZWZ0UmFkaXVzO1xuXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICAgICAkdG9wTGVmdFJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAgICR0b3BSaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b21SaWdodFJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogICRib3R0b21MZWZ0UmFkaXVzO1xufVxuXG5cbi8vLyBCb3hcbi8vLyBAcGFyYW0geyp9ICRvcmllbnQgW2hvcml6b250YWxdIC0gT3JpZW50YXRpb25cbi8vLyBAcGFyYW0geyp9ICRwYWNrIFtjZW50ZXJdIC0gUGFja1xuLy8vIEBwYXJhbSB7Kn0gJGFsaWduIFtjZW50ZXJdIC0gQWxpZ25cbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBib3goJG9yaWVudDogaG9yaXpvbnRhbCwgJHBhY2s6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiBib3g7XG5cbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1vcmllbnQnLCAkb3JpZW50KTtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2JveC1wYWNrJywgJHBhY2spO1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWFsaWduJywgJGFsaWduKTtcbn1cblxuXG4vLy8gQm94IFJHQkFcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRyIFs2MF0gLSBSZWRcbi8vLyBAcGFyYW0ge0ludGVnZXJ9ICRnIFszXSAtIEdyZWVuXG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkYiBbMTJdIC0gQmx1ZVxuLy8vIEBwYXJhbSB7RG91YmxlfSAkb3BhY2l0eSBbMC4yM10gLSBPcGFjaXR5XG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIFsjM0MzQzNDXSAtIENvbG9yXG5cbkBtaXhpbiBib3gtcmdiYSgkcjogNjAsICRnOiAzLCAkYjogMTIsICRvcGFjaXR5OiAwLjIzLCAkY29sb3I6ICMzQzNDM0MpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHIsICRnLCAkYiwgJG9wYWNpdHkpO1xuICAgICAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3skY29sb3J9JyxlbmRDb2xvcnN0cj0nI3skY29sb3J9Jyk7XG4gICAgICAgICAgICB6b29tOiAgIDE7XG59XG5cblxuLy8vIEJveCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbNXB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG4vLy8gQHBhcmFtIHtCb29sZWFufSAkaW5zZXQgLSBJbnNldFxuXG5AbWl4aW4gYm94LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpLCAkaW5zZXQ6IFwiXCIpIHtcbiAgQGlmICgkaW5zZXQgIT0gXCJcIikge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJGluc2V0ICR4ICR5ICRibHVyICRjb2xvcik7XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgJHggJHkgJGJsdXIgJGNvbG9yKTtcbiAgfVxufVxuXG5cbi8vLyBCb3ggU2l6aW5nXG4vLy8gQHBhcmFtIHsqfSAkdHlwZSBbYm9yZGVyLWJveF0gLSBUeXBlXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gYm94LXNpemluZygkdHlwZTogYm9yZGVyLWJveCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LXNpemluZycsICR0eXBlKTtcbn1cblxuXG4vLy8gQ29sdW1uc1xuLy8vIEBwYXJhbSB7SW50ZWdlcn0gJGNvdW50IFszXSAtIENvdW50XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkZ2FwIFsxMF0gLSBHYXBcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBjb2x1bW5zKCRjb3VudDogMywgJGdhcDogMTApIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ2NvbHVtbi1jb3VudCcsICRjb3VudCk7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdjb2x1bW4tZ2FwJywgJGdhcCk7XG59XG5cblxuLy8vIERvdWJsZSBCb3JkZXJzXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yT25lIFsjM0MzQzNDXSAtIENvbG9yIE9uZVxuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvclR3byBbIzk5OTk5OV0gLSBDb2xvciBUd29cbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuLy8vIEByZXF1aXJlIHttaXhpbn0gYm9yZGVyLXJhZGl1c1xuXG5AbWl4aW4gZG91YmxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRyYWRpdXM6IDApIHtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgMCAwIDAgMXB4ICRjb2xvclR3byk7XG5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyggJHJhZGl1cyApO1xufVxuXG5cbi8vLyBGbGV4XG4vLy8gQHBhcmFtIHtJbnRlZ2VyfSAkdmFsdWUgWzFdIC0gVmFsdWVcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiBmbGV4KCR2YWx1ZTogMSkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnYm94LWZsZXgnLCAkdmFsdWUpO1xufVxuXG5cbi8vLyBGbGlwXG4vLy8gQHBhcmFtIHtEb3VibGV9ICRzY2FsZVggWy0xXSAtIFNjYWxlWFxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGZsaXAoJHNjYWxlWDogLTEpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsIHNjYWxlWCgkc2NhbGVYKSk7XG4gIGZpbHRlcjogICAgICAgICAgICBGbGlwSDtcbiAgLW1zLWZpbHRlcjogICAgICAgIFwiRmxpcEhcIjtcbn1cblxuXG4vLy8gRm9udCBGYWNlXG4vLy8gQHBhcmFtIHtGb250fSAkZm9udEZhbWlseSBbbXlGb250XSAtIEZvbnQgRmFtaWx5XG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRlb3RGaWxlU3JjIFsnbXlGb250LmVvdCddIC0gRW90IEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR3b2ZmRmlsZVNyYyBbJ215Rm9udC53b2ZmJ10gLSBXb2ZmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR0dGZGaWxlU3JjIFsnbXlGb250LnR0ZiddIC0gVHRmIEZpbGUgU291cmNlXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzdmdGaWxlU3JjIFsnbXlGb250LnN2ZyddIC0gU3ZnIEZpbGUgU291cmNlXG5cbkBtaXhpbiBmb250LWZhY2UoJGZvbnRGYW1pbHk6IG15Rm9udCwgJGVvdEZpbGVTcmM6ICdteUZvbnQuZW90JywgJHdvZmZGaWxlU3JjOiAnbXlGb250LndvZmYnLCAkdHRmRmlsZVNyYzogJ215Rm9udC50dGYnLCAkc3ZnRmlsZVNyYzogJ215Rm9udC5zdmcnLCAkc3ZnRm9udElEOiAnI215Rm9udCcpIHtcbiAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xuICBzcmM6IHVybCgkZW90RmlsZVNyYykgIGZvcm1hdCgnZW90JyksXG4gICAgICAgdXJsKCR3b2ZmRmlsZVNyYykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKCR0dGZGaWxlU3JjKSAgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgIHVybCgkc3ZnRmlsZVNyYyArICRzdmdGb250SUQpIGZvcm1hdCgnc3ZnJyk7XG59XG5cblxuLy8vIE9wYWNpdHlcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG9wYWNpdHkgWzAuNV0gLSBPcGFjaXR5XG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gb3BhY2l0eSgkb3BhY2l0eTogMC41KSB7XG4gICAgJG9wYWNpdHlNdWx0aXBsaWVkOiAoJG9wYWNpdHkgKiAxMDApO1xuXG4gICAgZmlsdGVyOiAgICAgICAgIGFscGhhKG9wYWNpdHk9JG9wYWNpdHlNdWx0aXBsaWVkKTtcbiAgICAtbXMtZmlsdGVyOiAgICAgXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT1cIiArICRvcGFjaXR5TXVsdGlwbGllZCArIFwiKVwiO1xuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdvcGFjaXR5JywgJG9wYWNpdHkpO1xufVxuXG5cbi8vLyBPdXRsaW5lIFJhZGl1c1xuLy8vIEBwYXJhbSB7U2l6ZX0gJHJhZGl1cyBbNXB4XSAtIFJhZGl1c1xuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIG91dGxpbmUtcmFkaXVzKCRyYWRpdXM6IDVweCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgnb3V0bGluZS1yYWRpdXMnLCAkcmFkaXVzKTtcbn1cblxuXG4vLy8gUmVzaXplXG4vLy8gQHBhcmFtIHsqfSAkZGlyZWN0b2luIFtib3RoXSAtIERpcmVjdGlvblxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIHJlc2l6ZSgkZGlyZWN0aW9uOiBib3RoKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdyZXNpemUnLCAkZGlyZWN0aW9uKTtcbn1cblxuXG4vLy8gUm90YXRlXG4vLy9cbi8vLyBDU1MgTWF0cml4IFJvdGF0aW9uIENhbGN1bGF0b3IgaHR0cDovL3d3dy5ib29nZGVzaWduLmNvbS9leGFtcGxlcy90cmFuc2Zvcm1zL21hdHJpeC1jYWxjdWxhdG9yLmh0bWxcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJGRlZyBbMF0gLSBEZWdyZWVcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMSBbMF0gLSBNMTFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0xMiBbMF0gLSBNMTJcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMSBbMF0gLSBNMjFcbi8vLyBAcGFyYW0ge0RvdWJsZX0gJG0yMiBbMF0gLSBNMjJcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiByb3RhdGUoJGRlZzogMCwgJG0xMTogMCwgJG0xMjogMCwgJG0yMTogMCwgJG0yMjogMCkge1xuICBAaW5jbHVkZSBjc3MzLXByZWZpeCgndHJhbnNmb3JtJywgcm90YXRlKCRkZWcgKyBkZWcpKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFxuICAgICAgIE0xMT0jeyRtMTF9LCBNMTI9I3skbTEyfSwgTTIxPSN7JG0yMX0sIE0yMj0jeyRtMjJ9LCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJyk7XG4gICAgem9vbTogMTtcbn1cblxuXG4vLy8gVGV4dCBTaGFkb3dcbi8vLyBAcGFyYW0ge1NpemV9ICR4IFsycHhdIC0gWFxuLy8vIEBwYXJhbSB7U2l6ZX0gJHkgWzJweF0gLSBZXG4vLy8gQHBhcmFtIHtTaXplfSAkYmx1ciBbMnB4XSAtIEJsdXJcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgW3JnYmEoMCwwLDAsLjQpXSAtIENvbG9yXG5cbkBtaXhpbiB0ZXh0LXNoYWRvdygkeDogMnB4LCAkeTogMnB4LCAkYmx1cjogNXB4LCAkY29sb3I6IHJnYmEoMCwwLDAsLjQpKSB7XG4gICAgdGV4dC1zaGFkb3c6ICR4ICR5ICRibHVyICRjb2xvcjtcbn1cblxuXG4vLy8gVHJhbnNmb3JtXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtKCRwYXJhbXMpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybScsICRwYXJhbXMpO1xufVxuXG5cbi8vLyBUcmFuc2Zvcm0tT3JpZ2luXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkcGFyYW1zKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCd0cmFuc2Zvcm0tb3JpZ2luJywgJHBhcmFtcyk7XG59XG5cblxuLy8gVHJhbnNmb3JtLVN0eWxlXG4vLy8gQHBhcmFtIHtMaXN0fSAkcGFyYW1zIC0gUGFyYW1zXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zZm9ybS1zdHlsZScsICRzdHlsZSk7XG59XG5cbi8vLyBUcmFuc2l0aW9uXG4vLy8gQHBhcmFtIHtMaXN0fSAkcHJvcGVydGllcyAtIFByb3BlcnRpZXNcbi8vLyBAcmVxdWlyZSB7bWl4aW59IGNzczMtcHJlZml4XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0aWVzLi4uKSB7XG5cbiAgQGlmIGxlbmd0aCgkcHJvcGVydGllcykgPj0gMSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAkcHJvcGVydGllcyk7XG4gIH1cblxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgY3NzMy1wcmVmaXgoJ3RyYW5zaXRpb24nLCAgXCJhbGwgMC4ycyBlYXNlLWluLW91dCAwc1wiKTtcbiAgfVxufVxuXG5cbi8vLyBUcmlwbGUgQm9yZGVyc1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvck9uZSBbIzNDM0MzQ10gLSBDb2xvciBPbmVcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3JUd28gWyM5OTk5OTldIC0gQ29sb3IgVHdvXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yVGhyZWUgWyMwMDAwMDBdIC0gQ29sb3IgVGhyZWVcbi8vLyBAcGFyYW0ge1NpemV9ICRyYWRpdXMgWzBdIC0gUmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBib3JkZXItcmFkaXVzXG4vLy8gQHJlcXVpcmUge21peGlufSBjc3MzLXByZWZpeFxuXG5AbWl4aW4gdHJpcGxlLWJvcmRlcnMoJGNvbG9yT25lOiAjM0MzQzNDLCAkY29sb3JUd286ICM5OTk5OTksICRjb2xvclRocmVlOiAjMDAwMDAwLCAkcmFkaXVzOiAwKSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yT25lO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcmFkaXVzKTtcblxuICAgIEBpbmNsdWRlIGNzczMtcHJlZml4KCdib3gtc2hhZG93JywgXCIwIDAgMCAxcHggI3skY29sb3JUd299LCAwIDAgMCAycHggI3skY29sb3JUaHJlZX1cIik7XG59XG5cblxuLy8vIEtleWZyYW1lc1xuLy8vIEBwYXJhbSB7Kn0gJGFuaW1hdGlvbi1uYW1lIC0gQW5pbWF0aW9uIG5hbWVcbi8vLyBAY29udGVudCBbQW5pbWF0aW9uIGNzc11cblxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tcy1rZXlmcmFtZXMgI3skYW5pbWF0aW9uLW5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbi1uYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cblxuLy8vIEFuaW1hdGlvblxuLy8vIEBwYXJhbSB7Kn0gJHN0ciAtIG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlIHBsYXktc3RhdGUgKFtodHRwOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfYW5pbWF0aW9uLmFzcF0oaHR0cDovL3d3dy53M3NjaG9vbHMuY29tL2Nzc3JlZi9jc3MzX3ByX2FuaW1hdGlvbi5hc3ApKVxuLy8vIEByZXF1aXJlIHttaXhpbn0gY3NzMy1wcmVmaXhcblxuQG1peGluIGFuaW1hdGlvbigkc3RyKSB7XG4gIEBpbmNsdWRlIGNzczMtcHJlZml4KCdhbmltYXRpb24nLCAkc3RyKTtcbn1cbiIsIi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kY29sb3ItdGl0bGU6ICMzZjNmM2Y7XG4kY29sb3ItY29udGVudDogIzhmOGY4ZjtcbiRjb2xvci1ncmF5OiAjZWZlZmVmO1xuJGNvbG9yLWJnLWdyYXk6ICNmYWZhZmE7XG4kY29sb3ItYmctZ3JheTI6ICNmOWY5Zjk7XG4kY29sb3ItYmctZ3JheTM6ICNmNWY1ZjU7XG5cbi8qXG5Gb250IEZhbWlseVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iLCIvKlxuSW1wb3J0XG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgU2FzcyBDU1MzIE1peGlucyEgVGhlIENyb3NzLUJyb3dzZXIgQ1NTMyBTYXNzIExpYnJhcnlcbiAgQnk6IE1hdHRoaWV1IEF1c3NhZ3VlbCwgaHR0cDovL3d3dy5teW5hbWVpc21hdHRoaWV1LmNvbSwgQG1hdHRoaWV1X3R3ZWV0c1xuXG4gIExpc3Qgb2YgQ1NTMyBTYXNzIE1peGlucyBGaWxlIHRvIGJlIEBpbXBvcnRlZCBhbmQgQGluY2x1ZGVkIGFzIHlvdSBuZWVkXG5cbiAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBsaWJyYXJ5IGlzIHRvIGZhY2lsaXRhdGUgdGhlIHVzZSBvZiBDU1MzIG9uIGRpZmZlcmVudCBicm93c2VycyBhdm9pZGluZyBIQVJEIFRPIFJFQUQgYW5kIE5FVkVSXG4gIEVORElORyBjc3MgZmlsZXNcblxuICBub3RlOiBBbGwgQ1NTMyBQcm9wZXJ0aWVzIGFyZSBiZWluZyBzdXBwb3J0ZWQgYnkgU2FmYXJpIDVcbiAgbW9yZSBpbmZvOiBodHRwOi8vd3d3LmZpbmRtZWJ5aXAuY29tL2xpdG11cy8jY3NzMy1wcm9wZXJ0aWVzXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qXG5Db2xvclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuRm9udCBGYW1pbHlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4vKlxuVmFyaWFibGVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcblNpZGVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnNpZGUge1xuICB3aWR0aDogMTI1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjMWUyMzI3O1xuICB6LWluZGV4OiAyO1xufVxuLnNpZGUgLndyYXAtYnJhbmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAyMHB4IDAgMTVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxZTIzMjc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDk7XG59XG4uc2lkZSAud3JhcC1icmFuZCBpbWcge1xuICB3aWR0aDogNzhweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zaWRlIC53cmFwLWJyYW5kIGltZy5tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZGUgbmF2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zaWRlIG5hdiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZSBuYXYgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIC1raHRtbC1ib3JkZXItcmFkaXVzOiAwO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiAwO1xuICAtby1ib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNpZGUgbmF2IGxpIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnNpZGUgbmF2IGxpIGEgLmJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcGFkZGluZzogMnB4IDVweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzFlMjMyNztcbiAgbGVmdDogNTAlO1xuICB0b3A6IDdweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLWtodG1sLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtaW4td2lkdGg6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpO1xufVxuXG4vKlxuTWVudVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4ud3JhcC1tZW51IHtcbiAgd2lkdGg6IDI3MHB4O1xuICBiYWNrZ3JvdW5kOiAjMjYyYTJlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogLTI3MHB4O1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAta2h0bWwtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogI2RkZDtcbiAgei1pbmRleDogMTtcbn1cbi53cmFwLW1lbnUgbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgZGlzcGxheTogdGFibGU7XG59XG4ud3JhcC1tZW51IG5hdiB1bC5tZW51IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53cmFwLW1lbnUgbmF2IHVsLm1lbnUgPiBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuLndyYXAtbWVudSBuYXYgdWwubWVudSA+IGxpID4gYSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi53cmFwLW1lbnUgbmF2IHVsLm1lbnUgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLndyYXAtbWVudSBuYXYgdWwubWVudSB1bC5kcm9wLWRvd24ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAwO1xufVxuLndyYXAtbWVudSBuYXYgdWwubWVudSB1bC5kcm9wLWRvd24gbGkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ud3JhcC1tZW51IG5hdiB1bC5tZW51IHVsLmRyb3AtZG93biBsaSBhIHtcbiAgY29sb3I6ICM5OTk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qXG5SZXNwb25zaXZlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2lkZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbiAgLnNpZGUgbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gIH1cbiAgLnNpZGUgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnNpZGUgbmF2IHVsIGxpIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuc2lkZSAubWF0LWJ1dHRvbiwgLnNpZGUgLm1hdC1mYWIsIC5zaWRlIC5tYXQtaWNvbi1idXR0b24sIC5zaWRlIC5tYXQtbWluaS1mYWIsIC5zaWRlIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiAzNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG4gIC5zaWRlIC53cmFwLWJyYW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgLnNpZGUgLndyYXAtYnJhbmQgaW1nIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zaWRlIC53cmFwLWJyYW5kIGltZy5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC53cmFwLW1lbnUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAtMTAwJTtcbiAgICBoZWlnaHQ6IDIyNXB4O1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UtaW4tb3V0O1xuICAgIC1raHRtbC10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwcyBlYXNlLWluLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC53cmFwLW1lbnUgbmF2IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLndyYXAtbWVudSBuYXYgdWwubWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndyYXAtbWVudSBuYXYgdWwubWVudSA+IGxpID4gYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");





let SideComponent = class SideComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
        this.selectedMenu = null;
        // Menus
        this.menus = [
            {
                label: 'Home',
                link: '/home/home1',
            },
            {
                label: 'Shop',
                link: '/shop/product3',
            },
            {
                label: 'Contact Us',
                link: '/contact'
            }
        ];
        this.activebar = false;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        setInterval(() => {
            this.cookie.updateCookie();
            this.cookie.initCookie();
            this.cartLength = this.cookie['productsOrder'].length;
            this.wishlistLength = this.cookie['arrWishList'].length;
            this.comapreLength = this.cookie['arrCompare'].length;
        }, 1000);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])) {
                return;
            }
            this.activebar = false;
        });
    }
    ngAfterViewInit() {
        this.nav.nativeElement.style.height = window.innerHeight + 'px';
    }
    // Event Listener
    onResize(event) {
        this.nav.nativeElement.style.height = window.innerHeight + 'px';
    }
    // On Select Menu
    selectMenu(menu) {
        if (menu == this.selectedMenu) {
            this.selectedMenu = null;
        }
        else {
            this.selectedMenu = menu;
        }
    }
    // Toggle Bar
    toggleBar() {
        this.toggle.emit();
        this.activebar = !this.activebar;
    }
};
SideComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navmenu', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SideComponent.prototype, "nav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SideComponent.prototype, "onResize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SideComponent.prototype, "toggle", void 0);
SideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side',
        template: __webpack_require__(/*! raw-loader!./side.component.html */ "./node_modules/raw-loader/index.js!./src/app/side/side.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideUp', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: '*'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 0, height: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.2, offset: 0.2, height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 1.0, height: 'auto' })
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, offset: 0, height: 'auto' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.2, offset: 0.2, height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, offset: 1.0, height: 0 })
                    ]))
                ])
            ])
        ],
        providers: [_lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
        styles: [__webpack_require__(/*! ./side.component.scss */ "./src/app/side/side.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], SideComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nevin/Desktop/angular-test/angushop_file-2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map