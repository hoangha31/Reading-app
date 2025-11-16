import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-8">
      <div className="w-full max-w-lg">
        {/* Login Card */}
        <div className="bg-card rounded-3xl shadow-lg p-12">
          {/* Title */}
          <h1 className="text-5xl font-bold text-foreground text-center mb-12">
            Chào mừng trở lại!
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Username/Email Input */}
            <div>
              <label className="block text-lg font-semibold text-foreground mb-3">
                Tên đăng nhập
              </label>
              <input
                type="text"
                placeholder="Nhập tên đăng nhập của bạn"
                className="w-full bg-background rounded-3xl px-6 py-4 text-lg font-medium text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                aria-label="Tên đăng nhập"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-lg font-semibold text-foreground mb-3">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                className="w-full bg-background rounded-3xl px-6 py-4 text-lg font-medium text-foreground placeholder-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                aria-label="Mật khẩu"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground rounded-3xl px-6 py-4 text-lg font-bold hover:opacity-90 transition-opacity mt-8"
            >
              Đăng nhập
            </button>
          </form>
        </div>

        {/* Forgot Password Link */}
        <div className="text-center mt-8">
          <Link
            to="#"
            className="text-lg font-medium text-primary hover:opacity-80 transition-opacity"
          >
            Quên mật khẩu?
          </Link>
        </div>
      </div>
    </div>
  );
}
