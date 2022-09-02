/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import { JobSearchForm } from "@/components/HomePage";

describe("JobSearchForm", () => {
  it("check params when submit", async () => {
    const push = jest.fn();
    const $router = { push };
    const wrapper = mount(JobSearchForm, {
      global: {
        mock: {
          $router,
        },
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });

    const roleInput = wrapper.find("[data-test='role-input']");
    const locationInput = wrapper.find("[data-test='']");
    const submitButton = wrapper.find("[data-test='submit-button']");
    await roleInput.setValue("Web Developer");
    await locationInput.setValue("HCM");
    await submitButton.trigger("click");

    expect(push).toHaveBeenCalledWith({
      name: "JobResult",
      query: {
        role: "Web Developer",
        location: "HCM",
      },
    });
  });
});
