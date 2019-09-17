(function () {
    "use strict";
    window.onload = function () {
        // all inputed content
        var txt = [];
        // operator
        var operator = "";
        var lastFactorFinished = false;
        // the area to show inputs
        var disp = document.getElementsByClassName("disp")[0];
        //number buttons
        var btn = document.getElementsByClassName("digit");
        //operators
        var op = document.getElementsByClassName("op");
        //clean
        var cln = document.getElementsByClassName("clean")[0];

        //clean
        cln.onclick = function() {
            disp.value = "";
            txt = [];
            operator = "";
            lastFactorFinished = false;
        }

        //number buttons
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function () {
                //if there is no operator
                if (operator == "") {
                    //handeling "."
                    if (this.value == ".") {
                        if (disp.value.indexOf(".") == -1) {
                            if (disp.value == "") {
                                disp.value = "0.";
                            }
                            else {
                                disp.value += this.value;
                            }
                        }
                    }
                    else {
                        disp.value += this.value;
                    }
                }
                // else there is an operator
                else {
                    if (lastFactorFinished == true) {
                        disp.value = this.value;
                        lastFactorFinished = false;
                        txt[txt.length] = operator;
                        operator = "";
                    }
                    else {
                        //handeling "."
                        if (this.value == ".") {
                            if(disp.value.indexOf(".") == -1) {
                                if (disp.value == "") {
                                    disp,value = "0.";
                                }
                                else {
                                    disp.value +=this.value;
                                }
                            }
                        }
                        else {
                            disp.value += this.value;
                        }
                    }
                }
                
            }
        }

        //operators
        for (var i = 0; i < op.length; i++) {
            op[i].onclick = function () {
                if (this.value == "+/=") {
                    if (operator == "") {
                        txt[txt.length] = disp.value;
                        //txt[txt.length] = "=";
                        //var result = txt.join("");
                        var result = eval(txt.join(""));
                        //disp.value = eval(txt.join("")).toString();
                        disp.value = result;
                        //disp.value = result;

                        txt = [];
                        txt[txt.length] = disp.value;
                        operator = "+";
                        lastFactorFinished = true;
                    }
                    
                }
                else {
                    if (operator == "") {
                        operator = this.value;
                        txt[txt.length] = disp.value;
                        lastFactorFinished = true;
                    }
                }
            }    
        }

    }
})();