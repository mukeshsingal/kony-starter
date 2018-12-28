define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxRememberMe **/
    AS_FlexContainer_c5f2c9fe549b4391b131751f6362bee8: function AS_FlexContainer_c5f2c9fe549b4391b131751f6362bee8(eventobject) {
        var self = this;
        this.rememberMe();
    },
    /** onDone defined for tbxUsername **/
    AS_TextField_a48a22600efd446287708a9cf9d072bb: function AS_TextField_a48a22600efd446287708a9cf9d072bb(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    },
    /** onDone defined for tbxPassword **/
    AS_TextField_a275d8b7f2174f88832572fd05e951e4: function AS_TextField_a275d8b7f2174f88832572fd05e951e4(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    /** onTouchStart defined for imgClose **/
    AS_Image_c392e54011964044b5a988032fc85850: function AS_Image_c392e54011964044b5a988032fc85850(eventobject, x, y) {
        var self = this;
        self.view.flxError.isVisible = false;
    }
});