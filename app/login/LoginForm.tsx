"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "ログインに失敗しました");
      setLoading(false);
      return;
    }

    const from = searchParams.get("from") || "/";
    router.replace(from);
    router.refresh();
  }

  return (
    <main className="login">
      <div className="login__card">
        <p className="login__eyebrow">{"\\ PRIVATE ACCESS //"}</p>
        <h1 className="login__title">UTOPIA</h1>
        <p className="login__desc">パスワードを入力してください</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label" htmlFor="password">
            PASSWORD
          </label>
          <input
            id="password"
            className="login__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
          {error ? <p className="login__error">{error}</p> : null}
          <button className="login__button" type="submit" disabled={loading}>
            {loading ? "確認中..." : "ENTER"}
          </button>
        </form>
      </div>
    </main>
  );
}
