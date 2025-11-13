
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:9
My Partner's Key:4

Our initial shared key:13

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|Byffi nbyly.     |Hello there.     | 20  |
|Cxe qbun ni qlcn |Idk what to write|     |
|ndj'gt sdxcv xi! |you're doing it! | 15  |
|Good luck        |Good luck        |     |
|decoding this one|decoding this one| 0   |
|Nvvk sbjr        |Good luck        |     |
|kljvkpun aopz vul|decoding this one| 7   |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Peyton]
    Destination: [Chris]  
    Sequence: 1/3
    Data: [01101101] [01110010]
    =========
    Packet 2:

    Source: [Peyton]
    Destination: [Chris]
    Sequence: 2/3 
    Data: [01101110] [01110101]
    =========
    Packet 3:

    Source: [Peyton]
    Destination: [Chris]
    Sequence: 3/3
    Data: [01101101] [01000010]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
	-Asemetric required both public and private keys. In this simulation, we used assemetric encryption to establish a shared sectret, which we then used with semmetric encryption to pass the remaining messages. (Changing the key with a formula to avoid an adversary being able to decrypt multiple messages.)
- Why is it important that this protocol uses a new key for each message?
	-If all messages use the same key, in the event that an adversary finds the key, they will be able to decrypt all messages. If it changes, they will only be able to decrypt one.
- Why is it important that you never share your secret key?
	-Assemetric encryption relies on the fact that the private keys are secret. If you share your private key, an adversary will be able to figure out the secret, leading to all of the messages being decrypted (if they have the formula) or them being able to read and modify your encrypted messages.
- In the transport layer, do these messages use TCP or UDP? Why?
	-These messages use TCP. It is incredibly important for all of the data to be there in the right order. If something is missing, the message with be basically unreadable, plus the extra few milliseconds don't really matter.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
	-After being broken down into packets, the data goes to the router which allows it to be transferred to another router, until it has reached it's destination (the IP address is found by the internet layer, before routing)
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
`	-They can still see who the message is from, who the message it too, how many messages have been sent, and how long these messages are.
  
