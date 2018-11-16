# Accessible error messages and hints

Demo version: https://russmaxdesign.github.io/accessible-hint-error/

Examples of accessible inline error messages and hints.

See [Licence information](LICENCE) for use.


So you’ll see that the JS is pretty simple. It triggers the error when the field blurs, and assumes that it’s invalid; it doesn’t check for subsequent validity to remove the error, once it’s there it’s there. I’m assuming that all you need is test conditions for the alert and aria-live announcement, you didn’t actually want me to implement form validation :-)

A couple of things occurred to me while checking this. 

The first is that the way such errors are triggered means that there’s some cognitive imbalance — i.e. that the live announcement will refer to errors on a field that no longer has focus. Perhaps the error message itself should be front-loaded to make this clearer, like “Error: Address value is invalid”.

The other thing was that in NVDA/Firefox when role=alert was used, the announcement of the alert obscures the announcement of the field that’s just taken focus. In other combinations (and other test cases in NVDA) the error is announced *and* the Email field that’s just taken focus is announced; but in this combination, Email is not announced at all. That would be a failure of SC 3.3.2 and therefore the alert pattern itself is probably not viable. 

You happy / is there anything else you need? Feel free to ping me on Messenger if your deadline makes email turnaround too slow. 


cheers,

James
