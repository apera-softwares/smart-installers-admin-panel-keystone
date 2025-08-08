function CustomLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "700" }}>
        Smart Installers NY
      </h3>
    </div>
  );
}

export const components = {
  Logo: CustomLogo,
};
