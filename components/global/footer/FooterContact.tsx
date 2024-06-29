import { useRef, useState } from "react";
import Img from "../../utils/image/Img";

const FooterContact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (emailRef.current && messageRef.current) {
        const email = emailRef.current.value;
        const message = messageRef.current.value;
        const response = await fetch("https://backend-yip.vercel.app/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            message,
          }),
        });
        if (response.ok) {
          setIsMessage(true)
        }
        // Reset values
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    } catch (error) {} 
    finally {
      setIsLoading(false);
      setInterval(()=>{
        setIsMessage(false);
      }, 1500)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{position:"relative"}}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          ref={messageRef}
          placeholder="Message..."
          name="message"
          rows={2}
          required
        ></textarea>
        <button type="submit">
          {isLoading ?  "Loading...": (
            "Send"
          )}
        </button>
        <span>{isMessage && "Submitted!"}</span>
      </form>
    </>
  );
};

export default FooterContact;
