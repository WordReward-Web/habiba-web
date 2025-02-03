"use client";

import { useState, useEffect } from "react";
import { Accordion, Form } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./CategoriesAccordion.module.css";

export default function CategoriesAccordion({ categories }) {
  const [expanded, setExpanded] = useState(null); // Tracks the currently opened accordion
  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedSubCategories, setSelectedSubCategories] = useState({});
  const [defaultActiveKey, setDefaultActiveKey] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state based on URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const subCategoryParam = searchParams.get("subCategory");

    const initialSelectedCategories = {};
    const initialSelectedSubCategories = {};

    // Set initial category from URL
    if (categoryParam) {
      const categoryId = parseInt(categoryParam, 10); // Convert to number
      initialSelectedCategories[categoryId] = true;
      setExpanded(categoryId); // Ensure the relevant category accordion is open
    }

    // Set initial subcategory from URL
    if (subCategoryParam) {
      const subCategoryId = parseInt(subCategoryParam, 10); // Convert to number
      initialSelectedSubCategories[subCategoryId] = true;
    }

    setSelectedCategories(initialSelectedCategories);
    setSelectedSubCategories(initialSelectedSubCategories);
  }, [searchParams]);

  // Handle category checkbox toggle
  const handleCategoryClick = (category) => {
    const isSelected = !!selectedCategories[category.id];
    const newSelectedCategories = { ...selectedCategories };

    if (isSelected) {
      delete newSelectedCategories[category.id];
      router.push(removeParam("category", category.id));
      setExpanded(null); // Collapse if unchecked
    } else {
      newSelectedCategories[category.id] = true;
      router.push(addParam("category", category.id));
      setExpanded(category.id); // Expand the clicked category
    }

    setSelectedCategories(newSelectedCategories);
  };

  // Handle subcategory checkbox toggle
  const handleSubCategoryClick = (subCategory, categoryId, event) => {
    event.stopPropagation(); // Prevent event propagation to Accordion.Item

    const isSelected = !!selectedSubCategories[subCategory.id];
    const newSelectedSubCategories = { ...selectedSubCategories };

    if (isSelected) {
      delete newSelectedSubCategories[subCategory.id];
      router.push(removeParam("subCategory", subCategory.id));
    } else {
      newSelectedSubCategories[subCategory.id] = true;
      router.push(addParam("subCategory", subCategory.id));
      // Ensure the parent category is expanded
      setExpanded(categoryId);
    }

    setSelectedSubCategories(newSelectedSubCategories);
  };

  // Helper to add URL parameters
  const addParam = (key, value) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    return `?${searchParams.toString()}`;
  };

  // Helper to remove URL parameters
  const removeParam = (key, value) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(key);
    return `?${searchParams.toString()}`;
  };

  return (
    <div className={styles.categoriesContainer}>
      <Accordion activeKey={expanded} defaultActiveKey={defaultActiveKey}>
        {categories.map((category) => {
          return (
            <Accordion.Item
              key={category.id}
              eventKey={category.id}
              onClick={(e) => {
                // Prevent body clicks from toggling accordion
                if (e.target.type !== "checkbox") {
                  setExpanded(expanded === category.id ? null : category.id);
                }
              }}
            >
              <Accordion.Header>
                <Form.Check
                  type="checkbox"
                  label={category.name}
                  checked={!!selectedCategories[category.id]}
                  onChange={() => handleCategoryClick(category)}
                />
              </Accordion.Header>
              <Accordion.Body
                onClick={(e) => {
                  // Stop propagation for any clicks inside the body
                  e.stopPropagation();
                }}
              >
                {category.sub_categories &&
                  category.sub_categories.map((subCategory) => (
                    <Form.Check
                      key={subCategory.id}
                      type="checkbox"
                      label={subCategory.name}
                      checked={!!selectedSubCategories[subCategory.id]}
                      onChange={(e) =>
                        handleSubCategoryClick(subCategory, category.id, e)
                      }
                    />
                  ))}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
