### Tab Viewing Duration

I cleaned up the Card component, so all it does is handle its content now.

In the App component, I get the Date.now from when the page was loaded, and the Date.now from when the tab is changed. Now you can see whether you've just arrived at the page, or how long the previous tab was open. 

I formatted the duration into seconds to make it more user-friendly, but I would likely send the unformatted milliseconds to a back end whenever the tab is changed. (Assuming that's how they'd like the data.)

I added a button for the user to "leave the page" so that we could see their duration on the final page. Since none of this would actually be displayed for the user, in production I'd return a function within a useEffect hook that sent the final duration to the back end.


https://user-images.githubusercontent.com/13261139/121085502-2cc88b80-c79f-11eb-94d1-fc7b0d9901d0.mov



If you have any questions, let me know. This was a fun challenge!





## Initial notes:

- page with three tabs, display different content below for each tab
- tabs are always visible, like a header
- analytics: session duration
- initial tab is open by default and is included in duration
- also get total duration of the final tab
- duration is sent when user leaves the current tab
