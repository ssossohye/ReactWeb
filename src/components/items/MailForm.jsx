import { useRef } from "react";
import { tw } from "../../globals";
import emailjs from "@emailjs/browser";

export default function MailForm() {
  const css = {
    form: tw`w-full`,
    div_upper: tw`mb-12 flex w-full justify-between *:w-[45%]`,
    div_lower: tw`mb-7`,
    div_btns: tw`flex gap-3`
  };

  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const { user_name, user_email, message } = formRef.current;
    if (!user_name.value || !user_email.value || !message) return alert("사용자이름, 이메일, 문의내용은 필수입력 사항입니다.");

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY
      })
      .then(
        response => {
          alert("문의 내용이 메일로 발송되었습니다.");
          console.log(response);
          formRef.current.reset();
        },
        error => {
          alert("문의 내용 전송에 실패했습니다. 다시 시도해주세요.");
          console.error(error);
          formRef.current.reset();
        }
      );
  };

  return (
    <form className={css.form} ref={formRef} onSubmit={handleSubmit}>
      <div className={css.div_upper}>
        <span>
          <label htmlFor="nameEl">Name</label>
          <input type="text" id="nameEl" name="user_name" placeholder="Enter your name" />
        </span>

        <span>
          <label htmlFor="emailEl">Email</label>
          <input type="email" id="emailEl" name="user_email" placeholder="Enter your email" />
        </span>
      </div>

      <div className={css.div_lower}>
        <label htmlFor="msgEl">Message</label>
        <textarea name="message" id="msgEl" placeholder="Enter your message"></textarea>
      </div>

      <div className={css.div_btns}>
        <input type="reset" value="Cancel" className="btn" />
        <input type="submit" value="Send" className="btn" />
      </div>
    </form>
  );
}
