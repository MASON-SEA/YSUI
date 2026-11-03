import { YSUI, YSElement, custom_element } from "yselement";
import style from "./index.less?inline";

@custom_element("ysui-input")
export class Input extends YSElement {
  value: string;
  placeholder: string;
  disabled: boolean;
  clearable: boolean;
  type: string;

  static properties = {
    value: { type: String, default: "", reflect: true },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    type: { type: String, default: "text" },
  };

  private inputEl: HTMLInputElement | null = null;
  private clearBtn: HTMLButtonElement | null = null;

  init() {
    this.import_css(style);
    const inputRef = { current: null as HTMLInputElement | null };
    const clearRef = { current: null as HTMLButtonElement | null };
    const html = (
      <div className="ysui-input-wrap">
        <input ref={inputRef} className="ysui-input" part="input" />
        <button ref={clearRef} type="button" className="ysui-input-clear" part="clear" hidden>
          ×
        </button>
      </div>
    );
    this.shadowRoot!.append(html);
    this.inputEl = inputRef.current;
    this.clearBtn = clearRef.current;

    this.inputEl?.addEventListener("input", () => {
      const next = this.inputEl!.value;
      this.value = next;
      this.syncClear();
      this.dispatchEvent(
        new CustomEvent("input", { bubbles: true, composed: true, detail: { value: next } })
      );
    });
    this.inputEl?.addEventListener("change", () => {
      const next = this.inputEl!.value;
      this.value = next;
      this.dispatchEvent(
        new CustomEvent("change", { bubbles: true, composed: true, detail: { value: next } })
      );
    });
    this.clearBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.disabled) return;
      this.value = "";
      if (this.inputEl) this.inputEl.value = "";
      this.syncClear();
      this.dispatchEvent(
        new CustomEvent("input", { bubbles: true, composed: true, detail: { value: "" } })
      );
      this.dispatchEvent(
        new CustomEvent("change", { bubbles: true, composed: true, detail: { value: "" } })
      );
      this.inputEl?.focus();
    });
  }

  update(name: string) {
    if (["value", "placeholder", "disabled", "clearable", "type"].includes(name)) {
      this.render();
    }
  }

  private syncClear() {
    if (!this.clearBtn) return;
    const show = !!this.clearable && !this.disabled && !!(this.value || this.inputEl?.value);
    this.clearBtn.hidden = !show;
  }

  render() {
    if (!this.inputEl) return;
    if (this.inputEl.value !== (this.value ?? "")) {
      this.inputEl.value = this.value ?? "";
    }
    this.inputEl.placeholder = this.placeholder || "";
    this.inputEl.disabled = !!this.disabled;
    this.inputEl.type = this.type || "text";
    this.classList.toggle("is-disabled", !!this.disabled);
    this.syncClear();
  }
}
