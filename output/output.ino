int simple_loop_variable = 0;
struct RGB {
	int red;
	int green;
	int blue;
};




void setup() {
	pinMode(13, OUTPUT);

}


void loop() {
  // Turn on or off the led attached to the pin in the dropdown box.
  //
  // A pin is a piece of metal connected to the
  // Arduino used to control or sense electricity.
  digitalWrite(13, HIGH);
  // This block pauses the Arduino for x number of seconds.
  // Nothing will be able to be sensed while the delay is running.
  delay(2000);
  // Turn on or off the led attached to the pin in the dropdown box.
  //
  // A pin is a piece of metal connected to the
  // Arduino used to control or sense electricity.
  digitalWrite(13, LOW);
  // This block pauses the Arduino for x number of seconds.
  // Nothing will be able to be sensed while the delay is running.
  delay(2000);
  // Turn on or off the led attached to the pin in the dropdown box.
  //
  // A pin is a piece of metal connected to the
  // Arduino used to control or sense electricity.
  digitalWrite(13, HIGH);
  // This block pauses the Arduino for x number of seconds.
  // Nothing will be able to be sensed while the delay is running.
  delay(200);
  // Turn on or off the led attached to the pin in the dropdown box.
  //
  // A pin is a piece of metal connected to the
  // Arduino used to control or sense electricity.
  digitalWrite(13, LOW);
  // This block pauses the Arduino for x number of seconds.
  // Nothing will be able to be sensed while the delay is running.
  delay(200);

}