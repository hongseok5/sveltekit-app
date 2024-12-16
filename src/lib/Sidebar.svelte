<script>
    import { goto } from '$app/navigation';
    
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ];
  
    const navigate = (path) => {
      goto(path);
    };
  </script>
  
  <nav style="background-color: #f4f4f4; height: 100%; padding: 1rem;">
    <ul style="list-style: none; padding: 0;">
      {#each navItems as item}
        <li style="margin-bottom: 1rem;">
          <button on:click={() => navigate(item.path)} style="background: none; border: none; color: blue; cursor: pointer;">
            {item.name}
          </button>
        </li>
      {/each}
    </ul>
  </nav>
  