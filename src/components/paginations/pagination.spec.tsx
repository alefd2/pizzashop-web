import { describe, expect, it } from "vitest";
import { Pagination } from "./pagination.comp";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { beforeEach } from "node:test";

const onPageChangeCallback = vi.fn();

describe("Pagination", () => {
  // clear the mock onPageChangeCallback before each test
  beforeEach(() => {
    onPageChangeCallback.mockClear();
  });

  it("Should display the right amount of pages and results", () => {
    const wrapper = render(
      <Pagination
        onPageChange={() => {}}
        totalCount={200}
        perPage={10}
        pageIndex={0}
      />,
    );
    const pages = wrapper.getByText("Página 1 de 20");
    const total = wrapper.getByText("Total de 200 item(s)");
    // const results = wrapper.getByTestId("results");

    expect(pages).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });

  it("Should be able to navigate to the next page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        totalCount={200}
        perPage={10}
        pageIndex={0}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Próxima página",
    });
    await user.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  });

  it("Should be able to navigate to the previous page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        totalCount={200}
        perPage={10}
        pageIndex={5}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Página anterior",
    });
    await user.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  });

  it("Should be able to navigate to the first page", async () => {
    const user = userEvent.setup();

    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        totalCount={200}
        perPage={10}
        pageIndex={5}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Primeira página",
    });
    await user.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  });

  it("Should be able to navigate to the last page", async () => {
    const user = userEvent.setup();
    const wrapper = render(
      <Pagination
        onPageChange={onPageChangeCallback}
        totalCount={200}
        perPage={10}
        pageIndex={5}
      />,
    );

    const nextPageButton = wrapper.getByRole("button", {
      name: "Última página",
    });
    await user.click(nextPageButton);
    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  });
});
