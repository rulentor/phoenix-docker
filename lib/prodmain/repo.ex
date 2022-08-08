defmodule Prodmain.Repo do
  use Ecto.Repo,
    otp_app: :prodmain,
    adapter: Ecto.Adapters.Postgres
end
