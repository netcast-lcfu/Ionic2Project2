import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'page-signaturepad',
  templateUrl: 'signaturepad.html',
})
export class SignaturepadPage {
  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  public imgSrc:String = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABSUAAAEsCAYAAAA1sdY9AAAgAElEQVR4Xu3dsYotZhWG4RVQDFgkhYWFYAqxskhlYWM6QSz0CrTwAvQKNHegl+AdHBvtRCuxkMTGSjB4BRGECEqQH/aG4eSYFZJvvjN75hkYzknOP2vt/ey/epmZ/cr4IECAAAECBAgQIECAAAECBAgQIECAQFHgleIuqwgQIECAAAECBAgQIECAAAECBAgQIDCipEtAgAABAgQIECBAgAABAgQIECBAgEBVQJSscltGgAABAgQIECBAgAABAgQIECBAgIAo6Q4QIECAAAECBAgQIECAAAECBAgQIFAVECWr3JYRIECAAAECBAgQIECAAAECBAgQICBKugMECBAgQIAAAQIECBAgQIAAAQIECFQFRMkqt2UECBAgQIAAAQIECBAgQIAAAQIECIiS7gABAgQIECBAgAABAgQIECBAgAABAlUBUbLKbRkBAgQIECBAgAABAgQIECBAgAABAqKkO0CAAAECBAgQIECAAAECBAgQIECAQFVAlKxyW0aAAAECBAgQIECAAAECBAgQIECAgCjpDhAgQIAAAQIECBAgQIAAAQIECBAgUBUQJavclhEgQIAAAQIECBAgQIAAAQIECBAgIEq6AwQIECBAgAABAgQIECBAgAABAgQIVAVEySq3ZQQIECBAgAABAgQIECBAgAABAgQIiJLuAAECBAgQIECAAAECBAgQIECAAAECVQFRssptGQECBAgQIECAAAECBAgQIECAAAECoqQ7QIAAAQIECBAgQIAAAQIECBAgQIBAVUCUrHJbRoAAAQIECBAgQIAAAQIECBAgQICAKOkOECBAgAABAgQIECBAgAABAgQIECBQFRAlq9yWESBAgAABAgQIECBAgAABAgQIECAgSroDBAgQIECAAAECBAgQIECAAAECBAhUBUTJKrdlBAgQIECAAAECBAgQIECAAAECBAiIku4AAQIECBAgQIAAAQIECBAgQIAAAQJVAVGyym0ZAQIECBAgQIAAAQIECBAgQIAAAQKipDtAgAABAgQIECBAgAABAgQIECBAgEBVQJSscltGgAABAgQIECBAgAABAgQIECBAgIAo6Q4QIECAAAECBAgQIECAAAECBAgQIFAVECWr3JYRIECAAAECBAgQIECAAAECBAgQICBKugMECBAgQIAAAQIECBAgQIAAAQIECFQFRMkqt2UECBAgQIAAAQIECBAgQIAAAQIECIiS7gABAgQIECBAgAABAgQIECBAgAABAlUBUbLKbRkBAgQIECBAgAABAgQIECBAgAABAqKkO0CAAAECBAgQIECAAAECBAgQIECAQFVAlKxyW0aAAAECBAgQIECAAAECBAgQIECAgCjpDhAgQIAAAQIECBAgQIAAAQIECBAgUBUQJavclhEgQIAAAQIECBAgQIAAAQIECBAgIEq6AwQIECBAgAABAgQIECBAgAABAgQIVAVEySq3ZQQIECBAgAABAgQIECBAgAABAgQIiJLuAAECBAgQIECAAAECBAgQIECAAAECVQFRssptGQECBAgQIECAAAECBAgQIECAAAECoqQ7QIAAAQIECBAgQIAAAQIECBAgQIBAVUCUrHJbRoAAAQIECBAgQIAAAQIECBAgQICAKOkOECBAgAABAgQIECBAgAABAgQIECBQFRAlq9yWESBAgAABAgQIECBAgAABAgQIECAgSroDBAgQIECAAAECBAgQIECAAAECBAhUBUTJKrdlBAgQIECAAAECBAgQIECAAAECBAiIku4AAQIECBAgQIAAAQIECBAgQIAAAQJVAVGyym0ZAQIECBAgQIAAAQIECBAgQIAAAQKipDtAgAABAgQIECBAgAABAgQIECBAgEBVQJSscltGgAABAgQIECBAgAABAgQIECBAgIAo6Q4QIECAAAECBAgQIECAAAECBAgQIFAVECWr3JYRIECAAAECBAgQIECAAAECBAgQICBKugMECBAgQIAAAQIECBAgQIAAAQIECFQFRMkqt2UECBAgQIAAAQIECBAgQIAAAQIECIiS7gABAgQIECBAgAABAgQIECBAgAABAlUBUbLKbRkBAgQIECBAgAABAgQIECBAgAABAqKkO0CAAAECBAgQIECAAAECBAgQIECAQFVAlKxyW0aAAAECBAgQIECAAAECBAgQIECAgCjpDhAgQIAAAQIECBAgQIAAAQIECBAgUBUQJavclhEgQIAAAQIECBAgQIAAAQIECBAgIEq6AwQIECBAgAABAgQIECBAgAABAgQIVAVEySq3ZQQIECBAgAABAgQIECBAgAABAgQIiJLuAAECBAgQIECAAAECBAgQIECAAAECVQFRssptGQECBAgQIECAAAECBAgQIECAAAECoqQ7QIAAAQIECBAgQIAAAQIECBAgQIBAVUCUrHJbRoAAAQIECBAgQIAAAQIECBAgQICAKOkOECBAgAABAgQIECBAgAABAgQIECBQFRAlq9yWESBAgAABAgQIECBAgAABAgQIECAgSroDBAgQIECAAAECBAgQIECAAAECBAhUBUTJKrdlBAgQIECAAAECBAgQIECAAAECBAiIku4AAQIECBAgQIAAAQIECBAgQIAAAQJVAVGyym0ZAQIECBAgQIAAAQIECBAgQIAAAQKipDtAgAABAgQIECBAgAABAgQIECBAgEBVQJSscltGgAABAgQIECBAgAABAgQIECBAgIAo6Q4QIECAAAECBAgQIECAAAECBAgQIFAVECWr3JYRIECAAAECBAgQIECAAAECBAgQICBKugMECBAgQIAAAQIECBAgQIAAAQIECFQFRMkqt2UECBAgQIAAAQIECBAgQIAAAQIECIiS7gABAgQIECBAgAABAgQIECBAgAABAlUBUbLKbRkBAgQIECBAgAABAgQIECBAgAABAqKkO0CAAAECBAgQIECAAAECBAgQIECAQFVAlKxyW0aAAAECBAgQIECAAAECBAgQIECAgCjpDhAgQIAAAQIECBAgQIAAAQIECBAgUBUQJavclhEgQIAAAQIECBAgQIAAAQIECBAgIEq6AwQIECBAgAABAgQIECBAgAABAgQIVAVEySq3ZQQIECBAgAABAgQIECBAgAABAgQIiJLuAAECBAgQIECAAAECBAgQIECAAAECVQFRssptGQECBAgQIECAAAECBAgQIECAAAECoqQ7QIAAAQIECBAgQIAAAQIECBAgQIBAVUCUrHJbRoAAAQIECBAgQIAAAQIECBAgQICAKOkOECBAgAABAgQIECBAgAABAgQIECBQFRAlq9yWESBAgAABAgQIECBAgAABAgQIECAgSroDBAgQIECAAAECBAgQIECAAAECBAhUBUTJKrdlBAgQIECAAAECBAgQIECAAAECBAiIku4AAQIECBAgQIAAAQIECBAgQIAAAQJVAVGyym0ZAQIECBAgQIAAAQIECBAgQIAAAQKipDtAgAABAgQIECBAgAABAgQIECBAgEBVQJSscltGgAABAgQIECBAgAABAgQIECBAgIAo6Q4QIECAAAECBAgQIECAAAECBAgQIFAVECWr3JYRIECAAAECBAgQIECAAAECBAgQICBKugMECBAgQIAAAQIECBAgQIAAAQIECFQFRMkqt2UECBAgQIAAAQIECBAgQIAAAQIECIiS7gABAgQIECBAgAABAgQIECBAgAABAlUBUbLKbRkBAgQIECBAgAABAgQIECBAgAABAqKkO0CAAAECBAgQIECAAAECBAgQIECAQFVAlKxyW0aAAAECBAgQIECAAAECBAgQIECAgCjpDhAgQIAAAQIECBAgQIAAAQIECBAgUBUQJavclhEgQIAAAQIECBAgQIAAAQIECBAgIEq6AwQIECBAgAABAgQIECBAgAABAgQIVAVEySq3ZQQIECBAgAABAgQIECBAgAABAgQIiJLuAAECBAgQIECAAAECBAgQIECAAAECVQFRssptGQECBAgQIECAAAECBAgQIECAAAECoqQ7QIAAAQIECBAgQIAAAQIECBAgQIBAVUCUrHJbRoAAAQIECBAgQIAAAQIECBAgQICAKOkOECBAgAABAgQIECBAgAABAgQIECBQFRAlq9yWESBAgAABAgQIECBAgAABAgQIECAgSroDBAgQIECAAAECBAgQIECAAAECBAhUBUTJKrdlBAgQIECAAAECBAgQIECAAAECBAiIku4AAQIECBAgQIAAAQIECBAgQIAAAQJVAVGyym0ZAQIECBAgQIAAAQIECBAgQIAAAQKipDtAgAABAgQIECBAgAABAgQIECBAgEBVQJSscltGgAABAgQIECBAgAABAgQIECBAgIAo6Q4QIECAAAECBAgQIECAAAECBAgQIFAVECWr3JYRIECAAAECBAgQIECAAAECBAgQICBKugMECBAgQIAAAQIECBAgQIAAAQIECFQFRMkqt2UECBAgQIAAAQIECBAgQIAAAQIECIiS7gABAgQIECBAgAABAgQIECBAgAABAlUBUbLKbRkBAgQIECBAgAABAgQIECBAgAABAqKkO0CAAAECBAgQIECAAAECBAgQIECAQFVAlKxyW0aAAAECBAgQIECAAAECBAgQIECAgCjpDhAgQIAAAQIECBAgQIAAAQIECBAgUBUQJavclhEgQIAAAQIECBAgQIAAAQIECBAgIEq6AwQIECBAgAABAgQIECBAgAABAgQIVAVEySq3ZQQIECBAgAABAgQIECBAgAABAgQIiJLuAAECBAgQIECAAAECBAgQIECAAAECVQFRssptGQECBAgQIECAAAECBAgQIECAAAECoqQ7QIAAAQIECBAgQIAAAQIECBAgQIBAVUCUrHJbRoAAAQIECBAgQIAAAQIECBAgQICAKOkOECBAgAABAgQIECBAgAABAgQIECBQFRAlq9yWESBAgAABAgQIECBAgAABAgQIECAgSroDBAgQIECAAAECBAgQIECAAAECBAhUBUTJKrdlBAgQIECAAAECBAgQIECAAAECBAiIku4AAQIECBAgQIAAAQIECBAgQIAAAQJVAVGyym0ZAQIECBAgQIAAAQIECBAgQIAAAQKi5OO/A2/NzGsz8+blqZ7/fn1mvjYzr87Mf2bmTzPz3sy8OzN/uPz5+GU8QwIECBAgQIAAAQIECBAgQIAAgZciIEq+FPbI0hMWfzgz18h4d+gbM3M+P+3HCZTPZuaXl1j5aef4OgIECBAgQIAAAQIECBAgQIAAAQIfERAlb/NSnCD598t3PN73M/jrzPxuZn47M7+572XmEyBAgAABAgQIECBAgAABAgQIPH4BUfI2X+Ofz8zPXtJD//3MnM/rj3q//5Ieh7UECBAgQIAAAQIECBAgQIAAAQI3KiBK3uYLd6Lgtx/IQz8/6n0+z2M6gfLEyn/6vZQP5NXxMAgQIECAAAECBAgQIECAAAECD1BAlHyAL8oneEgPKUp+3MM9b6Lz55n59yVaXs+ex3/340TMEzSvn5+AwBECBAgQIECAAAECBAgQIECAAIFbFRAlb/OVe5k/vt0S+3Bm/jszH8zMOy9Yev0OzRc9nrtx8+7fzzuO/+2en8CXZ+Zfl8/7WJWef95t3QcBAgQIECBAgAABAgQIECBAoCogSla5Y8vOG92cKPdabKJBT1ngRO63nzKA506AAAECBAgQIECAAAECBAh0BUTJrndy2wmTP5mZN1/wLtzn9zrefQOa65nzp5CZfBUez6xnM/ODx/N0PBMCBAgQIECAAAECBAgQIEDgIQuIkg/51bmfx3bC5I9n5nszc34U+Av3s8bUGxQ4UfLESR8ECBAgQIAAAQIECBAgQIAAgXsVECXvlfdmhr81M9+/fH71Zh61B5oW+NXM/Cg91DwCBAgQIECAAAECBAgQIECAwPMCoqQ78bzAiVInUH5nZl7F86QEzpvenEDtgwABAgQIECBAgAABAgQIECBwrwKi5L3y3vzw787M+fz6zHzT76O8+ddzewK/vgTp7Zx/J0CAAAECBAgQIECAAAECBAh8JgFR8jPxPbkvfuPyxjrn91Ke76jzxjmP6wr8dGZ+8biekmdDgAABAgQIECBAgAABAgQIPEQBUfIhviq39ZhOqDyf1x/7PT/6fX4v5Rdn5vO39VSe9KP9yyUyP2kET54AAQIECBAgQIAAAQIECBDoCIiSHeenvOUaLY/B+c7K1y8Y/+93F37lEjXPsc89Zbjicz9B8vwu0XeLO60iQIAAAQIECBAgQIAAAQIEnrCAKPmEX/wbe+onZp7AeY2a14d/N3p+3FP6xsx8aWY+nJl/zMz7l1ln3vMzN5rztdeP69+vf35rZj6YmT9e3ijozL7uen7u9f9fv/Y8l/Px3gse0/Pz37mcfdH8c/Y66/z97v67O8/fT4h8tj1h/06AAAECBAgQIECAAAECBAgQSAqIkklNswgQIECAAAECBAgQIECAAAECBAgQWAVEyZXIAQIECBAgQIAAAQIECBAgQIAAAQIEkgKiZFLTLAIECBAgQIAAAQIECBAgQIAAAQIEVgFRciVygAABAgQIECBAgAABAgQIECBAgACBpIAomdQ0iwABAgQIECBAgAABAgQIECBAgACBVUCUXIkcIECAAAECBAgQIECAAAECBAgQIEAgKSBKJjXNIkCAAAECBAgQIECAAAECBAgQIEBgFRAlVyIHCBAgQIAAAQIECBAgQIAAAQIECBBICoiSSU2zCBAgQIAAAQIECBAgQIAAAQIECBBYBUTJlcgBAgQIECBAgAABAgQIECBAgAABAgSSAqJkUtMsAgQIECBAgAABAgQIECBAgAABAgRWAVFyJXKAAAECBAgQIECAAAECBAgQIECAAIGkgCiZ1DSLAAECBAgQIECAAAECBAgQIECAAIFVQJRciRwgQIAAAQIECBAgQIAAAQIECBAgQCApIEomNc0iQIAAAQIECBAgQIAAAQIECBAgQGAVECVXIgcIECBAgAABAgQIECBAgAABAgQIEEgKiJJJTbMIECBAgAABAgQIECBAgAABAgQIEFgFRMmVyAECBAgQIECAAAECBAgQIECAAAECBJIComRS0ywCBAgQIECAAAECBAgQIECAAAECBFYBUXIlcoAAAQIECBAgQIAAAQIECBAgQIAAgaSAKJnUNIsAAQIECBAgQIAAAQIECBAgQIAAgVVAlFyJHCBAgAABAgQIECBAgAABAgQIECBAICkgSiY1zSJAgAABAgQIECBAgAABAgQIECBAYBUQJVciBwgQIECAAAECBAgQIECAAAECBAgQSAqIkklNswgQIECAAAECBAgQIECAAAECBAgQWAVEyZXIAQIECBAgQIAAAQIECBAgQIAAAQIEkgKiZFLTLAIECBAgQIAAAQIECBAgQIAAAQIEVgFRciVygAABAgQIECBAgAABAgQIECBAgACBpIAomdQ0iwABAgQIECBAgAABAgQIECBAgACBVUCUXIkcIECAAAECBAgQIECAAAECBAgQIEAgKSBKJjXNIkCAAAECBAgQIECAAAECBAgQIEBgFRAlVyIHCBAgQIAAAQIECBAgQIAAAQIECBBICoiSSU2zCBAgQIAAAQIECBAgQIAAAQIECBBYBUTJlcgBAgQIECBAgAABAgQIECBAgAABAgSSAqJkUtMsAgQIECBAgAABAgQIECBAgAABAgRWAVFyJXKAAAECBAgQIECAAAECBAgQIECAAIGkgCiZ1DSLAAECBAgQIECAAAECBAgQIECAAIFVQJRciRwgQIAAAQIECBAgQIAAAQIECBAgQCApIEomNc0iQIAAAQIECBAgQIAAAQIECBAgQGAVECVXIgcIECBAgAABAgQIECBAgAABAgQIEEgKiJJJTbMIECBAgAABAgQIECBAgAABAgQIEFgFRMmVyAECBAgQIECAAAECBAgQIECAAAECBJIComRS0ywCBAgQIECAAAECBAgQIECAAAECBFYBUXIlcoAAAQIECBAgQIAAAQIECBAgQIAAgaSAKJnUNIsAAQIECBAgQIAAAQIECBAgQIAAgVVAlFyJHCBAgAABAgQIECBAgAABAgQIECBAICkgSiY1zSJAgAABAgQIECBAgAABAgQIECBAYBUQJVciBwgQIECAAAECBAgQIECAAAECBAgQSAqIkklNswgQIECAAAECBAgQIECAAAECBAgQWAVEyZXIAQIECBAgQIAAAQIECBAgQIAAAQIEkgKiZFLTLAIECBAgQIAAAQIECBAgQIAAAQIEVgFRciVygAABAgQIECBAgAABAgQIECBAgACBpIAomdQ0iwABAgQIECBAgAABAgQIECBAgACBVUCUXIkcIECAAAECBAgQIECAAAECBAgQIEAgKSBKJjXNIkCAAAECBAgQIECAAAECBAgQIEBgFRAlVyIHCBAgQIAAAQIECBAgQIAAAQIECBBICoiSSU2zCBAgQIAAAQIECBAgQIAAAQIECBBYBUTJlcgBAgQIECBAgAABAgQIECBAgAABAgSSAqJkUtMsAgQIECBAgAABAgQIECBAgAABAgRWAVFyJXKAAAECBAgQIECAAAECBAgQIECAAIGkgCiZ1DSLAAECBAgQIECAAAECBAgQIECAAIFVQJRciRwgQIAAAQIECBAgQIAAAQIECBAgQCApIEomNc0iQIAAAQIECBAgQIAAAQIECBAgQGAVECVXIgcIECBAgAABAgQIECBAgAABAgQIEEgKiJJJTbMIECBAgAABAgQIECBAgAABAgQIEFgFRMmVyAECBAgQIECAAAECBAgQIECAAAECBJIComRS0ywCBAgQIECAAAECBAgQIECAAAECBFYBUXIlcoAAAQIECBAgQIAAAQIECBAgQIAAgaSAKJnUNIsAAQIECBAgQIAAAQIECBAgQIAAgVVAlFyJHCBAgAABAgQIECBAgAABAgQIECBAICkgSiY1zSJAgAABAgQIECBAgAABAgQIECBAYBUQJVciBwgQIECAAAECBAgQIECAAAECBAgQSAqIkklNswgQIECAAAECBAgQIECAAAECBAgQWAVEyZXIAQIECBAgQIAAAQIECBAgQIAAAQIEkgKiZFLTLAIECBAgQIAAAQIECBAgQIAAAQIEVgFRciVygAABAgQIECBAgAABAgQIECBAgACBpIAomdQ0iwABAgQIECBAgAABAgQIECBAgACBVUCUXIkcIECAAAECBAgQIECAAAECBAgQIEAgKSBKJjXNIkCAAAECBAgQIECAAAECBAgQIEBgFRAlVyIHCBAgQIAAAQIECBAgQIAAAQIECBBICoiSSU2zCBAgQIAAAQIECBAgQIAAAQIECBBYBUTJlcgBAgQIECBAgAABAgQIECBAgAABAgSSAqJkUtMsAgQIECBAgAABAgQIECBAgAABAgRWAVFyJXKAAAECBAgQIECAAAECBAgQIECAAIGkgCiZ1DSLAAECBAgQIECAAAECBAgQIECAAIFVQJRciRwgQIAAAQIECBAgQIAAAQIECBAgQCApIEomNc0iQIAAAQIECBAgQIAAAQIECBAgQGAVECVXIgcIECBAgAABAgQIECBAgAABAgQIEEgKiJJJTbMIECBAgAABAgQIECBAgAABAgQIEFgFRMmVyAECBAgQIECAAAECBAgQIECAAAECBJIComRS0ywCBAgQIECAAAECBAgQIECAAAECBFYBUXIlcoAAAQIECBAgQIAAAQIECBAgQIAAgaSAKJnUNIsAAQIECBAgQIAAAQIECBAgQIAAgVVAlFyJHCBAgAABAgQIECBAgAABAgQIECBAICkgSiY1zSJAgAABAgQIECBAgAABAgQIECBAYBUQJVciBwgQIECAAAECBAgQIECAAAECBAgQSAqIkklNswgQIECAAAECBAgQIECAAAECBAgQWAVEyZXIAQIECBAgQIAAAQIECBAgQIAAAQIEkgKiZFLTLAIECBAgQIAAAQIECBAgQIAAAQIEVgFRciVygAABAgQIECBAgAABAgQIECBAgACBpIAomdQ0iwABAgQIECBAgAABAgQIECBAgACBVUCUXIkcIECAAAECBAgQIECAAAECBAgQIEAgKSBKJjXNIkCAAAECBAgQIECAAAECBAgQIEBgFRAlVyIHCBAgQIAAAQIECBAgQIAAAQIECBBICoiSSU2zCBAgQIAAAQIECBAgQIAAAQIECBBYBUTJlcgBAgQIECBAgAABAgQIECBAgAABAgSSAqJkUtMsAgQIECBAgAABAgQIECBAgAABAgRWAVFyJXKAAAECBAgQIECAAAECBAgQIECAAIGkgCiZ1DSLAAECBAgQIECAAAECBAgQIECAAIFVQJRciRwgQIAAAQIECBAgQIAAAQIECBAgQCApIEomNc0iQIAAAQIECBAgQIAAAQIECBAgQGAVECVXIgcIECBAgAABAgQIECBAgAABAgQIEEgKiJJJTbMIECBAgAABAgQIECBAgAABAgQIEFgFRMmVyAECBAgQIECAAAECBAgQIECAAAECBJIComRS0ywCBAgQIECAAAECBAgQIECAAAECBFYBUXIlcoAAAQIECBAgQIAAAQIECBAgQIAAgaSAKJnUNIsAAQIECBAgQIAAAQIECBAgQIAAgVVAlFyJHCBAgAABAgQIECBAgAABAgQIECBAICkgSiY1zSJAgAABAgQIECBAgAABAgQIECBAYBUQJVciBwgQIECAAAECBAgQIECAAAECBAgQSAqIkklNswgQIECAAAECBAgQIECAAAECBAgQWAVEyZXIAQIECBAgQIAAAQIECBAgQIAAAQIEkgKiZFLTLAIECBAgQIAAAQIECBAgQIAAAQIEVgFRciVygAABAgQIECBAgAABAgQIECBAgACBpIAomdQ0iwABAgQIECBAgAABAgQIECBAgACBVUCUXIkcIECAAAECBAgQIECAAAECBAgQIEAgKSBKJvpTbYIAAAErSURBVDXNIkCAAAECBAgQIECAAAECBAgQIEBgFRAlVyIHCBAgQIAAAQIECBAgQIAAAQIECBBICoiSSU2zCBAgQIAAAQIECBAgQIAAAQIECBBYBUTJlcgBAgQIECBAgAABAgQIECBAgAABAgSSAqJkUtMsAgQIECBAgAABAgQIECBAgAABAgRWAVFyJXKAAAECBAgQIECAAAECBAgQIECAAIGkgCiZ1DSLAAECBAgQIECAAAECBAgQIECAAIFVQJRciRwgQIAAAQIECBAgQIAAAQIECBAgQCApIEomNc0iQIAAAQIECBAgQIAAAQIECBAgQGAVECVXIgcIECBAgAABAgQIECBAgAABAgQIEEgKiJJJTbMIECBAgAABAgQIECBAgAABAgQIEFgF/gednGEtoQxQzgAAAABJRU5ErkJggg==";

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.set('canvasWidth', document.getElementById("signaturePadContainer").offsetWidth);
    this.signaturePad.set('canvasHeight', '300');
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  saveSignature(): void {
    var data = this.signaturePad.toDataURL('image/png');

// Send data to server instead...
    window.open(data);
  }

  clearSignaturePad():void{
    this.signaturePad.clear();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturepadPage');
  }

}
