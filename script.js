// Character Builder Application
class PaxDeiCharacterBuilder {
  constructor() {
    this.character = {
      equipment: {
        weapon: null,
        shield: null,
        helmet: null,
        chest: null,
        legs: null,
        boots: null,
      },
      selectedSkills: {},
      slotArmorTypes: {
        weapon: "",
        helmet: "",
        chest: "",
        legs: "",
        boots: "",
      },
    };

    this.currentSlot = null;
    this.initializeApp();
  }

  initializeApp() {
    this.bindEvents();
    this.updateShieldAvailability();
    console.log("Pax Dei Character Builder initialized");
  }

  bindEvents() {
    // Close modals when clicking outside
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        this.closeEquipmentSelector();
        this.closeSkillSelector();
      }
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeEquipmentSelector();
        this.closeSkillSelector();
      }
    });
  }

  // Equipment Management
  setEquipment(slot, equipment) {
    this.character.equipment[slot] = equipment;
    this.updateEquipmentSlot(slot, equipment);
    this.updateShieldAvailability();
    this.updateSkillsDisplay();

    // Show success feedback
    this.showNotification(`${equipment.name} equipped to ${slot}!`, "success");
  }

  removeEquipment(slot) {
    const equipment = this.character.equipment[slot];
    if (equipment) {
      this.character.equipment[slot] = null;
      this.updateEquipmentSlot(slot, null);
      this.updateShieldAvailability();
      this.updateSkillsDisplay();

      this.showNotification(`${equipment.name} removed from ${slot}`, "info");
    }
  }

  updateEquipmentSlot(slot, equipment) {
    const slotElement = document.querySelector(`[data-slot="${slot}"]`);
    const slotContent = slotElement.querySelector(".slot-content");

    if (equipment) {
      slotContent.innerHTML = `
                <div class="equipped-item">
                    <h4>${equipment.name}${
        equipment.levelRequirement
          ? ` <span class="equipment-level-requirement">(${equipment.levelRequirement})</span>`
          : ""
      }</h4>
                    <p class="item-type">${equipment.description}</p>
                    <div class="item-skills">
                        <small>Skills: ${equipment.skills
                          .map((s) => s.name + (s.level ? ` ${s.level}` : ""))
                          .join(", ")}</small>
                    </div>
                </div>
            `;
      slotElement.classList.add("equipped");
    } else {
      slotContent.innerHTML = `
                <div class="empty-slot" onclick="openEquipmentSelector('${slot}')">
                    <i class="fas fa-plus"></i>
                    <span>Select ${this.getSlotDisplayName(slot)}</span>
                </div>
            `;
      slotElement.classList.remove("equipped");
    }
  }

  getSlotDisplayName(slot) {
    const slotNames = {
      weapon: "Weapon",
      shield: "Shield",
      helmet: "Helmet",
      chest: "Chest",
      legs: "Legs",
      boots: "Boots",
    };
    return slotNames[slot] || slot;
  }

  // Shield Availability Management
  updateShieldAvailability() {
    const shieldSlot = document.getElementById("shield-slot");
    const weapon = this.character.equipment.weapon;

    if (weapon && weapon.weaponType === "1h") {
      shieldSlot.style.opacity = "1";
      shieldSlot.style.pointerEvents = "auto";
    } else {
      shieldSlot.style.opacity = "0.5";
      shieldSlot.style.pointerEvents = "none";

      // Remove shield if 2h weapon is equipped
      if (
        weapon &&
        weapon.weaponType === "2h" &&
        this.character.equipment.shield
      ) {
        this.removeEquipment("shield");
        this.showNotification(
          "Shield removed - 2-handed weapon equipped",
          "info"
        );
      }
    }
  }

  // Slot Armor Type Management
  setSlotArmorType(slot, armorType) {
    this.character.slotArmorTypes[slot] = armorType;
    this.showNotification(
      `${slot} filter set to: ${armorType || "Any"}`,
      "info"
    );
  }

  // Skills Management
  updateSkillsDisplay() {
    const weaponSkillsContainer = document.getElementById(
      "weapon-skills-container"
    );
    const armorSkillsContainer = document.getElementById(
      "armor-skills-container"
    );

    // Separate weapon and armor skills
    const weaponSlots = ["weapon", "shield"];
    const armorSlots = ["helmet", "chest", "legs", "boots"];

    this.updateSkillsColumn(weaponSkillsContainer, weaponSlots);
    this.updateSkillsColumn(armorSkillsContainer, armorSlots);
  }

  updateSkillsColumn(container, slots) {
    const skillsByEquipment = {};
    let hasSkills = false;

    slots.forEach((slot) => {
      const equipment = this.character.equipment[slot];
      if (equipment && equipment.skills) {
        skillsByEquipment[slot] = {
          equipment: equipment,
          skills: equipment.skills,
        };
        hasSkills = true;
      }
    });

    if (!hasSkills) {
      const slotType = slots.includes("weapon") ? "weapon" : "armor";
      container.innerHTML = `
        <div class="no-skills">
          <i class="fas fa-info-circle"></i>
          <span>Select ${slotType} to view skills</span>
        </div>
      `;
      return;
    }

    const skillsHtml = Object.entries(skillsByEquipment)
      .map(([slot, data]) => {
        const slotSkills = data.skills
          .map((skill) => {
            const isSelected = this.character.selectedSkills[skill.id];
            return `
            <div class="skill-item ${
              isSelected ? "selected" : ""
            }" onclick="characterBuilder.toggleSkill('${skill.id}')">
              <div class="skill-header">
                <span class="skill-name">${skill.name}${
              skill.level ? ` ${skill.level}` : ""
            }</span>
                <span class="skill-status">${
                  isSelected ? "✓ Selected" : "Click to select"
                }</span>
              </div>
              <div class="skill-description">${skill.description}</div>
            </div>
          `;
          })
          .join("");

        return `
          <div class="equipment-skills-group">
            <div class="equipment-source">
              <span class="equipment-slot-name">${
                slot.charAt(0).toUpperCase() + slot.slice(1)
              }</span>
              <span class="equipment-name">${data.equipment.name}</span>
            </div>
            <div class="skills-list">
              ${slotSkills}
            </div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = skillsHtml;
  }

  getAllAvailableSkills() {
    const skills = [];

    Object.values(this.character.equipment).forEach((equipment) => {
      if (equipment && equipment.skills) {
        equipment.skills.forEach((skill) => {
          if (!skills.find((s) => s.id === skill.id)) {
            skills.push(skill);
          }
        });
      }
    });

    return skills;
  }

  toggleSkill(skillId) {
    const skill = this.getAllAvailableSkills().find((s) => s.id === skillId);
    if (!skill) return;

    if (this.character.selectedSkills[skillId]) {
      delete this.character.selectedSkills[skillId];
      this.showNotification(`${skill.name} skill removed`, "info");
    } else {
      this.character.selectedSkills[skillId] = skill;
      this.showNotification(`${skill.name} skill selected`, "success");
    }

    this.updateSkillsDisplay();
  }

  // Equipment Selector Modal
  openEquipmentSelector(slot) {
    // Check shield availability
    if (slot === "shield") {
      const weapon = this.character.equipment.weapon;
      if (!weapon || weapon.weaponType !== "1h") {
        this.showNotification("Shield requires a 1-handed weapon", "info");
        return;
      }
    }

    this.currentSlot = slot;
    const modal = document.getElementById("equipment-modal");
    const title = document.getElementById("modal-title");
    const equipmentList = document.getElementById("equipment-list");

    title.textContent = `Select ${this.getSlotDisplayName(slot)}`;

    // Get equipment for this slot
    const availableEquipment = this.getEquipmentForSlot(slot);

    if (availableEquipment.length === 0) {
      equipmentList.innerHTML = `
                <div class="no-equipment">
                    <i class="fas fa-info-circle"></i>
                    <p>No equipment available for this slot.</p>
                </div>
            `;
    } else {
      const equipmentHtml = availableEquipment
        .map(
          (item) => `
                <div class="equipment-item" onclick="characterBuilder.selectEquipment('${
                  item.id
                }')">
                    <h4>${item.name}${
            item.levelRequirement
              ? ` <span class="equipment-level-requirement">(${item.levelRequirement})</span>`
              : ""
          }</h4>
                    <p class="item-description">${item.description}</p>
                    <div class="item-skills">
                        <h5 class="available-skills-heading">Available Skills:</h5>
                        ${item.skills
                          .map(
                            (skill) => `
                          <div class="skill-preview">
                            <div class="skill-preview-name">${skill.name}${
                              skill.level ? ` ${skill.level}` : ""
                            }</div>
                            <div class="skill-preview-description">${
                              skill.description
                            }</div>
                          </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `
        )
        .join("");

      equipmentList.innerHTML = equipmentHtml;
    }

    modal.classList.add("active");
  }

  closeEquipmentSelector() {
    const modal = document.getElementById("equipment-modal");
    modal.classList.remove("active");
    this.currentSlot = null;
  }

  selectEquipment(equipmentId) {
    const equipment = this.getEquipmentById(equipmentId);
    if (equipment && this.currentSlot) {
      this.setEquipment(this.currentSlot, equipment);
      this.closeEquipmentSelector();
    }
  }

  getEquipmentForSlot(slot) {
    if (!window.EQUIPMENT_DATABASE) return [];

    if (slot === "weapon") {
      const weaponType = this.character.slotArmorTypes.weapon;
      if (weaponType) {
        return window.EQUIPMENT_DATABASE.weapons[weaponType] || [];
      } else {
        // Return all weapons if no filter
        return [
          ...(window.EQUIPMENT_DATABASE.weapons["1h"] || []),
          ...(window.EQUIPMENT_DATABASE.weapons["2h"] || []),
        ];
      }
    }

    if (slot === "shield") {
      return window.EQUIPMENT_DATABASE.shields || [];
    }

    // Armor slots
    const armorType = this.character.slotArmorTypes[slot];
    const slotCategory = this.getSlotCategory(slot);

    if (!slotCategory) return [];

    if (armorType) {
      // Return specific armor type
      if (
        window.EQUIPMENT_DATABASE[armorType] &&
        window.EQUIPMENT_DATABASE[armorType][slotCategory]
      ) {
        return window.EQUIPMENT_DATABASE[armorType][slotCategory];
      }
    } else {
      // Return all armor types for this slot
      const allEquipment = [];
      ["light", "medium", "heavy"].forEach((type) => {
        if (
          window.EQUIPMENT_DATABASE[type] &&
          window.EQUIPMENT_DATABASE[type][slotCategory]
        ) {
          allEquipment.push(...window.EQUIPMENT_DATABASE[type][slotCategory]);
        }
      });
      return allEquipment;
    }

    return [];
  }

  getSlotCategory(slot) {
    const slotCategories = {
      helmet: "helmets",
      chest: "chests",
      legs: "legs",
      boots: "boots",
    };
    return slotCategories[slot];
  }

  getEquipmentById(id) {
    if (!window.EQUIPMENT_DATABASE) return null;

    // Check weapons
    if (window.EQUIPMENT_DATABASE.weapons) {
      for (const weaponType of ["1h", "2h"]) {
        const weapons = window.EQUIPMENT_DATABASE.weapons[weaponType];
        if (weapons) {
          const weapon = weapons.find((item) => item.id === id);
          if (weapon) {
            return { ...weapon, weaponType };
          }
        }
      }
    }

    // Check shields
    if (window.EQUIPMENT_DATABASE.shields) {
      const shield = window.EQUIPMENT_DATABASE.shields.find(
        (item) => item.id === id
      );
      if (shield) return shield;
    }

    // Check armor
    for (const armorType of ["light", "medium", "heavy"]) {
      if (window.EQUIPMENT_DATABASE[armorType]) {
        const armorData = window.EQUIPMENT_DATABASE[armorType];
        for (const category of Object.values(armorData)) {
          const item = category.find((item) => item.id === id);
          if (item) {
            return { ...item, armorType };
          }
        }
      }
    }

    return null;
  }

  // Skill Selector Modal (for future use)
  openSkillSelector() {
    const modal = document.getElementById("skill-modal");
    modal.classList.add("active");
  }

  closeSkillSelector() {
    const modal = document.getElementById("skill-modal");
    modal.classList.remove("active");
  }

  // Utility Functions
  resetCharacter() {
    this.character = {
      equipment: {
        weapon: null,
        shield: null,
        helmet: null,
        chest: null,
        legs: null,
        boots: null,
      },
      selectedSkills: {},
      slotArmorTypes: {
        weapon: "",
        helmet: "",
        chest: "",
        legs: "",
        boots: "",
      },
    };

    // Reset all slot type selectors
    document.querySelectorAll(".slot-type-selector").forEach((select) => {
      select.value = "";
    });

    // Reset all equipment slots
    Object.keys(this.character.equipment).forEach((slot) => {
      this.updateEquipmentSlot(slot, null);
    });

    this.updateShieldAvailability();
    this.updateSkillsDisplay();
    this.showNotification("Character reset successfully", "info");
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <i class="fas fa-${
              type === "success"
                ? "check-circle"
                : type === "error"
                ? "exclamation-circle"
                : "info-circle"
            }"></i>
            <span>${message}</span>
        `;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${
              type === "success"
                ? "rgba(78, 205, 196, 0.9)"
                : type === "error"
                ? "rgba(255, 107, 107, 0.9)"
                : "rgba(69, 183, 209, 0.9)"
            };
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
            animation: slideInRight 0.3s ease;
        `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // Export character build
  exportCharacter() {
    const characterData = {
      ...this.character,
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    };

    const dataStr = JSON.stringify(characterData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(dataBlob);
    link.download = `pax-dei-character-${Date.now()}.json`;
    link.click();

    this.showNotification("Character build exported!", "success");
  }

  // Load character build
  loadCharacter(characterData) {
    try {
      this.character = characterData;

      // Update slot type selectors
      Object.entries(this.character.slotArmorTypes).forEach(
        ([slot, armorType]) => {
          const selector = document.querySelector(
            `[data-slot="${slot}"] .slot-type-selector`
          );
          if (selector) {
            selector.value = armorType;
          }
        }
      );

      // Update all equipment slots
      Object.entries(this.character.equipment).forEach(([slot, equipment]) => {
        this.updateEquipmentSlot(slot, equipment);
      });

      this.updateShieldAvailability();
      this.updateSkillsDisplay();
      this.showNotification("Character build loaded!", "success");
    } catch (error) {
      this.showNotification("Error loading character build", "error");
      console.error("Error loading character:", error);
    }
  }
}

// Global functions for HTML onclick handlers
let characterBuilder;

function openEquipmentSelector(slot) {
  characterBuilder.openEquipmentSelector(slot);
}

function closeEquipmentSelector() {
  characterBuilder.closeEquipmentSelector();
}

function closeSkillSelector() {
  characterBuilder.closeSkillSelector();
}

function resetCharacter() {
  characterBuilder.resetCharacter();
}

function setSlotArmorType(slot, armorType) {
  characterBuilder.setSlotArmorType(slot, armorType);
}

// Initialize the application when the page loads
document.addEventListener("DOMContentLoaded", () => {
  characterBuilder = new PaxDeiCharacterBuilder();

  // Add some CSS animations
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .remove-btn {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: rgba(255, 107, 107, 0.2);
            border: 1px solid rgba(255, 107, 107, 0.3);
            color: #ff6b6b;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }
        
        .remove-btn:hover {
            background: rgba(255, 107, 107, 0.4);
            transform: scale(1.1);
        }
        
        .equipped-item {
            position: relative;
            text-align: center;
        }
        
        .equipped-item h4 {
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
            color: #4ecdc4;
        }
        
        .item-type {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 0.5rem;
        }
        
        .item-skills {
            margin-top: 0.5rem;
        }
        
        .item-skills small {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.75rem;
        }
        
        .no-equipment {
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            padding: 2rem;
        }
        
        .no-equipment i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.4);
        }
    `;
  document.head.appendChild(style);
});
