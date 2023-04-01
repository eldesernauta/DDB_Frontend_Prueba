import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class PlansTable extends Component {
  componentDidMount() {
    const minis = document.querySelectorAll(".mini");
    const mobileTag = document.getElementById("mobile-tag");

    minis.forEach((mini) => {
      mini.addEventListener("mouseover", () => {
        minis.forEach((mini) => {
          mini.classList.add("bg-accent");
        });
        mobileTag.style.visibility = "visible";
      });
      mini.addEventListener("mouseout", () => {
        minis.forEach((mini) => {
          mini.classList.remove("bg-accent");
        });
        mobileTag.style.visibility = "hidden";
      });
    });

    const frees = document.querySelectorAll(".free");
    frees.forEach((free) => {
      free.addEventListener("mouseover", () => {
        frees.forEach((free) => {
          free.classList.add("bg-accent");
        });
      });
      free.addEventListener("mouseout", () => {
        frees.forEach((free) => {
          free.classList.remove("bg-accent");
        });
      });
    });

    const indvds = document.querySelectorAll(".indvd");
    indvds.forEach((indvd) => {
      indvd.addEventListener("mouseover", () => {
        indvds.forEach((indvd) => {
          indvd.classList.add("bg-accent");
        });
      });
      indvd.addEventListener("mouseout", () => {
        indvds.forEach((indvd) => {
          indvd.classList.remove("bg-accent");
        });
      });
    });
  }

  render() {
    return (
      <table className="tg mt-5 hidden md:block">
        <thead>
          <tr>
            <th className="tg-0lax"></th>
            <th
              className="tg-0lax py-0 bg-dark text-white text-xs invisible"
              id="mobile-tag"
            >
              Mobile Only
            </th>
            <th className="tg-0lax"></th>
            <th className="tg-0lax"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0lax"></td>
            <td className="tg-0lax mini">
              <h4>Mini</h4>
              <p>From Rs 14.00/day</p>
            </td>
            <td className="tg-0lax free">
              <h4>Free</h4>
              <p>Rs 0</p>
            </td>
            <td className="tg-0lax indvd">
              <h4>Individual</h4>
              <p>From Rs 299.00/month</p>
            </td>
          </tr>
          <tr>
            <td className="tg-0lax"></td>
            <td className="tg-0lax mini">
              <button className="btn border border-dark hover:bg-dark hover:text-white uppercase text-xs font-bold">
                Get mini
              </button>
            </td>
            <td className="tg-0lax free">
              <button className="btn border border-dark hover:bg-dark hover:text-white uppercase text-xs font-bold">
                Get Started
              </button>
            </td>
            <td className="tg-0lax indvd">
              <button className="btn border border-dark hover:bg-dark hover:text-white uppercase text-xs font-bold">
                Get Started
              </button>
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">Millions of songs and podcasts</td>
            <td className="tg-0lax mini">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
            <td className="tg-0lax free">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
            <td className="tg-0lax indvd">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">No audio ads between songs</td>
            <td className="tg-0lax mini">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
            <td className="tg-0lax free"></td>
            <td className="tg-0lax indvd">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">Play in any order</td>
            <td className="tg-0lax mini">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
            <td className="tg-0lax free"></td>
            <td className="tg-0lax indvd">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">Skip unlimited songs</td>
            <td className="tg-0lax mini">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
            <td className="tg-0lax free">
              <p className="text-xs">6 skips/hour</p>
            </td>
            <td className="tg-0lax indvd">
              <FontAwesomeIcon icon={faCheck} style={{ fontSize: 15 }} />
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">Song downloads</td>
            <td className="tg-0lax mini">
              <p className="text-xs">30, on 1 mobile device</p>
            </td>
            <td className="tg-0lax free"></td>
            <td className="tg-0lax indvd">
              <p className="text-xs">10,000/device, on up to 5 devices</p>
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">Max audio quality</td>
            <td className="tg-0lax mini">
              <p className="text-xs">High (160 kbps)</p>
            </td>
            <td className="tg-0lax free">
              <p className="text-xs">High (160 kbps)</p>
            </td>
            <td className="tg-0lax indvd">
              <p className="text-xs">Very High (320 kbps)</p>
            </td>
          </tr>
          <tr className="border-b border-slate-300">
            <td className="tg-0lax ti">Plan Length</td>
            <td className="tg-0lax mini">
              <p className="text-xs">1 day or 1 week</p>
            </td>
            <td className="tg-0lax free"></td>
            <td className="tg-0lax indvd">
              <p className="text-xs">
                1 month to 1 year, or auto-renew monthly
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PlansTable;
