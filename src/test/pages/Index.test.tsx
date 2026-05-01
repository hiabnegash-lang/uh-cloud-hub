import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/pages/Index";
import { EXTERNAL_LINKS } from "@/config/externalLinks";
import { renderWithRouter } from "../test-utils";

describe("Home page (Index)", () => {
    it("renders the hero heading", () => {
        renderWithRouter(<HomePage />);
        expect(
            screen.getByRole("heading", { name: /Build cloud skills/i }),
        ).toBeInTheDocument();
    });

    it("renders the hero eyebrow text", () => {
        renderWithRouter(<HomePage />);
        expect(
            screen.getAllByText(/AWS Student Builder Group.*University of Houston/i).length,
        ).toBeGreaterThan(0);
    });

    it("Join Our Community CTA links to the Meetup URL", () => {
        renderWithRouter(<HomePage />);
        const links = screen
            .getAllByRole("link", { name: /Join our community/i })
            .filter((l) => l.getAttribute("href") === EXTERNAL_LINKS.meetup);
        expect(links.length).toBeGreaterThan(0);
    });

    it("Upcoming events link points to /events", () => {
        renderWithRouter(<HomePage />);
        const links = screen
            .getAllByRole("link", { name: /Upcoming events/i })
            .filter((l) => l.getAttribute("href") === "/events");
        expect(links.length).toBeGreaterThan(0);
    });

    it("renders the Hands-On Workshops feature card", () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByText("Hands-On Workshops")).toBeInTheDocument();
    });

    it("renders the AWS Badge Progression feature card", () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByText("AWS Badge Progression")).toBeInTheDocument();
    });

    it("renders the Community Connections feature card", () => {
        renderWithRouter(<HomePage />);
        expect(screen.getByText("Community Connections")).toBeInTheDocument();
    });

    it("renders the What happens at meetups section heading", () => {
        renderWithRouter(<HomePage />);
        expect(
            screen.getByRole("heading", { name: /What happens/i }),
        ).toBeInTheDocument();
    });
});
