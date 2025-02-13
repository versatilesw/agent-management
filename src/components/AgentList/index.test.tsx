import { render, screen, fireEvent } from "@testing-library/react";
import AgentList from "./index";
import { Agent } from "@/types/agent";

const mockAgents: Agent[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    lastSeen: "2025-01-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
    lastSeen: "2025-01-02",
  },
];

const onDeleteMock = jest.fn();

describe("AgentList", () => {
  it("should render agent list", () => {
    render(<AgentList agents={mockAgents} onDelete={onDeleteMock} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });

  it("should call onDelete when delete button is clicked", () => {
    render(<AgentList agents={mockAgents} onDelete={onDeleteMock} />);
    const deleteButtons = screen.getAllByRole("button", { name: "Remove" });

    fireEvent.click(deleteButtons[0]);
    expect(onDeleteMock).toHaveBeenCalledWith("1");
  });

  it("should render Edit buttons with correct hrefs", () => {
    render(<AgentList agents={mockAgents} onDelete={onDeleteMock} />);

    const editLinks = screen.getAllByRole("link", { name: "Edit" });

    expect(editLinks[0]).toHaveAttribute("href", "/agents/1");
    expect(editLinks[1]).toHaveAttribute("href", "/agents/2");
  });

  it('should display "No agents found" when the list is empty', () => {
    render(<AgentList agents={[]} onDelete={jest.fn()} />);

    expect(
      screen.getByText('No Agents'),
    ).toBeInTheDocument();
  });
});
