# TCP/IP Model

The model has four layers. When transporting data, each packet (unit of data) goes through all 4 layers.

## Application

Application is the user interface. Some of these protocols inclued:

- WWW(World Wide Web)
- Email
- VOIP
- SMS
- IRC

With the example of an email in mind, this is where you draft you message. Te computer understands imputs through binary, from here on out until the last step all that matters is the 1s and 0s. 

## Transport

Moving to the transport layer, this layer is in charge of making the data able to be moved, by breaking it down into packets (small units of data).

These protocols include:

- TCP
- UDP

TCP is the most relyable, if a packet is lost or dropped (generally missing) a message will be sent to the sending computer, asking it to resend the data to retreive the packet. This however takes time. UDP is slightly less reliable, it is more likly to miss data, but in cases where perfection doesnt matter (phone calls, live TV) the speed UDP offers is worth the occasional missing peice.

## Internet

The Internet (Internetworks) layer is responsable for the routing of that data across different networks. It uses IP protocal, which assigns an IP addres to all routers and devices.

## Link(Network Access)

The Link layer is the physical aspect, the physical transportation of this data (sometimes using fiber-optic cables and wires)

Protocols and this layer include

- Wifi
- Bluetooth

- LTE
- Ethernet

The layers then repeat in reverse, until the second transportation layer reconstructs the packit and the second application layer converts the binary back to readable UI. Continueing the first example, your contact would receive the email.
