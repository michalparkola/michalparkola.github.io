---
title: "How to Design Highly-Usable Dialog Boxes"
description: "Software apps often ask their users to confirm (potentially destructive) actions. The method most often used are dialog boxes with a message and yes/no buttons. Unfortunately this is often bad desi..."
pubDate: 2009-04-12T12:12:04.000Z
updatedDate: 2021-01-30T06:04:53.000Z
---
Software apps often ask their users to confirm (potentially
destructive) actions. The method most often used are
dialog boxes with a message
and yes/no
buttons.

Unfortunately this is often bad design because it:

* slows the user down and
* doesn’t guarantee
  safety (there are so many
  dialog boxes popping-up all the time that many users develop a
  kind of *dialog blindness* and sometimes mechanically
  click “yes” without reading the details).

The worst kind of dialog is that with a long message worded so
that it’s not immediately obvious which answer does what (see leftmost dialog in figure).

We can improve upon that by simplifying the message as much as
possible and putting meaningful labels on the buttons (save/discard instead of yes/no,
middle dialog).

An even better solution would be to have a really short message
and big, meaningful buttons (dialog on the right).

![UI Dialog Examples - Yes/No vs Save/Discard](/images/yesnosavediscard.png)

That way we can minimise both confusion and delay and have
happier, safer users.

But if the overall design (and budget) allows we can go even
further: why waste the user’s time at all? Instead provide a
robust undo feature and do
away with the dialog altogether ;-)

**Note**: the picture was created with
[Balsamiq Mockups](http://www.balsamiq.com/products/mockups?ref=localhost), a great little app for sketching UIs.

**Update January 2012**: I’ve recreated the
example dialog boxes as they were missing after I moved this
post from udreka.pl to this site. I’m not sure what the exact
wording was on the originals and I feel as though the
current version is somewhat less convincing, but I can’t seem to
come up with a better one right now so this is going to be it
for the time being.

**Update December 2016**: Moved post from
ziggurat.wordpress.com to fluidcircle.net, which is currently my
main professional site / blog.