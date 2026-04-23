// src/components/SectionTitle.jsx

const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
  maxWidth = "max-w-3xl",
}) => {
  const isCenter = align === "center";
  const isLeft = align === "left";

  return (
    <div
      className={`
        relative z-10 w-full
        ${maxWidth}
        ${isCenter ? "mx-auto text-center" : ""}
        ${isLeft ? "text-left" : ""}
      `}
    >

      {/* ======================================
          BADGE
      ====================================== */}
      {badge && (
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full
            text-[11px] sm:text-xs md:text-sm font-semibold
            tracking-wide uppercase
            ${
              light
                ? "bg-white/10 border border-white/20 text-blue-100"
                : "bg-blue-50 border border-blue-100 text-blue-700"
            }
          `}
        >
          <span
            className={`
              w-2 h-2 rounded-full shrink-0
              ${light ? "bg-blue-300" : "bg-blue-600"}
            `}
          />

          <span className="leading-none">
            {badge}
          </span>

        </div>
      )}

      {/* ======================================
          TITLE
      ====================================== */}
      {title && (
        <h2
          className={`
            mt-4 font-bold leading-tight tracking-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            ${
              light
                ? "text-white"
                : "text-gray-900"
            }
          `}
        >
          {title}
        </h2>
      )}

      {/* ======================================
          SUBTITLE
      ====================================== */}
      {subtitle && (
        <p
          className={`
            mt-4 sm:mt-5 leading-relaxed
            text-sm sm:text-base md:text-lg
            ${
              light
                ? "text-blue-100"
                : "text-gray-600"
            }
            ${
              isCenter
                ? "mx-auto max-w-2xl"
                : "max-w-2xl"
            }
          `}
        >
          {subtitle}
        </p>
      )}

      {/* ======================================
          DECORATIVE LINE
      ====================================== */}
      <div
        className={`
          mt-5 sm:mt-6 h-1 rounded-full
          w-20 sm:w-24 md:w-28
          ${
            light
              ? "bg-gradient-to-r from-blue-300 to-white/80"
              : "bg-gradient-to-r from-blue-600 to-sky-400"
          }
          ${isCenter ? "mx-auto" : ""}
        `}
      />

    </div>
  );
};

export default SectionTitle;