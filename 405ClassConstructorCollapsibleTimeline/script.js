window.addEventListener("DOMContentLoaded", () => {
  const timeLine = new CollapsibleTimeline("#timeline");
});
class CollapsibleTimeline {
  constructor(el) {
    // console.log("el :", el);
    this.el = document.querySelector(el);
    // console.log("this.el :", this.el);
    this.init();
  }
  init() {
    this.el?.addEventListener("click", this.itemAction.bind(this));
  }
  animateItemAction(button, control_Id, contentHeight, shouldCollapse) {
    const expandedClass = "timeline__item-body--expanded";
    const animOptions = {
      duration: 300,
      easing: "cubic-bezier(0.65,0,0.35,1)",
    };
    // console.log("animOptions :", animOptions);
    if (shouldCollapse) {
      // console.log("shouldCollapse if :", shouldCollapse);
      button.ariaExpanded = "false";
      control_Id.ariaHidden = "true";
      control_Id.classList.remove(expandedClass);
      animOptions.duration *= 2;
      this.animation = control_Id.animate(
        [
          { height: `${contentHeight}px` },
          { height: `${contentHeight}px` },
          { height: "0px" },
        ],
        animOptions
      );
    } else {
      // console.log("shouldCollapse else :", shouldCollapse);
      button.ariaExpanded = "true";
      control_Id.ariaHidden = "false";
      control_Id.classList.add(expandedClass);
      this.animation = control_Id.animate(
        [{ height: "0px" }, { height: `${contentHeight}px` }],
        animOptions
      );
    }
  }
  itemAction(e) {
    const { target } = e;
    // console.log("{ target } :", { target });
    const action = target?.getAttribute("data-action");
    // console.log("action :", action);
    const item = target?.getAttribute("data-item");
    // console.log("item :", item);
    if (action) {
      const targetExpanded = action === "expand" ? "false" : "true";
      // console.log("targetExpanded :", targetExpanded);
      const buttons = Array.from(
        this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`)
      );
      // console.log("buttons :", buttons);
      const wasExpanded = action === "collapse";
      // console.log("wasExpanded :", wasExpanded);
      for (let button of buttons) {
        // console.log("button :", button);
        // console.log("buttons :", buttons);
        const buttonID = button.getAttribute("data-item");
        // console.log("buttonID :", buttonID);
        const control_Id = this.el?.querySelector(
          `#item${buttonID}-control_Id`
        );
        // console.log("control_Id :", control_Id);
        const contentHeight = control_Id.firstElementChild?.offsetHeight;
        // console.log("contentHeight :", contentHeight);
        this.animateItemAction(button, control_Id, contentHeight, wasExpanded);
      }
    } else if (item) {
      const button = this.el?.querySelector(`[data-item="${item}"]`);
      // console.log("button :", button);
      const expanded = button?.getAttribute("aria-expanded");
      // console.log("expanded :", expanded);
      if (!expanded) {
        return;
      }
      const wasExpanded = expanded === "true";
      // console.log("wasExpanded :", wasExpanded);
      const control_Id = this.el?.querySelector(`#item${item}-control_Id`);
      // console.log("control_Id :", control_Id);
      const contentHeight = control_Id.firstElementChild?.offsetHeight;
      // console.log("contentHeight :", contentHeight);
      this.animateItemAction(button, control_Id, contentHeight, wasExpanded);
    }
  }
}
