package com.conormcgregorquotes;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        try  {
            Thread.sleep(1);
        } catch (Exception e) {
            
        }
        super.onCreate(savedInstanceState);
    }
        
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ConorMcgregorQuotes";
    }
}
