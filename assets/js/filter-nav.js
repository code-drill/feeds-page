/**
 * Enhanced Filter Navigation JavaScript
 * Provides search functionality, collapsible sections, and accessibility features
 */

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initializeFilterNav();
    initializeBackToTop();
    initializeActiveFilters();
});

/**
 * Initialize filter navigation functionality
 */
function initializeFilterNav() {
    // Set up ARIA attributes
    const sourcesContent = document.getElementById('sources-content');
    const toggleButton = document.querySelector('.toggle-sources');
    
    if (!sourcesContent || !toggleButton) {
        return; // Elements not found, exit gracefully
    }
    
    // Ensure proper initial ARIA state
    toggleButton.setAttribute('aria-expanded', 'false');
    sourcesContent.setAttribute('aria-hidden', 'true');
}

/**
 * Toggle sources section visibility
 */
function toggleSourcesSection() {
    console.log('toggleSourcesSection called'); // Debug log
    const sourcesContent = document.getElementById('sources-content');
    const toggleButton = document.querySelector('.toggle-sources');
    const toggleText = document.querySelector('.toggle-text');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    if (!sourcesContent || !toggleButton || !toggleText || !toggleIcon) {
        return; // Elements not found, exit gracefully
    }
    
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
        // Collapse
        sourcesContent.style.display = 'none';
        sourcesContent.classList.remove('show');
        toggleButton.setAttribute('aria-expanded', 'false');
        sourcesContent.setAttribute('aria-hidden', 'true');
        toggleText.textContent = 'Show All Sources';
    } else {
        // Expand
        sourcesContent.style.display = 'block';
        sourcesContent.classList.add('show');
        toggleButton.setAttribute('aria-expanded', 'true');
        sourcesContent.setAttribute('aria-hidden', 'false');
        toggleText.textContent = 'Hide All Sources';
        
        // Focus the search input when expanding
        const searchInput = document.getElementById('source-search');
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 300);
        }
    }
}

/**
 * Filter sources based on search input
 */
function filterSources() {
    const searchInput = document.getElementById('source-search');
    const allSources = document.querySelector('.all-sources');
    
    if (!searchInput || !allSources) {
        return; // Elements not found, exit gracefully
    }
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const sourceButtons = allSources.querySelectorAll('.source-btn');
    let visibleCount = 0;
    
    sourceButtons.forEach(button => {
        const buttonText = button.textContent.toLowerCase();
        const dataSource = button.getAttribute('data-source') || '';
        const isVisible = buttonText.includes(searchTerm) || 
                         dataSource.toLowerCase().includes(searchTerm);
        
        if (isVisible) {
            button.style.display = 'flex';
            button.removeAttribute('aria-hidden');
            visibleCount++;
        } else {
            button.style.display = 'none';
            button.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Show/hide no results message
    let noResultsMsg = allSources.querySelector('.no-results');
    if (visibleCount === 0 && searchTerm !== '') {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results text-center text-muted py-3';
            noResultsMsg.innerHTML = '<i class="fas fa-search"></i> No sources found matching "' + 
                                   escapeHtml(searchTerm) + '"';
            allSources.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
    
    // Announce results to screen readers
    announceSearchResults(visibleCount, searchTerm);
}

/**
 * Initialize back to top button
 */
function initializeBackToTop() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.setAttribute('title', 'Back to top');
    backToTop.onclick = scrollToTop;
    
    document.body.appendChild(backToTop);
    
    // Show/hide based on scroll position
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                if (scrolled > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Scroll to top smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Initialize active filter states
 */
function initializeActiveFilters() {
    const currentPath = window.location.pathname;
    
    // Mark category filters as active
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        const href = btn.getAttribute('href');
        if (href && currentPath.includes(href.replace(/^[^/]*/, ''))) {
            btn.classList.add('active');
            btn.setAttribute('aria-current', 'page');
        }
    });
    
    // Mark source filters as active
    const sourceBtns = document.querySelectorAll('.source-btn');
    sourceBtns.forEach(btn => {
        const href = btn.getAttribute('href');
        if (href && currentPath.includes(href.replace(/^[^/]*/, ''))) {
            btn.classList.add('active');
            btn.setAttribute('aria-current', 'page');
        }
    });
}

/**
 * Announce search results to screen readers
 */
function announceSearchResults(count, searchTerm) {
    let announcement = '';
    if (searchTerm === '') {
        announcement = 'All sources displayed';
    } else if (count === 0) {
        announcement = 'No sources found';
    } else if (count === 1) {
        announcement = '1 source found';
    } else {
        announcement = count + ' sources found';
    }
    
    // Create or update live region
    let liveRegion = document.getElementById('search-results-live');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'search-results-live';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.style.position = 'absolute';
        liveRegion.style.left = '-10000px';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        document.body.appendChild(liveRegion);
    }
    
    liveRegion.textContent = announcement;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Keyboard navigation enhancements
 */
document.addEventListener('keydown', function(e) {
    // Toggle sources section with Enter or Space on the toggle button
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('toggle-sources')) {
        e.preventDefault();
        toggleSourcesSection();
    }
    
    // Close search results with Escape key
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('source-search');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            filterSources();
        }
    }
});

/**
 * Performance optimization: debounce search input
 */
let searchTimeout;
const originalFilterSources = filterSources;
filterSources = function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(originalFilterSources, 150);
};

// Make functions globally available
window.toggleSourcesSection = toggleSourcesSection;
window.filterSources = filterSources;