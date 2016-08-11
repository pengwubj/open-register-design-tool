/*   Ordt 160810.02 autogenerated file 
 *   Input: ./rdl_hier_02/test.rdl
 *   Parms: ./rdl_hier_02/test.parms
 *   Date: Wed Aug 10 21:29:00 EDT 2016
 */

register_set base_map "L1 regs" {

  address = 0x0;
  register_width = 32;
  register_set base_regs "base_regs register_set" {
    address = 0x0;
    
    register config_regs "Config reg set  config_regs" {
      address = 0x0;
      repeat = 8;
      integer msb_field[16] "Bunch o msb bits" param {
        access_mode = READ_WRITE;
        reset = 0x0;
      };
      integer lsb_field[16] "Bunch o lsb bits" param {
        access_mode = READ_WRITE;
        reset = 0xffff;
      };
    };
    
    register state_regs "State regs" {
      address = 0x100;
      access_mode = READ_ONLY;
      repeat = 8;
      nop[16];
      integer lsb_field[16] "Some state bits" param {
        access_mode = READ_ONLY;
        reset = 0xffff;
      };
    };
    
    register_set_size = 0x120;
  };
  
  register_set ext_base_regs "ext_base_regs register_set" {
    address = 0x10000;
    
    register config_regs "Config reg set  config_regs" {
      address = 0x0;
      repeat = 8;
      integer msb_field[16] "Bunch o msb bits" param {
        access_mode = READ_WRITE;
        reset = 0x0;
      };
      integer lsb_field[16] "Bunch o lsb bits" param {
        access_mode = READ_WRITE;
        reset = 0xffff;
      };
    };
    
    register state_regs "State regs" {
      address = 0x100;
      access_mode = READ_ONLY;
      repeat = 8;
      nop[16];
      integer lsb_field[16] "Some state bits" param {
        access_mode = READ_ONLY;
        reset = 0xffff;
      };
    };
    
    register_set_size = 0x200;
  };
  
  register_set l2_r16_child "L2 regs" {
    address = 0x20000;
    
    register_set base_regs "base_regs register_set" {
      address = 0x0;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register state_regs "State regs" {
        address = 0x100;
        access_mode = READ_ONLY;
        repeat = 8;
        nop[16];
        integer lsb_field[16] "Some state bits" param {
          access_mode = READ_ONLY;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x120;
    };
    
    register_set ext_base_regs "ext_base_regs register_set" {
      address = 0x1000;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register state_regs "State regs" {
        address = 0x100;
        access_mode = READ_ONLY;
        repeat = 8;
        nop[16];
        integer lsb_field[16] "Some state bits" param {
          access_mode = READ_ONLY;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x120;
    };
    
    register_set l3_child "L3 regs" {
      address = 0x2000;
      
      register_set base_regs "base_regs register_set" {
        address = 0x0;
        
        register config_regs "Config reg set  config_regs" {
          address = 0x0;
          repeat = 8;
          integer msb_field[16] "Bunch o msb bits" param {
            access_mode = READ_WRITE;
            reset = 0x0;
          };
          integer lsb_field[16] "Bunch o lsb bits" param {
            access_mode = READ_WRITE;
            reset = 0xffff;
          };
        };
        
        register state_regs "State regs" {
          address = 0x100;
          access_mode = READ_ONLY;
          repeat = 8;
          nop[16];
          integer lsb_field[16] "Some state bits" param {
            access_mode = READ_ONLY;
            reset = 0xffff;
          };
        };
        
        register_set_size = 0x120;
      };
      
      register_set ext_base_regs "ext_base_regs register_set" {
        address = 0x800;
        
        register config_regs "Config reg set  config_regs" {
          address = 0x0;
          repeat = 8;
          integer msb_field[16] "Bunch o msb bits" param {
            access_mode = READ_WRITE;
            reset = 0x0;
          };
          integer lsb_field[16] "Bunch o lsb bits" param {
            access_mode = READ_WRITE;
            reset = 0xffff;
          };
        };
        
        register state_regs "State regs" {
          address = 0x100;
          access_mode = READ_ONLY;
          repeat = 8;
          nop[16];
          integer lsb_field[16] "Some state bits" param {
            access_mode = READ_ONLY;
            reset = 0xffff;
          };
        };
        
        register_set_size = 0x120;
      };
      
      register_set_size = 0x920;
    };
    
    register_set_size = 0x4000;
  };
  
  register_set l2_s8_child "L2 regs" {
    address = 0x30000;
    
    register_set base_regs "base_regs register_set" {
      address = 0x0;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register state_regs "State regs" {
        address = 0x100;
        access_mode = READ_ONLY;
        repeat = 8;
        nop[16];
        integer lsb_field[16] "Some state bits" param {
          access_mode = READ_ONLY;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x120;
    };
    
    register_set ext_base_regs "ext_base_regs register_set" {
      address = 0x1000;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register state_regs "State regs" {
        address = 0x100;
        access_mode = READ_ONLY;
        repeat = 8;
        nop[16];
        integer lsb_field[16] "Some state bits" param {
          access_mode = READ_ONLY;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x120;
    };
    
    register_set l3_child "L3 regs" {
      address = 0x2000;
      
      register_set base_regs "base_regs register_set" {
        address = 0x0;
        
        register config_regs "Config reg set  config_regs" {
          address = 0x0;
          repeat = 8;
          integer msb_field[16] "Bunch o msb bits" param {
            access_mode = READ_WRITE;
            reset = 0x0;
          };
          integer lsb_field[16] "Bunch o lsb bits" param {
            access_mode = READ_WRITE;
            reset = 0xffff;
          };
        };
        
        register state_regs "State regs" {
          address = 0x100;
          access_mode = READ_ONLY;
          repeat = 8;
          nop[16];
          integer lsb_field[16] "Some state bits" param {
            access_mode = READ_ONLY;
            reset = 0xffff;
          };
        };
        
        register_set_size = 0x120;
      };
      
      register_set ext_base_regs "ext_base_regs register_set" {
        address = 0x800;
        
        register config_regs "Config reg set  config_regs" {
          address = 0x0;
          repeat = 8;
          integer msb_field[16] "Bunch o msb bits" param {
            access_mode = READ_WRITE;
            reset = 0x0;
          };
          integer lsb_field[16] "Bunch o lsb bits" param {
            access_mode = READ_WRITE;
            reset = 0xffff;
          };
        };
        
        register state_regs "State regs" {
          address = 0x100;
          access_mode = READ_ONLY;
          repeat = 8;
          nop[16];
          integer lsb_field[16] "Some state bits" param {
            access_mode = READ_ONLY;
            reset = 0xffff;
          };
        };
        
        register_set_size = 0x120;
      };
      
      register_set_size = 0x920;
    };
    
    register_set_size = 0x4000;
  };
  
  register_set l2_dflt_child "L2 regs" {
    address = 0x40000;
    
    register_set base_regs "base_regs register_set" {
      address = 0x0;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register state_regs "State regs" {
        address = 0x100;
        access_mode = READ_ONLY;
        repeat = 8;
        nop[16];
        integer lsb_field[16] "Some state bits" param {
          access_mode = READ_ONLY;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x120;
    };
    
    register_set ext_base_regs "ext_base_regs register_set" {
      address = 0x1000;
      
      register config_regs "Config reg set  config_regs" {
        address = 0x0;
        repeat = 8;
        integer msb_field[16] "Bunch o msb bits" param {
          access_mode = READ_WRITE;
          reset = 0x0;
        };
        integer lsb_field[16] "Bunch o lsb bits" param {
          access_mode = READ_WRITE;
          reset = 0xffff;
        };
      };
      
      register state_regs "State regs" {
        address = 0x100;
        access_mode = READ_ONLY;
        repeat = 8;
        nop[16];
        integer lsb_field[16] "Some state bits" param {
          access_mode = READ_ONLY;
          reset = 0xffff;
        };
      };
      
      register_set_size = 0x120;
    };
    
    register_set l3_child "L3 regs" {
      address = 0x2000;
      
      register_set base_regs "base_regs register_set" {
        address = 0x0;
        
        register config_regs "Config reg set  config_regs" {
          address = 0x0;
          repeat = 8;
          integer msb_field[16] "Bunch o msb bits" param {
            access_mode = READ_WRITE;
            reset = 0x0;
          };
          integer lsb_field[16] "Bunch o lsb bits" param {
            access_mode = READ_WRITE;
            reset = 0xffff;
          };
        };
        
        register state_regs "State regs" {
          address = 0x100;
          access_mode = READ_ONLY;
          repeat = 8;
          nop[16];
          integer lsb_field[16] "Some state bits" param {
            access_mode = READ_ONLY;
            reset = 0xffff;
          };
        };
        
        register_set_size = 0x120;
      };
      
      register_set ext_base_regs "ext_base_regs register_set" {
        address = 0x800;
        
        register config_regs "Config reg set  config_regs" {
          address = 0x0;
          repeat = 8;
          integer msb_field[16] "Bunch o msb bits" param {
            access_mode = READ_WRITE;
            reset = 0x0;
          };
          integer lsb_field[16] "Bunch o lsb bits" param {
            access_mode = READ_WRITE;
            reset = 0xffff;
          };
        };
        
        register state_regs "State regs" {
          address = 0x100;
          access_mode = READ_ONLY;
          repeat = 8;
          nop[16];
          integer lsb_field[16] "Some state bits" param {
            access_mode = READ_ONLY;
            reset = 0xffff;
          };
        };
        
        register_set_size = 0x120;
      };
      
      register_set_size = 0x920;
    };
    
    register_set_size = 0x4000;
  };
  
  register_set singleton_rf_s8 "singleton_rf_s8 register_set" {
    address = 0x50000;
    
    register sing_reg "sing_reg register" {
      address = 0x0;
      integer msb_field[16] "msb_field field" param {
        access_mode = READ_WRITE;
        reset = 0x0;
      };
      integer lsb_field[16] "lsb_field field" param {
        access_mode = READ_WRITE;
        reset = 0xffff;
      };
    };
    
    register_set_size = 0x4;
  };
  
  register_set singleton_rf_r16 "singleton_rf_r16 register_set" {
    address = 0x60000;
    
    register sing_reg "sing_reg register" {
      address = 0x0;
      integer msb_field[16] "msb_field field" param {
        access_mode = READ_WRITE;
        reset = 0x0;
      };
      integer lsb_field[16] "lsb_field field" param {
        access_mode = READ_WRITE;
        reset = 0xffff;
      };
    };
    
    register_set_size = 0x4;
  };
  
  register_set singleton_rf_dflt "singleton_rf_dflt register_set" {
    address = 0x70000;
    
    register sing_reg "sing_reg register" {
      address = 0x0;
      integer msb_field[16] "msb_field field" param {
        access_mode = READ_WRITE;
        reset = 0x0;
      };
      integer lsb_field[16] "lsb_field field" param {
        access_mode = READ_WRITE;
        reset = 0xffff;
      };
    };
    
    register_set_size = 0x4;
  };
  
  register_set_size = 0x70004;
};

