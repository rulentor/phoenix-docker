defmodule Prodmain.HerosFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Prodmain.Heros` context.
  """

  @doc """
  Generate a hero.
  """
  def hero_fixture(attrs \\ %{}) do
    {:ok, hero} =
      attrs
      |> Enum.into(%{
        first_name: "some first_name",
        last_name: "some last_name",
        nick_name: "some nick_name"
      })
      |> Prodmain.Heros.create_hero()

    hero
  end
end
