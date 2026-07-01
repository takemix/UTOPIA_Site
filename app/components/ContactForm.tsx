"use client";

import { FormEvent, useState } from "react";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const category = String(formData.get("category") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`UTOPIA お問い合わせ: ${category}`);
    const body = encodeURIComponent(
      [
        `お名前: ${name}`,
        `メール: ${email}`,
        `種別: ${category}`,
        "",
        "お問い合わせ内容:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__grid">
        <label className="contact-field">
          <span>NAME</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="contact-field">
          <span>EMAIL</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label className="contact-field">
        <span>TYPE</span>
        <select name="category" defaultValue="イベントについて" required>
          <option value="イベントについて">イベントについて</option>
          <option value="出演・ブッキング">出演・ブッキング</option>
          <option value="取材・撮影">取材・撮影</option>
          <option value="その他">その他</option>
        </select>
      </label>

      <label className="contact-field">
        <span>MESSAGE</span>
        <textarea name="message" rows={6} required />
      </label>

      <button className="contact-form__submit" type="submit">
        SEND MESSAGE
      </button>

      {sent ? (
        <p className="contact-form__status" role="status">
          メールアプリを開きました。
        </p>
      ) : null}
    </form>
  );
}
