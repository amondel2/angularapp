package grangle

import com.grangle.Test

class BootStrap {

    def init = { servletContext ->
        Test newt = new Test()
        Test new1 = new Test()
        Test new2 = new Test()
        newt.name = "MATT"
        new1.name = "Joe"
        new2.name  = "Jame"
        new2.save();
        new1.save();
        newt.save();
    }
    def destroy = {
    }
}
